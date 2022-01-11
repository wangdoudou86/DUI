import React from "react";
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";


interface FooterProps extends React.HTMLAttributes<HTMLElement>{
}
const sc = scopedClassMaker('dui-layout-footer')
const Footer: React.FunctionComponent<FooterProps> = (props)=>{
    const {className, ...restProps} = props
    return (<div className={classes(sc(), className)} {...restProps}>
        {props.children}
    </div>)
}

export default Footer;
