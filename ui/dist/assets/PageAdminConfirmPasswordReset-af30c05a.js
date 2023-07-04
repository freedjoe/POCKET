import{S as E,i as G,s as I,F as K,c as A,m as B,t as N,a as T,d as h,C as M,q as J,e as c,w as q,b as C,f as u,r as L,g as b,h as _,u as j,v as O,j as Q,l as U,o as w,A as V,p as W,B as X,D as Y,x as Z,z as S}from"./index-ffcb1193.js";function y(f){let e,o,s;return{c(){e=q("for "),o=c("strong"),s=q(f[3]),u(o,"class","txt-nowrap")},m(l,t){b(l,e,t),b(l,o,t),_(o,s)},p(l,t){t&8&&Z(s,l[3])},d(l){l&&w(e),l&&w(o)}}}function x(f){let e,o,s,l,t,r,p,d;return{c(){e=c("label"),o=q("New password"),l=C(),t=c("input"),u(e,"for",s=f[8]),u(t,"type","password"),u(t,"id",r=f[8]),t.required=!0,t.autofocus=!0},m(n,i){b(n,e,i),_(e,o),b(n,l,i),b(n,t,i),S(t,f[0]),t.focus(),p||(d=j(t,"input",f[6]),p=!0)},p(n,i){i&256&&s!==(s=n[8])&&u(e,"for",s),i&256&&r!==(r=n[8])&&u(t,"id",r),i&1&&t.value!==n[0]&&S(t,n[0])},d(n){n&&w(e),n&&w(l),n&&w(t),p=!1,d()}}}function ee(f){let e,o,s,l,t,r,p,d;return{c(){e=c("label"),o=q("New password confirm"),l=C(),t=c("input"),u(e,"for",s=f[8]),u(t,"type","password"),u(t,"id",r=f[8]),t.required=!0},m(n,i){b(n,e,i),_(e,o),b(n,l,i),b(n,t,i),S(t,f[1]),p||(d=j(t,"input",f[7]),p=!0)},p(n,i){i&256&&s!==(s=n[8])&&u(e,"for",s),i&256&&r!==(r=n[8])&&u(t,"id",r),i&2&&t.value!==n[1]&&S(t,n[1])},d(n){n&&w(e),n&&w(l),n&&w(t),p=!1,d()}}}function te(f){let e,o,s,l,t,r,p,d,n,i,g,F,P,v,k,R,z,m=f[3]&&y(f);return r=new J({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:a})=>({8:a}),({uniqueId:a})=>a?256:0]},$$scope:{ctx:f}}}),d=new J({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:a})=>({8:a}),({uniqueId:a})=>a?256:0]},$$scope:{ctx:f}}}),{c(){e=c("form"),o=c("div"),s=c("h4"),l=q(`Reset your admin password
                `),m&&m.c(),t=C(),A(r.$$.fragment),p=C(),A(d.$$.fragment),n=C(),i=c("button"),g=c("span"),g.textContent="Set new password",F=C(),P=c("div"),v=c("a"),v.textContent="Back to login",u(s,"class","m-b-xs"),u(o,"class","content txt-center m-b-sm"),u(g,"class","txt"),u(i,"type","submit"),u(i,"class","btn btn-lg btn-block"),i.disabled=f[2],L(i,"btn-loading",f[2]),u(e,"class","m-b-base"),u(v,"href","/login"),u(v,"class","link-hint"),u(P,"class","content txt-center")},m(a,$){b(a,e,$),_(e,o),_(o,s),_(s,l),m&&m.m(s,null),_(e,t),B(r,e,null),_(e,p),B(d,e,null),_(e,n),_(e,i),_(i,g),b(a,F,$),b(a,P,$),_(P,v),k=!0,R||(z=[j(e,"submit",O(f[4])),Q(U.call(null,v))],R=!0)},p(a,$){a[3]?m?m.p(a,$):(m=y(a),m.c(),m.m(s,null)):m&&(m.d(1),m=null);const D={};$&769&&(D.$$scope={dirty:$,ctx:a}),r.$set(D);const H={};$&770&&(H.$$scope={dirty:$,ctx:a}),d.$set(H),(!k||$&4)&&(i.disabled=a[2]),(!k||$&4)&&L(i,"btn-loading",a[2])},i(a){k||(N(r.$$.fragment,a),N(d.$$.fragment,a),k=!0)},o(a){T(r.$$.fragment,a),T(d.$$.fragment,a),k=!1},d(a){a&&w(e),m&&m.d(),h(r),h(d),a&&w(F),a&&w(P),R=!1,V(z)}}}function se(f){let e,o;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){A(e.$$.fragment)},m(s,l){B(e,s,l),o=!0},p(s,[l]){const t={};l&527&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){o||(N(e.$$.fragment,s),o=!0)},o(s){T(e.$$.fragment,s),o=!1},d(s){h(e,s)}}}function le(f,e,o){let s,{params:l}=e,t="",r="",p=!1;async function d(){if(!p){o(2,p=!0);try{await W.admins.confirmPasswordReset(l==null?void 0:l.token,t,r),X("Successfully set a new admin password."),Y("/")}catch(g){W.error(g)}o(2,p=!1)}}function n(){t=this.value,o(0,t)}function i(){r=this.value,o(1,r)}return f.$$set=g=>{"params"in g&&o(5,l=g.params)},f.$$.update=()=>{f.$$.dirty&32&&o(3,s=M.getJWTPayload(l==null?void 0:l.token).email||"")},[t,r,p,s,d,l,n,i]}class ae extends E{constructor(e){super(),G(this,e,le,se,I,{params:5})}}export{ae as default};
