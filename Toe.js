$(function(){

//   @media (max-width: 750px) {
//     $('body').toggleClass('smallSquare');
// }
  var playerMove = 0;
  var count =0;

  $('.square').on('click',function(){
    if (playerMove === 1){
      $(this).empty();
      $(this).html('<p>o</p>');
      $(this).removeClass('1')
      $(this).addClass('2');
      playerMove = 2;
      count += 1;

    }  else if (playerMove === 2){
      $(this).empty();
      $(this).removeClass('1, 2')
      playerMove = 0;

    } else {
      $(this).html('<p>x</p>');
      $(this).addClass('1');
      playerMove = 1;
      count += 1;

    }

    checkWinner(playerMove)
  })












  function checkWinner(player){
    // var topChecker = $('.topRow').children();
    // var midChecker = $('.midRow').children();
    //   // console.log(midChecker);
    // var bottomChecker = $('.bottomRow').children();
    // // console.log(topChecker);
    // // $.each(topChecker, function( index, value ) {
    // // console.log($(topChecker[index]).hasClass('1') || $(topChecker[index]).hasClass('2'));
    // // });
    // $.each(midChecker, function( index, value ) {
    // console.log($(midChecker[index]).hasClass('1') || $(midChecker[index]).hasClass('2')
    // );})
    // $.each(bottomChecker, function( index, value ) {
    // console.log($(bottomChecker[index]).hasClass('1') || $(bottomChecker[index]).hasClass('2')
    // );})


    if ($('.top.left').hasClass(player) && $('.top.center').hasClass(player) && $('.top.right').hasClass(player)){
      alert("Player "+ player +"won by completing the top row.");
    }
    if ($('.mid.left').hasClass(player) && $('.mid.center').hasClass(player) && $('.mid.right').hasClass(player)){
      alert("Player "+ player +"won by completing the middle row.");
    }
    if ($('.bottom.left').hasClass(player) && $('.bottom.center').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the bottom row.");
    }
    if ($('.top.left').hasClass(player) && $('.mid.left').hasClass(player) && $('.bottom.left').hasClass(player)){
      alert("Player "+ player +"won by completing the left column");
    }
    if ($('.top.center').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.center').hasClass(player)){
      alert("Player "+ player +"won by completing the middle column.");
    }
    if ($('.top.right').hasClass(player) && $('.mid.right').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the right column.");
    }
    if ($('.top.left').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the diagonal");
    }
    if ($('.top.right').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.left').hasClass(player)){
      alert("Player "+ player +"won by completing the diagonal");
    }

    // if ($.each(topChecker, function( index, value){
    //     $(topChecker[index]).hasClass('1')=== true || $(topChecker[index]).hasClass('2') ===true
    // }) && $.each(midChecker, function( index, value ) {
    // $(midChecker[index]).hasClass('1')=== true || $(midChecker[index]).hasClass('2') === true
    // }) && $.each(bottomChecker, function( index, value ) {
    // $(bottomChecker[index]).hasClass('1') === true || $(bottomChecker[index]).hasClass('2') === true
    // })){

    //   alert("tie game")

    // }
    else{
      console.log(count);
      return false;

    }
  }



  // $.each(bottomChecker, function( index, value ) {
  //   $(bottomChecker[index]).hasClass('1') || $(bottomChecker[index]).hasClass('2')
  //   })








function reset(){

}



});
