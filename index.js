const { render } = require('ejs');
const express = require('express');
const app = express();


app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended: true}));
app.get('/homepage',(req, res) =>{
    res.render('homepage');
})

app.get('/profilepage', (req, res) =>{
    
    res.render('profilepage');
})

app.get('/register',(req, res) => {
    res.render('register');

})
app.post('/register',async(req, res)=>{
    var {username}= req.body;
    res.render('profilepage', { name: username});
    
})




app.listen(3000, () => {
    console.log("app is ready");
})