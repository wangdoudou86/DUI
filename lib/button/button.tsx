import { classes, scopedClassMaker } from '../helpers/utils';
import React from 'react';
import './button.scss';

const scopedClass = scopedClassMaker('dui-button')
const sc = scopedClass;


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: string
}

const Button:React.FunctionComponent<ButtonProps> = (props)=>{
    const {buttonType, className, ...restProps} = props
    return (
        <button className={classes('dui-button', sc(buttonType), className)} {...restProps}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    buttonType: 'default'
}
export default Button