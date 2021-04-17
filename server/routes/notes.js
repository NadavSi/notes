var express = require('express');

const NoteController = require("../controllers/Notes");

var router = express.Router();

router.post("", NoteController.getNotes);

router.get("/:id", NoteController.getNote);

router.post("/new", NoteController.createNote);

router.put("/:id", NoteController.updateNote);

router.post("/delete/:id", NoteController.deleteNote);

module.exports = router;
