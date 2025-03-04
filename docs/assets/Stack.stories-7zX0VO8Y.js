import{j as n}from"./jsx-runtime-D_zvdyIk.js";const i=({children:e,orientaion:r,responsive:o})=>{const h={horizondal:{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:o?"wrap":"nowrap"},vertical:{display:"flex",flexDirection:"column",gap:"1rem"}};return n.jsx("div",{className:"page",children:n.jsx("div",{style:{width:"50%",border:"1px solid #e2e2e2",padding:"5px"},children:n.jsx("div",{className:"stack",style:{...h[r]},children:e})})})};i.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{orientaion:{required:!0,tsType:{name:"union",raw:'"horizondal" | "vertical"',elements:[{name:"literal",value:'"horizondal"'},{name:"literal",value:'"vertical"'}]},description:""},responsive:{required:!0,tsType:{name:"boolean"},description:""}}};const x={component:i,tags:["autodocs"],argTypes:{orientaion:{control:"select",options:["horizondal","vertical"]},noOfChildren:{control:"select",options:[5,10,15,20]},responsive:{control:"boolean"}},args:{noOfChildren:5,responsive:!1}},a={args:{orientaion:"horizondal"},render:({noOfChildren:e,...r})=>n.jsx(i,{...r,children:u(e)})},t={args:{orientaion:"vertical"},render:({noOfChildren:e,...r})=>n.jsx(i,{...r,children:u(e)})};function u(e){return Array(e).fill(null).map((r,o)=>n.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"red",animationDelay:`${o*.1}s`}},o))}var s,l,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientaion: "horizondal"
  },
  render: ({
    noOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientaion: "vertical"
  },
  render: ({
    noOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["Horizondal","vertical"];export{a as Horizondal,f as __namedExportsOrder,x as default,t as vertical};
