import React, { Fragment } from "react";
import Icon from "../icon/icon";
import "./dialog.scss";
import { scopedClassMaker } from "../utils";

interface DialogIcon {
  visible: boolean;
}

const scopedClass = scopedClassMaker("dui-dialog");
const sc = scopedClass; // 主要为了简化名称

const Dialog: React.FunctionComponent<DialogIcon> = (props) => {
  return props.visible ? (
    <Fragment>
      <div className={sc("mask")}></div>
      <div className={sc()}>
        <div className={sc("close")}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>内容</main>
        <footer className={sc("footer")}>
          <button>ok</button>
          <button>cancle</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};

export default Dialog;
