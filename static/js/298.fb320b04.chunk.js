"use strict";(self.webpackChunkmore_moudle_for_app=self.webpackChunkmore_moudle_for_app||[]).push([[298],{6918:function(e,n,s){s.d(n,{Z:function(){return c}});s(2791);var i=s(9126),o=s(8820),a=s(4270),d=s(184);var c=function(e){var n=e.title,s=void 0===n?"":n,c=e.titleJSX,l=e.titleAlign,r=void 0===l?"center":l,t=e.onClickBack,v=e.closeWebOnBack,u=void 0!==v&&v,m=e.onClickMore,h=void 0===m?null:m,x=e.titleClassName,p=e.right;return(0,d.jsxs)("div",{children:[(0,d.jsx)(a.q,{children:(0,d.jsx)("title",{children:s})}),(0,d.jsx)("div",{className:"position bg-main-900"}),(0,d.jsxs)("div",{className:"title-wrap-header bg-main-900",children:[(0,d.jsx)("div",{className:"back-wrap-header absolute",onClick:function(){if(u)return null===t||void 0===t||t(),void PKNativeJS.invoke("exitWebview");t?t():window.history.back()},children:(0,d.jsx)(i.pjk,{size:20})}),(0,d.jsx)("div",{className:"back-wrap-header !px-0 bg-red-500 !w-0"}),(0,d.jsx)("div",{style:{textAlign:r},className:"title-content ".concat(x||""),children:c||s}),p,(0,d.jsx)("div",{className:h?"back-wrap-header":"back-wrap-header !hidden",onClick:function(){return null===h||void 0===h?void 0:h()},children:(0,d.jsx)(o.jfL,{size:22})})]})]})}},3298:function(e,n,s){s.r(n);var i=s(9439),o=s(2791),a=(s(4951),s(1461)),d=s(6918),c=s(7689),l=s(2407),r=s(184);n.default=function(){var e,n,s=(0,c.TH)().state,t=s.publishDay,v=s.initData,u=s.englishWords,m=s.chinese;console.log("ssss",(0,c.TH)());var h=o.useState({}),x=(0,i.Z)(h,2),p=x[0],j=x[1],w=function(){a.Z.post("/pub/forapp/todayHtml",{day:"19941126"}).then((function(e){if(console.log("success",e),null!==e&&void 0!==e&&e.contentJson){var n=JSON.parse(null===e||void 0===e?void 0:e.contentJson),s=n.word,i=n.englishWords,o=n.chinese,a=n.soundmark,d=n.wordDesc,c=n.phrase,l=n.examples,r=n.more;j({word:s,englishWords:i,chinese:o,soundmark:a,wordDesc:d,phrase:c,examples:l,more:r})}})).catch((function(e){console.log(e),setTimeout((function(){return setError("")}),1e3)}))};return o.useEffect((function(){w()}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{title:"\u6bcf\u65e5\u4e00\u53e5",closeWebOnBack:!0}),(null===p||void 0===p?void 0:p.word)&&(0,r.jsxs)("div",{className:"home-wrap",children:[(0,r.jsx)("div",{className:"eng-wrap",children:null===p||void 0===p||null===(e=p.englishWords)||void 0===e?void 0:e.map((function(e,n){return(0,r.jsx)("span",{className:"eng-item",children:"".concat(e," ")},"every-day-word-".concat(n))}))}),(0,r.jsx)("div",{className:"chinese-wrap",children:null===p||void 0===p?void 0:p.chinese}),(0,r.jsxs)("div",{className:"day-words-wrap mb-2",children:[(0,r.jsx)("span",{className:"day-words-border",children:"1"}),(0,r.jsx)("span",{className:"day-words",onClick:function(){return w()},children:"\u4eca\u65e5\u5355\u8bcd"})]}),(0,r.jsxs)("div",{className:"day-word-wrap",children:[(0,r.jsx)("span",{className:"day-word",children:"".concat((null===p||void 0===p?void 0:p.word)||""," ")}),(0,r.jsx)("span",{className:"day-word",children:" ".concat((null===p||void 0===p?void 0:p.soundmark)||"")})]}),((null===p||void 0===p?void 0:p.wordDesc)||[]).map((function(e,n){return(0,r.jsx)("div",{className:"word-desc",children:e},"wordDesc-".concat(n))})),(0,r.jsx)("div",{className:"px-4 mt-8 text-xl",children:"\u77ed\u8bed\uff1a"}),((null===p||void 0===p?void 0:p.phrase)||[]).map((function(e,n){return(0,r.jsxs)("div",{className:"mx-4",children:[(0,r.jsx)("div",{className:"text-main-100",children:null===e||void 0===e?void 0:e.en}),(0,r.jsx)("div",{className:"text-main-200",children:null===e||void 0===e?void 0:e.ch})]},"phrase-".concat(n))})),(0,r.jsx)("div",{className:"px-4 mt-8 text-xl",children:"\u4f8b\u53e5\uff1a"}),((null===p||void 0===p?void 0:p.examples)||[]).map((function(e,n){return(0,r.jsxs)("div",{className:"mx-4",children:[(0,r.jsx)("div",{className:"text-main-100",children:null===e||void 0===e?void 0:e.en}),(0,r.jsx)("div",{className:"text-main-200",children:null===e||void 0===e?void 0:e.ch})]},"examples-".concat(n))})),((null===p||void 0===p||null===(n=p.more)||void 0===n?void 0:n.length)||0)>0&&""!==p.more[0]&&(0,r.jsxs)("div",{className:"day-words-wrap pt-6",children:[(0,r.jsx)("span",{className:"day-words-border",children:"1"}),(0,r.jsx)("span",{className:"day-words",children:"\u5355\u8bcd\u8fa8\u6790"})]}),((null===p||void 0===p?void 0:p.more)||[]).map((function(e,n){return""===e?null:(0,r.jsxs)("div",{className:"more-item my-6 mx-4",children:[n+1,". ",e]},"more-".concat(n))}))]}),(0,r.jsx)("div",{className:"button-wrap mx-3 my-8 flex justify-center items-center",onClick:function(){8===(null===t||void 0===t?void 0:t.length)?"object"===typeof v?a.Z.post("/pub/forapp/addDayAWord",{day:t,en:u,ch:m,contentJson:JSON.stringify(v)}).then((function(e){l.FN.show({content:"\u53d1\u5e03\u6210\u529f"})})).catch((function(e){l.FN.show({content:e}),console.log(e)})):l.FN.show({content:"\u6570\u636e\u683c\u5f0f\u9519\u8bef"}):l.FN.show({content:"\u53d1\u5e03\u65e5\u671f\u957f\u5ea6\u9700\u89818\u4f4d"})},children:"\u53d1\u5e03\u5230\u751f\u4ea7\u73af\u5883"})]})}},4951:function(){}}]);