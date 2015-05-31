(function(window) {

var game = {
  move1: ['.rank-2', '.file-d', '.rank-4', '.file-d', 'WhitePawn'],
  move2: ['.rank-8', '.file-g', '.rank-6', '.file-f', 'BlackKnightG'],
  move3: ['.rank-2', '.file-c', '.rank-4', '.file-c', 'WhitePawn'],
  move4: ['.rank-7', '.file-e', '.rank-6', '.file-e', 'BlackPawn'],
  move5: ['.rank-2', '.file-g', '.rank-3', '.file-g', 'WhitePawn'],
  move6: ['.rank-7', '.file-d', '.rank-5', '.file-d', 'BlackPawn'],
  move7: ['.rank-1', '.file-f', '.rank-5', '.file-g', 'WhiteBishopF'],
  move8: ['.rank-8', '.file-f', '.rank-7', '.file-e', 'WhitePawn'],
  move9: ['.rank-1', '.file-g', '.rank-3', '.file-f', 'WhiteKnightG']
};
function move (whichMove){
  $(whichMove[0] + ' > ' + whichMove[1]).removeClass(whichMove[4]);
  $(whichMove[2] + ' > ' + whichMove[3]).addClass(whichMove[4]);
};


window.chess = {
"game": game,
"move": move,
};
  })(window);

// (function(window) {
//     'use strict';
//     alert('JavaScript wired?');
//     /*
//     var board = [
//       ['R','N','B','Q','K','B','N','R'],
//       ['P','P','P','P','P','P','P','P'],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       ['p','p','p','p','p','p','p','p'],
//       ['r','n','b','q','k','b','n','r'] ];
//
//     console.log(board.join('\n') + '\n\n');
//     */
//     /*Saturday session attempt at more semantic algebraic 0 workaround*/
//     var chessboard = {
//         rank = [1, 2, 3, 4, 5, 6, 7, 8],
//             file = [1, 2, 3, 4, 5, 6, 7, 8];
//     }
//     var piece = function(rankPosition, filePosition) {
//         this.rank = board.rank[rankPosition - 1];
//         this.file = board.file[filePosition - 1];
//         this.move = function(a, b); {
//             this.file = board.rank[a - 1];
//             this.file = board.file[b - 1];
//         };
//     };
//     chessboard = {
//         /*starting-positions*/
//         var WhitePawnA = newPiece(2, 1);
//         var WhitePawnB = newPiece(2, 2);
//         var WhitePawnC = newPiece(2, 3);
//         var WhitePawnD = newPiece(2, 4);
//         var WhitePawnE = newPiece(2, 5);
//         var WhitePawnF = newPiece(2, 6);
//         var WhitePawnG = newPiece(2, 7);
//         var WhitePawnH = newPiece(2, 8);
//
//         var WhiteRookA = newPiece(1, 1);
//         var WhiteRookH = newPiece(1, 8);
//
//         var WhiteRookA = newPiece(1, 1);
//         var WhiteRookH = newPiece(1, 8);
//
//         var WhiteKnightB = newPiece(1, 2);
//         var WhiteKnightG = newPiece(1, 7);
//
//         var WhiteBishopC = newPiece(1, 3);
//         var WhiteBishopF = newPiece(1, 6);
//
//         var WhiteQueen = newPiece(1, 4);
//         var WhiteKing = newPiece(1, 5);
//
//         var BlackPawnA = newPiece(7, 1);
//         var BlackPawnB = newPiece(7, 2);
//         var BlackPawnC = newPiece(7, 3);
//         var BlackPawnD = newPiece(7, 4);
//         var BlackPawnE = newPiece(7, 5);
//         var BlackPawnF = newPiece(7, 6);
//         var BlackPawnG = newPiece(7, 7);
//         var BlackPawnH = newPiece(7, 8);
//
//         var BlackRookA = newPiece(8, 1);
//         var BlackRookH = newPiece(8, 8);
//
//         var BlackRookA = newPiece(8, 1);
//         var BlackRookH = newPiece(8, 8);
//
//         var BlackKnightB = newPiece(8, 2);
//         var BlackKnightG = newPiece(8, 7);
//
//         var BlackBishopC = newPiece(8, 3);
//         var BlackBishopF = newPiece(8, 6);
//
//         var BlackQueen = newPiece(8, 4);
//         var BlackKing = newPiece(8, 5);
//         /*END of starting-positions*/
//     };
//
//     var moves = [
//         [".WhitePawnD", ".rank-2", ".file-d", ".rank-4", ".file-d"]
//     ]; //end of moves array
//     /*
//     window.chess = {
//       "taskList": taskList,
//       "addTaskToList": addTaskToList,
//       "footerTotal": footerTotal,
//       "completeTask": completeTask,
//       "deleteTask": deleteTask
//     };
//     })(window);
//     */
//
//     //if else if possibility for advancing moves?
//     var moveNumber = 0;
//
//     function movePiece() {
//         if (moveNumber == 0) {
//             ...;
//             moveNumber++;
//         } else if (moveNumber == 1) {
//             ...;
//             moveNumber++;
//         }
//     };
//
//     /*
//     first is new position, second is original position followed by clear
//     first = Y-axis counting down from top 0-7 (or switch to 1-8 if semantic fix works)
//     second = X-axis counting Right from the left 0-7 (or switch to 1-8 if semantic fix works)
//     */
//
//     /*trying out this function from @MStaehling to see how it works
//     I think some of the positions may be in the wrong places? Will need to check.
//     but working on funcionality is more important.*/
//     function move(board, fromX, fromY, toX, toY) {
//         board[fromX][fromY] = board[toX][toY];
//         board[fromX][fromY] = ' ';
//         console.log(board.join('\n'));
//     };
//
//
//     // 1move(initBoard, 6, 3, 4, 3);
//     // 2move(initBoard, 0, 6, 2, 5);
//     // 3move(initBoard, 6, 2, 4, 2);
//     // 4move(initBoard, 1, 4, 2, 4);
//     // 5move(initBoard, 6, 6, 5, 6);
//     // 6move(initBoard, 1, 3, 3, 3);
//     // 7move(initBoard, 7, 5, 6, 6);
//     // 8move(initBoard, 0, 5, 1, 4);
//     // 9move(initBoard, 7, 6, 5, 5);
//     // 10move(initBoard, 0, 4, 0, 6);
//     // 11move(initBoard, 0, 7, 0, 5);
//     // 12move(initBoard, 7, 4, 7, 6);
//     // 13move(initBoard, 7, 7, 7, 5);
//     // 14move(initBoard, 3, 3, 4, 2);
//     // 15move(initBoard, 7, 3, 6, 2);
//     // 16move(initBoard, 1, 0, 2, 0);
//     // 17move(initBoard, 6, 2, 4, 2);
//     // 18move(initBoard, 1, 1, 3, 1);
//     // 19move(initBoard, 4, 2, 6, 2);
//     // 20move(initBoard, 0, 2, 1, 1);
//     // 21move(initBoard, 7, 2, 6, 3);
//     // 22move(initBoard, 1, 1, 4, 4);
//     // 23move(initBoard, 6, 2, 7, 2);
//     // 24move(initBoard, 4, 4, 1, 1);
//     // 25move(initBoard, 6, 3, 5, 4);
//     // 26move(initBoard, 2, 5, 3, 3);
//     // 27move(initBoard, 7, 1, 5, 2);
//     // 28move(initBoard, 0, 1, 1, 3);
//     // 29move(initBoard, 7, 5, 7, 3);
//     // 30move(initBoard, 0, 0, 0, 2);
//     // 31move(initBoard, 5, 2, 3, 3);
//     // 32move(initBoard, 1, 1, 3, 3);
//     // 33move(initBoard, 5, 5, 7, 4);
//     // 34move(initBoard, 1, 2, 2, 2);
//     // 35move(initBoard, 7, 4, 5, 3);
//     // 36move(initBoard, 0, 3, 2, 1);
//     // 37move(initBoard, 7, 2, 5, 2);
//     // 38move(initBoard, 3, 1, 4, 1);
//     // 39move(initBoard, 5, 2, 6, 3);
//     // 40move(initBoard, 2, 0, 3, 0);
//     // 41move(initBoard, 7, 3, 7, 2);
//
//     /*
//     first is new position, second is original position followed by clear
//     first = Y-axis counting down from top 0-7 (or switch to 1-8 if semantic fix works)
//     second = X-axis counting Right from the left 0-7 (or switch to 1-8 if semantic fix works)
//     */
//
//     // Move 1 — Queen's Pawn forward 2, d4 — begin Catalan opening, closed variation
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 2 — Nf6
//     board[2][5] = board[0][6];
//     board[0][6] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 3 — c4
//     board[3][3] = board[6][2];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//     //trying to focus on getting things working before enumerating lots of moves
//     // Move 4 —
//     board[3][3] = board[1][4];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 5 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 6 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 7 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 8 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 9 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 10 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 11 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 12 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 13 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 14 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 15 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 16 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 17 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 18 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 19 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 20 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 21 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 22 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 23 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 24 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 25 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 26 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 27 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 28 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 29 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 30 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 31 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 32 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 33 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 34 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 35 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 36 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 37 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 38 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 39 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 40 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
//     // Move 41 —
//     board[3][3] = board[6][3];
//     board[6][3] = ' ';
//     console.log(board.join('\n'));
//
// })(window);
