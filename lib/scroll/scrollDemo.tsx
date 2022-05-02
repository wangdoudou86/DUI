import React from 'react';
import Demo from '../../demo';
import ScrollExample from './scroll.example';

import TableDemo from '../tableDemo/table';
const ScrollDemo = () => {
    
    const description = 'scroll的基础用法'
    const TableData = [
        ['scrollbarVisible', '是否始终显示滚动条', 'boolean', 'true'],
        ['barColor', '设置滚动条滑块颜色', 'string', 'rgba(201, 207, 234, 0.8)'],
    ]
    return (
        <div>
            <Demo code={require('!!raw-loader!./scroll.example.tsx').default} description={description}>
                <ScrollExample />
            </Demo>
            <TableDemo database={TableData} />
        </div>
    )
}

export default ScrollDemo