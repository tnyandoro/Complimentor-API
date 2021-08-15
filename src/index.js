// import _ from 'lodash';
// import txt from './sample.txt';

document.getElementById('getText').addEventListener
('click', getText);
document.getElementById('getUsers').addEventListener
('click', getUsers);
document.getElementById('getPosts').addEventListener
('click', getPosts);

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
  fetch('posts.json')
  .then((res)=> res.json())
  .then((data)=> {
    let output = `<h2>Posts</h2>`;
    data.forEach((post) => {
      output += `
      <ul>
      <li>ID:${post.id}</li>
      <li>Title:${post.title}</li>
      <li>Body:${post.body}</li>
      <li>User ID:${post.userId}</li>
      </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}