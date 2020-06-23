const express = require('express-promise-router');
const router = express();
const click = require("./click");

router.use("./click", click);

module.exports = router;