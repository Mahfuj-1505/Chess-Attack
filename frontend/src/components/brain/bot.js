import getMoves, { isInCheck } from "./MoveRules.js";
import { makeMove, isInCheck } from "./MoveRules.js";


const initial_board = [
  ["bR", "bN", "bB", "bQ", "bK"],
  ["bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null],
  [null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK"]
];

function cloneBoard(board) {
    const newBoard = board.map(row => [...row]);
    return newBoard;
}

import getMoves from "./MoveRules.js";
import { makeMove, isInCheck } from "./MoveRules.js";

export default function getLegalMoves(board, turn) {
  const legalMoves = [];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {

      const piece = board[r][c];
      if (!piece) continue;
      if (piece[0] !== turn) continue;

      // getMoves returns: { row, col, capture, promoteTo }
      const moves = getMoves(board, r, c);

      for (const m of moves) {

        // new move object compatible with your frontend AND minimax:
        const moveObj = {
          from: { r, c },
          to: { r: m.row, c: m.col },
          piece,
          captured: m.capture ? board[m.row][m.col] : null,
          promoteTo: m.promoteTo || null
        };

        // simulate move using your makeMove(r1,c1,r2,c2,promoteTo)
        const newBoard = makeMove(
          board,
          r,
          c,
          m.row,
          m.col,
          Array.isArray(m.promoteTo) ? null : m.promoteTo
        );

        if (!isInCheck(newBoard, turn)) {
          legalMoves.push(moveObj);
        }
      }
    }
  }

  return legalMoves;
}

/*

example object of each move
{
  from: { r: 5, c: 0 },      // original square
  to:   { r: 4, c: 0 },      // destination square
  piece: "wP",               // moving piece
  captured: null,            // or "bN", "bP", etc.
  promoteTo: null            // or "Q", "N", or an array for special rules
}

*/


export default function isGameOver(board, player) {
    let legalMoves = getLegalMoves(board);
    let is_in_check = isInCheck(board, player);
    
}

export default function evaluateGameResult(board) {

}

export default function evaluateBoard(board) {

}

export default function findBestMove(board, depth, player) {
  
}


export default function minimax(board, depth, alpha, beta, minimizingPlayer) {
  
}
