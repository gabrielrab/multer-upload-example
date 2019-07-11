const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('views', __dirname +'/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+".png");
    }
});

const upload = multer({storage: storage});

app.get('/', (req, res)=>{ res.render('index'); });

app.post('/', upload.single('img'), (req, res)=>{
    console.log(req.body, req.file, req.files);

    return res.send('Ok');
});

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Api rodando...')
});