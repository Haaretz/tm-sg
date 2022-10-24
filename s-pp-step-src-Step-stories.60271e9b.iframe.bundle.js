/*! For license information please see s-pp-step-src-Step-stories.60271e9b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[5508],{"../../pp-atoms/s-pp-step/src/Step.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Offset:()=>Offset,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Step_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),src_Step=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Step"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-step"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-step": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Step from '@haaretz/s-step';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Displays the current step of the user in the subscription process. The ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"}),"\nwill get the args of ",(0,jsx_runtime.jsx)(_components.code,{children:"currentStep"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"steps"})," and needs to match the type\n",(0,jsx_runtime.jsx)(_components.code,{children:"StepName"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"StepName[]"})," respectively."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," has another argument, the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),", that will be set manually if we\nadded steps for the user, and will be a ",(0,jsx_runtime.jsx)(_components.code,{children:"number"})]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"purchase-atoms-step--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Step Offset"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When requesting new data from the server mid-process, new data is unaware of\npast steps already taken, so we sometimes need to adjust our position and the\ntotal number of steps based on that. Doing so can be done useing the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),"\nprop."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["So, if after completing the ",(0,jsx_runtime.jsx)(_components.code,{children:"offer"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"login"})," steps the server returns the\nfollowing ",(0,jsx_runtime.jsx)(_components.code,{children:"steps"})," array: ",(0,jsx_runtime.jsx)(_components.code,{children:"[ 'debt', 'payment', 'thankYou', ]"}),", we need to offset\neverything by ",(0,jsx_runtime.jsx)(_components.code,{children:"2"})," to account for the already completed steps of ",(0,jsx_runtime.jsx)(_components.code,{children:"offer"})," and\n",(0,jsx_runtime.jsx)(_components.code,{children:"login"}),":"]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"purchase-atoms-step--offset"})})]})}const Step_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Step_stories={component:src_Step.Z,title:"Purchase/Atoms/Step",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1},offset:{control:"number"}},parameters:{docs:{page:Step_doc}}},Overview=args=>__jsx(src_Step.Z,args);Overview.args={steps:["offer","login","debt","payment","thankYou"],currentStep:"offer"};const Offset=args=>__jsx(src_Step.Z,(0,esm_extends.Z)({},args,{steps:["debt","payment","thankYou"],currentStep:"debt",offset:2}));Overview.parameters=_objectSpread({storySource:{source:"args => <Step {...args} />"}},Overview.parameters),Offset.parameters=_objectSpread({storySource:{source:"args => (\n  <Step {...args} steps={[ 'debt', 'payment', 'thankYou', ]} currentStep={'debt'} offset={2} />\n)"}},Offset.parameters);const __namedExportsOrder=["Overview","Offset"]},"../../pp-atoms/s-pp-step/src/Step.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"URsRO",textAlign:"kooHYa",fontSize:"hmImpX",lineHeight:"bwFuZl","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},c_current={fontWeight:"iLdtFu"};function Step({currentStep,steps,offset=0}){const numOfSteps=steps.length+offset,stepPositionInArray=steps.indexOf(currentStep),step=-1===stepPositionInArray?NaN:stepPositionInArray+1+offset;return Number.isNaN(step)?null:__jsx("div",{className:(0,style9.Z)(c_base)},__jsx("span",{className:(0,style9.Z)(c_current)},"שלב"," ",step)," ","מתוך"," ",numOfSteps)}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"offer"'},{value:'"login"'},{value:'"payment"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"debt"'},{value:'"validSubscription"'},{value:'"specialSubscription"'}]}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepName[]"}},offset:{defaultValue:{value:"0"},description:"A number to offset the with",name:"offset",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"../../pp-atoms/s-pp-step/src/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);