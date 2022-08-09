const TaskService = require('./task.service');

test('createTask', () => {
  const task = TaskService.createTask({
    title: 'title text',
    description: 'description text',
    deadline: '10/10/2022',
    notes: [],
  });

  expect(task).toHaveProperty('id', expect.any(Number));
  expect(task).toHaveProperty('title', 'title text');
  expect(task).toHaveProperty('description', 'description text');
  expect(task).toHaveProperty('deadline', '10/10/2022');
  expect(task).toHaveProperty('notes', []);
  expect(task).toHaveProperty('completed', false);

  const task2 = TaskService.createTask({
    title: 'title text 2',
    description: 'description text 2',
    deadline: '20/12/2022',
    notes: [
      {
        title: 'note title',
        body: 'note body',
      },
    ],
  });

  expect(task2).toHaveProperty('id', expect.any(Number));
  expect(task2).toHaveProperty('title', 'title text 2');
  expect(task2).toHaveProperty('description', 'description text 2');
  expect(task2).toHaveProperty('deadline', '20/12/2022');
  expect(task2).toHaveProperty('notes', [
    {
      title: 'note title',
      body: 'note body',
    },
  ]);
  expect(task2).toHaveProperty('completed', false);
});

test('getTasks', () => {
  const tasks = TaskService.getTasks();
  expect(tasks).toHaveLength(2);
  expect(tasks[1]).toHaveProperty('id', expect.any(Number));
  expect(tasks[1]).toHaveProperty('title', 'title text 2');
  expect(tasks[1]).toHaveProperty('description', 'description text 2');
  expect(tasks[1]).toHaveProperty('deadline', '20/12/2022');
  expect(tasks[1]).toHaveProperty('notes', [
    {
      title: 'note title',
      body: 'note body',
    },
  ]);
  expect(tasks[1]).toHaveProperty('completed', false);
});

test('getTask', () => {
  let task = TaskService.getTasks()[1];
  const taskId = task.id;
  task = TaskService.getTask(taskId);
  expect(task).toHaveProperty('id', taskId);
  expect(task).toHaveProperty('title', 'title text 2');
  expect(task).toHaveProperty('description', 'description text 2');
  expect(task).toHaveProperty('deadline', '20/12/2022');
  expect(task).toHaveProperty('notes', [
    {
      title: 'note title',
      body: 'note body',
    },
  ]);
  expect(task).toHaveProperty('completed', false);
});

test('updateTask', () => {
  let task = TaskService.getTasks()[1];
  const taskId = task.id;
  task = TaskService.updateTask(taskId, {
    title: 'title text 2 updated',
    description: 'description text 2 updated',
    deadline: '25/12/2022',
    notes: [
      {
        title: 'note title updated',
        body: 'note body updated',
      },
    ],
    completed: true,
  });
  expect(task).toHaveProperty('id', taskId);
  expect(task).toHaveProperty('title', 'title text 2 updated');
  expect(task).toHaveProperty('description', 'description text 2 updated');
  expect(task).toHaveProperty('deadline', '25/12/2022');
  expect(task).toHaveProperty('notes', [
    {
      title: 'note title updated',
      body: 'note body updated',
    },
  ]);
  expect(task).toHaveProperty('completed', true);
});

test('getTasks completed: true', () => {
  const tasks = TaskService.getTasks('true');
  expect(tasks).toHaveLength(1);
  expect(tasks[0]).toHaveProperty('id', expect.any(Number));
  expect(tasks[0]).toHaveProperty('title', 'title text 2 updated');
  expect(tasks[0]).toHaveProperty('description', 'description text 2 updated');
  expect(tasks[0]).toHaveProperty('deadline', '25/12/2022');
  expect(tasks[0]).toHaveProperty('notes', [
    {
      title: 'note title updated',
      body: 'note body updated',
    },
  ]);
  expect(tasks[0]).toHaveProperty('completed', true);
});

test('getTasks completed: false', () => {
  const tasks = TaskService.getTasks('false');
  expect(tasks).toHaveLength(1);
  expect(tasks[0]).toHaveProperty('id', expect.any(Number));
  expect(tasks[0]).toHaveProperty('title', 'title text');
  expect(tasks[0]).toHaveProperty('description', 'description text');
  expect(tasks[0]).toHaveProperty('deadline', '10/10/2022');
  expect(tasks[0]).toHaveProperty('notes', []);
  expect(tasks[0]).toHaveProperty('completed', false);
});

test('deleteTask', () => {
  let task = TaskService.getTasks()[1];
  const taskId = task.id;
  TaskService.deleteTask(taskId);
  task = TaskService.getTask(taskId);
  expect(task).toBeUndefined();
  const tasks = TaskService.getTasks();
  expect(tasks).toHaveLength(1);
});
