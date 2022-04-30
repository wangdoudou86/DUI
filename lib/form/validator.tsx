import { FormValue } from "./form";

interface FormRule {
  key: string;
  message?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}
export type FormRules = Array<FormRule>;

export interface FormErrors {
  [K: string]: string[];
}

//判断input的值是否为空
const isEmpty = (value: string) => {
  return value === undefined || value === null || value === "";
};

const addError = (
  errors: FormErrors,
  rule: FormRule,
  defaultMessage: string
) => {
  if (errors[rule.key] === undefined) {
    errors[rule.key] = [];
  }
  errors[rule.key].push(rule.message ? rule.message : defaultMessage);
};

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors:any)=>void): void => {
  const errors: FormErrors = {};
  rules.map((rule) => {
    const value = formValue[rule.key];
    if (rule.required) {
      if (isEmpty(value)) {
        addError(errors, rule, "不能为空");
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(errors, rule, `长度不能小于${rule.minLength}`);
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(errors, rule, `长度不能大于${rule.maxLength}`);
      }
    }
    if (rule.pattern) {
      if (!isEmpty(value) && !rule.pattern.test(value)) {
        addError(errors, rule, "所填内容不符合规则");
      }
    }
  });
  callback(errors)
  // return errors;
};

export default Validator;
