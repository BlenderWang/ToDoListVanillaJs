// select dom elements
const input = document.getElementById("listItem");
const ul = document.querySelector(".todoItems");
const addBtn = document.querySelector("#addBtn");
const message = document.querySelector(".message");
const spans = document.getElementsByTagName("span");
const saveBtn = document.querySelector('.save');
const clearBtn = document.querySelector('.clear');

// load todo list if found in local storage
function loadToDo() {
  if(localStorage.getItem('todoList')) {
    ul.innerHTML = localStorage.getItem('todoList');
    removeItem();
  }
}

// to add items to the list
function addItemFn(e) {
  const li = document.createElement("li");
  const rmBtn = document.createElement("span");
  const icon = document.createElement("i");

  rmBtn.classList.add("btn", "btn-danger");
  icon.classList.add("far", "fa-trash-alt");

  rmBtn.append(icon);

  li.textContent = input.value;
  if (li.textContent == 0) {
    message.classList.add("open");
  } else {
    message.classList.remove("open");
    ul.appendChild(li).append(rmBtn);
    input.value = "";

    removeItem();
  }
  e.preventDefault();
}

// to cross the item off the list
ul.addEventListener(
  "click",
  e => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("strike");
    }
  },
  false
);

function removeItem() {
  for(let span of spans) {
    span.addEventListener('click', () => {
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

addBtn.addEventListener("click", addItemFn);

// save the list so user can visit it again
saveBtn.addEventListener('click', () => {
  localStorage.setItem('todoList', ul.innerHTML);
});

// clear the list from local storage
clearBtn.addEventListener('click', () => {
  ul.innerHTML = '';
  localStorage.removeItem('todoList', ul.innerHTML);
});

loadToDo();