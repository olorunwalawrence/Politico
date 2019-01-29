import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
// import route from './server/route/index';

const app = express();

const port = parseInt(process.env.PORT, 10) || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(cors());
app.get('/api/v1', (req, res) => res.status(200).json({
  message: 'this is the application home page'
}));

// app.use('/api/v1', route);
app.listen(port, (err) => {
  console.log('server is up and running');
});

export default app;
