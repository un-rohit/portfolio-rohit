const express = require('express');
const path = require('path');

const port = 3019;
const app = express();

app.use(express.static(__dirname)); // for serving static files
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post', (req, res) => {
  const { name, email, number, text } = req.body;
  console.log("Received data:", req.body);
  // You can add logic here to handle the form data (e.g., send email, log, etc.)
  res.send("Form submission successful");
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
