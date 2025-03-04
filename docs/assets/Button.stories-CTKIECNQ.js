import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as j}from"./index-DhvbgntC.js";const e=({variant:r,children:M,onclick:b,size:S})=>n.jsx("button",{className:`customBtn btn--${r} btn--${S}`,onClick:b,children:M});e.__docgenInfo={description:"",methods:[],displayName:"CustomButton",props:{variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "info" | "disabled"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'},{name:"literal",value:'"disabled"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"md" | "sm" | "lg"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},onclick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","info"]},size:{control:"select",options:["sm","md","lg"]}},args:{onclick:j()}},a={args:{variant:"primary",children:"Click Me"},render:r=>n.jsx(e,{...r,children:r.children})},s={args:{variant:"secondary",children:"Click Me"},render:r=>n.jsx(e,{...r,children:r.children})},t={args:{variant:"info",children:"Click Me"},render:r=>n.jsx(e,{...r,children:r.children})},o={args:{variant:"disabled",children:"Click Me"},render:r=>n.jsx(e,{...r,children:r.children})},i={args:{variant:"primary",size:"sm",children:"Click Me"},render:r=>n.jsx(e,{...r,children:r.children})};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,v,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "disabled",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,B,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Click Me"
  },
  render: args => <CustomButton {...args}>{args.children}</CustomButton>
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const q=["Primary","Secondary","Info","Disabled","Size"];export{o as Disabled,t as Info,a as Primary,s as Secondary,i as Size,q as __namedExportsOrder,_ as default};
