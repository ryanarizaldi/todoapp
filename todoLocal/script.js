const input = document.getElementById("input"),
  buttonadd = document.getElementById("add"),
  buttonsort = document.getElementById("sorting"),
  buttonFilCom = document.getElementById("filterCom"),
  buttonFilUnCom = document.getElementById("filterUncom"),
  buttonShowList = document.getElementById("showList"),
  //   buttonDelete = document.getElementById("del"),
  //   buttonEdit = document.getElementById("edt"),
  list = document.getElementById("lists"),
  data = storage("todo");

let todo = data ? data : [];

buttonadd.addEventListener("click", add);
buttonsort.addEventListener("click", sorting);
buttonFilCom.addEventListener("click", filterComplete);
buttonFilUnCom.addEventListener("click", filterUnComplete);
buttonShowList.addEventListener("click", show);
// buttonDelete.addEventListener("click", remove);
// buttonEdit.addEventListener("click", edit);

function filterComplete() {
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].complete) {
      list.innerHTML += `<li>${todo[i].value}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button></li>`;
    }
  }
}
function filterUnComplete() {
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    if (!todo[i].complete) {
      list.innerHTML += `<li>${todo[i].value}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button></li>`;
    }
  }
}

function sorting() {
  todo.sort(function (a, b) {
    return a.complete - b.complete;
  });
  show();
}

if (todo.length) {
  show();
}
function show() {
  //   input.reset();
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].complete) {
      list.innerHTML += `<li><s>${todo[i].value}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button><button onclick="complete(${i})">✔️</button></s></li>`;
    } else {
      list.innerHTML += `<li>${todo[i].value}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button><button onclick="complete(${i})">✔️</button></li>`;
    }
  }

  //   console.log(todo);
}

function add() {
  let val = input.value;
  todo.push({
    value: val,
    complete: false,
  });
  storage("todo", todo, true);
  show();
}

function complete(i) {
  if (todo[i].complete === true) {
    todo[i].complete = false;
  } else {
    todo[i].complete = true;
  }
  storage("todo", todo, true);
  show();
}

function edit(index) {
  list.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    if (i === index) {
      list.innerHTML += `<input type="text" id="inputEdit" value=${todo[i].value}><span onclick=done(${i})>Done</span>`;
    } else {
      list.innerHTML += `<li>${todo[i].value}  <button onclick="remove(${i})">delete</button> <button onclick="edit(${i})">edit</button><button id="checked">✔️</button></li>`;
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
