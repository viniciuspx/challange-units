/**
 * API main app
 */

import { defaultRouter } from "./routes/main-routes";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use("/", defaultRouter);

app.listen(port, () => console.log(`Running on port ${port}`));