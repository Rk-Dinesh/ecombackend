const app = require('./app');
const db = require('./config/db');


const port = 8000;

app.get('/',(req,res) => {
    res.send("hello")
});

app.listen(port,() => {
    console.log(`Server Listening on Port http://localhost:${port}`);
});