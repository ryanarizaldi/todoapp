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
const dlt = document.getElementsByClassName("fa-trash");
for (let i = 0; i < dlt.length; i++) {
  dlt[i].onclick = function () {
    let parent = this.parentElement;
    parent.style.display = "none";
  };
}
// add List
const addForm = document.forms["add-list"];
const parent = document.querySelector("ul");
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);
  //each element
  let list = document.createElement("div");
  let li = document.createElement("li");
  let trash = document.createElement("i");
  if (!value) {
    alert("Add something on input field!");
  } else {
    list.classList.add("list");
    li.textContent = value;
    trash.classList.add("fa");
    trash.classList.add("fa-trash");
    parent.appendChild(list);
    list.appendChild(li);
    list.appendChild(trash);
  }

  // value.reset();
  // console.log(list);
});

// const trs = document.querySelector(".trash");
// trs.addEventListener("click", function (e) {
//   confirm("Are you sure you want to delete this thing?");
// });

// function selected(item) {
//   item.prepend((style.backgroundColor = "limegreen"));
// }
