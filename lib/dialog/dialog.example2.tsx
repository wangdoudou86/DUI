import React from "react";
import { alert, comfirm } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const openAlert = () => {
    alert({
      content: "我是Alert，点击【确认】表示你已知晓，即使你不知晓，但你可以再次点开",
      title: '注意啦'
    })
  }
  const openComfirm = () => {
    comfirm({
      content: "我是comfirm，点击按钮做出你的选择吧~",
      success: () => console.log("success"),
      fail: () => console.log("fail")
    }
    )
  }

  return (
    <div>
      <div>
        <button onClick={openAlert}>Open Alert</button>
        <button onClick={openComfirm}>Open Comfirm</button>
      </div>
    </div>
  );
};

export default DialogExample;
