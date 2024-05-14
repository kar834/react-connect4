import { useState, useEffect } from 'react'

export default function GameBoard({onSelectSquare,board}) {
  //const [gameBoard, setGameBoard] = useState(initialGameBoard);
  
  //console.log(gameBoard);
  // const board_data = [];
  //function handleSelectSquare(rowIndex, colIndex) {
  //  setGameBoard((prevGameboard) => {
  //    //make a deep copy of the original array board
  //    const updatedBoard = [
  //      ...prevGameboard.map((innerArray) => [...innerArray]),
  //    ];
  //    updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //    return updatedBoard;
  //  });
  //  onSelectSquare();
 // }

  // let row=0 ;
  // let col =0;
  // board_data.push(<ol id="game-board"></ol>);
  // for(row=0; row < 3; row++){
  //     board_data.push(<li key={row}></li> <ol>);
  //     board_data.push();

  //     for(col=0; col < 3; col++){

  //       board_data.push(<li key={col}> <button>{initialGameBoard[row][col]}</button> </li>);

  //   }
  //   board_data.push(</ol>  </li>);

  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className={'circle'}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}
                className={playerSymbol === null ? "btn-normal" : playerSymbol==="red" ? "btn-red" : "btn-yellow"}>
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
