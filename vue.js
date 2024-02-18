new Vue({
  el: "#app",
  data: {
    currentPlayer: 'X',
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    gameOver: false,
    winner: null
  },
  methods: {
    placeMark(rowIndex, colIndex) {
      if (!this.gameOver && !this.board[rowIndex][colIndex]) {
        this.$set(this.board[rowIndex], colIndex, this.currentPlayer);
        if (this.checkWin()) {
          this.gameOver = true;
          this.winner = this.currentPlayer;
        } else if (this.checkDraw()) {
          this.gameOver = true;
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    checkWin() {
      for (let i = 0; i < 3; i++) {
        if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
          return true; // horizontal
        }
        if (this.board[0][i] !== '' && this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
          return true; // vertical
        }
      }
      if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
        return true; // diagonal
      }
      if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
        return true; // diagonal
      }
      return false;
    },
    checkDraw() {
      for (let row of this.board) {
        for (let cell of row) {
          if (cell === '') return false;
        }
      }
      return true;
    },
    reset() {
      this.currentPlayer = 'X';
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.gameOver = false;
      this.winner = null;
    }
  }
});
