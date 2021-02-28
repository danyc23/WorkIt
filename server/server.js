const express = require("express");
const app = express();
const companyRoute = require("./routes/company");
const postRoute = require("./routes/post");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const middleware = require("./middleware/auth");

app.use(express.json());
app.use(cors());

// company routes
app.use("/company", companyRoute);

// post routes
app.use("/post", postRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost/${PORT}`);
});
