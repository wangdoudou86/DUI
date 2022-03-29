import React from "react";
import { alert, comfirm, modal } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const openAlert = ()=>{
    alert("我是Alert，点击【确认】表示你已知晓，即使你不知晓，但你可以再次点开")
  }  
  const openComfirm = ()=>{
    comfirm(
        "我是comfirm，点击按钮做出你的选择吧~",
        () => console.log("success"),
        () => console.log("fail")
      )
  }  
  const openModal = () => {
    const close = modal(
      <div>
        <div>我是modal，你可以自定义内容的结构及样式</div>
        <button style={{ color: "purple" }} onClick={() => close()}>
          close
        </button>
      </div>
    );
  };

  return (
    <div>
      <div>
        <button onClick={openAlert}>Alert</button>
        <button onClick={openComfirm}>Comfirm</button>
        <button onClick={openModal}>Modal</button>
      </div>
    </div>
  );
};

export default DialogExample;
