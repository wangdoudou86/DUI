import React from 'react';
import Demo from '../../demo';
import ButtonExample from './button.example';
import './button.example.scss';
import TableDemo from '../tableDemo/table';

const ButtonDemo = ()=>{
    const description1 = '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。'
    const TableData = [
        ['buttonType', '设置按钮类型', 'string<"primary" | "default" | "dashed" | "text" | "link">', 'default'],
    ]
    return (
        <div>
            <Demo code={require('!!raw-loader!./button.example.tsx').default} description={description1}>
                <ButtonExample />
            </Demo>
            <TableDemo database={TableData} />

        </div>
    )
}

export default ButtonDemo;