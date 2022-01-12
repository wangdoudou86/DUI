import React, { ReactElement } from "react";
import './layout.scss';
import { scopedClassMaker } from "../utils";
import classes from "../helpers/classes";
import Asider from "./asider";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}
const sc = scopedClassMaker('dui-layout')
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const children = props.children as Array<ReactElement>
    const hasAsider = children.length > 0 && children.reduce((result, current) => {
        return result || current.type === Asider
    }, false)
    const asiderClass = hasAsider ? sc('hasAsider') : undefined
    const { className, ...restProps } = props
    return (<div className={classes(sc(), asiderClass, className)} {...restProps}>
        {props.children}
    </div>)
}
export default Layout;
