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

function showDeleteConfirmPopup(indexToDelete) {
  var popup = document.querySelector('#delete-popup');
  popup.classList.add('active');
  var deleteBtn = popup.querySelector('#delete-yes-btn');
  deleteBtn.onclick = function () {
    deleteTodo(indexToDelete);
    popup.classList.remove('active');
    showMessage(indexToDelete);
  };
  var cancelBtn = popup.querySelector('#delete-no-btn');
  cancelBtn.onclick = function () {
    popup.classList.remove('active');
  }
}

function showMessage(todoText) {
  var message = document.querySelector('#message');
  var messageText = document.querySelector('#message div');
  messageText.textContent = 'You just deleted ' + todoText;
  message.classList.add('active');
}

function hideMessage() {
  var message = document.querySelector('#message');
  message.classList.remove('active');
}

function getSuffixFrom(str) {
  return str.split('-')[1];
}

var addButton = document.querySelector('#add-btn');
var deleteButton = document.querySelector('#delete-btn');
var todoInput = document.querySelector('#to-do');
var todoList = document.querySelector('#to-do-list');
var todoList = document.querySelector('#to-do-list');
var messageBtn = document.querySelector('#hide-message-btn');

messageBtn.addEventListener('click', hideMessage);

addButton.onclick = addTodo;

todoInput.addEventListener('keypress', function(event){
  if (event.keyCode === 13) {
    addTodo();
  }
});



todoList.addEventListener('click', function (event) {
  if(event.target.className === 'delete-btn') {
    var listItemElem = event.target.parentNode;
    var indexToDelete = getSuffixFrom(listItemElem.className);
    showDeleteConfirmPopup(indexToDelete)
  }
});


listTodos();

