import React, { useState } from "react";
import Dialog, { alert, comfirm, modal } from "./dialog";
import "./dialog.example.scss";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
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
      <div style={{ position: "relative", zIndex: 10 }}>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>hello1</button>
        <Dialog
          visible={x}
          buttons={[<button onClick={() => { console.log('你点击了no'); setX(false); }}>no</button>, <button onClick={() => { console.log('你点击了yes'); setX(false); }}>yes</button>]}
          onClose={() => {
            setX(false);
          }}
        >
          <div>这是由标签生成的Dialog，点击遮罩默认不关闭</div>
        </Dialog>
      </div>
      <div>
        <h1>Example 2</h1>
        <button onClick={() => setY(!y)}>hello2</button>
        <Dialog
          visible={y}
          buttons={[<button onClick={() => { console.log('你点击了取消'); setY(false); }}>取消</button>, <button onClick={() => { console.log('你点击了确认'); setY(false); }}>确认</button>]}
          onClose={() => {
            setY(false);
          }}
          closeonClickMask={true}
        >
          <div>设置点击遮罩关闭Dialog</div>
        </Dialog>
      </div>
      <div>
        <h1>Example 3</h1>
        <button
          onClick={() =>
            alert(
              "我是Alert，点击【确认】表示你已知晓，即使你不知晓，但你可以再次点开"
            )
          }
        >
          Alert
        </button>
        <button
          onClick={() =>
            comfirm(
              "我是comfirm，点击按钮做出你的选择吧~",
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
