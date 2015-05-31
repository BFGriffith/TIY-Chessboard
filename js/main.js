(function(window) {
  $('.NextMove').click(function() {
      chess.move(chess.game.move1);
  });

    $('.lastMove').click(function() {
        chess.move(chess.game.move1);
        chess.move(chess.game.move2);
        chess.move(chess.game.move3);
        chess.move(chess.game.move4);
        chess.move(chess.game.move5);
        chess.move(chess.game.move6);
        chess.move(chess.game.move7);
        chess.move(chess.game.move8);
        chess.move(chess.game.move9);
    });

    /*
    window.chess = {

    }
    */

    /*
    $('.NextMove').click(function() {
      $('.rank-2 > .file-d').removeClass('WhitePawn');
      $('.rank-4 > .file-d').addClass('WhitePawn');
      console.log("Click:BOOM!");
});

    _.forEach(..., function(element, ...) {
      element.addEventListener('click', function() {
        console.log("This works for all of the buttons!!");

      });

    });
*/
})(window);
