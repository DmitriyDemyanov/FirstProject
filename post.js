const BASE_URL = "https://jsonplaceholder.typicode.com";

//-------------------DOM--------------
const form = document.forms.addPost;
const { name, email, phone, website, submit } = form.elements;
const card = document.querySelector('.card-post');

//-----------Event-------------------

submit.addEventListener("click", onAddPostSubmit);

// ------------------ Listeners ---------------
function onAddPostSubmit(e) {
  e.preventDefault();
  const body = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    website: website.value,
  };
 
  addPost(body);
}

// -----------------Function----------------

function addPost(body) {
  const url = `${BASE_URL}/posts`;
  const xhr = new XMLHttpRequest();

  xhr.open("POST", url);

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const post = JSON.parse(xhr.responseText);
      
      renderUserPost(post);
    }
  });

  xhr.send(JSON.stringify(body));
}

function renderUserPost(post) {
  const  fragment = document.createDocumentFragment();
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  ul.classList.add('list-group');
  ul.classList.add('list-group-flush');
  li.classList.add('list-group-item');
  // const addCreateObj = {
  //   name: post.name,
  //   email: post.email,
  //   phone: post.phone,
  //   website: post.website, 
  // }
  // while () {


  //   li.textContent = post.name;
  //   li.textContent = post.email;
  //   li.textContent = post.phone;
  //   li.textContent = post.website;
  // }
  // li.textContent = post.name;
 
  // ul.appendChild(li);
  

  // console.log(ul);
  // console.log(li);
  // console.log(post);
 
 
}
