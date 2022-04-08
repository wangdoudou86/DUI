import React, { Fragment, useState } from "react";
import Form, {FormValue} from './form'
import Button from '../button/button';


const FormExample:React.FunctionComponent = ()=>{
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    })

    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ])
    const onFormChange = (newFormData: FormValue)=>{
        setFormData(newFormData)    
    }
    const onFormSubmit = ()=>{
        
    }
    return (
        <div className="form-example">
            <Form value={formData} fields={fields}
             onChange={onFormChange}
             onSubmit={onFormSubmit}
             buttons={
                <Fragment>
                    <Button type="submit">提交</Button>
                    <Button>返回</Button>
                </Fragment>
            } />
               
        </div>

        
    )
}

export default FormExample;