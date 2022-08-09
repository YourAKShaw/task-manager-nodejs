/**
 * Represents a create task request body.
 */
export class CreateTaskDto {
  // required fields
  title;

  // optional fields
  description;
  deadline;
  notes;
}
