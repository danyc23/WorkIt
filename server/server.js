const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Your first Request");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost/${PORT}`);
});
