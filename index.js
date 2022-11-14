const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    console.log("document created", req.query);
    return res.json({ message: "Ok" });
});
app.get("/excel", (req, res) => {
    console.log("Excel File Creared", req.query);
    return res.json({ message: "Ok" });
});
console.log(`App listening on port: ${port}`);
app.listen(port);
