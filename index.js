import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 2000;

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

///////


//////

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// service static files 
app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.send(`Node and EXPRESS server is running on port ${PORT}`)
});

// logger

app.listen(PORT, () =>
    console.log(`your server is running port ${PORT}`)
);