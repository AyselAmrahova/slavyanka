// const express = require('express')
// const app = express()
// const path = require('path')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const dotenv = require('dotenv')
// const mongoose = require('mongoose');
// // const multer = require("multer");
// const uuid = require('uuid');
// // const fs = require('fs');

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// const DIR = './uploads/';
// app.use('/uploads', express.static('uploads'));
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuid.v4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png"
//             || file.mimetype == "image/jpg"
//             || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
// dotenv.config()
// app.use(cors())

// //Schema
// const LogoSchema = new mongoose.Schema({
//     profileImg: String
// })

// const LogoModel = new mongoose.model('Logo', LogoSchema);


// app.get('/', (req, res) => {
//     res.send('welcome to our API!')
// })

// app.get('/slavyankaLogo', async (req, res) => {
//     const logo = await LogoModel.find();
//     res.json(logo);
// })

// app.post('/slavyankaLogo', upload.single('profileImg'), async (req, res) => {
//     const url = req.protocol + '://' + req.get('host');
//     const newLogo = new LogoModel({
//         profileImg: url + '/uploads/' + req.file.filename
//     })
//     newLogo.save()
//     res.status(201).json(newLogo)
// })
// // app.delete('/api/employees/:id',async(req,res)=>{
// //     const id = req.params.id;
// //     const deleted = await EmployeeModel.findByIdAndDelete(id);
// //     const idx = deleted.profileImg.indexOf("uploads/");
// //     const imageName = deleted.profileImg.substr(idx);
// //     fs.unlinkSync('./'+imageName);
// //     res.status(200).send({
// //         message: 'deleted successfully!'
// //     })
// // })


// app.listen(7070, () => {
//     console.log('App running on port 7070');
// })
// mongoose.connect('mongodb+srv://AyselAmrahova:Amrahova7877@code.rhrcslx.mongodb.net/?retryWrites=true&w=majority')
//     .then((res) => {
//         console.log('MongoDB connected successfully!');
//     })


// // const express = require('express');
// // const dotenv = require('dotenv');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const mongoose = require('mongoose');

// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json());
// // dotenv.config();

// // app.listen(process.env.PORT, () => {
// //     console.log(`App listening on PORT: ${process.env.PORT}`);
// // })

// // mongoose.connect(process.env.DB_CONNECTION).then(() => {
// //     console.log('Mongo DB Connected!');
// // }).catch((err) => {
// //     console.log(err);
// // })
// // const SlidersSchema = new mongoose.Schema({
// //     name: String,
// //     url: String
// // })

// // const SliderModel = new mongoose.model('Sliders', SlidersSchema);


// // app.get('/sliders', async (req, res) => {
// //     const sliders = await SliderModel.find();
// //     res.status(200).send({
// //         message: 'data get success!',
// //         data: sliders
// //     })
// // })
// // app.post('/sliders', async (req, res) => {
// //     const { name, url } = req.body;
// //     const newSlider = new SliderModel({
// //         name: name,
// //         url: url
// //     })
// //     await newSlider.save();
// //     res.status(201).send('slider posted successfully!')
// // })



const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

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
        isAdmin: false
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
        const id = existedUsername._id;
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
                    id: existedUsername._id,
                    username: existedUsername.username,
                    email: existedUsername.email,
                    isAdmin: existedUsername.isAdmin
                }, message: 'signed in successfully!'
            });
        }
    }
})

//logout

//users - get
app.get('/api/users', verifyJWT, async (req, res) => {
    const users = await Users.find();
    res.json({ users: users });
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on PORT: ${process.env.PORT}`);
})
mongoose.connect(process.env.DB_KEY).then(() => {
    console.log('Mongo DB connected');
}).catch((err) => {
    console.log(err);
})