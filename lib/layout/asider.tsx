import React from "react";
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";


interface AsiderProps extends React.HTMLAttributes<HTMLElement>{
}
const sc = scopedClassMaker('dui-layout-asider')
const Asider: React.FunctionComponent<AsiderProps> = (props)=>{
    const {className, ...restProps} = props
    return (<div className={classes(sc(), className)} {...restProps}>
        {props.children}
    </div>)
}

export default Asider;
