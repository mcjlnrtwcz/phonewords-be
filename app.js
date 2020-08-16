const express = require("express");
const cors = require("cors");
const phonewords = require("phonewords");
const words = require("an-array-of-english-words");

const app = express();
app.use(cors());
const port = 3001;

app.get("/predictions/:number", (req, res) => {
  res.send(
    phonewords
      .numbersToWords(req.params.number)
      .filter((prediction) => words.includes(prediction.toLowerCase()))
  );
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
