import React from "react";
import { classes, scopedClassMaker } from "../helpers/utils";


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
