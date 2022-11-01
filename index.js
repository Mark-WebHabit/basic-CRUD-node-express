const express = require("express");
const app = express();

const routes = require("./routes/routes");

// app runs at http://localhost:(port number)/api/v1/items/

app.use(express.json());

app.use("/api/v1/items", routes);

app.listen(5000, () => console.log(`Server Listening on port ${5000}...`));
