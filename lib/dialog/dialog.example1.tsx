import React, { useState } from "react";
import Dialog from "./dialog";
import Button from "../button/button";

const DialogExample: React.FunctionComponent = () => {
  const [visibled, setVisible] = useState(false);
  const cancelFn = () => {
    console.log("你点击了no");
    setVisible(false);
  };
  const confirmFn = () => {
    console.log("你点击了yes");
    setVisible(false);
  };

  return (
    <div className="dialog-example">
      <Button onClick={() => setVisible(!visibled)}>打开对话框</Button>
      <Dialog
        visible={visibled}
        buttons={[
          <Button onClick={cancelFn}>no</Button>,
          <Button buttonType="primary" onClick={confirmFn}>
            yes
          </Button>,
        ]}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>这是由组件生成的Dialog，点击遮罩默认不关闭</div>
      </Dialog>
    </div>
  );
};

export default DialogExample;
