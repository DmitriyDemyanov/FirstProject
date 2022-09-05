/// ------ DOM-----------
const list = document.getElementById("users-name-list");
const userInfo = document.getElementById("user-info");

// -------- function----------------
function getUsers(fn) {
  const url = "https://jsonplaceholder.typicode.com/users";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.addEventListener("load", () => {
    console.log(xhr);
    const response = JSON.parse(xhr.responseText);

    fn(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function getUserById(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", (e) => {
    if (xhr.status === 200) {
      const user = JSON.parse(xhr.responseText);
      renderUserInfo(user);
    }
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function renderUsersList(response) {
  const fragment = document.createDocumentFragment();

  response.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = user.name;
    li.setAttribute("data-user-id", user.id);
    fragment.appendChild(li);
  });
  list.appendChild(fragment);
}

function renderUserInfo(user) {
  console.log(user);
  while (userInfo.firstChild) {
    userInfo.removeChild(userInfo.firstChild);
  }
  const fragment = document.createDocumentFragment();
  for (let key in user) {
    if (["id", "address", "company"].includes(key)) {
      continue;
    }
    console.log(`${key}: ${user[key]}`);
    const item = document.createElement("div");
    item.classList.add("item");
    const keyEl = document.createElement("div");
    keyEl.classList.add("key");
    keyEl.textContent = key;
    const value = document.createElement("div");
    value.classList.add("div");
    value.textContent = user[key];
    item.appendChild(keyEl);
    item.appendChild(value);
    fragment.appendChild(item);
  }
  userInfo.appendChild(fragment);

  console.log(fragment);
}


//   ------ event-----

list.addEventListener("click", (e) => {
  const target = e.target.closest(".list-group-item");
  console.log(target);
  if (target) {
    const id = target.getAttribute("data-user-id");
    console.log(id);
    getUserById(id);
  }
});

// ------------------start----------------
getUsers(renderUsersList);
//  ------------ end ----------------