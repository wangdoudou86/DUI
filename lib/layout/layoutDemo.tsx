import React from 'react';
import Demo from '../../demo';
import LayoutExample1 from '../layout/layout.example1';
import LayoutExample2 from '../layout/layout.example2';
import LayoutExample3 from '../layout/layout.example3';
import LayoutExample4 from '../layout/layout.example4';

import "./layout.example.scss";


const LayoutDemo = ()=>{
    return (
        <div>
            <Demo code={require('!!raw-loader!./layout.example1.tsx').default}>
                <LayoutExample1 />
            </Demo>
            <Demo code={require('!!raw-loader!./layout.example2.tsx').default}>
                <LayoutExample2 />
            </Demo>
            <Demo code={require('!!raw-loader!./layout.example3.tsx').default}>
                <LayoutExample3 />
            </Demo>
            <Demo code={require('!!raw-loader!./layout.example4.tsx').default}>
                <LayoutExample4 />
            </Demo>
        </div>
    )
}


export default LayoutDemo;