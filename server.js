// importing
const express = require('express');
const mongoose = require('mongoose');
const { connection_url } = require('./config');
const { Messages } = require('./dbMessages');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB config

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api routes
app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.post('/api/v1/messages/new', (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created : \n ${data}`);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
