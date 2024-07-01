"use strict";(self.webpackChunkclient360=self.webpackChunkclient360||[]).push([[934],{14974:function(e,a,l){var t=l(47313),r=l(31095),i=l(66149),n=l(9019),s=l(1550),o=l(5178),c=l(6856),d=l(74268),h=l(88797),x=l(51405),u=l(24631),p=l(4117),m=l(96467),g=l(97762),j=l(33604),Z=l(61113),v=l(23195),C=l(83929),f=l(79429),b=(l(3463),l(31387)),y=l(35460),w=l(6210),D=l(78830),N=l(46417);a.Z=e=>{const{open:a,handleClose:l}=e,[S,k]=(0,t.useState)([]),[T,_]=(0,t.useState)([]),A=JSON.parse(localStorage.getItem("user"));(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,w.ac)("admin"===A.role?"api/contact/viewallcontacts":`api/contact/viewusercontacts/${A._id}`);"admin"===A.role?k(e.data.contactDetails):k(e.data)}catch(e){console.log(e)}})(),(async()=>{try{const e=await(0,w.ac)("admin"===A.role?"api/lead/viewallleads":`api/lead/viewuserleads/${A._id}`);_(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}})()}),[]);const I=(0,f.TA)({initialValues:{recipient:"default",callDuration:"",startDate:"",endDate:"",callNotes:"",category:"lead"},validationSchema:D.Fv,onSubmit:async(e,a)=>{let{resetForm:t}=a;(async(e,a)=>{e.sender=JSON.parse(localStorage.getItem("user"))._id;try{"contact"===e.category?e.createBy=e.recipient:e.createByLead=e.recipient,200===(await(0,w.Fv)("api/phoneCall/add",e)).status?(b.Am.success("Call Added successfully"),l(),a()):(b.Am.error("Cannot Add Call"),a())}catch(t){b.Am.error("Cannot Add Call"),a()}})(e,t)}});return(0,N.jsx)("div",{children:(0,N.jsxs)(i.Z,{open:a,onClose:l,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,N.jsxs)(j.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,N.jsx)(Z.Z,{variant:"h6",children:"Create Call"}),(0,N.jsx)(Z.Z,{children:(0,N.jsx)(v.Z,{onClick:l,style:{cursor:"pointer"}})})]}),(0,N.jsx)(m.Z,{dividers:!0,sx:{width:"100%",minWidth:"600px"},children:(0,N.jsx)("form",{children:(0,N.jsxs)(g.Z,{id:"scroll-dialog-description",tabIndex:-1,children:[(0,N.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,N.jsxs)(s.Z,{fullWidth:!0,children:[(0,N.jsx)(o.Z,{sx:{marginTop:"2px"},children:"Related To"}),(0,N.jsxs)(c.Z,{row:!0,"aria-label":"category",name:"category",value:I.values.category,onChange:I.handleChange,children:[(0,N.jsx)(C.Z,{value:"contact",control:(0,N.jsx)(d.Z,{}),label:"Contact"}),(0,N.jsx)(C.Z,{value:"lead",control:(0,N.jsx)(d.Z,{}),label:"Lead"})]})]})}),(0,N.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:(0,N.jsxs)(s.Z,{fullWidth:!0,children:[(0,N.jsx)(o.Z,{children:"contact"===I.values.category?"Recipient ( contact )":"Recipient ( lead )"}),(0,N.jsx)(h.Z,{id:"recipient",name:"recipient",label:"",size:"small",fullWidth:!0,value:I.values.recipient,onChange:I.handleChange,error:I.touched.recipient&&Boolean(I.errors.recipient),children:"contact"===I.values.category?[(0,N.jsx)(x.Z,{value:"default",disabled:!0,children:"Assignment To"},"default"),...S.map((e=>(0,N.jsx)(x.Z,{value:e._id,children:e.firstName},e._id)))]:[(0,N.jsx)(x.Z,{value:"default",disabled:!0,children:"Assignment To"},"default"),...T.map((e=>(0,N.jsx)(x.Z,{value:e._id,children:e.leadName},e._id)))]})]})}),(0,N.jsxs)(n.ZP,{item:!0,xs:12,sm:4,md:4,sx:{marginTop:"3px"},children:[(0,N.jsx)(o.Z,{children:"Start Date"}),(0,N.jsx)(u.Z,{id:"startDate",name:"startDate",label:"",type:"date",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:I.values.startDate,onChange:I.handleChange,error:I.touched.startDate&&Boolean(I.errors.startDate),helperText:I.touched.startDate&&I.errors.startDate})]}),(0,N.jsxs)(n.ZP,{item:!0,xs:12,sm:4,md:4,sx:{marginTop:"3px"},children:[(0,N.jsx)(o.Z,{children:"End Date"}),(0,N.jsx)(u.Z,{id:"endDate",name:"endDate",label:"",type:"date",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:I.values.endDate,onChange:I.handleChange,error:I.touched.endDate&&Boolean(I.errors.endDate),helperText:I.touched.endDate&&I.errors.endDate})]}),(0,N.jsxs)(n.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:[(0,N.jsx)(o.Z,{children:"Call Duration"}),(0,N.jsx)(u.Z,{id:"callDuration",name:"callDuration",label:"",size:"small",fullWidth:!0,placeholder:"Enter call duration",value:I.values.callDuration,onChange:I.handleChange,error:I.touched.callDuration&&Boolean(I.errors.callDuration),helperText:I.touched.callDuration&&I.errors.callDuration})]}),(0,N.jsxs)(n.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:[(0,N.jsx)(o.Z,{children:"Notes"}),(0,N.jsx)(u.Z,{id:"callNotes",name:"callNotes",label:"",size:"small",multiline:!0,rows:5,fullWidth:!0,placeholder:"Enter Call notes",value:I.values.callNotes,onChange:I.handleChange,error:I.touched.callNotes&&Boolean(I.errors.callNotes),helperText:I.touched.callNotes&&I.errors.callNotes})]})]})})}),(0,N.jsx)(p.Z,{children:(0,N.jsx)(r.Z,{onClick:I.handleSubmit,variant:"contained",style:{backgroundColor:y.Z.info,color:"#fff"},children:"Add Call"})})]})})}},14934:function(e,a,l){l.r(a);var t=l(97890),r=l(75419),i=l(85833),n=l(98616),s=l(67662),o=l(14281),c=l(47313),d=l(41806),h=l(47825),x=l(42832),u=l(61113),p=l(31095),m=l(73428),g=l(10237),j=l(17592),Z=l(17551),v=l(43997),C=l(85582),f=l(51405),b=l(47131),y=l(14974),w=l(6210),D=l(70816),N=l.n(D),S=l(46417);const k=(0,j.ZP)((e=>(0,S.jsx)(C.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:a}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:a.spacing(1),minWidth:180,color:"light"===a.palette.mode?"rgb(55, 65, 81)":a.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:a.palette.text.secondary,marginRight:a.spacing(1.5)},"&:active":{backgroundColor:(0,Z.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}}}}));a.default=()=>{const[e,a]=(0,c.useState)(!1),[l,j]=(0,c.useState)([]),[Z,C]=(0,c.useState)(""),[D,T]=c.useState(null),_=D,A=(0,t.s0)(),I=JSON.parse(localStorage.getItem("user")),P=()=>{T(null)};(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,w.ac)("admin"===I.role?"api/phoneCall/viewallcalls":`api/phoneCall/viewusercalls/${I._id}`);j(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}})()}),[e]);const R=[{field:"senderName",headerName:"Sender",flex:1,cellClassName:"name-column--cell name-column--cell--capitalize",renderCell:e=>(0,S.jsx)(d.Z,{onClick:()=>{A(`/calls/view/${e.row._id}`)},children:e.value})},{field:"recipientName",headerName:"Recipient",flex:1},{field:"category",headerName:"Realeted To",flex:1},{field:"timestamp",headerName:"Timestamp",flex:1,renderCell:e=>(0,S.jsx)(d.Z,{children:N()(e.row.timestamp).fromNow()})},{field:"startDate",headerName:"Created",flex:1,renderCell:e=>{const a=e.row.startDate;return(0,S.jsx)(d.Z,{children:N().unix(a).format("(MM/DD) hh:mma")})}},{field:"action",headerName:"Action",flex:1,renderCell:e=>(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{children:[(0,S.jsx)(b.Z,{"aria-label":"more",id:"long-button","aria-controls":_?"long-menu":void 0,"aria-expanded":_?"true":void 0,"aria-haspopup":"true",onClick:()=>(e=>{T(e)})(e.row._id),children:(0,S.jsx)(v.Z,{})}),(0,S.jsxs)(k,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:D===e.row._id,open:_===e.row._id,onClose:P,children:[(0,S.jsxs)(f.Z,{onClick:()=>{return a=e.row._id,void A(`/calls/view/${a}`);var a},disableRipple:!0,children:[(0,S.jsx)(g.Z,{style:{marginRight:"8px",color:"green"}}),"View"]}),(0,S.jsxs)(f.Z,{onClick:()=>A(`/dashboard/contact/view/${e.id}`),disableRipple:!0,children:[(0,S.jsx)(o.Z,{style:{marginRight:"8px",color:"black"}}),"Contact"]})]})]})})}];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(y.Z,{open:e,handleClose:()=>a(!1)}),(0,S.jsxs)(h.Z,{children:[(0,S.jsxs)(x.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,S.jsx)(u.Z,{variant:"h4",children:"Calls"}),(0,S.jsx)(x.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,S.jsx)(p.Z,{variant:"contained",startIcon:(0,S.jsx)(n.Z,{icon:"eva:plus-fill"}),onClick:()=>a(!0),children:"New Call"})})]}),(0,S.jsx)(s.Z,{children:(0,S.jsx)(d.Z,{width:"100%",children:(0,S.jsxs)(m.Z,{style:{height:"600px",paddingTop:"15px"},children:[(0,S.jsxs)(u.Z,{variant:"h4",sx:{margin:"2px 15px"},children:["Calls ( ",l.length," )"]}),(0,S.jsx)(r._$,{rows:l,columns:R,checkboxSelection:!0,getRowId:e=>e._id,slots:{toolbar:i.n},slotProps:{toolbar:{showQuickFilter:!0}}})]})})})]})]})}},14281:function(e,a,l){var t=l(64836);a.Z=void 0;var r=t(l(45045)),i=l(46417);a.Z=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle")}}]);