// select dom elements
const input = document.getElementById("listItem");
const ul = document.querySelector(".todoItems");
const addBtn = document.querySelector("#addBtn");
const message = document.querySelector(".message");
const spans = document.getElementsByTagName("span");

// load todo list if found in local storage


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

function removeItem() {
  for(let span of spans) {
    span.addEventListener('click', () => {
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

addBtn.addEventListener("click", addItemFn);