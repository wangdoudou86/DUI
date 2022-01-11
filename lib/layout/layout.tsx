import React from "react";
import './layout.scss';
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";

interface LayoutProps extends React.HTMLAttributes<HTMLElement>{
}
const sc = scopedClassMaker('dui-layout')
const Layout: React.FunctionComponent<LayoutProps> = (props)=>{
    const {className, ...restProps} = props
    return (<div className={classes(sc(), className)} {...restProps}>
        {props.children} 
    </div>)
}

export default Layout;
