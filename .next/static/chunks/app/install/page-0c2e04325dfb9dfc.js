(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{6024:function(e,t,s){Promise.resolve().then(s.bind(s,8809))},476:function(e,t,s){"use strict";var l=s(7437);s(2265);var a=s(7042),r=s(8032),n=s(9235);t.Z=function(e){let{bgDark:t=!1,hideLines:s=!1}=e,{t:i}=(0,r.$G)();return i("form.text",{returnObjects:!0}),(0,l.jsx)("div",{className:"container text-white relative z-[50] pt-[50px]",children:(0,l.jsxs)("div",{className:(0,a.Z)("bg-dark lg:overflow-visible overflow-hidden lg:block flex flex-col-reverse  rounded-[25px]  backdrop-blur-[3px]  relative py-[44px] lg:px-[60px] px-[30px]",{"bg-opacity-[.3]":!t}),children:[(0,l.jsx)("div",{className:"bg-gray-gradient  pointer-events-none rounded-[25px] absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}),(0,l.jsx)("div",{className:"custom-dash"}),(0,l.jsxs)("div",{className:"lg:absolute relative lg:mb-0 mb-[-45px] max-w-fit pointer-events-none z-[55] bottom-0 right-0",children:[(0,l.jsx)("img",{src:"/formApp.png",className:"relative z-10 max-w-fit sm:w-fit w-[280px]",alt:""}),(0,l.jsx)("img",{src:"/2_1.gif",className:"absolute sm:top-[15px] top-[13px] sm:left-[19px] left-[16px] sm:w-fit w-[180px]",alt:""})]}),!s&&(0,l.jsx)("img",{src:"/formLine.png",className:"absolute lg:block hidden pointer-events-none w-fit max-w-fit z-[50] top-[240px] -translate-y-1/2 left-1/2 -translate-x-1/2",alt:""}),(0,l.jsxs)("div",{className:"grid relative z-[60] lg:grid-cols-[1fr_40%] gap-[20px]",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)(n.Z,{aos:!0})}),(0,l.jsx)("div",{})]})]})})}},9235:function(e,t,s){"use strict";var l=s(7437),a=s(2265),r=s(4578),n=s(8335),i=s.n(n),c=s(7945),x=s.n(c),o=s(9870),d=s(8980),p=s(8032),m=s(7042),u=s(134),f=s(515);t.Z=function(e){let{aos:t=!0}=e,{t:s}=(0,p.$G)(),[n,c]=(0,a.useState)({name:"",phone:"",checked:!1,city:""}),h=r.z.object({name:r.z.string().min(1,{message:"validation.name"}),phone:r.z.string().regex(/^\+1 \(\d{3}\)-\d{3}-\d{4}$/,{message:"validation.phone"}),city:r.z.string().min(1,{message:"validation.city"})}),[g,v]=(0,a.useState)(!1),[j,b]=(0,a.useState)(!1),N=()=>{try{return h.parse(n),!0}catch(t){let e={};for(let l in t.formErrors.fieldErrors)e[l]=s(t.formErrors.fieldErrors[l][0]);return!1}};(0,a.useEffect)(()=>{j&&N(),b(!0)},[n]);let y=e=>{c({...n,[e.target.name]:e.target.value})},w=()=>{c({name:"",phone:"",checked:!1,city:""})},_=async e=>{if(e.preventDefault(),v(!0),!N()){f.Am.warning("Form not valid",{theme:"dark"}),v(!1);return}let t=()=>{f.Am.error(s("form.errorMessage"),{theme:"dark"})};try{let e="Name: ".concat(n.name,"\nPhone: ").concat(n.phone,"\nCity: ").concat(n.city,"\nPlsCallToday: ").concat(n.checked?"Yes":"No"),l=await fetch("https://api.telegram.org/bot".concat(o.e,"/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:o.s,text:e})});if(200!==l.status){t();return}f.Am.success(s("form.successMessage"),{theme:"dark"}),setTimeout(()=>{w()},2500)}catch(e){t()}finally{v(!1)}},k=(0,u.Z)(!1,"(max-width: 1024px)");return(0,l.jsxs)("form",{onSubmit:_,className:"flex flex-col lg:p-0 lg:px-[20px] ",children:[(0,l.jsx)("h2",{"data-aos":"fade-up",className:"mb-[10px] text-center",children:s("form.title_2")}),(0,l.jsx)("div",{"data-aos":"fade-up",className:"mb-[10px] text-[18px] font-extralight text-center",children:s("form.subtitle")}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{"data-aos":t?"fade-up":void 0,type:"text",className:(0,m.Z)("input"),placeholder:s("form.name"),name:"name",value:n.name,onChange:y,required:!0})}),(0,l.jsx)("div",{"data-aos":t?"fade-up":void 0,children:(0,l.jsx)(x(),{mask:"+1 (999)-999-9999",value:n.phone,onChange:y,children:e=>(0,l.jsx)("input",{...e,className:(0,m.Z)("input"),type:"text",placeholder:s("form.phone"),name:"phone",required:!0})})}),(0,l.jsx)("input",{type:"text","data-aos":t?"fade-up":void 0,className:(0,m.Z)("input","mb-[25px]"),placeholder:s("form.city"),name:"city",value:n.city,onChange:y,required:!0}),(0,l.jsx)("div",{"data-aos":t?"fade-up":void 0,children:(0,l.jsx)(i(),{checked:n.checked,onChange:(e,t)=>{c({...n,checked:e})},name:"checked",icon:(0,l.jsx)("div",{style:{display:"flex",flex:1,backgroundColor:"transparent",alignSelf:"stretch",alignItems:"center",justifyContent:"center"},children:(0,l.jsx)(d.UgA,{color:"white",size:14})}),labelStyle:{margin:"0 0 0 10px",cursor:"pointer",userSelect:"none",fontSize:k?"11px":"14px"},borderColor:"#FFC738",borderRadius:3,style:{overflow:"hidden"},label:s("form.cbx")})}),(0,l.jsx)("button",{"data-aos":t?"fade-up":void 0,type:"submit",disabled:g,className:"btn !w-full !h-[60px] mt-[25px]",children:g?s("form.loading"):s("form.btn")}),(0,l.jsx)("div",{"data-aos":t?"fade-up":void 0,className:"md:text-[14px] text-[11px] font-extralight text-center mt-[15px] opacity-50",children:s("form.ps")})]})}},8309:function(e,t,s){"use strict";var l=s(7437);s(2265),t.Z=function(e){let{centerFill:t="#212121"}=e;return(0,l.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("circle",{cx:"15",cy:"15",r:"11",fill:t}),(0,l.jsx)("circle",{cx:"15",cy:"15",r:"11",stroke:"url(#paint0_linear_23_2795)",strokeWidth:"8"}),(0,l.jsx)("circle",{cx:"15",cy:"15",r:"11",stroke:"url(#paint1_linear_23_2795)",strokeWidth:"8"}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("linearGradient",{id:"paint0_linear_23_2795",x1:"5.5",y1:"-12",x2:"22.5",y2:"40",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#FFF5C0"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#FFAE35"})]}),(0,l.jsxs)("linearGradient",{id:"paint1_linear_23_2795",x1:"4",y1:"-7.5",x2:"24",y2:"41.5",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#FFED8F"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#FFC738"})]})]})]})}},5086:function(e,t,s){"use strict";var l=s(7437);s(2265),t.Z=function(){return(0,l.jsx)("div",{"data-aos":"fade-up",children:(0,l.jsxs)("div",{className:"relative lg:h-full lg:scale-100 scale-[.7] h-[350px] lg:mt-0 mt-[30px] lg:w-auto lg:ml-0 sm:ml-[-50px]  sm:w-[400px] w-[250px]",children:[(0,l.jsx)("img",{className:"absolute top-1/2 ml-[-90px] iphone1 -translate-y-1/2 left-1/2 -translate-x-1/2",src:"/app/phone1.png",alt:""}),(0,l.jsx)("img",{className:"absolute bottom-0 right-[-20px] z-10",src:"/app/star.png",alt:""}),(0,l.jsxs)("div",{className:"absolute top-1/2 w-[250px] h-[505px] -translate-y-1/2 left-1/2 p-[5px] rounded-[40px] -translate-x-1/2 overflow-hidden",children:[(0,l.jsxs)("video",{className:"w-full h-full bg-gray-gradient absolute top-0 left-0",height:"100%",width:"100%",autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:[(0,l.jsx)("source",{src:"/app_preview.mp4",type:"video/mp4"}),"Видео не поддерживается вашим браузером."]}),(0,l.jsx)("img",{className:"max-w-fit absolute top-0 left-0",src:"/app/iphone2.png",alt:""})]})]})})}},8516:function(e,t,s){"use strict";var l=s(7437);s(2265);var a=s(1889),r=s(7042);t.Z=function(e){let{children:t,classes:s}=e,{openModal:n}=(0,a.x)();return(0,l.jsx)("div",{onClick:()=>n(),className:(0,r.Z)([s||"w-full h-full","cursor-pointer"]),children:t})}},9870:function(e,t,s){"use strict";s.d(t,{e:function(){return l},s:function(){return a}});let l="7635342525:AAHq-BQ4ftVtAKA8SKrPAqC-vBZYMi_eVBU",a="-1002440697700,"},1889:function(e,t,s){"use strict";s.d(t,{t:function(){return a},x:function(){return r}});var l=s(2265);let a=l.createContext(null),r=()=>{let e=(0,l.useContext)(a);if(!e)throw Error("useModal должен использоваться внутри ModalProvider");return e}},134:function(e,t,s){"use strict";var l=s(2265);t.Z=function(e,t){let[s,a]=(0,l.useState)(e);return(0,l.useEffect)(()=>{let e=window.matchMedia(t),s=e=>{a(e.matches)};return s(e),e.addEventListener("change",s),()=>{e.removeEventListener("change",s)}},[t]),s}},8809:function(e,t,s){"use strict";s.r(t);var l=s(7437);s(2265);var a=s(2451),r=s(8032),n=s(8309),i=s(5086),c=s(476),x=s(134),o=s(6488),d=s(8516);t.default=function(){let{t:e}=(0,r.$G)(),t=(0,x.Z)(!1,"(max-width: 1024px)"),s=e("install.in.arrTxt",{returnObjects:!0});return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"bg-dark xl:h-[167px] h-[90px] flex items-center rounded-bl-[30px] rounded-br-[30px]",children:(0,l.jsx)(a.Z,{isSecond:!0})}),!t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{src:"/flash_1.svg",className:"absolute top-[70%] right-[30px] z-[-1]",alt:""}),(0,l.jsx)("img",{src:"/flash_2.svg",className:"absolute top-[20%] left-[-55px] z-[-1]",alt:""}),(0,l.jsx)("img",{src:"/installLine.png",className:"absolute max-w-fit top-[5%] left-1/2 -translate-x-1/2 z-[-1]",alt:""}),(0,l.jsx)("img",{src:"/installLine_2.png",className:"absolute bottom-[50px] max-w-fit left-1/2 -translate-x-1/2 z-[-1]",alt:""})]}),(0,l.jsxs)("div",{className:"text-black container lg:mt-[100px] mt-[50px]",children:[(0,l.jsx)("h1",{className:"text-center lg:mb-[65px] mb-[25px]",dangerouslySetInnerHTML:{__html:e("install.title")}}),(0,l.jsxs)("div",{className:"py-[60px] px-[50px] relative flex justify-center mb-[60px]",children:[(0,l.jsx)("img",{src:"/bbg.jpg",className:"absolute object-cover rounded-[15px] top-0 left-0 w-full h-full",alt:""}),(0,l.jsx)(d.Z,{classes:"btn relative !rounded-[20px] z-20 mx-auto",children:e("reviews.button")})]}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-[1fr_450px] lg:mb-[100px] mb-[40px]",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:e("install.in.title")}),(0,l.jsx)("p",{className:"md:text-[24px] text-[18px] mt-[10px] mb-[30px]",children:e("install.in.text")}),(0,l.jsx)("div",{className:"space-y-[15px] lg:block flex flex-col items-center",children:Array.isArray(s)&&s.map((e,s)=>(0,l.jsxs)("div",{className:"flex lg:flex-row flex-col md:text-left text-center items-center gap-[15px]",children:[(0,l.jsx)("div",{className:"shrink-0 lg:mb-0 mb-[-25px]",children:t?(0,l.jsx)("img",{src:"/circleGr.png",alt:""}):(0,l.jsx)(n.Z,{centerFill:"#fff"})}),(0,l.jsx)("div",{className:"md:text-[24px] lg:font-normal font-light text-[18px]",children:e})]}))})]}),!t&&(0,l.jsx)("div",{className:"pt-[230px]",children:(0,l.jsx)(i.Z,{})})]}),(0,l.jsxs)("div",{className:" grid md:grid-cols-3 lg:gap-[40px] gap-[10px] lg:mb-[80px] mb-[40px]",children:[(0,l.jsxs)("div",{className:"relative sm:min-h-[420px] min-h-[375px]",children:[(0,l.jsx)("div",{className:"relative z-20 pt-[30px] px-[15px]",children:(0,l.jsx)("h4",{className:"text-white lg:text-[24px] text-[18px] text-center font-bold",children:e("install.cd_1")})}),(0,l.jsx)("img",{src:"/cd_1.png",className:"absolute object-cover rounded-[20px] top-0 left-0 w-full h-full",alt:""})]}),(0,l.jsxs)("div",{className:"relative sm:min-h-[420px] min-h-[375px]",children:[(0,l.jsxs)("div",{className:"relative px-[20px] z-20 flex flex-col justify-center h-full",children:[(0,l.jsx)("h4",{className:"text-white lg:text-[24px] text-[18px] text-center font-bold",children:e("install.cd_2")}),(0,l.jsx)(d.Z,{classes:"h-[48px] flex text-center text-[18px] justify-center items-center bg-white w-full rounded-[20px] mt-[15px]",children:e("install_btn")})]}),(0,l.jsx)("img",{src:"/cd_2.png",className:"absolute top-0 object-cover rounded-[20px] left-0 w-full h-full",alt:""})]}),(0,l.jsxs)("div",{className:"relative sm:min-h-[420px] min-h-[375px]",children:[(0,l.jsx)("div",{className:"relative z-20 pt-[40px]",children:(0,l.jsx)("h4",{dangerouslySetInnerHTML:{__html:e("install.cd_3")},className:"text-white lg:text-[24px] text-[18px] text-center font-bold"})}),(0,l.jsx)("img",{src:"/cd_3.png",className:"absolute top-0 object-cover rounded-[20px] left-0 w-full h-full",alt:""})]})]})]}),(0,l.jsx)(c.Z,{bgDark:!0,hideLines:!0}),(0,l.jsx)("div",{className:"lg:mb-[100px] mb-[40px]"}),(0,l.jsx)(o.Z,{})]})}}},function(e){e.O(0,[51,221,396,587,691,192,971,472,744],function(){return e(e.s=6024)}),_N_E=e.O()}]);