"use strict";(self.webpackChunkclient360=self.webpackChunkclient360||[]).push([[383],{99383:function(e,t,a){a.r(t);var n=a(47313),o=a(47825),l=a(42832),i=a(61113),s=a(31095),r=a(41806),c=a(73428),p=a(75419),d=a(85833),x=a(97890),u=a(6210),h=a(67662),g=a(98616),m=a(67848),j=a(85582),b=a(17592),f=a(17551),S=a(71585),Z=a(69937),C=a(50034),v=a(46064),w=a(46417);(0,b.ZP)((e=>(0,w.jsx)(j.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:t}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:(0,f.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));t.default=()=>{const[e,t]=(0,n.useState)([]),[a,j]=n.useState(null),[b,f]=((0,x.s0)(),(0,n.useState)(!1)),[y,N]=(0,n.useState)(!1),[k,I]=(0,n.useState)(null),[M,z]=(0,n.useState)(!1),[O,P]=(0,n.useState)(!1),[A,F]=(0,n.useState)(!1),[R,E]=(0,n.useState)([]),[T,_]=(0,n.useState)(null),[q,J]=(JSON.parse(localStorage.getItem("user")),(0,n.useState)([])),[Q,W]=(0,n.useState)([]);(0,n.useEffect)((()=>{(async()=>{try{const e=await(0,u.ac)("api/contact/getAllAgentContacts");J(e.data.data.contacts)}catch(e){console.log(e)}})()}),[b,M,y,O,A]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m.Z,{open:b,handleClose:()=>f(!1)}),(0,w.jsx)(C.Z,{open:M,handleClose:()=>z(!1),id:k}),(0,w.jsx)(v.Z,{open:y,handleClose:()=>N(!1),data:e}),(0,w.jsx)(Z.Z,{open:O,onClose:()=>P(!1),id:T}),(0,w.jsx)(S.Z,{open:A,onClose:()=>F(!1),id:T}),(0,w.jsxs)(o.Z,{children:[(0,w.jsxs)(l.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,w.jsx)(i.Z,{variant:"h4",children:"Contact-Management"}),(0,w.jsx)(l.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,w.jsx)(s.Z,{variant:"contained",startIcon:(0,w.jsx)(g.Z,{icon:"eva:plus-fill"}),onClick:()=>f(!0),children:"New Contact"})})]}),(0,w.jsx)(h.Z,{children:(0,w.jsx)(r.Z,{width:"100%",children:(0,w.jsxs)(c.Z,{style:{height:"600px",paddingTop:"15px"},children:[(0,w.jsxs)(i.Z,{variant:"h4",sx:{margin:"2px 15px"},children:["Contacts ( ",null===q||void 0===q?void 0:q.length," )"]}),(0,w.jsx)(p._$,{rows:q,columns:[{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"phoneNumber",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email Address",flex:1}],checkboxSelection:!0,getRowId:e=>null===e||void 0===e?void 0:e._id,slots:{toolbar:d.n},slotProps:{toolbar:{showQuickFilter:!0}}})]})})})]})]})}}}]);