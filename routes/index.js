const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Here are the API routes

router.use("/api", apiRoutes);

//When no API routes are available, send to React App

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
