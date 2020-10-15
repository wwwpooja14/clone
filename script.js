const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function() {
        const value = { childList: true };
        const observer = new MutationObserver(() => takeTurn());
        board.positions.forEach((element) => observer.observe(element, value));
        takeTurn();
    }

    function takeTurn() {
        //console.log("something changed")
        if (board.checkForWinner()) {
            return;
        }



        if (turn % 2 === 0) {
            humanPlayer.takeTurn();

        } else {
            computerPlayer.takeTurn();
        }
        turn++;
    };
}


function Board() {
    this.positions = Array.from(document.querySelectorAll('.cloumn'));
    //console.log(this.positions);
    this.checkForWinner = function() {
        let winner = false;

        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

        ];
    }
}

function HumanPlayer(board) {

    this.takeTurn = function() {
        //console.log("human player")
        board.positions.
        forEach(element => element.addEventListner('click', handleturnTaken));

    }

    function handleturnTaken(event) {
        console.log("turn taken")
    }
}

function ComputerPlayer(board) {

    this.takeTurn = function() {
        console.log("computer player")
    }
}