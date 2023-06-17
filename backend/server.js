const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const multer = require("multer");
const uuid = require('uuid');
// const fs = require('fs');

app.use(bodyParser.json())
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
        if (file.mimetype == "image/png"
            || file.mimetype == "image/jpg"
            || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
dotenv.config()
app.use(cors())

//Schema
const LogoSchema = new mongoose.Schema({
    profileImg: String
})

const LogoModel = new mongoose.model('Logo', LogoSchema);


app.get('/', (req, res) => {
    res.send('welcome to our API!')
})

app.get('/slavyankaLogo', async (req, res) => {
    const logo = await LogoModel.find();
    res.json(logo);
})

app.post('/slavyankaLogo', upload.single('profileImg'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const newLogo = new LogoModel({
        profileImg: url + '/uploads/' + req.file.filename
    })
    newLogo.save()
    res.status(201).json(newLogo)
})
// app.delete('/api/employees/:id',async(req,res)=>{
//     const id = req.params.id;
//     const deleted = await EmployeeModel.findByIdAndDelete(id);
//     const idx = deleted.profileImg.indexOf("uploads/");
//     const imageName = deleted.profileImg.substr(idx);
//     fs.unlinkSync('./'+imageName);
//     res.status(200).send({
//         message: 'deleted successfully!'
//     })
// })


app.listen(7070, () => {
    console.log('App running on port 7070');
})
mongoose.connect('mongodb+srv://AyselAmrahova:Amrahova7877@code.rhrcslx.mongodb.net/?retryWrites=true&w=majority')
    .then((res) => {
        console.log('MongoDB connected successfully!');
    })


// const express = require('express');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// dotenv.config();

// app.listen(process.env.PORT, () => {
//     console.log(`App listening on PORT: ${process.env.PORT}`);
// })

// mongoose.connect(process.env.DB_CONNECTION).then(() => {
//     console.log('Mongo DB Connected!');
// }).catch((err) => {
//     console.log(err);
// })
// const SlidersSchema = new mongoose.Schema({
//     name: String,
//     url: String
// })

// const SliderModel = new mongoose.model('Sliders', SlidersSchema);


// app.get('/sliders', async (req, res) => {
//     const sliders = await SliderModel.find();
//     res.status(200).send({
//         message: 'data get success!',
//         data: sliders
//     })
// })
// app.post('/sliders', async (req, res) => {
//     const { name, url } = req.body;
//     const newSlider = new SliderModel({
//         name: name,
//         url: url
//     })
//     await newSlider.save();
//     res.status(201).send('slider posted successfully!')
// })

