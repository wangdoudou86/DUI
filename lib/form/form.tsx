import React, { ReactFragment } from "react";
import './form.scss';
import Input from '../input/input';

export interface FormValue {
    [K:string]: any
}

interface FormProps{
    value: FormValue;
    fields: Array<{name:string, label:string, input:{type:string}}>;
    buttons: ReactFragment;
    onChange: (value:FormValue) => void;
    onSubmit: (value:FormValue)=>void;
}
const Form:React.FunctionComponent<FormProps> = (props)=>{
    const formData = props.value

    const onInputChange = (name:string, value: string)=>{
        const newFormData = {...formData, [name]: value}
        //这里是单独一个input框的值，每次向外传一个input的value
        props.onChange(newFormData)
    }

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        props.onSubmit(e)
    }
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(item => (
                <div key={item.name}>
                    {item.label}
                    <Input type={item.input.type} value={props.value[item.label]} onChange={ e => onInputChange(item.name, e.target.value)}/>
                </div>
            ))}

            {props.buttons}
        </form>
    )
}

export default Form;