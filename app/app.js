const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${3000}`));
