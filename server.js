require("dotenv").config();
const express =require('express');
const app = express();
const path = require("path");

const api = require("./api");

app.use("/api", api);

if(process.env.PROD) {
    app.use(express.static(path.join(_dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`));
