import React from "react";
import { classes, scopedClassMaker } from "../helpers/utils";


interface ContentProps extends React.HTMLAttributes<HTMLElement>{
}
const sc = scopedClassMaker('dui-layout-content')
const Content: React.FunctionComponent<ContentProps> = (props)=>{
    const {className, ...restProps} = props
    return (<div className={classes(sc(), className)} {...restProps}>
        {props.children}
    </div>)
}

export default Content;
