const notesModel = require('../Models/notesModel');

const list = (req, res) => {
  notesModel.list((err, results) => {
    if (err) return res.status(500).json({ message: 'Error listing notes', err });
    if (!results) return res.status(404).json({ message: 'Notes not found' });
    res.status(200).json(results);
  })
}

const listOne = (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: 'Please provide an id' });

  notesModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing note', err });
    if (!result) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(result);
  })
}

const create = (req, res) => {
  const note = req.body;

  if (!note.title || !note.user_id) return res.status(400).json({ message: 'Please provide all required fields (title, user_id)' });

  notesModel.create(note, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating note', err });
    if (!result) return res.status(404).json({ message: 'Note not found' });
    res.status(201).json({ message: 'Note created successfully' });
  })
}

const update = (req, res) => {
  const { id } = req.params;
  const note = req.body;

  if (!id) return res.status(400).json({ message: 'Please provide an id' });
  if (note.user_id) return res.status(400).json({ message: 'You cannot update the user_id' });

  notesModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing note', err });
    if (!result) return res.status(404).json({ message: 'Note not found' });

    const updatedNote = {
      title: note.title || result.title,
      content: note.content || result.content
    }

    notesModel.update(id, updatedNote, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error updating note', err });
      if (!result) return res.status(404).json({ message: 'Note not found' });
      res.status(200).json({ message: 'Note updated successfully' });
    })
  })
}

const deleteOne = (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: 'Please provide an id' });

  notesModel.deleteOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting note', err });
    if (!result) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json({ message: 'Note deleted successfully' });
  })
}

module.exports = {
  list,
  listOne,
  create,
  update,
  deleteOne
};
