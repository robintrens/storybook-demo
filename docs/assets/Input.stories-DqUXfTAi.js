import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{f as j}from"./index-DhvbgntC.js";const t=({type:e,placeholder:u,value:c,onChange:l,className:g,id:y,name:f,disabled:T,required:q,min:h,max:x,step:b,pattern:w,minLength:I,maxLength:v,autoComplete:E,readOnly:_})=>s.jsx("div",{className:`customInput__wrapper ${g||""}`,children:s.jsx("input",{className:"customInput__control",type:e,placeholder:u,value:c,onChange:l,id:y,name:f,disabled:T,required:q,min:h,max:x,step:b,pattern:w,minLength:I,maxLength:v,autoComplete:E,readOnly:_})});t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},min:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},pattern:{required:!1,tsType:{name:"string"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const L={tags:["autodocs"],component:t,args:{onChange:j()}},r={args:{type:"text",placeholder:"Name"},render:e=>s.jsx(t,{...e})},n={args:{type:"password",placeholder:"Password"},render:e=>s.jsx(t,{...e})};var a,i,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Name"
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Password"
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const P=["Text","Password"];export{n as Password,r as Text,P as __namedExportsOrder,L as default};
