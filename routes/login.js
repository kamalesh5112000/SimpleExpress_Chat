const express = require('express');
const fs = require('fs');
const router = express.Router();
let uname="";
router.get('/', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login/add" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>');
});

router.post('/add', (req, res, next) => {
    console.log(req.body.title);
    uname=req.body.title
    res.redirect('/');
});

module.exports=router;