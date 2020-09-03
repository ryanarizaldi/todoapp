// Create a "close" button and append it to each list item
// let list = document.getElementsByClassName("list");

// for (let i = 0; i < list.length; i++) {
//   let icon = document.createElement("i");
//   icon.className = "fa fa-trash";
//   list[i].appendChild(icon);
// }

// Click on a close button to hide the current list item
// var trash = document.getElementsByClassName("a fa-trash");
// for (i = 0; i < trash.length; i++) {
//   trash[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// function newElement() {
//   var li = document.createElement("div");
//   li.className = "list";
//   var lst = document.createElement("li");
//   li.appendChild(lst);
//   var inputValue = document.getElementById("myInput").value;
//   var text = document.createTextNode(inputValue);
//   lst.appendChild(text);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("todo").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
// }

//remove list when click trash
// let dlt = document.getElementsByClassName("fa-trash");
// for (let i = 0; i < dlt.length; i++) {
//   dlt[i].onclick = function () {
//     let parent = this.parentElement;
//     parent.style.display = "none";
//   };
// }
// // add List
// const addForm = document.forms["add-list"];
// const parent = document.querySelector("ul");
// addForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let value = addForm.querySelector('input[type="text"]').value;
//   // console.log(value);
//   //each element
//   let list = document.createElement("div");
//   let li = document.createElement("li");
//   let trash = document.createElement("i");
//   if (!value) {
//     alert("Add something on input field!");
//   } else {
//     list.classList.add("list");
//     li.textContent = value;
//     trash.classList.add("fa");
//     trash.classList.add("fa-trash");
//     parent.appendChild(list);
//     list.appendChild(li);
//     list.appendChild(trash);
//   }

//   addForm.reset();
//   // value.reset();
//   // console.log(list);
// });
const addForm = document.forms["add-list"];
let list = [],
  input = document.getElementById("addinput"),
  button = document.getElementById("add"),
  elementList = document.getElementById("list"),
  editing = false,
  editindex = null;

button.addEventListener("click", function () {
  if (!input.value) {
    alert("You Must Type Something!");
  } else {
    const val = input.value;
    if (editing == false) {
      list.push(val);
    } else {
      list[editindex] = val;
      editing = false;
    }
    printList();
    addForm.reset();
  }
});

function printList() {
  // input.reset();
  elementList.innerHTML = "";
  list.forEach(function (val, index) {
    elementList.innerHTML += `<div class="list">
    <li>${val}</li>
    <div class="action">
    <i class="fa fa-pencil" onclick="edit('${val}',${index})"></i>
    <i class="fa fa-trash" onclick="remove(${index}, event)"></i>
    </div>
    </div>`;
  });
}

function edit(val, index) {
  editing = true;
  editindex = index;
  input.value = String(val);
}

function remove(index, e) {
  if (confirm(`are you sure you want to delete "${list[index]}" ??`)) {
    e.target.parentElement.parentElement.remove();
    list.splice(index, 1);
  }
}
