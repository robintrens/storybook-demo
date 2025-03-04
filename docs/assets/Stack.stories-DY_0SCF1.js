import{j as n}from"./jsx-runtime-D_zvdyIk.js";const t=({children:e,orientaion:r,responsive:i})=>{const h={horizondal:{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:i?"wrap":"nowrap"},vertical:{display:"flex",flexDirection:"column",gap:"1rem"}};return n.jsx("div",{style:{width:"50%",border:"1px solid #e2e2e2",padding:"5px"},children:n.jsx("div",{style:{...h[r]},children:e})})};t.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{orientaion:{required:!0,tsType:{name:"union",raw:'"horizondal" | "vertical"',elements:[{name:"literal",value:'"horizondal"'},{name:"literal",value:'"vertical"'}]},description:""},responsive:{required:!0,tsType:{name:"boolean"},description:""}}};const x={component:t,tags:["autodocs"],argTypes:{orientaion:{control:"select",options:["horizondal","vertical"]},noOfChildren:{control:"select",options:[5,10,15,20]},responsive:{control:"boolean"}},args:{noOfChildren:5,responsive:!1}},o={args:{orientaion:"horizondal"},render:({noOfChildren:e,...r})=>n.jsx(t,{...r,children:m(e)})},a={args:{orientaion:"vertical"},render:({noOfChildren:e,...r})=>n.jsx(t,{...r,children:m(e)})};function m(e){return Array(e).fill(null).map((r,i)=>n.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"red"}},i))}var s,l,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientaion: "horizondal"
  },
  render: ({
    noOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientaion: "vertical"
  },
  render: ({
    noOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["Horizondal","vertical"];export{o as Horizondal,f as __namedExportsOrder,x as default,a as vertical};
