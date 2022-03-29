import React from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example1';
import DialogExample2 from './dialog.example2';
import DialogExample3 from './dialog.example3';
import "./dialog.example.scss";

import TableDemo from '../tableDemo/table';
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
            
            <TableDemo />
        </div>
    )
}

export default DialogDemo