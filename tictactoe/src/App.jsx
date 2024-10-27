import "./App.css";
import Grid from "./components/Grid";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (grid[index] !== "") return;
    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    const winner = checkWinner(newGrid);
    if (winner) {
      console.log(`Player ${winner} wins!`);
      setWinner(winner);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setGrid(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
  };

  const checkWinner = (grid) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  };

  return (
    <div className="main">
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div>
        {!winner ? (
          <div>Play this game until there&apos;s a winner!</div>
        ) : (
          `The winner is ${winner}`
        )}
      </div>
      <Grid grid={grid} handleCellClick={handleCellClick} />
      <button onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
