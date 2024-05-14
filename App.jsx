import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState, useEffect } from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
function deriveActivePlayer(turns) {
  let currentPlayer = "red";
  //console.log(currentPlayer);
  if (turns.length > 0 && turns[0].player === "red") {
    currentPlayer = "yellow";
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

function App() {
  //const [activePlayer, setActivePlayer] = useState("red");
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  let activePlayer = deriveActivePlayer(gameTurns);
  //let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "red" ? "yellow" : "red"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "red";
      //console.log(currentPlayer);
      if (prevTurns.length > 0 && prevTurns[0].player === "red") {
        currentPlayer = "yellow";
      }

      let lowestRow = null;
      for (let row = 5; row >=0; row--) {
        if (gameBoard[row][colIndex] === null) {
          lowestRow = row;
          break;
        }
      }

      if (lowestRow !== null) {
        const updatedBoard = gameBoard.map((row, index) => {
          return index === lowestRow ?
          row.map((cell, cellIndex) => cellIndex === colIndex ? currentPlayer : cell) : row;
        });
      

      //console.log(prevTurns.length);
      const updateTurns = [
        { square: { row: lowestRow, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      setGameBoard(updatedBoard);
      return updateTurns;
    } else {
      return prevTurns;
    }
    });
  }
  
  function checkWinner(board) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] && 
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
      ) {
        return board[row][col];
      }
    }
  }

  // Check rows (top to bottom)
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][col] && 
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
    ) {
      return board[row][col];
    }
  }
}
  // Check diagonals (top-left to bottom-right)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3]
      ) {
        return board[row][col];
      }
    }
  }

  // Check diagonals (top-right to bottom-left)
  for (let row = 0; row < 3; row++) {
    for (let col = 3; col < 7; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col - 1] &&
        board[row][col] === board[row + 2][col - 2] &&
        board[row][col] === board[row + 3][col - 3]
      ) {
        return board[row][col];
      }
    }
  }
    return null;
  }
  let winnerSymbol = checkWinner(gameBoard);
  let winner = winnerSymbol === "red" ? "red" : winnerSymbol === "yellow" ? "yellow" : null;

  /*function checkWinner(row, col, gameBoard, winner){
    let c = 1;
      for (var i of gameBoard) {
        if ((gameBoard[0][0], [0][c], [0],[c+1], [0],[c+2]) === "red")
          winner = i;
      }
    return winner;      
  }*/
    /*let c = 1;
      for (row = 0; row < 2; row++)
        for (col = 0; col < 6; col++)
          if (
            gameBoard([0][0] )
          )
          
  }
  /*for (let i = 0; i < gameBoard.length; i++ ) {
    if (
      gameBoard[0][0] === "red" &&
      gameBoard[0][1] === "red" &&
      gameBoard[0][2] === "red" &&
      gameBoard[0][3] === "red"
    )
      winner = "red";
  }*/
/* finnish check winner function + loop
  function checkWinner(row, col, gameBoard) {
    let winner = null;
    let counter = 1;
    let checkArray = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
    ];

    checkArray.forEach((val) => {
      initialWinCheck(counter, row, col, val[0], val[1], gameBoard)
    });
    while (winner > 0) {

    }
  } */

  /*if (
    gameBoard[0][0] === "red" &&
    gameBoard[0][1] === "red" &&
    gameBoard[0][2] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][0] === "yellow" &&
    gameBoard[0][1] === "yellow" &&
    gameBoard[0][2] === "yellow"
  )
    winner = "yellow";
  if (
    gameBoard[1][0] === "red" &&
    gameBoard[1][1] === "red" &&
    gameBoard[1][2] === "red"
  )
    winner = "red";
  if (
    gameBoard[1][0] === "yellow" &&
    gameBoard[1][1] === "yellow" &&
    gameBoard[1][2] === "yellow"
  )
    winner = "yellow";
  if (
    gameBoard[2][0] === "red" &&
    gameBoard[2][1] === "red" &&
    gameBoard[2][2] === "red"
  )
    winner = "red";
  if (
    gameBoard[2][0] === "yellow" &&
    gameBoard[2][1] === "yellow" &&
    gameBoard[2][2] === "yellow"
  )
    winner = "yellow";
  //all rows
  if (
    gameBoard[0][0] === "red" &&
    gameBoard[1][0] === "red" &&
    gameBoard[2][0] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][0] === "yellow" &&
    gameBoard[1][0] === "yellow" &&
    gameBoard[2][0] === "yellow"
  )
    winner = "yellow";
  if (
    gameBoard[0][1] === "red" &&
    gameBoard[1][1] === "red" &&
    gameBoard[2][1] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][1] === "yellow" &&
    gameBoard[1][1] === "yellow" &&
    gameBoard[2][1] === "yellow"
  )
    winner = "yellow";
  if (
    gameBoard[0][2] === "red" &&
    gameBoard[1][2] === "red" &&
    gameBoard[2][2] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][2] === "yellow" &&
    gameBoard[1][2] === "yellow" &&
    gameBoard[2][2] === "yellow"
  )
    winner = "yellow";
  // all col
  if (
    gameBoard[0][0] === "red" &&
    gameBoard[1][1] === "red" &&
    gameBoard[2][2] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][0] === "yellow" &&
    gameBoard[1][1] === "yellow" &&
    gameBoard[2][2] === "yellow"
  )
    winner = "yellow";
  //firstr diagnal top left to bottom right
  if (
    gameBoard[0][2] === "red" &&
    gameBoard[1][1] === "red" &&
    gameBoard[2][0] === "red"
  )
    winner = "red";
  if (
    gameBoard[0][2] === "yellow" &&
    gameBoard[1][1] === "yellow" &&
    gameBoard[2][0] === "yellow"
  )
    winner = "yellow";*/

  function handleRestart() {
    setGameTurns([]);
    setGameBoard(initialGameBoard);
  }
  const hasDraw = gameTurns.length === 42 && !winner;
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="red" isActive={activePlayer === "red"} />
          <Player name="Player 2" symbol="yellow" isActive={activePlayer === "yellow"} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handlerestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} setGameBoard={setGameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;