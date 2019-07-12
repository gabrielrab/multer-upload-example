const express = require('express');
const app = express();

const multer = require('multer');

//Upload sem storage
const upload = multer({dest: 'uploads/'});
app.post('/', upload.single('img'), (req, res)=>{
    console.log(req.body, req.file, req.files);

    return res.send('Single sem storage');
});

//Upload com storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    }, 
    filename: (req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname);
    }
});
const uploadStorage = multer({storage: storage});
app.post('/storage', uploadStorage.single('img'), (req, res)=>{
    console.log(req.file);
    
    return res.send('Single com storage');
});

//Multiplos arquivos
app.post('/multiple', uploadStorage.array('img', 10), (req, res)=>{
    console.log(req.files);

    return res.send('Multiple com storage');
});

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Api ouvindo...');
}); 