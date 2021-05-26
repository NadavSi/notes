var express = require('express');
var component = "/notes";
const NoteController = require("../controllers/Notes");

var router = express.Router();

router.post(component + "", NoteController.getNotes);

router.get(component + "/:id", NoteController.getNote);

router.post(component + "/new", NoteController.createNote);

router.put(component + "/:id", NoteController.updateNote);

router.post(component + "/delete/:id", NoteController.deleteNote);

module.exports = router;
