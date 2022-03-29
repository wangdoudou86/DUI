import React from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example1';
import DialogExample2 from './dialog.example2';
import DialogExample3 from './dialog.example3';
import "./dialog.example.scss";
const DialogDemo = () => {
    return (
        <div>
            <Demo code={require('!!raw-loader!./dialog.example1.tsx').default}>
                <DialogExample1></DialogExample1>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default}>
                <DialogExample2></DialogExample2>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example3.tsx').default}>
                <DialogExample3></DialogExample3>
            </Demo>

            <div className="demo-api">
                <h2>API</h2>
                <table className="demo-table">
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th className="des">说明</th>
                            <th className="type">类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>visible</td>
                            <td className="des">对话框是否出现</td>
                            <td className="type">boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>buttons</td>
                            <td className="des">设置按钮</td>
                            <td className="type">ReactNode[]</td>
                            <td>——</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td className="des">对话框的标题</td>
                            <td className="type">string</td>
                            <td>'提示'</td>
                        </tr>
                        <tr>
                            <td>closeonClickMask</td>
                            <td className="des">点击遮罩是否可以关闭对话框</td>
                            <td className="type">boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td className="des">点击关闭图标或遮罩关闭对话框时的回调函数</td>
                            <td className="type">() => any</td>
                            <td>——</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="demo-api">
                <h2>Alert</h2>
                <table className="demo-table">
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th className="des">说明</th>
                            <th className="type">类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>visible</td>
                            <td className="des">对话框是否出现</td>
                            <td className="type">boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>buttons</td>
                            <td className="des">设置按钮</td>
                            <td className="type">ReactNode[]</td>
                            <td>——</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DialogDemo