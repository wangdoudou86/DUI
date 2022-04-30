import * as React from 'react';
import './scroll.scss';
import { scopedClassMaker, classes } from '../helpers/utils';
import scrollbarWidth from './scrollbar-width';
import { useEffect, useRef, useState } from 'react';

const scopedClass = scopedClassMaker('dui-scroll')
const sc = scopedClass;

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, className, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, setBarTop] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const {current} = containerRef;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollHeight = current!.scrollHeight;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, [])

    const onScroll = ()=>{
        const {current} = containerRef;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollHeight = current!.scrollHeight; 
        const scrollTop = current!.scrollTop

        setBarTop(viewHeight * scrollTop / scrollHeight)
    }

    return(
        <div className={classes(sc(), className)} {...rest}>
            <div className={sc('inner')} style={{right: -scrollbarWidth()}} 
            ref={containerRef}
            onScroll={onScroll}
            >
                {children}
            </div>
            <div className={sc('track')}>
                <div className={sc('bar')} style={{height: barHeight, transform: `translateY(${barTop}px)`}}></div>
            </div>
        </div>
    )
}

export default Scroll;