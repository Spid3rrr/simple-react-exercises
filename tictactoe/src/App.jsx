import "./App.css";
import Grid from "./Grid";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleCellClick = (index) => {
    if(grid[index] !== "") return;
    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    const winner = checkWinner(newGrid);
    if(winner) {
      console.log(`Player ${winner} wins!`);
      //setGrid(["", "", "", "", "", "", "", "", ""]);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (grid) => {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for(const line of winningLines) {
      const [a, b, c] = line;
      if(grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  }

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <Grid grid={grid} handleCellClick={handleCellClick} />
    </>
  );
}

export default App;
