import React from "react";

interface sourceDataItem {
    text: string;
    value: string;
    children?: sourceDataItem[];
}

interface TreeProps {
    sourceData: sourceDataItem[]
}

const Tree: React.FunctionComponent<TreeProps> = (props)=>{
    return (
        <>
           {
              props.sourceData.map(item => {
                  return <div>{item.text}
                    {
                        item.children?.map(item2 => {
                            return <div>{item2.text}</div>
                        })
                    }
                  </div>
              }) 
           }
        </>
    )
}

export default Tree;