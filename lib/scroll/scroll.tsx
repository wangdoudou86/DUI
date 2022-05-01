import * as React from "react";
import "./scroll.scss";
import { scopedClassMaker, classes } from "../helpers/utils";
import scrollbarWidth from "./scrollbar-width";
import { MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from "react";

const scopedClass = scopedClassMaker("dui-scroll");
const sc = scopedClass;

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
  const { children, className, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  //需要对鼠标拖动滚动条滑动时的距离做限制
  //滚动条可滚动的距离最小为0，最大为把bar拉到底时距离上面的高度
  //所以把它限制在这个范围即可
  const setBarTop = (number: number)=>{
    if(number<0) return;
    const { current } = containerRef;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollHeight = current!.scrollHeight;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight
    if(number > maxBarTop) return;
    _setBarTop(number) 
  }


  useEffect(() => {
    const { current } = containerRef;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollHeight = current!.scrollHeight;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  const onScroll:UIEventHandler = () => {
    const { current } = containerRef;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollHeight = current!.scrollHeight;
    const scrollTop = current!.scrollTop;

    setBarTop((viewHeight * scrollTop) / scrollHeight);
  };

  const isDraggingRef = useRef(false)
  const initBarTopRef = useRef(0) //用来记录拖动bar时，当时bar离顶的距离
  const initYRef = useRef(0) //用来记录鼠标拖动时，当下鼠标事件的y坐标轴的距离
  const onMouseDownBar:MouseEventHandler = (e)=>{
    isDraggingRef.current = true
    console.log('start');
    initYRef.current = e.clientY
    initBarTopRef.current = barTop
  }
  const onMouseMoveBar:MouseEventHandler = (e)=>{
    if(isDraggingRef.current){
        let delta = e.clientY - initYRef.current //滑动时鼠标的y轴差值
        let newBarTop = initBarTopRef.current + delta
        //使用鼠标拖动滚动条
        //setBarTop里有_setBarTop，每当_setBarTop都会render一次
        setBarTop(newBarTop)
    }
  }
  const onMouseUpBar:MouseEventHandler = (e)=>{
    isDraggingRef.current = false
    console.log('end');
  }

  return (
    <div className={classes(sc(), className)} {...rest}>
      <div
        className={sc("inner")}
        style={{ right: -scrollbarWidth() }}
        ref={containerRef}
        onScroll={onScroll}
      >
        {children}
      </div>
      <div className={sc("track")}>
        <div
          className={sc("bar")}
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
          onMouseDown={onMouseDownBar}
          onMouseMove={onMouseMoveBar}
          onMouseUp={onMouseUpBar}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
