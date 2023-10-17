"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[6256],{"../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterRecommendationsList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>NewsletterRecommendationsList_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),UserRecommendation_mock=__webpack_require__("../../mocks/l-mocks/src/gql/UserRecommendation.mock.ts"),preview=__webpack_require__("../../config/l-storybook-config/preview.js"),src=__webpack_require__("../../utils/s-pp-storybook-providers/src/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),src_NewsletterRecommendationsList=__webpack_require__("../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterRecommendationsList.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"newsletterrecommendationslist",children:"NewsletterRecommendationsList"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"NewsletterRecommendationsList"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-newsletter-recommendations-list"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s\n",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-newsletter-recommendations-list": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"NewsletterRecommendationsList"})," without listing\nit as a dependency will work in dev mode, but will fail in production. There\nshould be a ",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it\nis not listed as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import NewsletterRecommendationsList from '@haaretz/s-newsletter-recommendations-list';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A list of newsletter registration reccomendations. Use the\n",(0,jsx_runtime.jsx)(_components.code,{children:"useUserRecommendationsPersonalQuery"})," hook to get Card's data."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"organisms-newsletterrecommendationslist--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}const NewsletterRecommendationsList_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c_lightCardWrapper={backgroundColor:"kfThfC"},meta={component:src_NewsletterRecommendationsList.Z,title:"Organisms/NewsletterRecommendationsList",args:{newsLetterRecommendations:UserRecommendation_mock.Z},argTypes:{},parameters:{docs:{page:NewsletterRecommendationsList_doc}},decorators:[src.Z,...preview.an]},Overview=args=>(0,jsx_runtime.jsx)(src_NewsletterRecommendationsList.Z,_objectSpread({},args));Overview.decorators=[function backgroundDecorator(StoryToDecorate,context){const{viewMode,id}=context,waitTime="story"===viewMode?0:500,classes=(0,style9.Z)(c_lightCardWrapper).split(" ");return setTimeout((()=>{let storyContainer=document.documentElement;if("docs"===viewMode){const storyElement=document.getElementById(`story--${id}`);storyContainer=null==storyElement?void 0:storyElement.closest(".docs-story")}storyContainer&&(storyContainer.style.backgroundColor="",storyContainer.classList.add(...classes))}),waitTime),(0,jsx_runtime.jsx)(StoryToDecorate,{})},...preview.an];const NewsletterRecommendationsList_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <NewsletterRecommendationsList {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})})},"../../ds-atoms/s-layout-container/src/LayoutContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutContainer,p:()=>DEFAULT_ELEMENT});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const _excluded=["as","bgc","children","inlineStyle","childSpacing","styleExtend"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const classNames={base:{"--contentWidth":"AaQVF","--LayoutContainerGutter":"fZqkIO","--inlineMargin":"iiWdGh","--_lcbgc":"gfwYfV",backgroundColor:"bZhsMg",display:"kbCXHY",gridTemplateColumns:"euYQzU",rowGap:"gJhpvu",width:"cRUUAa","@media all and (min-width:37.5em) and (max-width:47.9375em)":{"--contentWidth":"bOJATL","--LayoutContainerGutter":"glFmOE",rowGap:"hBEtUR"},"@media all and (min-width:48em) and (max-width:63.9375em)":{"--contentWidth":"bwgSsv","--LayoutContainerGutter":"iWxHnZ",rowGap:"eZBYXB"},"@media all and (min-width:64em) and (max-width:79.9375em)":{"--contentWidth":"jJQtMM","--LayoutContainerGutter":"hAOfjT",rowGap:"djUFJS"},"@media all and (min-width:80em) and (max-width:101.9375em)":{"--contentWidth":"EozEF","--LayoutContainerGutter":"dOIBSz",rowGap:"lmjPOP"},"@media all and (min-width:102em)":{"--contentWidth":"fXDMoc","--LayoutContainerGutter":"hzVbVG",rowGap:"hmSCJu"}}},DEFAULT_ELEMENT="div";function LayoutContainer(props){const{as=DEFAULT_ELEMENT,bgc,children=null,inlineStyle,childSpacing,styleExtend=[]}=props,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),Element=as,backgroundColor=bgc?{"--_lcbgc":`var(--LayoutContainerBackgroundColor, ${bgc})`}:{},spacingVars={};if(childSpacing)for(const bp of Object.keys(childSpacing)){const value=childSpacing[bp];value&&(spacingVars[`--childSpacing${bp[0].toUpperCase()+bp.slice(1)}`]=value)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(classNames.base,...styleExtend),style:_objectSpread(_objectSpread(_objectSpread({},backgroundColor),spacingVars),inlineStyle)},attrs),{},{children}))}try{LayoutContainer.displayName="LayoutContainer",LayoutContainer.__docgenInfo={description:"",displayName:"LayoutContainer",props:{as:{defaultValue:null,description:"The HTML element (`string`) or React component\nthe `<LayoutContainer />` will be rendered as.",name:"as",required:!0,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"p"'},{value:'"section"'}]}},bgc:{defaultValue:null,description:"A color value for the background of the entire row, which\nwill bleed out all the way to the edge of the screen (so not\njust the contained layout area). Must be the output of the `color` macro.",name:"bgc",required:!1,type:{name:"ThemeColor | undefined"}},children:{defaultValue:null,description:"The Children to render inside the `<LayoutContainer>`",name:"children",required:!1,type:{name:"ReactNode"}},childSpacing:{defaultValue:null,description:"Changes the default vertical spacing between *children*\nof the container (e.g., the space between list views on the Homepage)\n@remarks * Internal vertical spacing between the container's children\n  is set using the `row-gap` property. This means that an\n  individual child element can override the spacing around it\n  by using top and bottom margins (including negative margins)\n* Takes an object with an (optional) value for each breakpoint,\n  meaning it's possible to change the default vertical spacing\n  only for one or several specific breakpoints.\n@example ```ts\nimport space from '@haaretz/l-space.macro';\nimport s9 from 'style9';\nfunction MyLayoutContainer(props) {\n  // This will only affect the default spacing\n  // between the `l` and `xl` breakpoints\n  return <LayoutContainer childSpacing={{ l: space(8) }}/>;\n}\n```",name:"childSpacing",required:!1,type:{name:"ChildSpacing | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyLayoutContainer(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <LayoutContainer\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<LayoutContainer styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-layout-container/src/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:LayoutContainer.__docgenInfo,name:"LayoutContainer",path:"../../ds-atoms/s-layout-container/src/LayoutContainer.tsx#LayoutContainer"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-layout-container/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-layout-container/src/LayoutContainer.tsx").Z},"../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterRecommendationsList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NewsletterRecommendationsList});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_haaretz_s_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),_haaretz_s_layout_container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../ds-atoms/s-layout-container/src/index.ts"),_haaretz_s_use_bi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../hooks/s-use-bi/src/index.ts"),style9__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),_NewsletterCard__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterCard.tsx");const _excluded=["newsLetterRecommendations","styleExtend","email"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c={lc:{"@media all and (min-width:102em)":{"--contentWidth":"fagErb"}},base:{gridColumnStart:"jrBSXg"},titleWrapper:{marginBottom:"hlBtvm",fontFamily:"cGpNyn","@media all and (min-width:80em)":{marginBottom:"kWlGOG"}},blue:{backgroundColor:"fIcjCT",height:"kQPKLM",marginBottom:"idMVCD",width:"iLYBKc","@media all and (min-width:64em) and (max-width:79.9375em)":{height:"YDPer",width:"iRKfJP"},"@media all and (min-width:80em) and (max-width:101.9375em)":{height:"cAIJBk",width:"fRuwCB"},"@media all and (min-width:102em)":{height:"judZtd",marginBottom:"bxkjVM",width:"jmzkN"}},listTitle:{marginBottom:"idMVCD",fontSize:"kMkSmA",lineHeight:"QGZZw","@media all and (min-width:48em) and (max-width:63.9375em)":{fontSize:"ePMUBr",lineHeight:"dCGjCZ"},"@media all and (min-width:102em)":{fontSize:"jLiuzX",lineHeight:"cSZpZl"}},li:{display:"gSBWlu"},p:{fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:48em) and (max-width:79.9375em)":{fontSize:"gdErGa",lineHeight:"cgzOpx"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},recommendationsList:{display:"kbCXHY",marginBottom:"biWxPv",rowGap:"gtFPZM",width:"cRUUAa","@media all and (min-width:37.5em) and (max-width:63.9375em)":{columnGap:"kZIvIq",gridTemplateRows:"czmAqa",gridTemplateColumns:"cFGhpp",rowGap:"cnqIqB"},"@media all and (min-width:64em)":{gridTemplateColumns:"fGlwvS",marginBottom:"eXKwzp"},"@media all and (min-width:64em) and (max-width:79.9375em)":{columnGap:"eKklo"},"@media all and (min-width:80em) and (max-width:101.9375em)":{columnGap:"fEzPid"},"@media all and (min-width:102em)":{columnGap:"heLiXv"}},button:{justifyContent:"IVbXa",textAlign:"kooHYa"}};function NewsletterRecommendationsList(_ref){let{newsLetterRecommendations,styleExtend=[],email}=_ref,props=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);const recommendationsToDisplay=null==newsLetterRecommendations?void 0:newsLetterRecommendations.filter((newsletter=>newsletter.description)).slice(0,4),biAction=(0,_haaretz_s_use_bi__WEBPACK_IMPORTED_MODULE_4__.Z)();return null!=newsLetterRecommendations&&newsLetterRecommendations.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_layout_container__WEBPACK_IMPORTED_MODULE_5__.Z,{as:"section",styleExtend:[c.lc,...styleExtend],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.base),"data-testid":"newsletter-rec-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.titleWrapper),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.blue)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.listTitle),"data-testid":"newsletter-list-title",children:"דיוורים מומלצים"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.p),"data-testid":"newsletter-list-description",children:"קבלו את התכנים שמעניינים אתכם ישירות לתיבת המייל"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.recommendationsList),"data-testid":"newsletter-cards-ul",children:recommendationsToDisplay.map((recommendation=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.li),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NewsletterCard__WEBPACK_IMPORTED_MODULE_6__.Z,_objectSpread({cardData:recommendation,email},props))},recommendation.tagNumber)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.button),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{as:"a","data-testid":"for-all-newsletters-btn",onClick:()=>{const biData="function"==typeof props.getBiData?props.getBiData():props.biData;biData&&biAction(_objectSpread(_objectSpread({},biData),{},{action_id:169,feature:"Link to newsletter page",feature_type:"Content"}))},href:"https://www.haaretz.co.il/newsletter/single?segmentId=0000017e-1ac0-dd6c-a7fe-3ac80b9b0000",children:"לכל הדיוורים"})})]})}):null}try{NewsletterRecommendationsList.displayName="NewsletterRecommendationsList",NewsletterRecommendationsList.__docgenInfo={description:"",displayName:"NewsletterRecommendationsList",props:{newsLetterRecommendations:{defaultValue:null,description:"",name:"newsLetterRecommendations",required:!0,type:{name:"UserRecommendationFragment[]"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},biData:{defaultValue:null,description:"",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}},getBiData:{defaultValue:null,description:"",name:"getBiData",required:!1,type:{name:"(() => BiDataOverrides) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterRecommendationsList.tsx#NewsletterRecommendationsList"]={docgenInfo:NewsletterRecommendationsList.__docgenInfo,name:"NewsletterRecommendationsList",path:"../../ds-organisms/s-newsletter-recommendations-list/src/NewsletterRecommendationsList.tsx#NewsletterRecommendationsList"})}catch(__react_docgen_typescript_loader_error){}},"../../mocks/l-mocks/src/gql/UserRecommendation.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=[{__typename:"Segment",image:{__typename:"htz_image_Image",contentId:"00000181-1e4a-da8b-a19f-ffcb88390001",alt:"איור של צוללן גולש בנייד באתר דה מרקר ",link:null,photographer:null,type:"image",credit:null,caption:null,files:[{__typename:"ImageViewModel_ImageFile",height:300,path:"da/08/d88abb664936b841388151e0f045/tm-600x300.png",width:600,crops:{__typename:"ImageCrops",square:{__typename:"ImageCrop",height:300,width:300,x:138,y:0}}}]},site:"tm",contentId:"0000017e-1b71-d2ef-a1ff-7ff14c1f0000",description:"רותם שטרקמן, בוחר עבורכם את כל הסיפורים המעניינים והפרשנויות הכלכליות, שכדאי לכם לדעת על היום שהיה בכלכלה.",frequency:"daily",segmentName:"מידע פנים",subscribersOnly:!1,tagNumber:"1044946",title:"מידע פנים"},{__typename:"Segment",image:{__typename:"htz_image_Image",contentId:"00000180-65e2-dc5d-a1cd-75fb638a0001",alt:"המלצות קריאה ",link:null,photographer:null,type:"image",credit:null,caption:null,files:[{__typename:"ImageViewModel_ImageFile",height:1467,path:"47/75/46a68e9d4e559cbbbb30a490daab/המלצות-קריאה-דה-מרקר.jpg",width:2200,crops:{__typename:"ImageCrops",square:null}}]},site:"tm",contentId:"0000017e-1b74-d2ef-a1ff-7ff4f9350000",description:"כל החדשות הכלכליות, העדכונים והפרשנויות - וכל מה שאי אפשר לפתוח את היום בלעדיו - הירשמו עכשיו לדיוור היומי.",frequency:"daily",segmentName:"המלצות קריאה באתר TheMarker",subscribersOnly:!1,tagNumber:"677030",title:"כל מה שחשוב הבוקר בכלכלה ובעסקים"},{__typename:"Segment",image:{__typename:"htz_image_Image",contentId:"00000180-6ef2-d129-af9e-6ffa9c340001",alt:"טקניישן",link:null,photographer:null,type:"image",credit:"טקניישן",caption:null,files:[{__typename:"ImageViewModel_ImageFile",height:488,path:"e4/fa/0ed9518f40a28f5c4d221d86d9c9/טקניישן.jpg",width:840,crops:{__typename:"ImageCrops",square:null}}]},site:"tm",contentId:"0000017e-1b78-d2ef-a1ff-7ff8284b0000",description:"סיכום שבועי של הדברים הכי חשובים שקרו בשבוע שחלף בהיי-טק, עם התובנות והניתוחים של עמרי זרחוביץ'",frequency:"weekly",segmentName:"TechNation",subscribersOnly:!1,tagNumber:"677046",title:"קריירה, טכנולוגיה וכל מה שמעסיק את ההיי-טק הישראלי אצלכם במייל"},{__typename:"Segment",image:{__typename:"htz_image_Image",contentId:"00000180-6efd-d47f-ab80-effd47520001",alt:"חוף ים",link:null,photographer:null,type:"image",credit:"דב גרינבלט / החברה",caption:"חוף ים",files:[{__typename:"ImageViewModel_ImageFile",height:1323,path:"15/fa/d435c86a4a328437e2cec90f7b68/נדלן.jpg",width:2200,crops:{__typename:"ImageCrops",square:null}}]},site:"tm",contentId:"0000017e-1b79-d2ef-a1ff-7ff94a220000",description:'פרויקטים חדשים, תכניות בינוי, דעות, תחזיות, הדיווחים, הניתוחים והמאמרים על עולם הנדל"ן בארץ ובעולם',frequency:"twiceAWeek",segmentName:'נדל"ן',subscribersOnly:!1,tagNumber:"677050",title:'הכתבות הכי מעניינות במדור נדל"ן. ישירות למייל שלכם'},{__typename:"Segment",image:{__typename:"htz_image_Image",contentId:"00000181-1f80-dc27-a1df-bf86094c0000",alt:"איור של צוללן עם פנס ",link:null,photographer:null,type:"image",credit:null,caption:null,files:[{__typename:"ImageViewModel_ImageFile",height:351,path:"8e/f8/b086be954c2bafd3ce7a5ce7305a/dafna-newsletter-no-text.png",width:601,crops:{__typename:"ImageCrops",square:null}}]},site:"tm",contentId:"0000017e-1b7c-d2ef-a1ff-7ffcc70d0000",description:"המשברים, ההזדמנויות והסיפורים הגדולים שמסתתרים בין השורות: דפנה מאור מציגה את הנושא הכי מדובר כרגע בכלכלה העולמית, וממליצה על מיטב הניתוחים, הפרשנויות והחדשות של TheMarker, וגם של בלומברג, אקונומיסט ועוד. הירשמו עכשיו",frequency:"twiceAWeek",segmentName:"כלכלה עולמית",subscribersOnly:!0,tagNumber:"1045274",title:"כל מה שחייבים לדעת על מה שקורה עכשיו בכלכלה העולמית"}]},"../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);