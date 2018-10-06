//define functions here

$(document).ready(function(){

getIt();

});

function getIt() {
  $('p').on('keypress', function() {
    alert('Hey!')
  })
}