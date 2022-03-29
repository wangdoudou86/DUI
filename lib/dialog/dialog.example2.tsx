import React, { useState } from "react";
import Dialog from "./dialog";


const DialogExample: React.FunctionComponent = () => {
  const [y, setY] = useState(false);
  const cancelFn = ()=>{
    console.log('你点击了no'); 
    setY(false);
  }
  const confirmFn = ()=>{
    console.log('你点击了yes');
    setY(false);
  }
  return (
    <div>
      <div>
        <button onClick={() => setY(!y)}>hello2</button>
        <Dialog
          visible={y}
          buttons={[<button onClick={cancelFn}>取消</button>, 
                  <button onClick={confirmFn}>确认</button>]}
          onClose={() => {
            setY(false);
          }}
          closeonClickMask={true}
        >
          <div>设置点击遮罩关闭Dialog</div>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample;
