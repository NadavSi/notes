const mongoose = require("mongoose");

const noteModel = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  priority: {
    type: String,
    default: "Normal",
  },
  completed: {
    type: String,
    default: "n",
  },
  appliedTo: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  completionDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Note', noteModel);
