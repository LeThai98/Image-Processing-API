import express from 'express';
import router from './routes';
import path from 'path';

const app = express();
const port = 3000;

// Static file serving middleware
app.use(express.static(path.join(__dirname, '/Public')));

//View Engine Setup
app.set('views', path.join(__dirname, './Template'));
// Sets the view engine to EJS(Embedded Javascript), a templating language that lets you generate HTML markup with plain JavaScript.
app.set('view engine', 'ejs');


// Start the server - Redirect to /api
app.get('/', (req, res) => {
  res.redirect('/api');
});

app.use('/api', router);


//Starting the Server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    }
);

// Export the app instance for use in other modules
export default app;