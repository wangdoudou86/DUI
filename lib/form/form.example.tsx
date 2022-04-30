import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import Button from "../button/button";
import './form.example.scss';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({})

  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const onFormChange = (newFormData: FormValue) => {
    setFormData(newFormData);
  };
  const onFormSubmit = () => {
    const rules = [
      { key: "username", required: true, message:'用户名为必填' },
      { key: "username", minLength: 6, maxLength: 15 },
      { key: "username", pattern: /^[A-z0-9]+$/ },
      { key: "password", required: true },
    ];

    Validator(formData, rules, (errors)=>{
      console.log(errors,'errors');
      setErrors(errors)
    })

    
  };
  
  

  return (
    <div className="form-example">
      <Form
        value={formData}
        fields={fields}
        errors={errors}
        onChange={onFormChange}
        onSubmit={onFormSubmit}
        buttons={
          <Fragment>
            <Button type="submit" className="form-submit">提交</Button>
            <Button>返回</Button>
          </Fragment>
        }
      />
    </div>
  );
};

export default FormExample;
