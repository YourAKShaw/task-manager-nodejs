/**
 * Represents a create task request body.
 */
class CreateTaskDto {
  // required fields
  title;

  // optional fields
  description;
  deadline;
  notes;
}

module.exports = CreateTaskDto;
