const express = require('express');
const router = express.Router();
const fs = require('fs');
let datas ="no data found";

router.get('/', (req, res, next) => {
  if (fs.existsSync('message.txt')){
    fs.readFile('message.txt', 'utf8',(err,data)=>{
      if (err) {
        console.error(err);
      }else{
        console.log(data)
        datas=data;
        res.send(`<h3>${datas}<h3>
        <form 
        onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        action="/add" method="POST">
        <input id="msg" type="text" name="msg">
        <input id="username" type="hidden" name="username">
        <button type="submit">Send</button>
        </form>`);
  
      }
    });
      
  }else{
    res.send(`<h3>${datas}<h3>
        <form 
        onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        action="/add" method="POST">
        <input id="msg" type="text" name="msg">
        <input id="username" type="hidden" name="username">
        <button type="submit">Send</button>
        </form>`);
  }
  
  
    
});
router.post('/add', (req, res, next) => {
  
  let tmsg=req.body.msg
  let un=req.body.username
  
  console.log(req.body)

    
  fs.writeFile('message.txt',`${un}:${tmsg}`,{flag:'a'},(err)=>{
    if(err){
      console.log(err)
    }else{
      res.redirect('/');
    }
  })

});

module.exports=router;