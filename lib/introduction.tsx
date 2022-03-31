import React from "react";
import './introduction.scss';

const introductionDemo = () => {
    return (
        <div className="introductionDemo">
            <div className="content">
                <h1>DUI</h1>
                <div className="des">
                    DUI是一套 PC 端React UI组件库，主要目的是为了更快地熟悉React，目前组件还在有序完善中...
                </div>
            </div>
            <div className="content">
                <h1>使用 TypeScript</h1>
                <div className="des">
                    DUI完全使用TypeScript进行编写，可以使开发人员有效地在编写过程中识别到类型问题。
                </div>
            </div>
        </div>
    )
}

export default introductionDemo;