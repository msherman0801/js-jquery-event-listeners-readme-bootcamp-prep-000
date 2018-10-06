//define functions here

$(document).ready(function(){

getIt();
frameIt();

});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('input:first').on('keypress', functione) {
    if(e.which == )
  })
}