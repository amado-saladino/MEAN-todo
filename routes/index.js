var express = require('express');
var router = express.Router();

router.get('/',(request,response,next)=>{
    response.send('Index Page');
});

module.exports=router;