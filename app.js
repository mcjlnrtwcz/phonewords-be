const express = require("express");
const phonewords = require("phonewords");

const app = express();
const port = 3001;

app.get("/phoneword/:number", (req, res) => {
  res.send(phonewords.numbersToWords(req.params.number));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
