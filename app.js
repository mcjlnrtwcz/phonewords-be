const express = require("express");

const app = express();
const port = 3001;

app.get("/phoneword/:number", (req, res) => {
  res.send(req.params.number);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
