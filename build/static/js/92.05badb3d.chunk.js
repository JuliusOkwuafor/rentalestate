"use strict";(self.webpackChunkclient360=self.webpackChunkclient360||[]).push([[92],{30092:function(e,l,r){r.r(l);var i=r(47313),n=r(41806),a=r(61113),d=r(31095),t=r(47825),o=r(73428),s=r(6210),c=(r(78830),r(75419)),u=r(85833),h=r(70816),x=r.n(h),g=r(67662),v=r(97890),f=r(46417);l.default=()=>{const e=(0,v.s0)();(0,i.useEffect)((()=>{h()}),[]);const[l,r]=(0,i.useState)([]),h=async()=>{try{const e=await(0,s.ac)("api/llm//llmleadCalls");r(e.data.result)}catch(e){console.log(e)}};const p=[{field:"Call Id",headerName:"Call Id",flex:1,renderCell:e=>{var l;return(0,f.jsx)(n.Z,{children:(null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.call_id.substring(0,12))+"..."})}},{field:"Agent Id",headerName:"Agent Id",flex:1,renderCell:e=>{var l;return(0,f.jsx)(n.Z,{children:(null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.agent_id.substring(0,12))+"..."})}},{field:"Caller Number",headerName:"Caller Number",flex:1,renderCell:e=>{var l;return(0,f.jsx)(n.Z,{children:null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.caller_number})}},{field:"Lead",headerName:"Lead",flex:1,renderCell:e=>{var l,r;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(f.Fragment,{children:"Positive"==(null===e||void 0===e||null===(l=e.row)||void 0===l||null===(r=l.call_analysis)||void 0===r?void 0:r.agent_sentiment)?(0,f.jsxs)(n.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,f.jsx)(n.Z,{width:"10px",borderRadius:"100%",height:"10px",style:{background:"#90EE90",color:"#5e35b1"}}),(0,f.jsx)(a.Z,{style:{color:"#90EE90"},children:"Lead"})]}):(0,f.jsxs)(n.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,f.jsx)(n.Z,{width:"10px",borderRadius:"100%",height:"10px",style:{background:"#850101",color:"#5e35b1"}}),(0,f.jsx)(a.Z,{style:{color:"#850101"},children:"No Lead"})]})})})}},{field:"Details",headerName:"Details",flex:1,renderCell:l=>(0,f.jsx)(d.Z,{padding:1,borderRadius:1,onClick:()=>e(`/dashboard/inbound-calls/view/${l.row.call_id}`),display:"flex",justifyContent:"center",alignItems:"center",style:{background:"#ede7f6",color:"#5e35b1"},children:"View"})},{field:"Date",headerName:"Date",flex:1,renderCell:e=>{var l;return(0,f.jsx)(a.Z,{style:{color:"black"},children:x()(null===e||void 0===e||null===(l=e.row)||void 0===l?void 0:l.start_time).format("h:mm A DD-MM-YYYY")})}}];return(0,f.jsx)(t.Z,{children:(0,f.jsx)(g.Z,{children:(0,f.jsxs)(o.Z,{style:{height:"750px",padding:"15px"},children:[(0,f.jsx)(a.Z,{variant:"h5",fontSize:"20px",gutterBottom:!0,children:"Call Inbound"}),l&&(0,f.jsx)(c._$,{rows:l,columns:p,getRowId:e=>null===e||void 0===e?void 0:e.call_id,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},slots:{toolbar:u.n},pageSizeOptions:[5,10],slotProps:{toolbar:{showQuickFilter:!0}}})]})})})}}}]);