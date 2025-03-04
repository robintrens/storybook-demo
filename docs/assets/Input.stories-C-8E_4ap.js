import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-DmM0KDA7.js";import{f as R}from"./index-DhvbgntC.js";const t=({type:e,placeholder:c,value:l,onChange:g,className:f,id:y,name:T,disabled:x,required:h,min:q,max:w,step:b,pattern:v,minLength:j,maxLength:I,autoComplete:E,readOnly:_})=>{const[a,C]=P.useState(!1);function N(){C(L=>!L)}return r.jsx("div",{className:"page",children:r.jsxs("div",{className:`customInput__wrapper ${f||""}`,children:[r.jsx("input",{className:"customInput__control",type:e==="text"?e:e==="password"&&a?"text":e,placeholder:c,value:l,onChange:g,id:y,name:T,disabled:x,required:h,min:q,max:w,step:b,pattern:v,minLength:j,maxLength:I,autoComplete:E,readOnly:_}),e==="password"&&r.jsx("button",{onClick:N,children:a?r.jsx("img",{src:"eye-open.svg",alt:""}):r.jsx("img",{src:"eye-close.svg",alt:""})})]})})};t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},min:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},pattern:{required:!1,tsType:{name:"string"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const O={tags:["autodocs"],component:t,args:{onChange:R()}},n={args:{type:"text",placeholder:"Name"},render:e=>r.jsx(t,{...e})},s={args:{type:"password",placeholder:"Password"},render:e=>r.jsx(t,{...e})};var i,o,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Name"
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Password"
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Text","Password"];export{s as Password,n as Text,k as __namedExportsOrder,O as default};
