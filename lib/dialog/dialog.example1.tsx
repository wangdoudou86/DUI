import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [visibled, setVisible] = useState(false);
  const cancelFn = ()=>{
    console.log('你点击了no'); 
    setVisible(false);
  }
  const confirmFn = ()=>{
    console.log('你点击了yes');
    setVisible(false);
  }

  return (
    <div>
      <div>
        <button onClick={() => setVisible(!visibled)}>打开对话框</button>
        <Dialog
          visible={visibled}
          buttons={[<button onClick={cancelFn}>no</button>, 
                  <button onClick={confirmFn}>yes</button>]}
          onClose={() => {
            setVisible(false);
          }}
        >
          <div>这是由组件生成的Dialog，点击遮罩默认不关闭</div>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample;
