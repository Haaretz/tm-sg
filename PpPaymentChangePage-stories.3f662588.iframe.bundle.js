"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[2612],{"../../pp-pages/s-pp-paymentChange-page/src/PpPaymentChangePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PpPaymentChangePage_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../utils/s-pp-storybook-providers/src/index.ts"),preview=__webpack_require__("../../config/l-storybook-config/preview.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),s_pp_payment_iframe_src=__webpack_require__("../../pp-molecules/s-pp-payment-iframe/src/index.ts"),s_pp_instructions_src=__webpack_require__("../../pp-atoms/s-pp-instructions/src/index.ts"),s_pp_image_src=__webpack_require__("../../pp-atoms/s-pp-image/src/index.ts"),s_logo_loading_indicator_src=__webpack_require__("../../ds-atoms/s-logo-loading-indicator/src/index.ts"),s_pp_secure_payment_src=__webpack_require__("../../pp-molecules/s-pp-secure-payment/src/index.ts"),__jsx=react.createElement;const c={wrapper:{backgroundColor:"hXoEex",fontFamily:"cGpNyn"},header:{paddingTop:"jtxNXy",paddingBottom:"izetJs","@media all and (max-width:79.9375em)":{backgroundColor:"jZxMEQ",paddingTop:"iJzzRB",paddingBottom:"dxqNwO"}},title:{fontFamily:"cGpNyn"},hidden:{visibility:"dWytAe"},loader:{width:"cRUUAa",visibility:"esoNju",justifyContent:"IVbXa",marginTop:"EKhXX",fontSize:"hGtIwE",position:"bEvNbr"},bottomPart:{paddingBottom:"ezeWHd"},image:{alignSelf:"duSHeH",display:"kQBRAp",fontSize:"hlSaYl",marginBottom:"kEhtav",marginTop:"kNiTYT",marginInlineStart:"bMPiZO",marginInlineEnd:"gzedBA",transform:"llUSp","@media all and (min-width:80em)":{fontSize:"jMPHzp",marginInlineStart:"griTvt",marginTop:"btTWBP",transform:"xUBak"}}};function PpPaymentChangePage_page_PpPaymentChangePage(){const[isLoading,setIsLoading]=react.useState(!0);return __jsx("div",{className:(0,style9.Z)(c.wrapper)},__jsx("header",{className:(0,style9.Z)(c.header)},__jsx(s_pp_instructions_src.Z,{instructions:"הזינו את פרטי כרטיס האשראי",styleExtend:[c.title]}),null),__jsx("div",{className:(0,style9.Z)(c.bottomPart,isLoading&&c.hidden)},isLoading&&__jsx(s_logo_loading_indicator_src.Z,{styleExtend:[c.loader]}),__jsx(s_pp_payment_iframe_src.Z,{kind:"change",setLoading:setIsLoading}),__jsx(s_pp_secure_payment_src.Z,null)),__jsx(s_pp_image_src.Z,{styleExtend:[c.image]}))}const PpPaymentChangePage_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"pppaymentchangepage",children:"PpPaymentChangePage"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpPaymentChangePage"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-paymentChange-page"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-paymentChange-page": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpPaymentChangePage"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpPaymentChangePage from '@haaretz/s-pp-paymentChange-page';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:" Purchase app offers page"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase/pages-PpPaymentChangePage--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n"]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3;react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:PpPaymentChangePage_page_PpPaymentChangePage,title:"Purchase/Pages/PpPaymentchangePage",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:PpPaymentChangePage_doc}},decorators:[src.Z,...preview.an]},Overview=()=>react.createElement(PpPaymentChangePage_page_PpPaymentChangePage,null),PpPaymentChangePage_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"() => <PpPaymentChangePage />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../hooks/s-use-bi/src/useBiDataContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BiDataContextProvider,Z:()=>useBiDataContext});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts"),usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx"),src=__webpack_require__("../../hooks/s-use-config/src/index.ts"),use_user=__webpack_require__("../../hooks/s-use-user/src/use-user/index.ts");const s_use_page_type_src=function usePageType(){return"promotions-page"===(0,src.Z)().get("appType")?"promotions":void 0};var capitalize=__webpack_require__("../../utils/s-common-utils/src/capitalize/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const noop=()=>{};react.createElement;const BiDataContext=react.createContext(void 0);function BiDataContextProvider(_ref){let{children}=_ref;const biData=function useCollectBiData(){const _window="undefined"!=typeof window?window:void 0,usePurchasePageDataStore="promotions-page"===(0,src.Z)().get("appType")?usePPDataStore.JV:noop,user=(0,use_user.Z)(),page_type=s_use_page_type_src(),ppDataStore=usePurchasePageDataStore(),currentPageUrl=_window?new URL(_window.document.URL):void 0,urlSearchParams=new URLSearchParams(null==_window?void 0:_window.location.search),{anonymousId:anonymous_id,extendedType:user_type}=user.data||{},urlParamsObj=Array.from(urlSearchParams.entries()).reduce(((acc,_ref)=>{let[key,value]=_ref;return _objectSpread(_objectSpread({},acc),{},{[key]:value})}),{}),{utm_medium,htm_medium,utm_content,htm_content,utm_source,htm_source,utm_campaign,htm_campaign,utm_segment,utm_type,htm_type}=urlParamsObj;return Promise.all([]).then((function(){var _window$document;return(0,discardNullableValues.Z)({anonymous_id,user_type,site:null==currentPageUrl?void 0:currentPageUrl.origin,url:null==currentPageUrl?void 0:currentPageUrl.href,page_type:page_type&&(0,capitalize.Z)(page_type),article_id:void 0,writer_name:void 0,article_type:void 0,primary_section:void 0,secondary_section:void 0,paywall_status:void 0,blocked:void 0,ad_block_state:void 0,platform:void 0,useragent:null==_window?void 0:_window.navigator.userAgent,utm_medium:utm_medium||htm_medium,utm_content:utm_content||htm_content,utm_source:utm_source||htm_source,utm_campaign:utm_campaign||htm_campaign,utm_type:utm_type||htm_type,referrer_type:null==_window||null===(_window$document=_window.document)||void 0===_window$document?void 0:_window$document.referrer,prod_no:null==ppDataStore?void 0:ppDataStore.productNumber,sale_code:null==ppDataStore?void 0:ppDataStore.saleCode,promotions_no:null==ppDataStore?void 0:ppDataStore.promotionNumber,stage:void 0,action_id:void 0,feature:void 0,feature_type:void 0,personal_feature:void 0,campaign_name:void 0,campaign_details:void 0,scroll_height:void 0,ab_test_group:void 0,ab_test_name:void 0,additional_info:void 0,next_article_id:void 0,next_article_teaser_id:void 0,next_article_noinlist:void 0,recommendation_type:void 0,next_article_viewname:void 0,next_article_list_name:void 0,next_article_list_id:void 0,next_article_noinpage:void 0,newsletter_segment_id:void 0,newsletter_segment_name:void 0,newsletter_email:void 0,darkmode:void 0,utm_segment,marketing_element:void 0})}))}();return react.createElement(BiDataContext.Provider,{value:biData},children)}function useBiDataContext(){const context=react.useContext(BiDataContext);if(void 0===context)throw new Error("useBiDataContext must be used within a BiDataContext.");return context}try{BiDataContextProvider.displayName="BiDataContextProvider",BiDataContextProvider.__docgenInfo={description:"",displayName:"BiDataContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"]={docgenInfo:BiDataContextProvider.__docgenInfo,name:"BiDataContextProvider",path:"../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"../../hooks/s-use-config/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../hooks/s-use-config/src/useConfig.ts").Z},"../../hooks/s-use-config/src/useConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ConfigContext,Z:()=>useConfig});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ConfigContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function useConfig(){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(ConfigContext);if(void 0===context)throw new Error("useConfig must be used within a ConfigContext");return context}},"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsInstructions});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"jPzznp",fontFamily:"cGpNyn",textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:48em) and (max-width:79.9375em)":{fontSize:"laszXO",lineHeight:"jjEZxM"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"dZvUak",lineHeight:"bynegB"},"@media all and (min-width:102em)":{fontSize:"jLiuzX",lineHeight:"cSZpZl"}};function PromotionsInstructions(_ref){let{instructions,inlineStyle,styleExtend=[]}=_ref;return instructions?__jsx("p",{className:(0,style9.Z)(c_base,...styleExtend),id:"pp-page-instructions",style:inlineStyle,"data-testid":"pp-instructions"},instructions):null}try{PromotionsInstructions.displayName="PromotionsInstructions",PromotionsInstructions.__docgenInfo={description:"",displayName:"PromotionsInstructions",props:{instructions:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsInstructions>`",name:"instructions",required:!1,type:{name:"string | null | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"]={docgenInfo:PromotionsInstructions.__docgenInfo,name:"PromotionsInstructions",path:"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-instructions/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx").Z},"../../pp-hooks/s-use-pp-data-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx").ZP},"../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx").ZP},"../../utils/s-pp-storybook-providers/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_pp_storybook_providers_src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/index.ts"),s_use_pp_offset_steps_store_src=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx"),useConfig=__webpack_require__("../../hooks/s-use-config/src/useConfig.ts"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js");react.createElement;const s_pp_storybook_providers_src=function withProviders(Story,context){return react.createElement(useConfig.E.Provider,{value:configShim.Z},react.createElement(src.ZP,null,react.createElement(s_use_pp_offset_steps_store_src.ZP,null,react.createElement(useBiDataContext.i,null,react.createElement(Story,context)))))}}}]);