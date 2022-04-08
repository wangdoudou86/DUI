import React, { ReactFragment } from "react";
import './form.scss';

interface FormProps{
    value: {[K:string]: any};
    fields: Array<{name:string, label:string, input:{type:string}}>;
    buttons: ReactFragment;
}
const Form:React.FunctionComponent<FormProps> = (props)=>{
    return (
        <form>
            {props.fields.map(item => (
                <div key={item.name}>
                    {item.label}
                    <input type={item.input.type} />
                </div>
            ))}

            {props.buttons}
        </form>
    )
}

export default Form;