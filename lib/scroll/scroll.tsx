import * as React from 'react';
import './scroll.scss';
import { scopedClassMaker, classes } from '../helpers/utils';
import scrollbarWidth from './scrollbar-width';

const scopedClass = scopedClassMaker('dui-scroll')
const sc = scopedClass;

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, className, ...rest} = props;
    return(
        <div className={classes(sc(), className)} {...rest}>
            <div className={sc('inner')} style={{right: -scrollbarWidth()}}>
                {children}
            </div>
        </div>
    )
}

export default Scroll;