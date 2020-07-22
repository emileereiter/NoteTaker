const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/:id', (req, res) => {
  const noteId = req.params.id;

  Note.getNotes(noteId)
  .then(results => res.json(results))
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
});

router.post('/', (req, res) => {
  const { title, note } = req.body;
  
  Note.addNote([title, note])
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
});

router.delete('/:id', (req, res) => {
  Note.deleteNote(req.params.id)
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
});

module.exports = router;