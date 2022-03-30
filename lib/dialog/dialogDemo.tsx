import React from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example1';
import DialogExample2 from './dialog.example2';
import "./dialog.example.scss";

import TableDemo from '../tableDemo/table';
const DialogDemo = () => {
    const data1 = [
        ['visible', '对话框是否出现', 'boolean', 'false'],
        ['buttons', '设置按钮', 'ReactNode[]', '——'],
        ['title', '对话框的标题', 'string', "'提示'"],
        ['closeonClickMask', '点击遮罩是否可以关闭对话框', 'boolean', "false"],
        ['onClose', '点击关闭图标或遮罩关闭对话框时的回调函数', '() => any', "——"],
    ]
    const data2 = [
        ['content', '对话框内容', 'string', '——'],
        ['title', '对话框的标题', 'string', "'提示'"]
    ]
    const data3 = [
        ['content', '对话框内容', 'string', '——'],
        ['title', '对话框的标题', 'string', "'提示'"],
        ['success', '确认后的回调函数', '() => any', '——'],
        ['fail', '取消后的回调函数', '() => any', '——'],
    ]
   const description1 = "使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。"
   const description2 = "调用函数弹出一个对话框，接受options。"
    return (
        <div>
            <Demo code={require('!!raw-loader!./dialog.example1.tsx').default} description={description1}>
                <DialogExample1></DialogExample1>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default} description={description2}>
                <DialogExample2></DialogExample2>
            </Demo>

            <TableDemo database={data1} />
            <TableDemo title="Alert Options" database={data2} />
            <TableDemo title="Comfirm Options" database={data3} />
        </div>
    )
}

export default DialogDemo