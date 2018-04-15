var todos = ["Wake up"];


function getValue() {
  var inputElement = document.querySelector('#to-do');
  return inputElement.value;
}

function clearValue() {
  var inputElement = document.querySelector('#to-do');
  inputElement.value = '';
}

function listTodos() {
  var list = document.querySelector('#to-do-list');
  list.innerHTML = '';
  todos.forEach(function (item, key) {
    var listElem = document.createElement('li');
    listElem.textContent = item;
    list.appendChild(listElem);
  });
  console.log(todos.length + ' todos listed');
}

function addTodo(){
  var newTodo = getValue()
  todos.push(newTodo);
  console.log(newTodo + " added");
  listTodos();
  clearValue();
}

function deleteTodo(){
  var itemNumToDelete = getValue();
  var indexDel = itemNumToDelete - 1;
  todos.splice(indexDel, 1);
  console.log(itemNumToDelete + " deleted");
  listTodos();
  clearValue();
}

listTodos();