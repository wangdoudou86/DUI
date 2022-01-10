import React, { Fragment, ReactElement, ReactNode } from "react";
import Icon from "../icon/icon";
import "./dialog.scss";
import { scopedClassMaker } from "../utils";
import ReactDOM from "react-dom";

interface DialogIcon {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeonClickMask?: boolean;
}

const scopedClass = scopedClassMaker("dui-dialog");
const sc = scopedClass; // 主要为了简化名称

const Dialog: React.FunctionComponent<DialogIcon> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeonClickMask) props.onClose(e);
  };

  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        <footer className={sc("footer")}>
          {props.buttons &&
            props.buttons.map((button, index) => {
              return React.cloneElement(button, { key: index });
            })}
        </footer>
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(x, document.body);
};

// 给组件的一些props设置默认值
Dialog.defaultProps = {
  closeonClickMask: false
};

const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const comfirm = (content: string, success?: () => void, fail?: () => void) => {
  const closeFn = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const successFn = () => {
    success && success();
    closeFn();
  };
  const failFn = () => {
    fail && fail();
    closeFn();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={failFn}
      buttons={[
        <button onClick={failFn}>取消</button>,
        <button onClick={successFn}>确认</button>
      ]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode) => {
  const closeFn = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={closeFn}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  return closeFn;
};

export { alert, comfirm, modal };

export default Dialog;
