import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

const onMouseEnter = () => {
  console.log("enter");
};

function App() {
  return (
    <div>
      <Icon name="alipay" className="www" onClick={fn} onMouseEnter={onMouseEnter} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
