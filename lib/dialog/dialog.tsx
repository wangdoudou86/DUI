import React, { Fragment, ReactElement, ReactNode } from "react";
import Icon from "../icon/icon";
import Button from "../button/button";
import "./dialog.scss";
import { scopedClassMaker } from '../helpers/utils';
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
  //防止滚动条消失带来的晃动
  document.body.style.paddingRight = props.visible ? '17px' : '0';

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
                //因为要给button元素加上key属性，所以用了React.cloneElement方法
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

interface commonProps{
  content: ReactNode;
  title?: string;
  buttons?: Array<ReactElement>;
  fail?: () => void;
}
const commom = ( props:commonProps ) => {
  const {content, title, buttons, fail} = props
  const closeFn = () => {
    //先隐藏组件
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    //把组件从节点中移除
    ReactDOM.unmountComponentAtNode(div);
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0'
    //删除节点
    div.remove();
  };
  const failAndClose = () => {
    fail && fail();
    closeFn();
  };
  const component = (
    <Dialog title={title} visible={true} buttons={buttons} onClose={failAndClose}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = '17px'
  ReactDOM.render(component, div);

  //为了可以关闭对话框，这里设计很巧妙！！！
  return closeFn;
};

interface alertProps{
  content: string;
  title?: string;
}
const alert = (props: alertProps) => {
  const {content, title} = props
  const button = [
    <Button
    
      onClick={() => {
        closeFn()
      }}
    >
      确定
    </Button>,
  ];
  const closeFn = commom({content, title, buttons: button});
};

interface comfirmProps{
  content: string;
  title?: string;
  success?: () => void;
  fail?: () => void
}
const comfirm = (props: comfirmProps) => {
  const {content, title, success, fail} = props
  const successFn = () => {
    success && success();
    closeFn();
  };
  const failFn = () => {
    fail && fail();
    closeFn();
  };
  const buttons = [
    <Button className={sc('button')} onClick={failFn}>取消</Button>,
    <Button className={sc('button')} buttonType="primary" onClick={successFn}>确认</Button>,
  ];
  const closeFn = commom({content, title, buttons, fail});
};

interface modalProps{
  content: ReactNode;
  title?: string;
}

const modal = (props: modalProps) => {
  const {content, title} = props
  return commom({content, title});
};

export { alert, comfirm, modal };

export default Dialog;
