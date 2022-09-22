"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[5508],{"../../pp-atoms/s-pp-step/src/Step.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Offset:()=>Offset,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Step_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),Step=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.tsx"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const StepTemplate=args=>(0,esm.kt)(Step.Z,_extends({},args,{mdxType:"Step"}));StepTemplate.displayName="StepTemplate";const layoutProps={StepTemplate};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"step"},"Step"),(0,esm.kt)("br",null),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,esm.kt)("inlineCode",{parentName:"strong"},"Step")," in has ",(0,esm.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-step")," listed in its\n",(0,esm.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s ",(0,esm.kt)("inlineCode",{parentName:"strong"},"dependencies")," field:")),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-step": "workspace:*"\n    // ...\n  }\n}\n')),(0,esm.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,esm.kt)("inlineCode",{parentName:"p"},"Step")," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,esm.kt)("p",null,"You can then import it like this:"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import Step from '@haaretz/s-step';\n")),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Displays the current step of the user in the subscription process. The ",(0,esm.kt)("inlineCode",{parentName:"p"},"Step"),"\nwill get the args of ",(0,esm.kt)("inlineCode",{parentName:"p"},"currentStep")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"steps")," and needs to match the type\n",(0,esm.kt)("inlineCode",{parentName:"p"},"StepName")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"StepName[]")," respectively."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"Step")," has another argument, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"offset"),", that will be set manually if we\nadded steps for the user, and will be a ",(0,esm.kt)("inlineCode",{parentName:"p"},"number")),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-atoms-step--overview",mdxType:"Story"})),(0,esm.kt)("h3",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{story:"^",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"step-offset"},"Step Offset"),(0,esm.kt)("p",null,"When requesting new data from the server mid-process, new data is unaware of\npast steps already taken, so we sometimes need to adjust our position and the\ntotal number of steps based on that. Doing so can be done useing the ",(0,esm.kt)("inlineCode",{parentName:"p"},"offset"),"\nprop."),(0,esm.kt)("p",null,"So, if after completing the ",(0,esm.kt)("inlineCode",{parentName:"p"},"offer")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"login")," steps the server returns the\nfollowing ",(0,esm.kt)("inlineCode",{parentName:"p"},"steps")," array: ",(0,esm.kt)("inlineCode",{parentName:"p"},"[ 'debt', 'payment', 'thankYou', ]"),", we need to offset\neverything by ",(0,esm.kt)("inlineCode",{parentName:"p"},"2")," to account for the already completed steps of ",(0,esm.kt)("inlineCode",{parentName:"p"},"offer")," and\n",(0,esm.kt)("inlineCode",{parentName:"p"},"login"),":"),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-atoms-step--offset",mdxType:"Story"})))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Step_stories={component:Step.Z,title:"Purchase/Atoms/Step",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1},offset:{control:"number"}},parameters:{docs:{page:MDXContent}}},Overview=args=>__jsx(Step.Z,args);Overview.args={steps:["offer","login","debt","payment","thankYou"],currentStep:"offer"};const Offset=args=>__jsx(Step.Z,(0,esm_extends.Z)({},args,{steps:["debt","payment","thankYou"],currentStep:"debt",offset:2}));Overview.parameters=_objectSpread({storySource:{source:"args => <Step {...args} />"}},Overview.parameters),Offset.parameters=_objectSpread({storySource:{source:"args => (\n  <Step {...args} steps={[ 'debt', 'payment', 'thankYou', ]} currentStep={'debt'} offset={2} />\n)"}},Offset.parameters);const __namedExportsOrder=["Overview","Offset"]},"../../pp-atoms/s-pp-step/src/Step.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"URsRO",textAlign:"kooHYa",fontSize:"hmImpX",lineHeight:"bwFuZl","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},c_current={fontWeight:"iLdtFu"};function Step({currentStep,steps,offset=0}){const numOfSteps=steps.length+offset,stepPositionInArray=steps.indexOf(currentStep),step=-1===stepPositionInArray?NaN:stepPositionInArray+1+offset;return Number.isNaN(step)?null:__jsx("div",{className:(0,style9.Z)(c_base)},__jsx("span",{className:(0,style9.Z)(c_current)},"שלב"," ",step)," ","מתוך"," ",numOfSteps)}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"offer"'},{value:'"login"'},{value:'"payment"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"debt"'},{value:'"validSubscription"'},{value:'"specialSubscription"'}]}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepName[]"}},offset:{defaultValue:{value:"0"},description:"A number to offset the with",name:"offset",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"../../pp-atoms/s-pp-step/src/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);