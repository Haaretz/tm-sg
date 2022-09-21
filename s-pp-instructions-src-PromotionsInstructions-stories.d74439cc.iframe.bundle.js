"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[1780],{"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PromotionsInstructions_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),PromotionsInstructions=__webpack_require__("../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PromotionsInstructionsTemplate=args=>(0,esm.kt)(PromotionsInstructions.Z,_extends({},args,{mdxType:"PromotionsInstructions"}));PromotionsInstructionsTemplate.displayName="PromotionsInstructionsTemplate";const layoutProps={PromotionsInstructionsTemplate};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"promotionsinstructions"},"PromotionsInstructions"),(0,esm.kt)("br",null),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,esm.kt)("inlineCode",{parentName:"strong"},"PromotionsInstructions")," in has\n",(0,esm.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-promotions-instructions")," listed in its ",(0,esm.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s\n",(0,esm.kt)("inlineCode",{parentName:"strong"},"dependencies")," field:")),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-promotions-instructions": "workspace:*"\n    // ...\n  }\n}\n')),(0,esm.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,esm.kt)("inlineCode",{parentName:"p"},"PromotionsInstructions")," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,esm.kt)("p",null,"You can then import it like this:"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import PromotionsInstructions from '@haaretz/s-promotions-instructions';\n")),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Page specific opperation instructions"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"PromotionsInstructions")," will get the argument ",(0,esm.kt)("inlineCode",{parentName:"p"},"instructions")," and will be a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-atoms-promotionsinstructions--overview",mdxType:"Story"})),(0,esm.kt)("h3",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{story:"^",mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const PromotionsInstructions_stories={component:PromotionsInstructions.Z,title:"Purchase/Atoms/PromotionsInstructions",args:{instructions:"אנא הזן את כתובת המייל להמשך",inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:MDXContent}}},Overview=args=>__jsx(PromotionsInstructions.Z,args);Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"args => (\n  <PromotionsInstructions {...args} />\n)"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsInstructions});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"jPzznp",textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:80em)":{fontSize:"eaYDgZ",lineHeight:"ispzXF"}};function PromotionsInstructions({instructions}){return instructions?__jsx("p",{className:(0,style9.Z)(c_base)},instructions):null}try{PromotionsInstructions.displayName="PromotionsInstructions",PromotionsInstructions.__docgenInfo={description:"",displayName:"PromotionsInstructions",props:{instructions:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsInstructions>`",name:"instructions",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"]={docgenInfo:PromotionsInstructions.__docgenInfo,name:"PromotionsInstructions",path:"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);