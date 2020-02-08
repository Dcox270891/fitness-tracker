const express = require("express");
const mongoose = require("mongoose");
const compression = require('compression');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});