// import _ from 'lodash';
// import txt from './sample.txt';

document.getElementById('getText').addEventListener
('click', getText);

function getText(){
  fetch('sample.txt')
  .then((res)=> res.text())
  .then((data) => {
    document.getElementById('output').innerHTML = data;
  })
}