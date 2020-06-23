const express = require("express-promise-router");
const router = express();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome Hokages" })
});

module.exports = router;