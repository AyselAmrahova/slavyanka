const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const multer = require("multer");
const uuid = require('uuid');
const fs = require('fs');

const ThreeCards_router = require('./routes/ThreeCards.routes');
const Slider_router = require('./routes/Slider.routes')
const Contact_router = require('./routes/Contact.routes')
const About_router = require('./routes/About.routes')
const Water_router = require('./routes/Water.routes')
const Benefit_router = require('./routes/Benefit.routes')
const Product_router = require('./routes/Product.routes')
const Category_router = require('./routes/Category.routes')

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
// about
app.use('/api/about/', About_router)
// benefit
app.use('/api/benefit/', Benefit_router)
// water
app.use('/api/water/', Water_router)
// product
app.use('/api/products/', Product_router)
// catgory
app.use('/api/categories/', Category_router)


PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//verify JWT
const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.json({ message: 'you need token to get data!' })
    }
    else {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: 'authentication failed' });
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}







app.use(bodyParser.urlencoded({ extended: false }))
const DIR = './uploads/';
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuid.v4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


//Schema
const ImageSchema = new mongoose.Schema({
    profileImg: String
})

const ImageModel = new mongoose.model('Imagees', ImageSchema);


app.get('/', (req, res) => {
    res.send('welcome to our API!')
})

app.get('/api/imagees', async (req, res) => {
    const imagees = await ImageModel.find();
    res.json(imagees);
})

app.post('/api/imagees', upload.single('profileImg'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const newImage = new ImageModel({
        profileImg: url + '/uploads/' + req.file.filename
    })
    newImage.save().then(result => {
        res.status(201).json({
            message: "Image posted successfully!",
            userCreated: newImage
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
app.delete('/api/imagees/:id', async (req, res) => {
    const id = req.params.id;
    const deleted = await ImageModel.findByIdAndDelete(id);
    const idx = deleted.profileImg.indexOf("uploads/");
    const imageName = deleted.profileImg.substr(idx);
    fs.unlinkSync('./' + imageName);
    res.status(200).send({
        message: 'deleted successfully!'
    })
})
//----------------------------------------------------------------------------























// LOGIN REGISTER


//mongoose model
const Users = mongoose.model('Users', new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
}));

// const UserSchema = Joi.object.keys({
//     name: Joi.string().required(),
//     username: Joi.string().required(),
//     email: Joi.string().email().lowercase().required(),
//     password: Joi.string().min(7).required().strict(),
//     confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
// });



//register
app.post('/api/register', async (req, res) => {
    const { name, username, email, password } = req.body;

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
        name: name,
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

// const currentDate = new Date();
// console.log(currentDate.toString());