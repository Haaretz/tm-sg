"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[6169],{"../../pp-molecules/s-pp-offer-toggle/src/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../utils/s-pp-storybook-providers/src/index.ts"),preview=__webpack_require__("../../config/l-storybook-config/preview.js"),src_Toggle=__webpack_require__("../../pp-molecules/s-pp-offer-toggle/src/Toggle.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const Toggle_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Toggle"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-toggle"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-toggle": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Toggle"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Toggle from '@haaretz/s-pp-offer-toggle';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Toggle to switch between monthly and yearly offer cards."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-molecules-offertoggle--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3;react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_Toggle.Z,title:"Purchase/Molecules/OfferToggle",args:{monthly:["תשלום חודשי"],yearly:["תשלום שנתי","הכי משתלם"]},argTypes:{},parameters:{docs:{page:Toggle_doc}},decorators:[src.Z,...preview.an]},Overview=args=>react.createElement(src_Toggle.Z,args),Toggle_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Toggle {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../ds-molecules/s-radio-group/src/RadioGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>DEFAULT_ELEMENT,Z:()=>src_RadioGroup});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../hooks/s-use-radio-group-state/src/index.ts");const _excluded=["as","children","groupName","state","isRequired","isInvalid","inlineStyle","styleExtend","labelInlineStyle","labelStyleExtend","labelText","orientation","isUnstyled","defaultValue","onChange"];var __jsx=react.createElement;const c={base:{"--lbl-c":"leHlzj",display:"gSBWlu",flexWrap:"kiDYix",columnGap:"kEFtPS",rowGap:"eSylHt"},verticalOrientation:{flexDirection:"iMkoWi",flexWrap:"fyjYdE"},horizontalOrientation:{flexDirection:"dugTDd",flexWrap:"kiDYix"},errorState:{"--lbl-c":"kflLcy"},label:{color:"lleaHT",fontWeight:"iLdtFu",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},labelRequired:{"::after":{content:"JMIrS",color:"hClXwE"}}},DEFAULT_ELEMENT="fieldset";function RadioGroup(_ref){let{as,children,groupName,state="enabled",isRequired,isInvalid,inlineStyle,styleExtend=[],labelInlineStyle,labelStyleExtend=[],labelText,orientation="vertical",isUnstyled=!1,defaultValue,onChange}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const isStyled=!isUnstyled,defaultGroupName=react.useId(),labelId=react.useId(),radioGroupRef=react.useRef(null),[firstRadioButton,setFirstRadioButton]=react.useState(null);react.useEffect((()=>{if(radioGroupRef.current){const firstRadioFromDom=radioGroupRef.current.querySelector('input[type="radio"]');firstRadioFromDom&&setFirstRadioButton(firstRadioFromDom)}}),[]);const WrapperElement=as||DEFAULT_ELEMENT,a11yOverride={role:"radiogroup","aria-disabled":"disabled"===state||void 0,"aria-readonly":"read-only"===state||void 0,"aria-errormessage":isInvalid?attrs["aria-errormessage"]:void 0,"aria-invalid":isInvalid||void 0,"aria-orientation":orientation,"aria-required":isRequired||void 0,"aria-labelledby":attrs["aria-labelledby"]||(labelText?labelId:void 0),"aria-describedby":isInvalid?void 0:attrs["aria-describedby"]};return __jsx(WrapperElement,(0,esm_extends.Z)({},attrs,a11yOverride,{style:inlineStyle,className:(0,style9.Z)(isStyled&&c.base,isStyled&&("vertical"===orientation?c.verticalOrientation:c.horizontalOrientation),isInvalid&&c.errorState,...styleExtend),ref:radioGroupRef}),labelText?__jsx("span",{id:labelId,className:(0,style9.Z)(isStyled&&c.label,isRequired&&c.labelRequired,...labelStyleExtend),style:labelInlineStyle},labelText):null,__jsx(src.w,{defaultValue,isRequired,firstRadioButton,onChange,name:null!=groupName?groupName:defaultGroupName,state},children))}const src_RadioGroup=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<RadioGroup>`",name:"children",required:!1,type:{name:"ReactNode"}},isInvalid:{defaultValue:null,description:"Marks the group as invalid being in an invalid state.",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},state:{defaultValue:{value:"enabled"},description:"The functional state of the group",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},isRequired:{defaultValue:null,description:"Marks the `<RadioGroup>` as requiring a selection",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},labelText:{defaultValue:null,description:"Text to visually label the `<RadioGroup>` with.",name:"labelText",required:!1,type:{name:"string | undefined"}},isUnstyled:{defaultValue:{value:"false"},description:"Remove all styling from the component and turns it\ninto one that purely manages state and accessibility.\n\nUse in conjucntion with `styleExtend`, `inlineStyle`,\n`labelStyleExtend` and `labelInlineStyle` to add your\nown styles to the wrapper and label elements rendered\nby the component.",name:"isUnstyled",required:!1,type:{name:"boolean | undefined"}},groupName:{defaultValue:null,description:"The shared `name` attribute to assign to all radio buttons in the group",name:"groupName",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:{value:"vertical"},description:"Sets the orientation of the radio-buttons in the group,\nboth visually (as long as `isUnstyled` is not set) and to\nscreen readers.\n@defaultValue 'vertical'",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},onChange:{defaultValue:null,description:"A callback fired whenever a radio button is checked.\nPassed the value of the checked input and the html element.",name:"onChange",required:!1,type:{name:"((value: T, checkedElement: HTMLInputElement) => void) | undefined"}},defaultValue:{defaultValue:null,description:"The value of the radio button that is checked by default.",name:"defaultValue",required:!1,type:{name:"string | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nwrapper html element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     labelStyleExtend={[ labelStyleExtend, ]}\n     labelInlineStyle={labelInlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()` which will\nextend the default styles assigned to the wrapper element.\n\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\n\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},labelInlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nlabel's html element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { labelStyleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const labelInlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     labelStyleExtend={[ labelStyleExtend, ]}\n     labelInlineStyle={labelInlineStyle}\n   />\n  );\n}\n```",name:"labelInlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},labelStyleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()` which will\nextend the default styles assigned to the label element.\n\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\n\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton labelStyleExtend={[ someCondition && foo, bar, ]} />\n```",name:"labelStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'ComponentType<any> | "aside" | "div" | "fieldset" | "section" | "span" | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-radio-group/src/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"../../ds-molecules/s-radio-group/src/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-molecules/s-radio-group/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-molecules/s-radio-group/src/RadioGroup.tsx").Z},"../../hooks/s-use-bi/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_use_bi_src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../hooks/s-use-config/src/index.ts"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx");const s_use_bi_src=function useBi(){let biUrl,biType=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action";const config=(0,src.Z)(),biServer=config.get("bIServer");switch(biType){case"impression":biUrl="".concat(biServer,"/impressionPlain");break;case"pageview":biUrl="".concat(biServer,"/requestPlain");break;default:biUrl="".concat(biServer,"/actionPlain")}const contextBiDataPromise=(0,useBiDataContext.Z)(),collectData=react.useCallback((userBiData=>{contextBiDataPromise.then((contextBiData=>{var _window$navigator;const{additional_info}=userBiData;additional_info&&"object"==typeof additional_info&&(userBiData.additional_info=JSON.stringify(additional_info));const finalBiData=Object.assign({},contextBiData,userBiData);null===(_window$navigator=window.navigator)||void 0===_window$navigator||_window$navigator.sendBeacon(biUrl,JSON.stringify(finalBiData))}))}),[biUrl,contextBiDataPromise]);return collectData}},"../../hooks/s-use-bi/src/useBiDataContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BiDataContextProvider,Z:()=>useBiDataContext});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts"),usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx"),src=__webpack_require__("../../hooks/s-use-config/src/index.ts"),use_user=__webpack_require__("../../hooks/s-use-user/src/use-user/index.ts");const s_use_page_type_src=function usePageType(){return"promotions-page"===(0,src.Z)().get("appType")?"promotions":void 0};var capitalize=__webpack_require__("../../utils/s-common-utils/src/capitalize/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const noop=()=>{};react.createElement;const BiDataContext=react.createContext(void 0);function BiDataContextProvider(_ref){let{children}=_ref;const biData=function useCollectBiData(){const _window="undefined"!=typeof window?window:void 0,usePurchasePageDataStore="promotions-page"===(0,src.Z)().get("appType")?usePPDataStore.JV:noop,user=(0,use_user.Z)(),page_type=s_use_page_type_src(),ppDataStore=usePurchasePageDataStore(),currentPageUrl=_window?new URL(_window.document.URL):void 0,urlSearchParams=new URLSearchParams(null==_window?void 0:_window.location.search),{anonymousId:anonymous_id,extendedType:user_type}=user.data||{},urlParamsObj=Array.from(urlSearchParams.entries()).reduce(((acc,_ref)=>{let[key,value]=_ref;return _objectSpread(_objectSpread({},acc),{},{[key]:value})}),{}),{utm_medium,htm_medium,utm_content,htm_content,utm_source,htm_source,utm_campaign,htm_campaign,utm_segment,utm_type,htm_type}=urlParamsObj;return Promise.all([]).then((function(){var _window$document;return(0,discardNullableValues.Z)({anonymous_id,user_type,site:null==currentPageUrl?void 0:currentPageUrl.origin,url:null==currentPageUrl?void 0:currentPageUrl.href,page_type:page_type&&(0,capitalize.Z)(page_type),article_id:void 0,writer_name:void 0,article_type:void 0,primary_section:void 0,secondary_section:void 0,paywall_status:void 0,blocked:void 0,ad_block_state:void 0,platform:void 0,useragent:null==_window?void 0:_window.navigator.userAgent,utm_medium:utm_medium||htm_medium,utm_content:utm_content||htm_content,utm_source:utm_source||htm_source,utm_campaign:utm_campaign||htm_campaign,utm_type:utm_type||htm_type,referrer_type:null==_window||null===(_window$document=_window.document)||void 0===_window$document?void 0:_window$document.referrer,prod_no:null==ppDataStore?void 0:ppDataStore.productNumber,sale_code:null==ppDataStore?void 0:ppDataStore.saleCode,promotions_no:null==ppDataStore?void 0:ppDataStore.promotionNumber,stage:void 0,action_id:void 0,feature:void 0,feature_type:void 0,personal_feature:void 0,campaign_name:void 0,campaign_details:void 0,scroll_height:void 0,ab_test_group:void 0,ab_test_name:void 0,additional_info:void 0,next_article_id:void 0,next_article_teaser_id:void 0,next_article_noinlist:void 0,recommendation_type:void 0,next_article_viewname:void 0,next_article_list_name:void 0,next_article_list_id:void 0,next_article_noinpage:void 0,newsletter_segment_id:void 0,newsletter_segment_name:void 0,newsletter_email:void 0,darkmode:void 0,utm_segment,marketing_element:void 0})}))}();return react.createElement(BiDataContext.Provider,{value:biData},children)}function useBiDataContext(){const context=react.useContext(BiDataContext);if(void 0===context)throw new Error("useBiDataContext must be used within a BiDataContext.");return context}try{BiDataContextProvider.displayName="BiDataContextProvider",BiDataContextProvider.__docgenInfo={description:"",displayName:"BiDataContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"]={docgenInfo:BiDataContextProvider.__docgenInfo,name:"BiDataContextProvider",path:"../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"../../hooks/s-use-config/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../hooks/s-use-config/src/useConfig.ts").Z},"../../hooks/s-use-config/src/useConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ConfigContext,Z:()=>useConfig});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ConfigContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function useConfig(){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(ConfigContext);if(void 0===context)throw new Error("useConfig must be used within a ConfigContext");return context}},"../../hooks/s-use-radio-group-state/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.w});var _useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx");const __WEBPACK_DEFAULT_EXPORT__=_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.Z},"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRadioGroupState,w:()=>RadioGroupContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;const getRadioGroupContext=function contextFactory(){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});return function(){return Context}}();function RadioGroupContextProvider(){let{children,defaultValue,firstRadioButton,isRequired,name,onChange,state}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const RadioGroupContext=getRadioGroupContext(),[groupChecked,setGroupChecked]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);if(null!=name){const hasCheckedInGroup=!!groupChecked;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupContext.Provider,{value:{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired,name,onChange,setGroupChecked,state}},children)}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupContext.Provider,{value:{}},children)}function useRadioGroupState(_ref){var _input$value;let{checked,defaultChecked,input,isRequired:isRequiredProp,onChange:onChangeFromProp}=_ref;const RadioGroupContext=getRadioGroupContext(),{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired:isRequiredFromGroup,name,onChange:onGroupChange,setGroupChecked,state}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RadioGroupContext),value=null!==(_input$value=null==input?void 0:input.value)&&void 0!==_input$value?_input$value:void 0,groupCheckedValue=groupChecked&&groupChecked[0],isChecked=void 0!==checked?checked:!hasCheckedInGroup&&(null!=groupCheckedValue&&!!value&&groupCheckedValue===value||(null==defaultValue&&defaultChecked||value&&defaultValue===value))||!!groupChecked&&!!value&&groupCheckedValue===value,tabIndex=isChecked?0:hasCheckedInGroup?-1:!(!input||input!==firstRadioButton)?0:-1,onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((evt=>{setGroupChecked&&setGroupChecked([evt.currentTarget.value,evt.currentTarget]),"function"==typeof onChangeFromProp&&onChangeFromProp(evt),onGroupChange&&onGroupChange(evt.currentTarget.value,evt.currentTarget)}),[onChangeFromProp,onGroupChange,setGroupChecked]);return{checkedElement:groupChecked&&groupChecked[1],firstRadioButton,isChecked,isRequired:null!=isRequiredProp?isRequiredProp:isRequiredFromGroup,name,onChange,tabIndex,state}}try{RadioGroupContextProvider.displayName="RadioGroupContextProvider",RadioGroupContextProvider.__docgenInfo={description:"",displayName:"RadioGroupContextProvider",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, element: HTMLInputElement) => void) | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},firstRadioButton:{defaultValue:null,description:"",name:"firstRadioButton",required:!1,type:{name:"HTMLInputElement | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"]={docgenInfo:RadioGroupContextProvider.__docgenInfo,name:"RadioGroupContextProvider",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"})}catch(__react_docgen_typescript_loader_error){}try{useRadioGroupState.displayName="useRadioGroupState",useRadioGroupState.__docgenInfo={description:"",displayName:"useRadioGroupState",props:{checked:{defaultValue:null,description:"The `checked` state of the radioButton or toggle.\n@defaultValue undefined",name:"checked",required:!1,type:{name:"boolean | undefined"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"HTMLInputElement | null"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"]={docgenInfo:useRadioGroupState.__docgenInfo,name:"useRadioGroupState",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-hooks/s-use-pp-data-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx").ZP},"../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx").ZP},"../../pp-molecules/s-pp-offer-toggle/src/Toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Toggle});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-molecules/s-radio-group/src/index.ts"),s_use_radio_group_state_src=__webpack_require__("../../hooks/s-use-radio-group-state/src/index.ts"),s_use_bi_src=__webpack_require__("../../hooks/s-use-bi/src/index.ts"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const yearlyCheckedPosition="calc(".concat("0.25rem"," / 2)"),monthlyCheckedPosition="calc(50% + ".concat("0.25rem"," / 2)"),c={base:{position:"cjScYX",backgroundColor:"jyWDet",opacity:"cGHATY",width:"cxeKyj",height:"fkMZXn",borderTopLeftRadius:"eJWPeA",borderTopRightRadius:"jDmegL",borderBottomRightRadius:"jWlQZa",borderBottomLeftRadius:"gUOMLv",flexWrap:"fyjYdE",fontSize:"fyHdVr",lineHeight:"cWZWfD","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"bnIhlk"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"iDTdUN"},display:"gSBWlu",justifyContent:"kJzccJ",alignItems:"foGVKH","::before":{position:"kvHVCE",content:"julXB",borderTopLeftRadius:"fPJvNA",borderTopRightRadius:"jESkgx",borderBottomRightRadius:"eRpZyk",borderBottomLeftRadius:"KwmSx",width:"dUqsNV",height:"euTfOn",backgroundColor:"xIKZs",top:"cCaVkE",insetInlineStart:"chLTOL",animationDuration:"hQRzbq",animationDirection:"hdppYx",animationTimingFunction:"jZQflR",animationIterationCount:"lleqaN",animationFillMode:"bGyuaP"},":hover":{backgroundColor:"jBkNei",transitionProperty:"ipwmRJ",transitionDuration:"gEzEmx",transitionTimingFunction:"gtnXIL"},":focus-within":{outlineColor:"gJsaQv",outlineWidth:"cCijSB",outlineStyle:"dFEKxz",outlineOffset:"hNIwle"}},toggleButton:{borderTopLeftRadius:"eJWPeA",borderTopRightRadius:"jDmegL",borderBottomRightRadius:"jWlQZa",borderBottomLeftRadius:"gUOMLv",width:"htQLEj",height:"iaQMBF",display:"gSBWlu",justifyContent:"IVbXa",alignItems:"foGVKH",position:"cjScYX",zIndex:"jvKoxA"},textWrapper:{display:"gSBWlu",flexDirection:"iMkoWi",alignItems:"foGVKH",justifyContent:"IVbXa"},additionalText:{fontSize:"gVscJz",lineHeight:"cWZWfD","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hfBlWQ",lineHeight:"bnIhlk"},"@media all and (min-width:102em)":{fontSize:"boPXgS",lineHeight:"iDTdUN"},color:"eNHGkV",fontWeight:"iLdtFu"},moveCheckedToEnd:{"::before":{willChange:"hZOpdN",transformOrigin:"OIbB",animationName:"cPobSZ"}},moveCheckedToStart:{"::before":{willChange:"hZOpdN",transformOrigin:"lfJenI",animationName:"kVwbfD"}},inputInvisble:{width:"lksDzB",height:"edsxqC"}};function BillingButton(_ref){let{value,id,defaultChecked,setCurrentlySelected,text,biData}=_ref;const inputRef=react.useRef(null),biAction=(0,s_use_bi_src.Z)();const{isChecked,name,onChange,tabIndex}=(0,s_use_radio_group_state_src.Z)({checked:void 0,defaultChecked,input:inputRef.current,onChange:function onChangehandler(){setCurrentlySelected(id),biData&&biAction(_objectSpread(_objectSpread({},biData),{},{campaign_details:text&&text[0],action_id:25,feature:"Promotions toggle",feature_type:"Marketing"}))}});return __jsx("label",{className:(0,style9.Z)(c.toggleButton)},__jsx("input",{checked:isChecked,onChange,tabIndex,name,value:value&&value[0],type:"radio",ref:inputRef,className:(0,style9.Z)(c.inputInvisble),"data-testid":"pp-toggle-input"}),__jsx("div",{className:(0,style9.Z)(c.textWrapper)},text&&text[1]&&__jsx("span",{className:(0,style9.Z)(c.additionalText)},text[1]),__jsx("span",null,text&&text[0])))}function Toggle(_ref2){let{monthly,yearly,onChange,biData}=_ref2;const defaultChecked=2===(null==monthly?void 0:monthly.length)?"monthly":"yearly",[currentlySelected,setCurrentlySelected]=react.useState("");return monthly&&yearly?__jsx(src.Z,{onChange,"aria-label":"בחרו צורת חיוב",styleExtend:[c.base,"monthly"===currentlySelected&&c.moveCheckedToEnd,"yearly"===currentlySelected&&c.moveCheckedToStart],inlineStyle:{"--default-checked-position":"yearly"===defaultChecked?yearlyCheckedPosition:monthlyCheckedPosition},groupName:"billing-type",isUnstyled:!0,orientation:"horizontal","data-testid":"pp-toggle"},__jsx(react.Fragment,null,__jsx(BillingButton,{setCurrentlySelected,id:"yearly",defaultChecked:"yearly"===defaultChecked,text:yearly,value:"yearly",biData}),__jsx(BillingButton,{setCurrentlySelected,id:"monthly",defaultChecked:"monthly"===defaultChecked,text:monthly,value:"monthly",biData}))):null}try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{onChange:{defaultValue:null,description:"Callback to control the billing period.",name:"onChange",required:!0,type:{name:"(billingPeriod: BillingType) => void"}},biData:{defaultValue:null,description:"Bi data passed as an argument to biAction",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}},yearly:{defaultValue:null,description:"An object containing yearly array and monthly array, each of these contain\nthe texts of the options.\nIf the object contains only yearly or monthly, this component won't show\nat all (it will return null).\nThe array with two values will be the default value.\nSecond value might contain additional text or not (undefined).",name:"yearly",required:!1,type:{name:"readonly [string, string | null | undefined] | readonly [string] | undefined"}},monthly:{defaultValue:null,description:"",name:"monthly",required:!1,type:{name:"readonly [string, string | null | undefined] | readonly [string] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-molecules/s-pp-offer-toggle/src/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"../../pp-molecules/s-pp-offer-toggle/src/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"../../utils/s-pp-storybook-providers/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_pp_storybook_providers_src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/index.ts"),s_use_pp_offset_steps_store_src=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx"),useConfig=__webpack_require__("../../hooks/s-use-config/src/useConfig.ts"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js");react.createElement;const s_pp_storybook_providers_src=function withProviders(Story,context){return react.createElement(useConfig.E.Provider,{value:configShim.Z},react.createElement(src.ZP,null,react.createElement(s_use_pp_offset_steps_store_src.ZP,null,react.createElement(useBiDataContext.i,null,react.createElement(Story,context)))))}}}]);