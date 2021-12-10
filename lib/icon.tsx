import React from "react";
import './importIcons';
import './icon.scss';

interface IconProps {
    name: String;
    onClick: () => void
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
    return (
        <svg className="dui-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon;