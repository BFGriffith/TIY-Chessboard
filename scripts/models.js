( function( window ) {
'use strict';
alert('JavaScript wired?');

var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');
/*
first is new position, second is original position followed by clear
first = Y-axis counting down from top 0-8
second = X-axis counting Right from the left 0-8
*/
//trying out this function from @MStaehling to see how it works
//I think some of the positions may be in the wrong places? Will need to check.
function move(board, fromX, fromY, toX, toY){
    board[fromX][fromY] = board[toX][toY];
    board[toX][toY] = ' ';
    console.log(board.join('\n'));
  };
// move(initBoard, 6, 3, 4, 3);
// move(initBoard, 0, 6, 2, 5);
// move(initBoard, 6, 2, 4, 2);
// move(initBoard, 1, 4, 2, 4);
// move(initBoard, 6, 6, 5, 6);
// move(initBoard, 1, 3, 3, 3);
// move(initBoard, 7, 5, 6, 6);
// move(initBoard, 0, 5, 1, 4);
// move(initBoard, 7, 6, 5, 5);
// move(initBoard, 0, 4, 0, 6);
// move(initBoard, 0, 7, 0, 5);
// move(initBoard, 7, 4, 7, 6);
// move(initBoard, 7, 7, 7, 5);
// move(initBoard, 3, 3, 4, 2);
// move(initBoard, 7, 3, 6, 2);
// move(initBoard, 1, 0, 2, 0);
// move(initBoard, 6, 2, 4, 2);
// move(initBoard, 1, 1, 3, 1);
// move(initBoard, 4, 2, 6, 2);
// move(initBoard, 0, 2, 1, 1);
// move(initBoard, 7, 2, 6, 3);
// move(initBoard, 1, 1, 4, 4);
// move(initBoard, 6, 2, 7, 2);
// move(initBoard, 4, 4, 1, 1);
// move(initBoard, 6, 3, 5, 4);
// move(initBoard, 2, 5, 3, 3);
// move(initBoard, 7, 1, 5, 2);
// move(initBoard, 0, 1, 1, 3);
// move(initBoard, 7, 5, 7, 3);
// move(initBoard, 0, 0, 0, 2);
// move(initBoard, 5, 2, 3, 3);
// move(initBoard, 1, 1, 3, 3);
// move(initBoard, 5, 5, 7, 4);
// move(initBoard, 1, 2, 2, 2);
// move(initBoard, 7, 4, 5, 3);
// move(initBoard, 0, 3, 2, 1);
// move(initBoard, 7, 2, 5, 2);
// move(initBoard, 3, 1, 4, 1);
// move(initBoard, 5, 2, 6, 3);
// move(initBoard, 2, 0, 3, 0);
// move(initBoard, 7, 3, 7, 2);

/*
first is new position, second is original position followed by clear
first = Y-axis counting down from top 0-8
second = X-axis counting Right from the left 0-8
*/

// Move 1 — Queen's Pawn forward 2, d4 — begin Catalan opening, closed variation
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 2 — Nf6
board[2][5] = board[0][6];
board[0][6] = ' ';
console.log(board.join('\n'));

// Move 3 — c4
board[3][3] = board[6][2];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 4 —
board[3][3] = board[1][4];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 5 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 6 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 7 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 8 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 9 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 10 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 11 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 12 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 13 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 14 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 15 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 16 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 17 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 18 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 19 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

// Move 20 —
board[3][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

})( window );
