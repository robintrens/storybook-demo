import{j as e}from"./jsx-runtime-D_zvdyIk.js";const s=({title:i,isOpen:h,children:j,size:q})=>e.jsx("div",{className:`modal__overlay ${h?"show":"hide"}`,children:e.jsxs("div",{className:`modal__wrapper ${q}`,children:[e.jsxs("div",{className:"modal__header",children:[e.jsx("div",{children:i}),e.jsx("div",{children:e.jsx("button",{className:"close",children:e.jsx("img",{src:"close.svg",alt:""})})})]}),e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"modal__body",children:j})]})});s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!0,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""}}};const L={component:s,tags:["autodocs"]},r={args:{isOpen:!0,size:"sm",title:"Title 1"},render:i=>e.jsx(s,{...i,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit sapiente illo in alias incidunt."})},a={args:{isOpen:!0,size:"md",title:"Title 2"},render:i=>e.jsx(s,{...i,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit sapiente illo in alias incidunt asperiores, excepturi doloribus ratione iure voluptatum aspernatur eum est expedita, commodi, sed harum at consequuntur voluptate laudantium recusandae et a. A ducimus, corporis rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt minus officia id?"})},t={args:{isOpen:!0,size:"lg",title:"Title 3"},render:i=>e.jsx(s,{...i,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit sapiente illo in alias incidunt asperiores, excepturi doloribus ratione iure voluptatum aspernatur eum est expedita, commodi, sed harum at consequuntur voluptate laudantium recusandae et a. A ducimus, corporis rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt minus officia id?"})},n={args:{isOpen:!0,size:"xl",title:"Title 4"},render:i=>e.jsx(s,{...i,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit sapiente illo in alias incidunt asperiores, excepturi doloribus ratione iure voluptatum aspernatur eum est expedita, commodi, sed harum at consequuntur voluptate laudantium recusandae et a. A ducimus, corporis rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt minus officia id?"})};var u,o,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    size: "sm",
    title: "Title 1"
  },
  render: args => <Modal {...args}>\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit\r
      sapiente illo in alias incidunt.\r
    </Modal>
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    size: "md",
    title: "Title 2"
  },
  render: args => <Modal {...args}>\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit\r
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione\r
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at\r
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis\r
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt\r
      minus officia id?\r
    </Modal>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    size: "lg",
    title: "Title 3"
  },
  render: args => <Modal {...args}>\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit\r
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione\r
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at\r
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis\r
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt\r
      minus officia id?\r
    </Modal>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,b,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    size: "xl",
    title: "Title 4"
  },
  render: args => <Modal {...args}>\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit\r
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione\r
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at\r
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis\r
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt\r
      minus officia id?\r
    </Modal>
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const M=["Small","Medium","Large","ExtraLarge"];export{n as ExtraLarge,t as Large,a as Medium,r as Small,M as __namedExportsOrder,L as default};
