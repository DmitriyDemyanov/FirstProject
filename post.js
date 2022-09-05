const BASE_URL = "https://jsonplaceholder.typicode.com";

//-------------------DOM--------------
const form = document.forms.addPost;
const { name, email, phone, website, submit } = form.elements;

console.dir(email);
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
  console.log(body);
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
      console.log(post);
      renderUserPost(post);
    }
  });

  xhr.send(JSON.stringify(body));
}

function renderUserPost(post) {
    
}
