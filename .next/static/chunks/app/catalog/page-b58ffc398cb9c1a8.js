(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{4789:function(e,a,l){Promise.resolve().then(l.bind(l,6532))},6532:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return p}});var i=l(7437),t=l(2265),c=l(2451),n=function(e){return(0,i.jsx)("div",{className:"bg-dark h-[100px] rounded-bl-[30px] rounded-br-[30px] flex items-center",children:(0,i.jsx)(c.Z,{isSecond:!0})})},r=l(8870),g=l(7042),s=l(8032),d=l(8516),o=l(6488);let m=[{id:"1",name:"Станция 8 ячеек",price:35e3,value:0,image:"/catalog/catalog_1.png"},{id:"2",name:"Станция 12 ячеек",price:48e3,value:0,image:"/catalog/catalog_2.png"},{id:"3",name:"Станция 12 ячеек + POS-терминал",price:55e3,value:0,image:"/catalog/catalog_3.png"},{id:"4",name:"Станция 6 ячеек",price:2e4,value:0,image:"/catalog/catalog_4.png"},{id:"5",name:"Станция 6 ячеек",price:25e3,value:0,image:"/catalog/catalog_5.png"},{id:"6",name:"Станция 24 ячейки",price:17e4,value:0,image:"/catalog/catalog_6.png"},{id:"7",name:"Станция 24 ячейки",price:17e4,value:0,image:"/catalog/catalog_7.png"},{id:"8",name:"Станция 48 ячейки",price:27e4,value:0,image:"/catalog/catalog_8.png"},{id:"9",name:"Станция 48 ячеек + POS-терминал",price:27e4,value:0,image:"/catalog/catalog_9.png"},{id:"10",name:"Стойка одинарная",price:3400,value:0,image:"/catalog/catalog_10.png"},{id:"11",name:"Power Bank 6000mAH",price:1200,value:0,image:"/catalog/catalog_11.png"},{id:"12",name:"Станция 6 ячеек",price:3e4,value:0,image:"/catalog/catalog_12.png"},{id:"13",name:"Станция 8 ячеек",price:35e3,value:0,image:"/catalog/catalog_13.png"},{id:"14",name:"Станция 4 ячейки",price:2e4,value:0,image:"/catalog/catalog_14.png"},{id:"15",name:"Станция 8 ячеек",price:5e4,value:0,image:"/catalog/catalog_15.png"},{id:"16",name:"Станция 12 ячеек",price:7e4,value:0,image:"/catalog/catalog_16.png"},{id:"17",name:"Станция 16 ячеек",price:1e5,value:0,image:"/catalog/catalog_17.png"},{id:"18",name:"Станция 20 ячейки",price:15e4,value:0,image:"/catalog/catalog_18.png"},{id:"19",name:"Станция 24 ячейки",price:17e4,value:0,image:"/catalog/catalog_19.png"},{id:"20",name:"Станция 8 ячеек",price:5e4,value:0,image:"/catalog/catalog_20.png"},{id:"21",name:"Станция 24 ячейки",price:17e4,value:0,image:"/catalog/catalog_21.png"},{id:"22",name:"Уличная станция 24 ячейки",price:17e4,value:0,image:"/catalog/catalog_22.png"}];var p=function(e){let[a,l]=(0,t.useState)([...m]),{t:c}=(0,s.$G)(),p=(0,t.useMemo)(()=>a.reduce((e,a)=>e+a.value*a.price,0),[a]),x=(0,t.useCallback)((e,a)=>{l(l=>l.map(l=>l.id===a?{...l,value:e}:l))},[]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(n,{}),(0,i.jsxs)("div",{className:"min-h-screen container md:pb-[90px] pb-[50px]",children:[(0,i.jsx)("h1",{className:"text-dark text-center md:mt-[50px] mt-[25px]",children:c("sfc")}),(0,i.jsx)("div",{className:"grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 md:mt-[50px] mt-[20px] md:gap-[20px] gap-[10px]",children:a.map((e,a)=>(0,i.jsx)(r.Z,{price:e.price,name:e.name,image:e.image,id:e.id,value:e.value,onAddRemove:a=>x(a,e.id)},e.id))}),(0,i.jsxs)("div",{className:"md:mt-[72px] mt-[60px] md:grid flex gap-[30px] flex-col-reverse md:grid-cols-2 items-center",children:[(0,i.jsx)(d.Z,{children:(0,i.jsxs)("div",{className:(0,g.Z)("btn !w-full"),children:[c("form.btn"),(0,i.jsx)("img",{src:"/icons/moln.svg",alt:""})]})}),(0,i.jsx)("div",{className:"flex justify-end",children:(0,i.jsxs)("div",{className:"text-[48px] font-bold  text-black ml-auto",children:[p,"₽"]})})]})]}),(0,i.jsx)(o.Z,{})]})}},8870:function(e,a,l){"use strict";var i=l(7437),t=l(2265),c=l(7042);let n=t.memo(e=>{let{price:a,name:l,image:t,id:n,onAddRemove:r,value:g,isBlack:s}=e;return(0,i.jsxs)("div",{className:(0,c.Z)(" flex flex-col rounded-[20px] md:p-[25px] p-[15px]",{"bg-[#F1F1F1]":!s,"bg-gray-2-gradient":s}),children:[(0,i.jsx)("div",{className:"h-[190px] w-full flex items-center justify-center mb-[10px]",children:(0,i.jsx)("img",{src:t,className:"object-contain max-w-full max-h-full",alt:""})}),(0,i.jsxs)("div",{className:(0,c.Z)(" text-[30px] font-bold",{"text-[#22AD7D]":!s,"text-primary":s}),children:[a,"₽"]}),(0,i.jsx)("div",{className:(0,c.Z)(" text-[20px] mt-[8px] grow",{"text-black":!s,"text-white":s}),children:l}),(0,i.jsxs)("div",{className:(0,c.Z)("flex items-center justify-center gap-[15px] mt-[8px] h-[37px] rounded-[7px]",{"bg-[#22AD7D]":!s,"bg-primary":s}),children:[(0,i.jsx)("button",{onClick:()=>{r(g-1)},children:(0,i.jsx)("svg",{width:"14",height:"3",viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0 1.5C0 2.32843 0.671573 3 1.5 3H12.5C13.3284 3 14 2.32843 14 1.5C14 0.671573 13.3284 0 12.5 0H1.5C0.671573 0 0 0.671573 0 1.5Z",fill:s?"black":"white"})})}),(0,i.jsx)("div",{className:"text-[24px] font-bold",children:g}),(0,i.jsx)("button",{onClick:()=>{r(g+1)},children:(0,i.jsxs)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M0 7.5C0 8.32843 0.671573 9 1.5 9H12.5C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6H1.5C0.671573 6 0 6.67157 0 7.5Z",fill:s?"black":"white"}),(0,i.jsx)("path",{d:"M7 14.5C7.82843 14.5 8.5 13.8284 8.5 13L8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L5.5 13C5.5 13.8284 6.17157 14.5 7 14.5Z",fill:s?"black":"white"})]})})]})]})});a.Z=n},8516:function(e,a,l){"use strict";var i=l(7437);l(2265);var t=l(1889),c=l(7042);a.Z=function(e){let{children:a,classes:l}=e,{openModal:n}=(0,t.x)();return(0,i.jsx)("div",{onClick:()=>n(),className:(0,c.Z)([l||"w-full h-full","cursor-pointer"]),children:a})}},1889:function(e,a,l){"use strict";l.d(a,{t:function(){return t},x:function(){return c}});var i=l(2265);let t=i.createContext(null),c=()=>{let e=(0,i.useContext)(t);if(!e)throw Error("useModal должен использоваться внутри ModalProvider");return e}}},function(e){e.O(0,[51,221,396,691,192,971,472,744],function(){return e(e.s=4789)}),_N_E=e.O()}]);