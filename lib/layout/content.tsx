import React from "react";
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";


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
