import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const changeColor = (color) => {
    setColor(color);
    console.log("Color changed to " + color);
  }

  return (
    <div className="main">
      <div>Click the buttons below to change the text&apos;s color!</div>
      <div style={{color:color}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et enim
        feugiat, efficitur ipsum sed, posuere dolor. Donec quam mauris,
        consequat eu arcu lobortis, malesuada consectetur sem. Nam mauris dui,
        lobortis ullamcorper ante in, egestas blandit nisl. Suspendisse potenti.
        Ut at sem sodales augue ultrices iaculis nec sit amet leo. Curabitur
        auctor, risus non bibendum rhoncus, eros tortor finibus purus, dapibus
        iaculis erat ante nec odio. Aenean sodales mattis leo in ultrices.
        Quisque eu commodo felis, ac rutrum mi. Sed in ornare nisl. Etiam ornare
        nunc et mi pharetra fringilla. Maecenas dictum id risus id ullamcorper.
      </div>
      <div className="button-group">
        <button className="button-white" onClick={() => changeColor("white")}>
          White
        </button>
        <button className="button-red" onClick={() => changeColor("red")}>
          Red
        </button>
        <button className="button-green" onClick={() => changeColor("green")}>
          Green
        </button>
        <button className="button-blue" onClick={() => changeColor("blue")}>
          Blue
        </button>
        <button className="button-purple" onClick={() => changeColor("purple")}>
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
