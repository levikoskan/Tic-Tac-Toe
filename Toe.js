$(function(){

//   @media (max-width: 750px) {
//     $('body').toggleClass('smallSquare');
// }
  var playerMove = 0;
  var count =0;
  var theGame = false;
  var winsX = 0
  var winsO = 0
  var allTimesGamePlayed = 0;

//accessing the local storage value
  if(localStorage.getItem('allGameHistory')) {
  $('#allTimeHistory').html(localStorage.getItem('allGameHistory'));
  allTimesGamePlayed = parseInt(localStorage.getItem('allGameHistory'));
  }


// Anytime you click a square element it will change
  $('.square').on('click', function () {
      if (playerMove === 1){
        $(this).empty();
        $(this).html('<p>o</p>');
        $(this).removeClass('1')
        $(this).addClass('2');
        playerMove = 2;


      }  else if (playerMove === 2){
        $(this).empty();
        $(this).removeClass('1, 2')
        playerMove = 0;

      } else {
        $(this).html('<p>x</p>');
        $(this).addClass('1');
        playerMove = 1;
      }
    });


  // button to start a new game. empties all the square elements
  $('.newGame').on('click', function(){
    //remove the X or O
    $('.square').empty();
    // remove the background-color
    $('div').find('.1').removeClass('xSpot');
    $('div').find('.2').removeClass('oSpot');
    //remove classes
    $('div').find('.1').removeClass('1');
    $('div').find('.2').removeClass('2');
    count = 0;
    playerMove = 0;
    console.log(playerMove);


    $('.square').bind('click', function(){
    if (playerMove === 1){
      $(this).empty();
      $(this).html('<p>o</p>');
      $(this).removeClass('1')
      $(this).addClass('2');
      playerMove = 2;


    }  else if (playerMove === 2){
      $(this).empty();
      $(this).removeClass('1, 2')
      playerMove = 0;

    } else {
      $(this).html('<p>x</p>');
      $(this).addClass('1');
      playerMove = 1;
    }
  });
  });


  //Submit your move button. no going back, count for tie conditional
    $('#submit').on('click', function() {

      $('div').find('.1').unbind('click');
      $('div').find('.2').unbind('click');
      count += 1
      console.log(count);
      $('div').find('.1').addClass('xSpot');
      $('div').find('.2').addClass('oSpot');
      // tie game conditional
      checkWinner(playerMove)

      if (count >= 9 && theGame === false) {
      alert("Cat's Tail");
      }
    });




  function checkWinner(player){



    if ($('.top.left').hasClass(player) && $('.top.center').hasClass(player) && $('.top.right').hasClass(player)){
      alert("Player "+ player +"won by completing the top row.");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }


    }
    if ($('.mid.left').hasClass(player) && $('.mid.center').hasClass(player) && $('.mid.right').hasClass(player)){
      alert("Player "+ player +"won by completing the middle row.");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.bottom.left').hasClass(player) && $('.bottom.center').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the bottom row.");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.top.left').hasClass(player) && $('.mid.left').hasClass(player) && $('.bottom.left').hasClass(player)){
      alert("Player "+ player +"won by completing the left column");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.top.center').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.center').hasClass(player)){
      alert("Player "+ player +"won by completing the middle column.");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.top.right').hasClass(player) && $('.mid.right').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the right column.");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.top.left').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.right').hasClass(player)){
      alert("Player "+ player +"won by completing the diagonal");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }
    if ($('.top.right').hasClass(player) && $('.mid.center').hasClass(player) && $('.bottom.left').hasClass(player)){
      alert("Player "+ player +"won by completing the diagonal");
      theGame = true;

      allTimesGamePlayed += 1;
      $('#allTimeHistory').empty();
      $('#allTimeHistory').append(allTimesGamePlayed);
      window.localStorage.clear();
      localStorage.setItem('allGameHistory', allTimesGamePlayed);
      console.log(localStorage.setItem('allGameHistory', allTimesGamePlayed));

      if (player === 1){
        winsX += 1;
        $('#xHistory').empty();
        $('#xHistory').append(winsX);
      } else {
        winsO += 1;
        $('#oHistory').empty();
        $('#oHistory').append(winsO);
      }

    }

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
      console.log(theGame);
      return false;
    }
  }

});






