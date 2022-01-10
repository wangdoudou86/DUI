import React, { useState } from "react";
import Dialog, { alert, comfirm, modal } from "./dialog";
import "./dialog.example.scss";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    const close = modal(
      <div>
        <h1>你好</h1>
        <button style={{ color: "purple" }} onClick={() => close()}>
          close
        </button>
      </div>
    );
  };
  return (
    <div>
      <div style={{ position: "relative", zIndex: 10 }}>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>hello1</button>
        <Dialog
          visible={x}
          buttons={[<button>1</button>, <button>2</button>]}
          onClose={() => {
            setX(false);
          }}
        >
          <h3>hello1</h3>
        </Dialog>
      </div>
      <div>
        <h1>Example 2</h1>
        <button onClick={() => setY(!y)}>hello2</button>
        <Dialog
          visible={y}
          buttons={[<button>1</button>, <button>2</button>]}
          onClose={() => {
            setY(false);
          }}
          closeonClickMask={true}
        >
          <h3>hello2</h3>
        </Dialog>
      </div>
      <div>
        <h1>Example 3</h1>
        <button onClick={() => alert("hello3")}>Alert</button>
        <button
          onClick={() =>
            comfirm(
              "hello4",
              () => console.log("success"),
              () => console.log("fail")
            )
          }
        >
          Comfirm
        </button>
        <button onClick={openModal}>Modal</button>
      </div>
    </div>
  );
};

export default DialogExample;
