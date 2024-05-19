import express from 'express';

const app = express();
const port = 3000;

// Start the server - Redirect to /api
app.get('/', (req, res) => {
  res.redirect('/api');
});

app.use('/api', (req, res) => {
  res.send('Hello World!');
});


//Starting the Server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    }
);

// Export the app instance for use in other modules
export default app;