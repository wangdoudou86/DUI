import React, { Fragment, ReactElement, ReactNode } from "react";
import Icon from "../icon/icon";
import "./dialog.scss";
import { scopedClassMaker } from "../utils";
import ReactDOM from "react-dom";

interface DialogProps {
  visible: boolean;
  title?: string;
  buttons?: Array<ReactElement>; // 按钮
  onClose: React.MouseEventHandler; // 关闭弹窗的函数
  closeonClickMask?: boolean; // 点击遮罩是否可以关闭弹窗
}

const scopedClass = scopedClassMaker("dui-dialog");
const sc = scopedClass; // 主要为了简化名称

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeonClickMask) props.onClose(e);
  };

  //禁止滑动
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';

  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>{props.title}</header>
        <main className={sc("main")}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc("footer")}>
            {props.buttons &&
              props.buttons.map((button, index) => {
                return React.cloneElement(button, { key: index, className: sc("button") });
              })}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(x, document.body);
};

// 给组件的一些props设置默认值
Dialog.defaultProps = {
  title: '提示',
  closeonClickMask: false,
};

const commom = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  fail?: () => void
) => {
  const closeFn = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    document.body.style.overflow = 'auto'
    div.remove();
  };
  const failAndClose = () => {
    fail && fail();
    closeFn();
  };
  const component = (
    <Dialog visible={true} buttons={buttons} onClose={failAndClose}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  document.body.style.overflow = 'hidden'
  ReactDOM.render(component, div);

  //为了可以关闭对话框
  return closeFn;
};

const alert = (content: string) => {
  const button = [
    <button
      onClick={()=>{
        closeFn11()
      }}
    >
      确定
    </button>,
  ];
  const closeFn11 = commom(content, button);
};

const comfirm = (content: string, success?: () => void, fail?: () => void) => {
  const successFn = () => {
    success && success();
    closeFn();
  };
  const failFn = () => {
    fail && fail();
    closeFn();
  };
  const buttons = [
    <button onClick={failFn}>取消</button>,
    <button onClick={successFn}>确认</button>,
  ];
  const closeFn = commom(content, buttons, fail);
};

const modal = (content: ReactNode) => {
  return commom(content);
};

export { alert, comfirm, modal };

export default Dialog;
