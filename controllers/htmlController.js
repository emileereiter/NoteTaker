onst path = require('path');
const express = require('express');
const router = express.Router();
router.get('/note', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});
router.get('/addNote', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/addBook.html'))
});
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});
module.exports = router;