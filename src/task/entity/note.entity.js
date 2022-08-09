/**
 * Represents a task note.
 * @typedef {Object} Note
 */
class Note {
  title;
  body;

  /**
   * @constructor
   * @param {string} title - The title of the note.
   * @param {string} body - The body of the note.
   */
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

module.exports = Note;
