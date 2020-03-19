const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const logger = require('morgan');
const serveIndex = require('serve-index')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use("/public", express.static(path.join(__dirname, 'public')));

const Image = require('./class/Image')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });
app.use(require('./routes/image'))

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/testUpload', upload.single('file'), function(req,res) {
    const start = Date.now();
    Image.create({ temperature: req.body.temperature, date: start,location:"/public/"+req.file.filename}).then(jane => {
       
      });
    return res.send(req.file);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up and running on port ', port);
})
