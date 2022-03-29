import React from "react";
import "./table.scss";

const table = () => {
  return (
    <div className="demo-api">
      <h2>API</h2>
      <table className="demo-table">
        <thead>
          <tr>
            <th className="parm">参数</th>
            <th className="des">说明</th>
            <th className="type">类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="parm">visible</td>
            <td className="des">对话框是否出现</td>
            <td className="type">boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td className="parm">buttons</td>
            <td className="des">设置按钮</td>
            <td className="type">ReactNode[]</td>
            <td>——</td>
          </tr>
          <tr>
            <td className="parm">title</td>
            <td className="des">对话框的标题</td>
            <td className="type">string</td>
            <td>'提示'</td>
          </tr>
          <tr>
            <td className="parm">closeonClickMask</td>
            <td className="des">点击遮罩是否可以关闭对话框</td>
            <td className="type">boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td className="parm">onClose</td>
            <td className="des">点击关闭图标或遮罩关闭对话框时的回调函数</td>
            <td className="type">() =&gt; any</td>
            <td>——</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
