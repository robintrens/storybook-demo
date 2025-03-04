import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{f as j}from"./index-DhvbgntC.js";const n=({variant:e,children:x,onclick:M,size:b})=>r.jsx("div",{className:"customWrapper",children:r.jsx("button",{className:`customBtn btn--${e} btn--${b}`,onClick:M,children:x})});n.__docgenInfo={description:"",methods:[],displayName:"CustomButton",props:{variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "info" | "disabled"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"disabled"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"md" | "sm" | "lg"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},onclick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","info"]},size:{control:"select",options:["sm","md","lg"]}},args:{onclick:j()}},s={args:{variant:"primary",children:"Click Me",size:"sm"},render:e=>r.jsx(n,{...e,children:e.children})},a={args:{variant:"secondary",children:"Click Me",size:"sm"},render:e=>r.jsx(n,{...e,children:e.children})},i={args:{variant:"info",children:"Click Me",size:"sm"},render:e=>r.jsx(n,{...e,children:e.children})},t={args:{variant:"disabled",children:"Click Me",size:"sm"},render:e=>r.jsx(n,{...e,children:e.children})},o={args:{variant:"primary",size:"sm",children:"Click Me"},render:e=>r.jsx(n,{...e,children:e.children})};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Click Me",
    size: "sm"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Click Me",
    size: "sm"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Click Me",
    size: "sm"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,y,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "disabled",
    children: "Click Me",
    size: "sm"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,k,B;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const q=["Primary","Secondary","Info","Disabled","Size"];export{t as Disabled,i as Info,s as Primary,a as Secondary,o as Size,q as __namedExportsOrder,_ as default};
