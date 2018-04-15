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
    listElem.className = 'item-' + key;
    listElem.innerHTML = item + '<button class="delete-btn">delete</button>';
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

function deleteTodo(indexDel){
  todos.splice(indexDel, 1);
  console.log(indexDel + " deleted");
  listTodos();
  clearValue();
}

function getSuffixFrom(str) {
  return str.split('-')[1];
}

var addButton = document.querySelector('#add-btn');
var deleteButton = document.querySelector('#delete-btn');
var todoInput = document.querySelector('#to-do');
var todoList = document.querySelector('#to-do-list');

addButton.onclick = addTodo;

todoInput.addEventListener('keypress', function(event){
  if (event.keyCode === 13) {
    addTodo();
  }
});



todoList.addEventListener('click', function (event) {
  if(event.target.className === 'delete-btn') {
    var indexToDelete = getSuffixFrom(event.target.parentNode.className);
    deleteTodo(indexToDelete);
  }
});


listTodos();

