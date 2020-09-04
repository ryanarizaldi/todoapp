const input = document.getElementById("input"),
  buttonadd = document.getElementById("add"),
  //   buttonDelete = document.getElementById("del"),
  //   buttonEdit = document.getElementById("edt"),
  list = document.getElementById("lists"),
  data = storage("todo");

let todo = data ? data : [];

buttonadd.addEventListener("click", add);
// buttonDelete.addEventListener("click", remove);
// buttonEdit.addEventListener("click", edit);

if (todo.length) {
  show();
}
function show() {
  //   input.reset();
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    list.innerHTML += `<li>${todo[i]}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button> </li>`;
  }
  //   console.log(todo);
}
function add() {
  let val = input.value;
  todo.push(val);
  storage("todo", todo, true);
  show();
}

function edit(index) {
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    if (i === index) {
      list.innerHTML += `<input type="text" id="inputEdit" value=${todo[i]}><span onclick=done(${i})>Done</span>`;
    } else {
      list.innerHTML += `<li>${todo[i]}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button> </li>`;
    }
  }
}

function done(index) {
  const inputEdit = document.getElementById("inputEdit");
  todo.splice(index, 1, inputEdit.value);
  storage("todo", todo, true);
  show();
}

function remove(i) {
  todo.splice(i, 1);
  storage("todo", todo, true);
  show();
}

function storage(name, data = null, set = false) {
  if (set) {
    localStorage.setItem(name, JSON.stringify(data));
    return true;
  } else {
    return JSON.parse(localStorage.getItem(name));
  }
}
