/*! For license information please see Radii-stories-mdx.224a1875.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[2346],{"../s-ds-stories/src/Radii.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Radii_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_pu76jrox5ef7vkjrotgp34yn6i/node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist=__webpack_require__("../../theme/l-theme-shared/dist/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),SelectSite=__webpack_require__("../s-ds-stories/src/SelectSite.tsx"),__jsx=react.createElement;const classes_table={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",fontFamily:"bnyhBV",marginTop:"EKhXX",tableLayout:"MPjSO",width:"cRUUAa"},classes_head={borderBottomColor:"fWjQS"},classes_rowHead={width:"lksDzB"},classes_cell={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",paddingTop:"bKjKUN",paddingRight:"gcnSZS",paddingBottom:"eayRfw",paddingLeft:"hHZVWs",textAlign:"hgpJrQ"},classes_value={backgroundColor:"fozssY",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",fontFamily:"bZywAt",paddingTop:"kMKXDC",paddingRight:"cVJMrm",paddingBottom:"jOeduE",paddingLeft:"JxWnH",fontSize:"hmImpX",lineHeight:"bwFuZl"},classes_example={backgroundColor:"hMVSpm",height:"dvPYPU",width:"kwVoFT"};function Radii({site="htz"}){const{0:currentSite,1:setSite}=(0,react.useState)(site),siteRadii=dist.pD[currentSite];return __jsx(react.Fragment,null,__jsx(SelectSite.Z,{currentSite,setSite}),__jsx("table",{dir:"ltr",className:(0,style9.Z)(classes_table)},__jsx("thead",null,__jsx("tr",null,__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead,classes_head)},"Name"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Value"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Example"))),__jsx("tbody",null,Object.entries(siteRadii).map((([radiusName,radiusValue])=>{const isCircle="circle"===radiusName,remValue="string"==typeof radiusValue&&radiusValue.endsWith("rem")?radiusValue:"",pxValue=!!remValue&&Number.parseFloat(remValue)*dist.TF,value=`${radiusValue}${pxValue?` (${pxValue}px)`:""}`;return __jsx("tr",{key:radiusName},__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead)},radiusName),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},value)),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("div",{className:(0,style9.Z)(classes_example),style:{borderRadius:radiusValue,width:isCircle?"2.5rem":void 0}})))})))))}try{Radii.displayName="Radii",Radii.__docgenInfo={description:"",displayName:"Radii",props:{site:{defaultValue:{value:"htz"},description:"",name:"site",required:!1,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/Radii.tsx#Radii"]={docgenInfo:Radii.__docgenInfo,name:"Radii",path:"../s-ds-stories/src/Radii.tsx#Radii"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Radii"}),"\n","\n","\n",(0,jsx_runtime.jsx)(esm.h_,{title:"Tokens/Radii"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Border radius tokens are used to give boxes a more subtle, rounded effect. They\nuse rem units so they scale with the base font size. The pixel values displayed\nare based on a 16px font size, which is the default in all modern browsers."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Using some CSS ",(0,jsx_runtime.jsx)(_components.code,{children:"min()"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"max()"})," functions trickery, the tokens also ensure\nthat elements automatically have a ",(0,jsx_runtime.jsx)(_components.code,{children:"border-radius"})," of ",(0,jsx_runtime.jsx)(_components.code,{children:"0"})," if they are the full\nwidth of the viewport."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The idiomatic way to use radius tokens is through the ",(0,jsx_runtime.jsx)(_components.code,{children:"radius"})," function from\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-radius.macro"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import radius from '@haaretz/l-radius.macro';\n\nexport const roundCorners = {\n  borderRadius: radius('medium'),\n};\n"})}),"\n",(0,jsx_runtime.jsx)(Radii,{site:"tm"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Tokens/Radii",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const Radii_stories=componentMeta,__namedExportsOrder=["__page"]},"../s-ds-stories/src/SelectSite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SelectSite});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs");const src_isSite=function isSite(candidate){if(!candidate)return!1;if("string"!=typeof candidate)return!1;switch(candidate){case"htz":case"tm":case"hdc":return!0;default:return!1}};var __jsx=react.createElement;const c_fieldset={borderTopColor:"hJnbij",borderRightColor:"inkqsI",borderBottomColor:"iUJTlr",borderLeftColor:"itSVRh",borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",color:"hBVYrM",display:"gSBWlu",columnGap:"hmmyz",fontFamily:"lffHhj",paddingBottom:"dPFrWx",paddingLeft:"iDuqPI",paddingRight:"ftIldC",width:"efDQIp","@media all and (min-width:64em)":{fontSize:"jYpfGj",lineHeight:"dXCjGe"}},c_legend={borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",letterSpacing:"hzIFrK",marginInlineStart:"BkTRv",paddingTop:"kVZHcH",paddingRight:"cVJMrm",paddingBottom:"iATxZH",paddingLeft:"JxWnH",fontWeight:"iLdtFu"},c_input={appearance:"cBRpiW"},options=["htz","tm","hdc"];function SelectSite({currentSite,setSite}){return __jsx("form",{onChange:function handleChange(evt){const value=evt.target.value;src_isSite(value)&&setSite(value)},dir:"ltr"},__jsx("fieldset",{className:(0,style9.Z)(c_fieldset)},__jsx("legend",{className:(0,style9.Z)(c_legend)},"Select site"),options.map((siteName=>__jsx("label",{key:siteName},__jsx("input",{type:"radio",checked:currentSite===siteName,value:siteName,className:(0,style9.Z)(c_input),id:`method-radio--${siteName}`}),` ${siteName}`)))))}try{SelectSite.displayName="SelectSite",SelectSite.__docgenInfo={description:"",displayName:"SelectSite",props:{currentSite:{defaultValue:null,description:"",name:"currentSite",required:!0,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}},setSite:{defaultValue:null,description:"",name:"setSite",required:!0,type:{name:"Dispatch<SetStateAction<Site>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/SelectSite.tsx#SelectSite"]={docgenInfo:SelectSite.__docgenInfo,name:"SelectSite",path:"../s-ds-stories/src/SelectSite.tsx#SelectSite"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);