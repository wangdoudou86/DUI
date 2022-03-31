import React from "react";
import "./table.scss";

interface tabbleProps{
  title?: string;
  database: Array<Array<string>>;
}

const table = (props:tabbleProps) => {
  const classes = (index:number)=>{
    switch(index){
      case 0:
        return 'parm';
      case 1:
        return 'des';
      case 2:
        return 'type';
      default: 
        return '';
    }
  }
  return (
    <div className="demo-api">
      <h2>{props.title}</h2>
      <table className="demo-table">
        <thead>
          <tr>
            <th className="parm">参数</th>
            <th className="des">说明</th>
            <th className="type">类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          {props.database.map((rowdata,rowindex)=>{
            return (
              <tr key={rowindex}>
                {rowdata.map((item, index)=>{
                  return (
                    <td className={classes(index)} key={index}>{item}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

table.defaultProps = {
  title: 'API'
}

export default table;
