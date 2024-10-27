const Cell = (props) => {
  return (
    <button className="cell" onClick={() => {props.onClick(props.index)}}>
      {props.value}
    </button>
  );
};

export default Cell;