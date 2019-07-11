const express = require('express');
const ejs = require('ejs');
const app = express();

//Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname);
    }
});
const upload = multer({storage: storage});

//Comprimir imagens
const fileHelper = require('./service/file-helper');

//Rotas
app.get('/', (req, res)=>{ res.render('index'); });
app.post('/', upload.single('img'), (req, res)=>{
    console.log(req.body, req.file, req.files);

    return res.send('Ok');
});

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Api rodando...')
});

