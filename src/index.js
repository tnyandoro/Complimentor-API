// import _ from 'lodash';
// import txt from './sample.txt';

document.getElementById('getText').addEventListener
('click', getText);
document.getElementById('getUsers').addEventListener
('click', getUsers);

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
      <ul>ID:${user.id}</ul>
      <ul>Name:${user.name}</ul>
      <ul>Email:${user.email}</ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}