class TicTacToe {
    constructor() {
        this.__step = 1;
        this.__field = [
            [null, null, null], 
            [null, null, null], 
            [null, null, null]
        ];
        this.__winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.__step % 2 !== 0 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.__field[rowIndex][columnIndex] === null){
            let pSymbol = this.getCurrentPlayerSymbol();
            this.__field[rowIndex][columnIndex] = pSymbol;
            ++this.__step;
        }
    }

    isFinished() {
        if (this.getWinner() !== null){
            return true;
        }
        return this.noMoreTurns();
    }

    getWinner() {
        if (this.__winner !== null){
            return this.__winner
        }
        let f = this.__field;
        for (let i = 0; i < 3; i++){
            if ((f[i][0] == f[i][1] && f[i][1] == f[i][2]) && f[i][0] !== null){
                this.__winner = f[i][0];
                break;
            } else if ((f[0][i] == f[1][i] && f[1][i] == f[2][i]) && f[0][i] !== null){
                this.__winner = f[0][i];
                break;
            }
        }
        if ((f[0][0] == f[1][1] && f[1][1] == f[2][2]) && f[0][0] !== null){
            this.__winner = f[0][0];
        }
        if ((f[0][2] == f[1][1] && f[1][1] == f[2][0]) && f[0][2] !== null){
            this.__winner = f[0][2];
        }
        return this.__winner;
    }

    noMoreTurns() {
        for (let row of this.__field){
            for (let elem of row){
                if (elem === null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() || !this.isFinished()){
            return false;
        }
        return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.__field[rowIndex][colIndex]
    }
}


module.exports = TicTacToe;
