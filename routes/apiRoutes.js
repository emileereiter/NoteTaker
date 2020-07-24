const router = require("express").Router();
const ORM = require("../config/orm");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  ORM 
    .selectAll('notes')
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  ORM
    .create('notes', ['title', 'text'], [req.body.title, req.body.text])
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
  ORM
    .delete('notes', 'id', req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
