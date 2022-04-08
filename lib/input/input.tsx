import React from "react";
import { classes } from "../helpers/utils";
import './input.scss';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{

}



const Input: React.FunctionComponent<InputProps> = (props)=>{
    const {className, ...rest} = props
    return (
        <input className={classes('dui-input', className)} {...rest} />
    )
}

export default Input;