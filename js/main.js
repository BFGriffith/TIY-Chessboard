(function(window) {

        /**
         * What does NextMove do?
         *
         * @param {Number} fromRank
         * @param {String} fromFile
         * @param {Number} fromRank
         * @param {String} fromFile
         * @param {Class} piece remove/addClass
         * @return {}
         */


        function(window) {
            $('.NextMove').click(function() {
                    NextMove(2, 'd', 4, 'd', 'WhitePawn')
                    NextMove(8, 'g', 6, 'f', 'BlackKnightG')
                };

                function NextMove(fromRank, fromFile, toRank, toFile, piece) {
                    $('.rank-' + fromRank + ' > fromFile').removeClass(piece);
                    $(toRank + ' > ' + toFile).addClass(piece);
                };

                $('.last').click(function() {
                    for (chess.counter; chess.counter < chess.game.length; chess.counter++) {
                        chess.NextMove(chess.game[i]);
                    };
                });


                $('.NextMove').click(function() {
                    //chess.counter = (chess.counter + 1) % chess.game.length;
                    //Stack Overflow
                    if (chess.counter < chess.game.length) {
                        chess.move(chess.game[chess.counter]);
                        chess.counter = chess.counter + 1;
                    }
                });

                // $('.NextMove').click(function() {
                //     chess.move(chess.game.move1);
                // });

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
