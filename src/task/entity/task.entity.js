/**
 * sample object of type Task
 * {
 *   "id": 31,
 *   "title": "I am a task!",
 *   "description": "This is the task description",
 *   "deadline": "dd/mm/yyyy",
 *   "notes": [
 *     {
 *       "title": "random note title",
 *       "body": "I am the note body"
 *     },
 *     {
 *       "title": "random note title",
 *       "body": "I am the note body"
 *     },
 *     {
 *       "title": "random note title",
 *       "body": "I am the note body"
 *     }
 *   ],
 *   "completed": false
 * }
 */

// eslint-disable-next-line no-unused-vars
const Note = require('./note.entity');

/**
 * Represents a task.
 * @typedef {Object} Task
 */
class Task {
  id;
  title;
  description;
  deadline;
  notes;
  completed;

  /**
   * Represents a task.
   * @constructor
   * @param {number} id - The id of the task.
   * @param {string} title - The title of the task.
   * @param {string} description - The description of the task.
   * @param {string} deadline - The deadline of the task.
   * @param {Note[]} notes - The notes of the task.
   * @param {boolean} completed - Whether the task is completed or not.
   */
  constructor(id, title, description, deadline, notes, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.notes = notes;
    this.completed = completed;
  }
}

module.exports = Task;
