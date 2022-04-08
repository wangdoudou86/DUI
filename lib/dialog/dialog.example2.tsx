import React from "react";
import { alert, comfirm } from "./dialog";
import Button from "../button/button";

const DialogExample: React.FunctionComponent = () => {
  const openAlert = () => {
    alert({
      content:
        "我是Alert，点击【确认】表示你已知晓，即使你不知晓，但你可以再次点开",
      title: "注意啦",
    });
  };
  const openComfirm = () => {
    comfirm({
      content: "我是comfirm，点击按钮做出你的选择吧~",
      success: () => console.log("success"),
      fail: () => console.log("fail"),
    });
  };

  return (
    <div className="dialog-example">
      <Button onClick={openAlert}>Open Alert</Button>
      <Button onClick={openComfirm}>Open Comfirm</Button>
    </div>
  );
};

export default DialogExample;
