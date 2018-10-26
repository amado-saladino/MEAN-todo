var express=require('express');
var path= require('path');
var bodyParser=require('body-parser');
var cors=require('cors');

var tasks=require('./routes/tasks');

var app=express();

var port=process.env.port || 3000;

app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',tasks);
app.use('/**',(request,response,next)=>{
    response.status(404);
    response.send('Not Found');
    //response.sendFile(__dirname + '/public/Notfound/notfound.html');
});


app.listen(port,()=>{
    console.log('The server is running on port ' + port);
});