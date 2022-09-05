(function () {
  let tasksDefault = [
    {
      id: "1661846679815",
      completed: true,
      body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
      title: "Eu ea incididunt sunt consectetur fugiat non.",
    },
    {
      id: "1661846693516",
      completed: false,
      body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
      title:
        "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
    },
    {
      id: "1661846693517",
      completed: true,
      body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
      title: "Eu ea incididunt sunt consectetur fugiat non.",
    },
    {
      id: "1661846693518",
      completed: false,
      body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
      title:
        "A Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
    },
  ];

  let tasks = [];

  // DOM Elements
  const ul = document.querySelector(".list-group");
  const inputTitle = document.getElementById("title");
  const inputBody = document.getElementById("body");
  const buttonAddTask = document.querySelector("[type=submit]");
  const formAddTask = document.forms.addTask;

  // Event Listeners ADD
  formAddTask.addEventListener("submit", onTaskCreate);
  ul.addEventListener("click", onListClick);

  // Event Handlers
  function onListClick(e) {
    const target = e.target;
    if (target.classList.contains("delete-btn")) {
      const li = target.closest("[data-id]");
      const id = li.getAttribute("data-id");
      li.remove();
      deleteById(id);
    }
  }

  function onTaskCreate(e) {
    console.log(e);
    e.preventDefault();
    const title = inputTitle.value;
    const body = inputBody.value;
    if (!title || !body) {
      alert("Заполните форму");
      return;
    }
    const taskObj = {
      id: Math.random().toString(),
      completed: false,
      body,
      title,
    };
    tasks.push(taskObj);
    addToBrowser(taskObj);
    formAddTask.reset();
    saveList(tasks);
  }

  // Functions
  function firstRender(list) {
    list.forEach((el) => {
      addToBrowser(el);
    });
  }

  function addToBrowser(task) {
    const listItem = createListItem(task);
    ul.prepend(listItem);
  }

  function createListItem(task) {
    const li = createLi(task.id);

    const span = createSpan(task.title);

    const btn = createButton();

    const p = createArticle(task.body);

    li.append(span);
    li.append(btn);
    li.append(p);

    return li;
  }

  function createLi(id) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-id", id);
    return li;
  }

  function createSpan(text) {
    const span = document.createElement("span");
    span.textContent = text;
    span.style.fontWeight = "bold";
    return span;
  }

  function createButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    btn.textContent = "Delete";
    return btn;
  }

  function createArticle(text) {
    const p = document.createElement("p");
    p.classList.add("mt-2", "w-100");
    p.textContent = text;
    return p;
  }

  function deleteById(id) {
    const newTasks = tasks.filter((el) => el.id !== id);
    console.log(newTasks);
    tasks = newTasks;
    saveList(tasks);
  }

  // Local Storage
  function saveList(tasks) {
    localStorage.setItem("toDoList", JSON.stringify(tasks));
  }

  function loadList() {
    const taskList = JSON.parse(localStorage.getItem("toDoList"));
    if (taskList) {
      tasks = taskList;
    } else {
      tasks = [...tasksDefault];
    }
    return tasks;
  }

  // --- START ---
  firstRender(loadList());

  // // -------- Task ------------------

  const map = ["_id", "name", "isActive", "balance"];
  const users = [
    {
      _id: "5d220b10e8265cc978e2586b",
      isActive: true,
      balance: 2853.33,
      age: 20,
      name: "Buckner Osborne",
      gender: "male",
      company: "EMPIRICA",
      email: "bucknerosborne@empirica.com",
      phone: "+1 (850) 411-2997",
      registered: "2018-08-13T04:28:45 -03:00",
      nestedField: { total: 300 },
    },
    {
      _id: "5d220b10144ef972f6c2b332",
      isActive: true,
      balance: 1464.63,
      age: 38,
      name: "Rosalie Smith",
      gender: "female",
      company: "KATAKANA",
      email: "rosaliesmith@katakana.com",
      phone: "+1 (943) 463-2496",
      registered: "2016-12-09T05:15:34 -02:00",
      nestedField: { total: 400 },
    },
    {
      _id: "5d220b1083a0494655cdecf6",
      isActive: false,
      balance: 2823.39,
      age: 40,
      name: "Estrada Davenport",
      gender: "male",
      company: "EBIDCO",
      email: "estradadavenport@ebidco.com",
      phone: "+1 (890) 461-2088",
      registered: "2016-03-04T03:36:38 -02:00",
      nestedField: { total: 200 },
    },
  ];
})();

// переменные
