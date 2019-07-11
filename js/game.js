
$(document).ready(function () {

  let playerOneTile = [];
  let playerTwoTile = [];
  let playerOne = true;
  let playerTwo = false;
  let winner = "";
  let updateScoreX = "";
  let updateScoreO = "";
  let updateScoreDraw = "";

  const findWinner = function (array) {

    if ( (array.includes("1") && array.includes("2") && array.includes("3")) ||
          (array.includes("1") && array.includes("4") && array.includes("7")) ||
          (array.includes("1") && array.includes("5") && array.includes("9")) ||
          (array.includes("2") && array.includes("5") && array.includes("8")) ||
          (array.includes("3") && array.includes("5") && array.includes("7")) ||
          (array.includes("3") && array.includes("6") && array.includes("9")) ||
          (array.includes("4") && array.includes("5") && array.includes("6")) ||
          (array.includes("7") && array.includes("8") && array.includes("9")) ) {
    if (array.includes("1") && array.includes("2") && array.includes("3")) {
      $('#1').addClass('glow');
      $('#2').addClass('glow');
      $('#3').addClass('glow');
    }
    if (array.includes("1") && array.includes("4") && array.includes("7")) {
      $('#1').addClass('glow');
      $('#4').addClass('glow');
      $('#7').addClass('glow');
    }
    if (array.includes("1") && array.includes("5") && array.includes("9")) {
      $('#1').addClass('glow');
      $('#5').addClass('glow');
      $('#9').addClass('glow');
    }
    if (array.includes("2") && array.includes("5") && array.includes("8")) {
      $('#2').addClass('glow');
      $('#5').addClass('glow');
      $('#8').addClass('glow');
    }
    if (array.includes("3") && array.includes("5") && array.includes("7")) {
      $('#3').addClass('glow');
      $('#5').addClass('glow');
      $('#7').addClass('glow');
    }
    if (array.includes("3") && array.includes("6") && array.includes("9")) {
      $('#3').addClass('glow');
      $('#6').addClass('glow');
      $('#9').addClass('glow');
    }
    if (array.includes("4") && array.includes("5") && array.includes("6")) {
      $('#4').addClass('glow');
      $('#5').addClass('glow');
      $('#6').addClass('glow');
    }
    if (array.includes("7") && array.includes("8") && array.includes("9")) {
      $('#7').addClass('glow');
      $('#8').addClass('glow');
      $('#9').addClass('glow');
    }

           $('.tile').off('click');
           return true;
    } else {
      return false;
    }
  };

  const scoreBoard = function () {
    if (winner === 'x') {
      updateScoreX ++;
      $('#scoreX').text(`${updateScoreX}`).css("color", "#667fe4");

    } else if (winner === 'o') {
        updateScoreO ++;
        $('#scoreO').text(`${updateScoreO}`).css("color", "hotpink");

    } else if (winner === 'draw') {
        updateScoreDraw ++;
        $('#scoreDraw').text(`${updateScoreDraw}`).css("color", "Gray");
    }
  };

  const checkStatus = function () {
    if (winner === 'x') {
        $('#message').text('The Winner is Player X').css("color", "#667fe4");
        return;
    } else if (winner === 'o') {
        $('#message').text('The Winner is Player O').css("color", "hotpink");
        return;
    } else if (winner === 'draw') {
        $('#message').text('DRAW!').css("color", "Gray");
        return;
    } else {
      return;
    }
  };

  const playGame = function () {

    if (playerOne === true) {
      $('#message').text('Player: O').css("color", "hotpink");
      playerOneTile.push( $(this).attr("id") );
      $(this).text("X").css("color", "#667fe4");
      playerOne = false;
      playerTwo = true;
    } else {
      $('#message').text('Player: X').css("color", "#667fe4");
      playerTwoTile.push( $(this).attr("id") );
      $(this).text("O").css("color", "hotpink");
      playerOne = true;
      playerTwo = false;
    }
      $(this).off('click');

      let x = findWinner(playerOneTile);
      let o = findWinner(playerTwoTile);

      if (x === true) {
        winner = 'x';
      }
      if (o === true) {
        winner ='o';
      }
      if ( playerTwoTile.length === 4 && playerOneTile.length === 5) {
        if (x === false & o === false) {
          winner = 'draw';
        }
      }
      checkStatus();
      scoreBoard();
  };

  const resetGame = function () {
    $('.tile').text('');
    $('#message').text("Start New Game!").css("color", "Red");
    $('.tile').on('click', playGame);
    $('#1').removeClass('glow');
    $('#2').removeClass('glow');
    $('#3').removeClass('glow');
    $('#4').removeClass('glow');
    $('#5').removeClass('glow');
    $('#6').removeClass('glow');
    $('#7').removeClass('glow');
    $('#8').removeClass('glow');
    $('#9').removeClass('glow');
     playerOneTile = [];
     playerTwoTile = [];
     playerOne = true;
     playerTwo = false;
     winner = "";
  };

  $('.tile').on('click', playGame);

  $("#reset").on('click', resetGame);

  $("#restart").click(function() {
    location.reload();
});

});
