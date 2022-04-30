import React, { ReactFragment } from "react";
import "./form.scss";
import Input from "../input/input";
import { FormErrors } from "./validator";
import { scopedClassMaker } from "../helpers/utils";

const scopedClass = scopedClassMaker("dui-form");
const sc = scopedClass; // 主要为了简化名称

export interface FormValue {
  [K: string]: any;
}

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  // rules?: FormRules;
  errors?: FormErrors;
  onChange: (value: FormValue) => void;
  onSubmit: (value: FormValue) => void;
}
const Form: React.FunctionComponent<FormProps> = (props) => {
  const formData = props.value;
  // const [errors, setErrors] = useState<FormErrors>({});

  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    //这里是单独一个input框的值，每次向外传一个input的value
    props.onChange(newFormData);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // if (props.rules && props.rules.length > 0) {
    //   let errors = Validator(props.value, props.rules);
    //   setErrors(errors);
    // }

    props.onSubmit(e);
  };
  return (
    <form className={sc()}  onSubmit={onSubmit}>
      <table className={sc("table")}>
        <tbody>
          {props.fields.map((item) => (
            <tr className={sc("tr")} key={item.name}>
              <td className={sc("td")}>
                <span className={sc("label")}>{item.label}</span>
              </td>
              <td className={sc("td")}>
                <Input
                  type={item.input.type}
                  value={props.value[item.label]}
                  onChange={(e) => onInputChange(item.name, e.target.value)}
                />
                <div className={sc("error")}>
                  {
                    props.errors &&
                    props.errors[item.name] ? 
                    (props.errors[item.name].length > 1 ? props.errors[item.name].join('，') : 
                    props.errors[item.name]) : <span>&nbsp;</span>
                  }
                </div>
              </td>
            </tr>
          ))}
          <tr className={sc("tr")}>
            <td className={sc("td")}></td>
            <td className={sc("td")}>{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
