(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1825:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return N},default:function(){return k}});var r=a(5893),s=a(7757),l=a.n(s),n=a(2137),i=a(7294),c=a(9669),o=a.n(c),m=a(5675),d=a(6615),x=a(9553),u=a(6858),p=a(6156);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={email:"",firstname:"",lastname:"",canISend:!1,emailError:null,firstnameError:null,lastnameError:null,isLoading:!1,successMessage:"",error:""},g="FIELDS_CHANGED",j="FORM_SUBMITTED",v="SUCCESS",y="ERROR";function w(e,t){var a;switch(t.type){case g:var r;return a=function(e,t){switch("string"===typeof t&&(t=t.trim()),e){case"firstname":case"lastname":return t.length<3;case"email":return 0===t.length||!t.includes("@")||!t.includes(".")||t.split(".")[1].length<2}}(t.fieldName,t.payload),f(f({},e),{},(r={},(0,p.Z)(r,t.fieldName,t.payload),(0,p.Z)(r,t.fieldName+"Error",a),(0,p.Z)(r,"error",""),(0,p.Z)(r,"successMessage",""),(0,p.Z)(r,"canISend",!e.firstnameError&&!e.lastnameError&&!e.emailError),r));case j:return f(f({},e),{},{isLoading:!0});case v:return f(f({},e),{},{isLoading:!1,successMessage:t.payload,email:"",firstname:"",lastname:"",emailError:!0,firstnameError:!0,lastnameError:!0,canISend:!1});case y:return f(f({},e),{},{isLoading:!1,error:t.payload,canISend:!1});default:return e}}var N=!0;function k(e){var t=e.dataServices,a=e.dataShepperdDeks,s=(0,i.useReducer)(w,b),c=s[0],p=s[1],h=c.email,f=c.firstname,N=c.lastname,k=c.canISend,E=c.isLoading,_=c.successMessage,S=c.firstnameError,O=c.lastnameError,D=c.emailError,P=c.error,I=function(e){p({type:g,fieldName:e.currentTarget.name,payload:e.currentTarget.value})},L=function(){var e=(0,n.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p({type:j}),e.prev=2,!k){e.next=9;break}return e.next=6,o().post("api/newsletter",{email:h,firstname:f,lastname:N});case 6:p({type:v,payload:"Agregado"}),e.next=10;break;case 9:p({type:y,payload:"Agrega todos los campos solicitados"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),p({type:y,payload:e.t0.response.data.error});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),C=[1,2,3,4,5,6].map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsx)(m.default,{alt:"",width:160,height:160,src:"/images/ministries/".concat(e,".png"),className:"filter grayscale hover:grayscale-0",placeholder:"blur"},t)},t)})),U=t.items.map((function(e){var t=e.id,a=e.snippet,s=void 0===a?{}:a,l=s.title,n=s.thumbnails,i=void 0===n?{}:n,c=s.resourceId,o=void 0===c?{}:c,x=i.maxres,u=/"(.*?)"/.exec(l),p=/\w[^-]*$/.exec(l);return(0,r.jsxs)("a",{href:"https://www.youtube.com/watch?v=".concat(o.videoId),target:"_blank",rel:"noreferrer",className:"flex-1 mb-8 lg:mb-0",children:[(0,r.jsx)(m.default,{width:x.width,height:x.height,src:x.url,alt:"",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,d.s3)((0,d.f8)(1280,720)))}),(0,r.jsx)("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-800 my-4 font-medium",children:u[0]}),(0,r.jsx)("p",{className:"text-base md:text-lg font-medium text-gray-700 mb-4",children:p[0]})]},t)})),R=a.items.map((function(e,t){var a=e.snippet,s=a.title,l=a.thumbnails,n=a.resourceId,i=a.publishedAt,c=l.default,o=/\w[^:]*$/.exec(s);return(0,r.jsxs)("a",{href:"https://www.youtube.com/watch?v=".concat(n.videoId),target:"_blank",rel:"noreferrer",className:"flex-1 mb-8 flex bg-gray-50 hover:bg-gray-100 p-4 transition ease-in-out duration-200",children:[(0,r.jsx)(m.default,{width:68,height:68,src:c.url,alt:"",layout:"fixed",className:"object-cover",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,d.s3)((0,d.f8)(68,68)))}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsx)("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 font-medium",children:o[0]}),(0,r.jsx)("p",{className:"text-base md:text-lg text-gray-600",children:new Date(i).toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]},t)}));return(0,r.jsxs)(d.Ar,{title:"Inicio",children:[(0,r.jsxs)("div",{className:"h-screen",children:[(0,r.jsx)(m.default,{className:"absolute object-cover back filter contrast-900",alt:"Cover",src:"/images/cover.png",layout:"fill",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,d.s3)((0,d.f8)(1920,1080)))}),(0,r.jsx)(d.h4,{}),(0,r.jsx)("div",{className:"h-full flex justify-center items-center relative",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-center text-white font-serif text-5xl mb-20 md:text-6xl lg:text-8xl",children:"Bienvenido a casa"}),(0,r.jsxs)("div",{className:"flex justify-center",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/unionchurch.cl",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u.s1,{className:"mr-8"})}),(0,r.jsx)("a",{href:"https://www.instagram.com/unionchurch.cl/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u.mr,{className:"mr-8"})}),(0,r.jsx)("a",{href:"https://www.youtube.com/c/UnionChurchcl",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u.hx,{})})]})]})})]}),(0,r.jsx)("div",{className:"container mx-auto mb-20 md:mb-40 px-8 sm:px-8",children:(0,r.jsxs)("div",{className:"mt-20 flex justify-center items-center flex-col md:flex-row text-center md:text-left",children:[(0,r.jsx)("div",{className:"mb-12 md:mb-0",children:(0,r.jsx)(m.default,{src:"/images/horaciopatty.png",alt:"Horacio y Patty",width:382,height:300,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,d.s3)((0,d.f8)(382,300)))})}),(0,r.jsxs)("div",{className:"md:ml-16 md:w-4/12",children:[(0,r.jsx)("p",{className:"font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-8",children:"Uniendo personas con prop\xf3sito"}),(0,r.jsx)("p",{className:"font-xl text-gray-600 mb-8",children:"Bienvenidos a Union Church. Somos una comunidad de La Vi\xf1a que busca vivir los valores b\xedblicos, experimentando naturalmente lo sobrenatural. Te invitamos a vivir un encuentro con Jes\xfas, a cultivar una relaci\xf3n de intimidad con Dios, tener relaciones significativas con otras personas, crecer y vivir la Palabra y extender el Reino de Dios con tu vida."}),(0,r.jsx)("div",{children:(0,r.jsx)(m.default,{src:"/images/sign.png",alt:"Horacio & Patty's Sign",width:217,height:57,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,d.s3)((0,d.f8)(217,57)))})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"block",children:"Horacio & Patty Gonzalez"}),(0,r.jsx)("span",{className:"block",children:"Pastores principales"}),"Union Church"]})]})]})}),(0,r.jsx)("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 text-center",children:"Int\xe9grate a nuestros grupos de crecimiento"}),(0,r.jsx)("div",{className:"flex justify-center flex-wrap space-x-8",children:C}),(0,r.jsx)("div",{className:"px-8 sm:px-0 bg-pink-light",style:{zIndex:"-1"},children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("div",{className:"container mx-auto mt-40 flex items-center",children:[(0,r.jsxs)("div",{className:"py-12 md:py-0",children:[(0,r.jsx)("p",{className:"font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4",children:"Iglesia en l\xednea"}),(0,r.jsxs)("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-700 mb-12",children:["\xa1Juntos hacemos la iglesia!"," "]}),(0,r.jsx)("a",{href:"https://www.youtube.com/c/UnionChurchcl",className:"tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary hover:bg-primary-dark text-white transition duration-150 ease-in-out",children:"Ir al canal de Youtube"})]}),(0,r.jsx)(x.Tj,{className:"opacity-0 hidden md:block"})]}),(0,r.jsx)(x.Tj,{className:"absolute top-0 right-0 hidden md:block"})]})}),(0,r.jsx)("div",{className:"px-8 sm:px-0",children:(0,r.jsxs)("div",{className:"container mx-auto text-center relative pb-20 md:pb-40 pt-10",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between py-16",children:[(0,r.jsx)("p",{className:"font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800",children:"\xdaltimos servicios"}),(0,r.jsx)("a",{target:"_blank",className:"text-yellow-700 font-semibold border-b-4 flex items-center",href:"https://youtube.com/playlist?list=PLV_Ax0JpimXPtD-QDqcygoAwERU0rvU82",rel:"noreferrer",children:"Ver todos"})]}),(0,r.jsx)("div",{className:"flex flex-wrap flex-col sm:flex-row justify-between text-left pb-16 md:space-x-8",children:U}),(0,r.jsxs)("div",{className:"flex items-center justify-between py-16",children:[(0,r.jsx)("p",{className:"font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800",children:"Escritorio del pastor"}),(0,r.jsx)("a",{target:"_blank",className:"text-yellow-700\tfont-semibold border-b-4 flex items-center",href:"https://youtube.com/playlist?list=PLV_Ax0JpimXPgTVH7fvCVC-2X0XQ6vorg",rel:"noreferrer",children:"Ver todos"})]}),(0,r.jsx)("div",{className:"flex flex-wrap flex-col lg:flex-row justify-between text-left lg:space-x-8",children:R})]})}),(0,r.jsx)("div",{className:"px-8 sm:px-0 pt-10 bg-pink-light",children:(0,r.jsxs)("div",{className:"container mx-auto text-center pb-20 md:pb-40 pt-20 md:w-5/12",children:[(0,r.jsx)("p",{className:"text-gray-300 text-9xl font-serif leading-3",children:"\u201c"}),(0,r.jsx)("p",{className:"font-bold text-xl sm:text-2xl md:text-3xl mb-12",children:"Transformar la ciudad, influenciar al mundo, ayudar a las personas a conocer, amar y compartir a Jes\xfas."}),(0,r.jsx)("a",{href:"/about",className:"tracking-wider uppercase text-sm inline px-8 py-3 font-bold bg-black hover:bg-gray-900 text-white transition duration-150 ease-in-out",children:"sobre Nosotros"})]})}),(0,r.jsx)("div",{className:"bg-oil",children:(0,r.jsxs)("div",{className:"container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 relative ",children:[(0,r.jsxs)("div",{className:"sm:px-12",children:[(0,r.jsx)("p",{className:"font-sans uppercase text-white tracking-wider mb-4 font-bold text-center md:text-left",children:"Mantente informado"}),(0,r.jsxs)("p",{className:"font-serif text-2xl md:text-3xl lg:text-4xl lg:text-5xl text-white text-center md:text-left mb-4 md:pb-16",children:["Suscr\xedbete a nuestro ",(0,r.jsx)("br",{}),"bolet\xedn de noticias"]})]}),(0,r.jsxs)("form",{className:"flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:-top-12 md:right-12 relative md:absolute",onSubmit:L,children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",htmlFor:"firstname",children:"Nombre"}),(0,r.jsxs)("div",{className:"relative mb-4",children:[(0,r.jsx)("input",{type:"text",name:"firstname",id:"firstname",placeholder:"Ingresa tu nombre",className:"appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border",value:f,onChange:I}),S&&(0,r.jsx)(u.jj,{})]}),(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",htmlFor:"lastname",children:"Apellido"}),(0,r.jsxs)("div",{className:"relative mb-4",children:[(0,r.jsx)("input",{type:"text",name:"lastname",id:"lastname",placeholder:"Ingresa tu apellido",className:"appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border",value:N,onChange:I}),O&&(0,r.jsx)(u.jj,{})]}),(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",htmlFor:"email",children:"Email"}),(0,r.jsxs)("div",{className:"relative mb-8",children:[(0,r.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Ingresa tu email",className:"appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border",value:h,onChange:I}),D&&(0,r.jsx)(u.jj,{})]}),P?(0,r.jsxs)("div",{className:"bg-white flex items-center mb-8",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-600 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,r.jsx)("p",{className:"text-sm",children:P})]}):null,_?(0,r.jsxs)("div",{className:"bg-white flex items-center mb-8",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-green-600 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,r.jsx)("p",{className:"text-sm",children:_})]}):null,(0,r.jsx)("button",{type:"submit",className:"inline px-8 py-3 border border-primary bg-primary text-white uppercase text-sm tracking-wider font-bold ".concat(E?"disabled:cursor-not-allowed":null),children:E?"Enviando...":"Enviar"})]})]})})]})}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1825)}])}},function(e){e.O(0,[774,351,367,269,615],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);