const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [ N, M ] = input.shift().split(' ').map(mn => parseInt(mn));

const origin_board = [];
input.forEach((line) => { origin_board.push(Array.from(line)); });

const [ black_board_88, white_board_88 ] = (function() {
  let black = '', white = '';
  for(let i = 0;i<4;i++) {
    black += 'BWBWBWBWWBWBWBWB';
    white += 'WBWBWBWBBWBWBWBW';
  }
  return [ Array.from(black), Array.from(white) ];
})();

function diff(some_string) {
  let when_black_board = 0, when_white_board = 0;
  let some_board = Array.from(some_string);

  some_board.forEach((square, idx) => {
    if(square !== black_board_88[idx]) when_black_board++;
    if(square !== white_board_88[idx]) when_white_board++;
  });
  return [ when_black_board, when_white_board ];
}

function make_board(n, m) {
  const row = n + 8, col = m + 8;
  let result = '';
  for(let outer = n; outer < row; outer++) {
    for(let inner = m;inner < col; inner++) {
      result += origin_board[outer][inner];
    }
  }
  return result;
}

function check_all_cases(checker) {
  const row = N - 8, col = M - 8;
  let result = [];
  for(let outer = 0; outer <= row; outer++) {
    for(let inner = 0; inner <= col; inner++) {
      let some_board = make_board(outer, inner);
      result.push(...checker(some_board));
    }
  }
  return result;
}

console.log(
  Math.min(...check_all_cases(diff))
);