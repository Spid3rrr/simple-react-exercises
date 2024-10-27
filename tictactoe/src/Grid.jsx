import Cell from "./Cell";

const Grid = (props) => {
  return (
    <div className="grid">
      {props.grid.map((cell, index) => (
        <Cell key={index} index={index} value={cell} onClick={props.handleCellClick} />
      ))}
    </div>
  );
};

export default Grid;
