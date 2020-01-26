const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const todoText = prompt("Enter TODO");
  var li = document.createElement("li");
  let span = document.createElement('span');
 
 
  li.appendChild(document.createTextNode(' ' + todoText));
  
  list.appendChild(li);
 
  
 
  
  
  
}
