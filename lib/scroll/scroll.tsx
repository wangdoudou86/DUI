import * as React from "react";
import "./scroll.scss";
import { scopedClassMaker, classes } from "../helpers/utils";
import scrollbarWidth from "./scrollbar-width";
import {
  MouseEventHandler,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

const scopedClass = scopedClassMaker("dui-scroll");
const sc = scopedClass;

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollbarVisible?: boolean;
  barColor?: string;
}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
  const { children, className, scrollbarVisible, barColor, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const initBarTopRef = useRef(0); //用来记录拖动bar时，当时bar离顶的距离
  const initYRef = useRef(0); //用来记录鼠标拖动时，当下鼠标事件的y坐标轴的距离

  const isMouseEnter = useRef(false);
  const [barVisible, setBarVisible] = useState(false);

  const calculateStyle = ()=>{
    const { current } = containerRef;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollHeight = current!.scrollHeight;
    const scrollTop = current!.scrollTop;
    return {viewHeight, scrollHeight, scrollTop}
  }

  //需要对鼠标拖动滚动条滑动时的距离做限制
  //滚动条可滚动的距离最小为0，最大为把bar拉到底时距离上面的高度
  //所以把它限制在这个范围即可
  const setBarTop = (number: number) => {
    if (number < 0) return;
    const { viewHeight, scrollHeight } = calculateStyle()
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
    if (number > maxBarTop) return;
    _setBarTop(number);
  };

  const onScroll: UIEventHandler = () => {
    const { viewHeight, scrollHeight, scrollTop } = calculateStyle()
    setBarTop((viewHeight * scrollTop) / scrollHeight);
  };
 
  const onMouseDownBar: MouseEventHandler = (e) => {
    isDraggingRef.current = true;
    initYRef.current = e.clientY;
    initBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (isDraggingRef.current) {
      //拖动过程中bar要一直显示
      !props.scrollbarVisible && setBarVisible(true);
      let delta = e.clientY - initYRef.current; //滑动时鼠标的y轴差值
      let newBarTop = initBarTopRef.current + delta;
      //使用鼠标拖动滚动条
      //setBarTop里有_setBarTop，每当_setBarTop都会render一次
      setBarTop(newBarTop);

      //使页面随拖动滚动条而滑动
      //注意这里，不要用barTop，因为_setBarTop时是异步更新
      //直接使用barTop有可能取不到最新的值，要用newBarTop
      const { viewHeight, scrollHeight } = calculateStyle()
      containerRef.current!.scrollTop = (scrollHeight * newBarTop) / viewHeight;
    }
  };
  const onMouseUpBar = (e: MouseEvent) => {
    isDraggingRef.current = false;
    //若结束时鼠标在外面，则让bar隐藏
    if (!props.scrollbarVisible && !isMouseEnter.current) {
      setBarVisible(false);
    }
  };
  const onSelect = (e: MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
    }
  };

  const onMouseEnterBar = () => {
    if (!props.scrollbarVisible) {
      isMouseEnter.current = true;
      setBarVisible(true);
    }
  };
  const onMouseLeaveBar = () => {
    if (!props.scrollbarVisible) {
      isMouseEnter.current = false;
      setBarVisible(false);
    }
  };

  useEffect(() => {
    const { viewHeight, scrollHeight } = calculateStyle()
    setBarHeight((viewHeight * viewHeight) / scrollHeight);

    document.addEventListener("mousemove", onMouseMoveBar);
    document.addEventListener("mouseup", onMouseUpBar);
    document.addEventListener("selectstart", onSelect);
    if (props.scrollbarVisible) setBarVisible(true);
    return () => {
      document.removeEventListener("mousemove", onMouseMoveBar);
      document.removeEventListener("mouseup", onMouseUpBar);
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);


  return (
    <div
      className={classes(sc(), className)}
      {...rest}
      onMouseEnter={onMouseEnterBar}
      onMouseLeave={onMouseLeaveBar}
    >
      <div
        className={sc("inner")}
        style={{ right: -scrollbarWidth() }}
        ref={containerRef}
        onScroll={onScroll}
      >
        {children}
      </div>
      {barVisible && (
        <div className={sc("track")}>
          <div
            className={sc("bar")}
            style={{ height: barHeight, transform: `translateY(${barTop}px)`, backgroundColor: props.barColor ? props.barColor : 'rgba(201, 207, 234, .8)' }}
            onMouseDown={onMouseDownBar}
          ></div>
        </div>
      )}
    </div>
  );
};

Scroll.defaultProps = {
  scrollbarVisible: true
};

export default Scroll;
