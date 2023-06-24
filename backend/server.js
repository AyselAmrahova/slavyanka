const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//mongoose model
const Users = mongoose.model('Users', new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
}));


//register
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

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
        username: username,
        email: email,
        password: hashedPassword,
    })
    await newUser.save();
    res.json({ message: 'user signed up successfully!' });
})


//login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const existedUsername = await Users.findOne({ username: username });
    if (!existedUsername) {
        res.json({ auth: false, message: 'username not found!' });
        return;
    }
    else {
        const isValid = await bcrypt.compare(password, existedUsername.password);
        if (!isValid) {
            res.json({ auth: false, message: 'password is incorrect!' });
        }
        else {
            res.json({ auth: true, message: 'signed ind succesfully !' })
        }
        // const id = existedUsername._id;
        // //username password + 
        // //access token - JWT
        // //refresh token
        // const token = jwt.sign({ id }, process.env.SECRET_KEY, {
        //     expiresIn: '7d'
        // })
        // if (!isValid) {
        //     res.json({ auth: false, message: 'password is incorrect!' });
        // }
        // else {
        //     res.json({
        //         auth: true, token: token, user: {
        //             id: existedUsername._id,
        //             username: existedUsername.username,
        //             email: existedUsername.email,
        //             isAdmin: existedUsername.isAdmin
        //         }, message: 'signed in successfully!'
        //     });
        // }
    }
})














app.listen(process.env.PORT, () => {
    console.log(`App listening on PORT: ${process.env.PORT}`);
})
mongoose.connect(process.env.DB_KEY).then(() => {
    console.log('Mongo DB connected');
}).catch((err) => {
    console.log(err);
})