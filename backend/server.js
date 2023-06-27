const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const ThreeCards_router = require('./routes/ThreeCards.routes');
const Slider_router  = require('./routes/Slider.routes')
const Contact_router  = require('./routes/Contact.routes')

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("Mongo DB Connected!"))


//cards
app.use('/api/three-cards/', ThreeCards_router)
// slider
app.use('/api/slider/', Slider_router)
// contact
app.use('/api/contact/', Contact_router)



PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//verify JWT
const verifyJWT = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if (!token) {
        res.json({message: 'you need token to get data!'})
    }
    else{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) {
                res.json({auth: false,message: 'authentication failed'});
            }
            else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}




// LOGIN REGISTER


//mongoose model
const Users = mongoose.model('Users', new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
}));

//register
app.post('/api/register', async (req, res) => {
    const {name, username, email, password } = req.body;

    const existedUsername = await Users.findOne({ username: username });
    const existedMail = await Users.findOne({ email: email });
    if (existedUsername) {
        res.json({ message: 'username already exists!' });
        return;
    }
    if (existedMail) {
        res.json({ message: 'email already used!' });
        return;
    }
    const salt = await bcrypt.genSalt(10); //500ms
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({
        name:name,
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: false
    })
    await newUser.save();
    res.json({ message: 'user signed up successfully!' });

})

//login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const existedEmail = await Users.findOne({ email: email });
    if (!existedEmail) {
        res.json({ auth: false, message: 'email not found!' });
        return;
    }
    else {
        const isValid = await bcrypt.compare(password, existedEmail.password);
        const id = existedEmail._id;
        //username password +
        //access token - JWT
        //refresh token
        const token = jwt.sign({ id }, process.env.SECRET_KEY, {
            expiresIn: '7d'
        })
        if (!isValid) {
            res.json({ auth: false, message: 'password is incorrect!' });
        }
        else {
            res.json({
                auth: true, token: token, user: {
                    id: existedEmail._id,
                    name: existedEmail.name,
                    username: existedEmail.username,
                    email: existedEmail.email,
                    isAdmin: existedEmail.isAdmin
                }, message: 'signed in successfully!'
            });
        }
    }
})

//users - get
app.get('/api/users', verifyJWT, async (req, res) => {
    const users = await Users.find();
    res.json({ users: users });
})