import{d as f,u as v,r as d,o as r,c as o,a as t,F as y,b as g,w as b,e as _,f as h,g as x,v as w,n as k,h as L,_ as P}from"./index-CoUEsawU.js";const E={class:"container mx-auto px-4 py-8"},V={class:"max-w-md mx-auto card hover-card relative overflow-hidden"},B={class:"absolute inset-0 opacity-5"},C={class:"grid grid-cols-8 grid-rows-8 gap-1 h-full"},S={class:"relative z-10"},j={class:"form-group"},q={class:"relative"},z=["disabled"],N={class:"relative z-10 flex items-center justify-center gap-2"},T={key:0},F={key:1},M={key:0,class:"absolute inset-0 bg-background-card/50 flex items-center justify-center backdrop-blur-sm"},R=f({__name:"LoginView",setup(D){const u=h(),c=_(),p=v(),l=d(""),s=d(!1),i=d(!1),m=async()=>{try{s.value=!0;const a=p.findPlayerByEmail(l.value);if(await new Promise(e=>setTimeout(e,800)),a){p.loginPlayer(a);const e=c.query.redirect;u.push(e||"/dashboard")}else u.push({path:"/profile",query:{email:l.value}})}catch(a){console.error("Login error:",a),i.value=!0,setTimeout(()=>{i.value=!1},1e3)}finally{s.value=!1}};return(a,e)=>(r(),o("div",E,[t("div",V,[t("div",B,[t("div",C,[(r(),o(y,null,g(64,n=>t("div",{key:n,class:"bg-primary"})),64))])]),t("div",S,[e[6]||(e[6]=t("h1",{class:"page-title flex items-center justify-center gap-3 mb-8"},[t("span",{class:"text-primary-light"},"🎮"),t("span",null,"Player Login")],-1)),t("form",{onSubmit:b(m,["prevent"]),class:"space-y-6"},[t("div",j,[e[2]||(e[2]=t("label",{class:"form-label"},"Email",-1)),t("div",q,[x(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),type:"email",required:"",class:k(["input-field w-full pl-10",{"animate-shake":i.value}]),placeholder:"Enter your email"},null,2),[[w,l.value]]),e[1]||(e[1]=t("span",{class:"absolute left-3 top-1/2 -translate-y-1/2 text-primary-light"}," @ ",-1))])]),t("button",{type:"submit",class:"btn-primary w-full group relative overflow-hidden",disabled:s.value},[t("span",N,[s.value?(r(),o("span",T,"Loading...")):(r(),o("span",F,"Continue")),e[3]||(e[3]=t("span",{class:"transform transition-transform group-hover:translate-x-1"},"→",-1))]),e[4]||(e[4]=t("div",{class:"absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"},null,-1))],8,z)],32),e[7]||(e[7]=t("p",{class:"mt-6 text-sm text-text-muted text-center"}," New player? We'll create your profile next ",-1)),s.value?(r(),o("div",M,e[5]||(e[5]=[t("div",{class:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"},null,-1)]))):L("",!0)])])]))}}),U=P(R,[["__scopeId","data-v-67f22710"]]);export{U as default};