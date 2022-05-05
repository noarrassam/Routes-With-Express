const express = require("express");
const routing = require("./routes/routes");
const htmlRouting = require("./routes/htmlRouter");
const app = express();

// const indexHtml = require("./public/index.html");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routing);
app.use("/", htmlRouting);

let PORT = 3001;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
