import './styles/index.css';

const todoItems = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
];

const todoList = document.querySelector('#list-items');

for (let i = 0; i < todoItems.length; i += 1) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = 1;
  checkbox.name = 'todo[]';
  checkbox.classList.add('material-icons');
  todoDiv.appendChild(checkbox);

  const newTodo = document.createElement('li');
  newTodo.innerText = todoItems[i].description;
  newTodo.classList.add('list-item');
  todoDiv.appendChild(newTodo);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  trashButton.classList.add('material-icons');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}
