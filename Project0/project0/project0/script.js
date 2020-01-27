const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckedCount = 0;

function renderCounters() {
  uncheckedCountSpan.innerHTML = uncheckedCount;
  itemCountSpan.innerHTML = itemCount;
}

function newTodo() {
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  const todoText = prompt("Enter TODO");
  
  itemCount += 1;
  uncheckedCount += 1;

  
  var li = document.createElement("li");
  li.appendChild(input);
  
  const div = document.createElement('div');
  div.textContent = todoText;
  li.appendChild(div);
  
  const button = document.createElement('button');
  button.setAttribute('title', 'delete');
  button.textContent = 'delete';
  
  button.addEventListener('click', () => {
    const confirmation = confirm('Are you sure you want to delete this Todo?')
    if (confirmation) {
      if (!li.childNodes[0].checked) {
        uncheckedCount -= 1;
      }
      li.parentNode.removeChild(li);
      itemCount -= 1;
      renderCounters();
			}
		}
	)
  
  li.appendChild(button);
  
  list.appendChild(li);
  renderCounters();

}
  

