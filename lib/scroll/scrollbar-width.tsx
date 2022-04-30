 //计算不同浏览器下scrollbar的宽度
 export default function() {
   const div = document.createElement('div');

   div.style.position = 'absolute';
   div.style.top = div.style.left = '-9999px'; //把div放到屏幕外
   div.style.width = div.style.height = '100px';
   div.style.overflow = 'scroll';

   document.body.appendChild(div);
   const width = div.offsetWidth - div.clientWidth;
   document.body.removeChild(div)

   return width;
}