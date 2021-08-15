import _ from 'lodash';

document.getElementById('getText').addEventListener('click', getText);

function getText(){
  fetch('sample.txt')
  .then(function(res){
    console.log(res);
  })
}