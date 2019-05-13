const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/build"));
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(err.status || 500).send({ message: err.message });
  }
  next(err);
});

app.listen(4001, () => console.log(`Listening on port ${4001}`));
