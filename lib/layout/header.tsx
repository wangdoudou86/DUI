import React from "react";
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";


interface HeaderProps extends React.HTMLAttributes<HTMLElement>{
}
const sc = scopedClassMaker('dui-layout-header')
const Header: React.FunctionComponent<HeaderProps> = (props)=>{
    const {className, ...restProps} = props
    return (<div className={classes(sc(), className)} {...restProps}>
        {props.children}
    </div>)
}

export default Header;
