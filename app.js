let Express = require('express'); 

let app = Express(); 

app.use(Express.json()); 

//GET EXAMPLE
app.get('/test', function(req, res) {
    console.log(req.body);
    res.send('test GET endpoint success'); 
});

//STATIC FILE in HTML 
app.get('/home', (req, res) => {
    //this will send back a file in the current directory (__dirname) = two underscores then dirname (dirname gives path to the directory we are in now), followed by the path to the file we want to send 
    res.sendFile(__dirname + '/static.html')
});
//dirname keeps it more flexible as the directory will change one is is deployed

//POST EXAMPLE
app.post('/test', function(req, res) {
    console.log(req.body);
    res.send('test POST endpoint success'); 
});

app.use('/test', function(req, res) {
    res.send('test endpoint success'); 
});


app.listen(8080, function() {
    console.log('app is listening');
}); 