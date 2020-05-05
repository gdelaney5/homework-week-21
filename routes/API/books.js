const router = require("express").Router();
const controllerBooks = require("../../controllers/controllerBooks");

router.route("/")
    .get(controllerBooks.findAll)
    .post(controllerBooks.create);

router.route("/:id")
    .get(controllerBooks.findById)
    .put(controllerBooks.update)
    .delete(controllerBooks.remove);

module.exports = router;

