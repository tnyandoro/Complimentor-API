// import _ from 'lodash';
// import txt from './sample.txt';

document.getElementById('getText').addEventListener
('click', getText);
document.getElementById('getUsers').addEventListener
('click', getUsers);
document.getElementById('getPosts').addEventListener
('click', getPosts);
document.getElementById('addForm').addEventListener
('submit', addPost);

function getText(){
  fetch('sample.txt')
  .then((res)=> res.text())
  .then((data) => {
    document.getElementById('output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}

function getUsers() {
  fetch('users.json')
  .then((res)=> res.json())
  .then((data)=> {
    let output = `<h2>Users</h2>`;
    data.forEach((user) => {
      output += `
      <ul>
      <li>ID:${user.id}</li>
      <li>Name:${user.name}</li>
      <li>Email:${user.email}</li>
      </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res)=> res.json())
  .then((data)=> {
    let output = `<h2>Posts</h2>`;
    data.forEach((post) => {
      output += `
      <div>
      <h3>Title:${post.title}</h3>
      <p>Body:${post.body}</p>
      <h3>User ID:${post.userId}</h3>
      </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
  Headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({title: title, body: body})
  })
  .then((res)=> res.json())
}