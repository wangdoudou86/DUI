import React, { useState } from "react";
import Dialog from "./dialog";
import './dialog.example.scss';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div style={{position: 'relative', zIndex: 10}}>
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
    </div>
  );
};

export default DialogExample;
