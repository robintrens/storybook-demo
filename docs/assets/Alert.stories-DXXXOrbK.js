import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-DmM0KDA7.js";const b={primary:"#e0f2fe",secondary:"#e5e7eb",info:"#d1fae5",error:"#fecaca"},a=({variant:r,text:h})=>{const[j,A]=E.useState(!0),S=()=>{A(!1)};return j?e.jsx("div",{className:"page",children:e.jsxs("div",{className:"alert",style:{backgroundColor:b[r]},children:[h,e.jsx("div",{onClick:S,children:e.jsx("img",{className:"close",src:"close.png",alt:"Close"})})]})}):null};a.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "info" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"error"'}]},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const N={component:a},s={args:{text:"this is an alert",variant:"primary"},render:r=>e.jsx(a,{...r})},n={args:{text:"this is an alert",variant:"info"},render:r=>e.jsx(a,{...r})},t={args:{text:"this is an alert",variant:"secondary"},render:r=>e.jsx(a,{...r})},o={args:{text:"this is an alert",variant:"error"},render:r=>e.jsx(a,{...r})};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "this is an alert",
    variant: "primary"
  },
  render: args => {
    return <Alert {...args} />;
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: "this is an alert",
    variant: "info"
  },
  render: args => {
    return <Alert {...args} />;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "this is an alert",
    variant: "secondary"
  },
  render: args => {
    return <Alert {...args} />;
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: "this is an alert",
    variant: "error"
  },
  render: args => {
    return <Alert {...args} />;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const _=["Primary","Info","Secondary","Error"];export{o as Error,n as Info,s as Primary,t as Secondary,_ as __namedExportsOrder,N as default};
