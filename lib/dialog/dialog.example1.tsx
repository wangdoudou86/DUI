import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);

  const cancelFn = ()=>{
    console.log('你点击了no'); 
    setX(false);
  }
  const confirmFn = ()=>{
    console.log('你点击了yes');
    setX(false);
  }

  return (
    <div>
      <div >
        <button onClick={() => setX(!x)}>hello1</button>
        <Dialog
          visible={x}
          buttons={[<button onClick={cancelFn}>no</button>, 
                  <button onClick={confirmFn}>yes</button>]}
          onClose={() => {
            setX(false);
          }}
        >
          <div>这是由标签生成的Dialog，点击遮罩默认不关闭</div>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample;
