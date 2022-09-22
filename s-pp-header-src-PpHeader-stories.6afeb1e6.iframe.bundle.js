"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[7534],{"../../pp-molecules/s-pp-header/src/PpHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderWithNoInstructions:()=>HeaderWithNoInstructions,HeaderWithNoNotice:()=>HeaderWithNoNotice,HeaderWithNoSteps:()=>HeaderWithNoSteps,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PpHeader_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js");const s_pp_step_src=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"offer"'},{value:'"login"'},{value:'"payment"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"debt"'},{value:'"validSubscription"'},{value:'"specialSubscription"'}]}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepName[]"}},offset:{defaultValue:{value:"0"},description:"A number to offset the with",name:"offset",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-step/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}const s_pp_title_src=__webpack_require__("../../pp-atoms/s-pp-title/src/PageTitle.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-title/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-title/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}const s_pp_instructions_src=__webpack_require__("../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{instructions:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsInstructions>`",name:"instructions",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-instructions/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-instructions/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}const s_pp_system_notices_src=__webpack_require__("../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{notices:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsSystemNotices>`",name:"notices",required:!1,type:{name:"string[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notices/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-system-notices/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={textAlign:"kooHYa",marginTop:"sJymt",marginRight:"jdraHW",marginBottom:"hcJKTR",marginLeft:"eqrBPF",maxWidth:"kVGdDm","@media all and (min-width:80em)":{marginTop:"bIoXqI",marginRight:"bicvBL",marginBottom:"gJBoWW",marginLeft:"lcdcNu",maxWidth:"dDsFUf"}},c_headerTextArea={marginTop:"iqhvfj","@media all and (min-width:80em)":{marginTop:"lcDVHj"}};function PpHeader({currentStep,steps,title,instructions,notices,offset}){return __jsx("header",{className:(0,style9.Z)(c_base)},__jsx(s_pp_step_src,{currentStep,steps,offset}),__jsx("div",{className:(0,style9.Z)(c_headerTextArea)},__jsx(s_pp_title_src,null,title),__jsx(s_pp_instructions_src,{instructions}),__jsx(s_pp_system_notices_src,{notices})))}try{PpHeader.displayName="PpHeader",PpHeader.__docgenInfo={description:"",displayName:"PpHeader",props:{currentStep:{defaultValue:null,description:"The Current Step of the user, can be chosen out of these steps.",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"offer"'},{value:'"login"'},{value:'"payment"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"debt"'},{value:'"validSubscription"'},{value:'"specialSubscription"'}]}},offset:{defaultValue:null,description:"offset is a number that can be manually set to change the user\nStep number of a certain array of steps plus the offset",name:"offset",required:!1,type:{name:"number | undefined"}},steps:{defaultValue:null,description:'The steps is an array that will be set out of these:\n`"offer"`,\n`"login"`\n`"payment"`\n`"thankYou"`\n`"updateDetails"`\n`"debt"`\n`"validSubscription"`\n`"specialSubscription"`',name:"steps",required:!0,type:{name:"StepName[]"}},title:{defaultValue:null,description:"The title of the Promotion page",name:"title",required:!0,type:{name:"string"}},instructions:{defaultValue:null,description:"instructions, will be set as a string || undefined",name:"instructions",required:!1,type:{name:"string | undefined"}},notices:{defaultValue:null,description:"notices will be set as an array of strings.",name:"notices",required:!1,type:{name:"string[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-molecules/s-pp-header/src/PpHeader.tsx#PpHeader"]={docgenInfo:PpHeader.__docgenInfo,name:"PpHeader",path:"../../pp-molecules/s-pp-header/src/PpHeader.tsx#PpHeader"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PpHeaderTemplate=args=>(0,esm.kt)(PpHeader,_extends({},args,{mdxType:"PpHeader"}));PpHeaderTemplate.displayName="PpHeaderTemplate";const layoutProps={PpHeaderTemplate};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"ppheader"},"PpHeader"),(0,esm.kt)("br",null),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,esm.kt)("inlineCode",{parentName:"strong"},"PpHeader")," in has ",(0,esm.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-pp-header")," listed\nin its ",(0,esm.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s ",(0,esm.kt)("inlineCode",{parentName:"strong"},"dependencies")," field:")),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-header": "workspace:*"\n    // ...\n  }\n}\n')),(0,esm.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,esm.kt)("inlineCode",{parentName:"p"},"PpHeader")," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,esm.kt)("p",null,"You can then import it like this:"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import PpHeader from '@haaretz/s-pp-header';\n")),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"PpHeader")," is a presentational component that renders or omits it's children\nbased on data passed to it through props."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre"},"<PpHeader\n      currentStep='debt'\n      steps={[ 'debt', 'login', 'payment', 'thankYou', ]}\n      title='כמעט סיימנו'\n      instructions='אנא מלא את כתובת המייל'\n      notices={[ 'כמנוי על חבילת סוף שבוע מוצגים מחירים לאחר הנחה']}\n      offset={2} />;\n")),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-molecules-ppheader--overview",mdxType:"Story"})),(0,esm.kt)("h3",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{story:"^",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"variants"},"Variants"),(0,esm.kt)("p",null,"There would be instances that we won't have any notices passed. In that case,\nthe notices will not be rendered."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-molecules-ppheader--header-with-no-notice",mdxType:"Story"})),(0,esm.kt)("p",null,"Another instance, is that we won't have any instructions for the user. In that\ncase, we won't render the instructions."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-molecules-ppheader--header-with-no-instructions",mdxType:"Story"})),(0,esm.kt)("p",null,"In a case that the user is on a currentStep that is not given in the array of\nsteps, the Step component, will not be rendered."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"purchase-molecules-ppheader--header-with-no-steps",mdxType:"Story"})))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var PpHeader_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const PpHeader_stories={component:PpHeader,title:"Purchase/Molecules/PpHeader",args:{},argTypes:{styleExtend:{control:!1},instructions:{control:"text"},offset:{control:"number"}},parameters:{docs:{page:MDXContent}}},Overview=args=>PpHeader_stories_jsx(PpHeader,args);Overview.args={currentStep:"debt",steps:["debt","thankYou","login","payment"],title:"כמעט סיימנו",instructions:"כעת השלימו את ההרשמה לאתר",notices:["כמנוי על חבילת סוף שבוע מוצגים מחירים לאחר הנחה:"," עוד משפט פה מוצגים מחירים לאחר הנחה:"]};const HeaderWithNoNotice=args=>PpHeader_stories_jsx(PpHeader,args);HeaderWithNoNotice.args={currentStep:"debt",steps:["debt","thankYou","login","payment"],title:"כמעט סיימנו",instructions:"כעת השלימו את ההרשמה לאתר"};const HeaderWithNoInstructions=args=>PpHeader_stories_jsx(PpHeader,args);HeaderWithNoInstructions.args={currentStep:"debt",steps:["debt","thankYou","login","payment"],title:"כמעט סיימנו",notices:["כמנוי על חבילת סוף שבוע מוצגים מחירים לאחר הנחה:"," עוד משפט פה מוצגים מחירים לאחר הנחה:"]};const HeaderWithNoSteps=args=>PpHeader_stories_jsx(PpHeader,args);HeaderWithNoSteps.args={currentStep:"offer",steps:["debt","thankYou","login","payment"],title:"כמעט סיימנו",notices:["כמנוי על חבילת סוף שבוע מוצגים מחירים לאחר הנחה:"," עוד משפט פה מוצגים מחירים לאחר הנחה:"]},Overview.parameters=_objectSpread({storySource:{source:"args => <PpHeader {...args} />"}},Overview.parameters),HeaderWithNoNotice.parameters=_objectSpread({storySource:{source:"args => <PpHeader {...args} />"}},HeaderWithNoNotice.parameters),HeaderWithNoInstructions.parameters=_objectSpread({storySource:{source:"args => (\n  <PpHeader {...args} />\n)"}},HeaderWithNoInstructions.parameters),HeaderWithNoSteps.parameters=_objectSpread({storySource:{source:"args => <PpHeader {...args} />"}},HeaderWithNoSteps.parameters);const __namedExportsOrder=["Overview","HeaderWithNoNotice","HeaderWithNoInstructions","HeaderWithNoSteps"]},"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsInstructions});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"jPzznp",textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:80em)":{fontSize:"eaYDgZ",lineHeight:"ispzXF"}};function PromotionsInstructions({instructions}){return instructions?__jsx("p",{className:(0,style9.Z)(c_base)},instructions):null}try{PromotionsInstructions.displayName="PromotionsInstructions",PromotionsInstructions.__docgenInfo={description:"",displayName:"PromotionsInstructions",props:{instructions:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsInstructions>`",name:"instructions",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"]={docgenInfo:PromotionsInstructions.__docgenInfo,name:"PromotionsInstructions",path:"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-step/src/Step.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"URsRO",textAlign:"kooHYa",fontSize:"hmImpX",lineHeight:"bwFuZl","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},c_current={fontWeight:"iLdtFu"};function Step({currentStep,steps,offset=0}){const numOfSteps=steps.length+offset,stepPositionInArray=steps.indexOf(currentStep),step=-1===stepPositionInArray?NaN:stepPositionInArray+1+offset;return Number.isNaN(step)?null:__jsx("div",{className:(0,style9.Z)(c_base)},__jsx("span",{className:(0,style9.Z)(c_current)},"שלב"," ",step)," ","מתוך"," ",numOfSteps)}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"offer"'},{value:'"login"'},{value:'"payment"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"debt"'},{value:'"validSubscription"'},{value:'"specialSubscription"'}]}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepName[]"}},offset:{defaultValue:{value:"0"},description:"A number to offset the with",name:"offset",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"../../pp-atoms/s-pp-step/src/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotice});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"jPzznp",textAlign:"kooHYa",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"}};function PromotionsSystemNotice({notice}){return notice?__jsx("p",{className:(0,style9.Z)(c_base)},notice):null}try{PromotionsSystemNotice.displayName="PromotionsSystemNotice",PromotionsSystemNotice.__docgenInfo={description:"",displayName:"PromotionsSystemNotice",props:{notice:{defaultValue:null,description:"The text to render inside `<PromotionsSystemNotice>`",name:"notice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"]={docgenInfo:PromotionsSystemNotice.__docgenInfo,name:"PromotionsSystemNotice",path:"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotices});const s_pp_system_notice_src=__webpack_require__("../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{notice:{defaultValue:null,description:"The text to render inside `<PromotionsSystemNotice>`",name:"notice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notice/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-system-notice/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={marginTop:"cyerGB"};function PromotionsSystemNotices({notices}){return notices&&notices.length?__jsx("div",{className:(0,style9.Z)(c_base)},notices.map((notice=>__jsx(s_pp_system_notice_src,{notice,key:notice})))):null}try{PromotionsSystemNotices.displayName="PromotionsSystemNotices",PromotionsSystemNotices.__docgenInfo={description:"",displayName:"PromotionsSystemNotices",props:{notices:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsSystemNotices>`",name:"notices",required:!1,type:{name:"string[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"]={docgenInfo:PromotionsSystemNotices.__docgenInfo,name:"PromotionsSystemNotices",path:"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-title/src/PageTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PageTitle});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"iLdtFu",textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:80em)":{fontSize:"eaYDgZ",lineHeight:"ispzXF"}};function PageTitle({children}){return __jsx("h1",{className:(0,style9.Z)(c_base)},children)}try{PageTitle.displayName="PageTitle",PageTitle.__docgenInfo={description:"",displayName:"PageTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"]={docgenInfo:PageTitle.__docgenInfo,name:"PageTitle",path:"../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);