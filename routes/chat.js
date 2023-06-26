const express = require('express');
const router = express.Router();
const fs = require('fs');
let datas ="no data found";
let username="";
if (fs.existsSync('message.txt')){
  fs.readFile('message.txt', 'utf8',(err,data)=>{
    if (err) {
      console.error(err);
    }else{
      console.log(data)
      datas=data;

    }
  });
    
}

router.get('/', (req, res, next) => {
    res.send(`<h3>${datas}</h3>br<form>onsumit="username=localStorage.setItem('username')"action="/add" method="POST"><input id="msg" type="text" name="msg"><button type="submit">Send</button></form>`);
});
router.post('/add', (req, res, next) => {
  console.log(req.body.msg);
  console.log(username)
  res.redirect('/');
});

module.exports=router;