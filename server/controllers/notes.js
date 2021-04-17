// const Note = require("../models/note");

exports.getNotes = (req, res, next) => {
  res.send([{ message: 'testing', date: new Date(), creator: "nadav" },{message: 't1', date: new Date(), creator: "not me" }]);
}
exports.getNote = (req, res, next) => {
  res.send([]);
}
exports.createNote = (req, res, next) => {
  res.send([]);
 }
exports.updateNote = (req, res, next) => {
  res.send([]);
}
exports.deleteNote = (req, res, next) => {
  res.send([]);
}

// exports.getNotes = (req, res, next) => {
//     // const pageSize = +req.query.pagesize;
//   // const currentPage = +req.query.page;
//   let noteQuery;
//   let where = {};
//   where.deleted = 'n';
//   noteQuery = Note.findAll({
//     where: where,
//     include: [{
//       model: User,
//       as: 'creatorid',
//       attributes: ['id','firstname','lastname']
//     },
//     {
//       model: User,
//       as: 'appliedToid',
//       attributes: ['id','firstname','lastname']
//     }]
//   });
//   let fetchednotes;
//   noteQuery
//     .then(documents => {
//       fetchednotes = documents;
//       return Note.count();
//     })
//     .then(count => {
//       res.status(200).json({
//         status: "0",
//         message: "notes fetched successfully!",
//         notes: fetchednotes,
//         maxnotes: count
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: error.message,
//         status: "-99",
//         message: "Fetching notes failed!"
//       });
//     });
// };

// exports.getNote = (req, res, next) => {
//   Note.findByPk(req.params.id, {
//     // include: [
//     //   {
//     //     model: Note,
//     //     as: 'updater',
//     //     attributes: ['fname','lname']
//     //   }
//     //   ]
//     })
//       .then(note => {
//         if (note) {
//           res.status(200).json(note);
//         } else {
//           res.status(404).json({ status: "-1", message: "note not found!" });
//         }
//       })
//       .catch(error => {
//         res.status(500).json({
//           error: error.message,
//           status: "-99",
//           message: "Fetching note failed!"
//         });
//       });
// };

// exports.createNote = (req, res, next) => {
//   const url = req.protocol + "://" + req.get("host");
//   const note = new Note(
//     // {

//     // title: req.body.title,
//     // content: req.body.content,
//     // imagePath: url + "/images/" + req.file.filename,
//     // creator: req.noteData.noteId
//     // }
//   );
//   for (var key in req.body) {
//     if (req.body.hasOwnProperty(key) && req.body[key]) {
//       note[key] = req.body[key];
//     }
//   }
//   // Note
//   note.save()
//     .then(createdNote => {
//       res.status(201).json({
//         status: "0",
//         message: "Note added successfully",
//         Note: {
//           ...createdNote.dataValues
//         }
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: error.message,
//         status: "-99",
//         message: "Creating a Note failed!"
//       });
//     });
// };

// exports.updateNote = (req, res, next) => {
//   Note.findByPk(req.params.id)
//     .then(note => {
//       if (note) {
//         for (var key in req.body) {
//           if (req.body.hasOwnProperty(key) && req.body[key]) {
//             note[key] = req.body[key];
//           }
//         }
//         note.updatedAt = new Date();//moment().format('YYYY-MM-DD hh:mm:ss');
//         note.updatedBy = 1;
//         note.save()
//         res.status(200).json({ status: "0", message: "note updated!" });
//       } else {
//         res.status(404).json({ status: "-1", message: "note not found!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: error.message,
//         status: "-99",
//         message: "Couldn't udpate note!"
//       });
//     })
// };

// exports.deleteNote = (req, res, next) => {
//   // console.log(req.params);
//   Note.findByPk(req.params.id)
//       .then(note => {
//         if (note) {
//           note.deleted = 'y';
//           note.deletedAt = new Date();
//           note.save()
//           // return note.destroy();
//         } else {
//           res.status(404).json({ status: "-1", message: "note not found!" });
//         }
//       })
//       .then(result => {
//         res.status(200).json({ status: "0", message: "delete successful!" });
//       })
//       .catch(error => {
//         res.status(500).json({
//           error: error.message,
//           status: "-99",
//           message: "deleting note failed!"
//         });
//       });
// };
