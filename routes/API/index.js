const router = require("express").Router();
const routeBooks = require("./books");

router.use("/books", routeBooks);

module.exports = router;
