const express = require('express');
const ejs = require('ejs');
const multer = require('multer');


const app = express();

app.set('views', __dirname +'/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{ res.render('index'); });
app.post('/upload', (req, res)=>{

});

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Api rodando...')
});