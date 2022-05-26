import { scopedClassMaker, classes } from "../helpers/utils";
import React from "react";

interface sourceDataItem {
  text: string;
  value: string;
  children?: sourceDataItem[];
}

interface TreeProps {
  sourceData: sourceDataItem[];
}

const scopedClass = scopedClassMaker("dui-tree");
const sc = scopedClass;

const Tree: React.FunctionComponent<TreeProps> = (props) => {
  const renderItem = (item: sourceDataItem, level = 1) => {
    return (
      <div
        className={classes(sc("item"), sc(`level-${level}`))}
        key={item.value}
        style={{ paddingLeft: (level - 1) * 10 + "px" }}
      >
        {item.text}
        {item.children?.map((sub) => {
          return renderItem(sub, level + 1);
        })}
      </div>
    );
  };

  return (
    <>
      {props.sourceData.map((item) => {
        return renderItem(item);
      })}
    </>
  );
};

export default Tree;
