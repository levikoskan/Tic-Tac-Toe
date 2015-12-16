$(function(){
  alert("hey");
//   @media (max-width: 750px) {
//     $('body').toggleClass('smallSquare');
// }
  var playerMove = 0;

  $('square').on('click', function(){
    if (playerMove === 1){
      $(this).append('0')
      this.toggleClass('playerTwoMove');

      playerMove = 2;
    }




  })













});
