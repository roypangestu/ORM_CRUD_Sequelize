const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");

app.use(bodyParser.json());
app.use(userRoute);

app.listen(port, () => console.log(`App running on port ${port}....`));
