import * as React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import classes from './lib/helpers/classes';
import './demo.scss';
import { useState } from 'react';

interface Props {
    code: string
}
const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={classes(className, 'dui-demo-code')} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
    )


    return (
        <div className="dui-demo">
            <div className="dui-demo-content">
                {props.children}
            </div>

            <button  className="dui-demo-button" onClick={()=>{setCodeVisible(!codeVisible)}}>{codeVisible ? '隐藏代码' : '显示代码'}</button>
            {codeVisible && code}
            
        </div>
    )
}

export default Demo