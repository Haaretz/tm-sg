"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[2092],{"../../hooks/s-use-bi/src/useBiDataContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BiDataContextProvider,Z:()=>useBiDataContext});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js"),src_platform=__webpack_require__("../../utils/s-atoms/src/platform/index.ts"),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts"),capitalize=__webpack_require__("../../utils/s-common-utils/src/capitalize/index.ts"),discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts");const src=function usePageType(){return"promotions-page"===configShim.Z.get("appType")?"promotions":void 0};var usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const noop=()=>{};const BiDataContext=react.createContext(void 0);function BiDataContextProvider(_ref){let{children}=_ref;const biData=function useCollectBiData(){const _window="undefined"!=typeof window?window:void 0,usePurchasePageDataStore="promotions-page"===configShim.Z.get("appType")?usePPDataStore.JV:noop,[user]=(0,src_user.Z)(),page_type=src(),ppDataStore=usePurchasePageDataStore(),[platform]=(0,src_platform.Z)(),currentPageUrl=_window?new URL(_window.document.URL):void 0,urlSearchParams=new URLSearchParams(null==_window?void 0:_window.location.search),{anonymousId:anonymous_id,extendedType:user_type}=user||{},urlParamsObj=Array.from(urlSearchParams.entries()).reduce(((acc,_ref)=>{let[key,value]=_ref;return _objectSpread(_objectSpread({},acc),{},{[key]:value})}),{}),{utm_medium,htm_medium,utm_content,htm_content,utm_source,htm_source,utm_campaign,htm_campaign,utm_segment,utm_type,htm_type}=urlParamsObj;return Promise.all([]).then((function(){var _window$document;return(0,discardNullableValues.Z)({anonymous_id,user_type,site:null==currentPageUrl?void 0:currentPageUrl.origin,url:null==currentPageUrl?void 0:currentPageUrl.href,page_type:page_type&&(0,capitalize.Z)(page_type),article_id:noop(),writer_name:noop(),article_type:noop(),primary_section:noop(),secondary_section:noop(),paywall_status:noop(),blocked:noop(),ad_block_state:noop(),platform:(0,capitalize.Z)(platform),useragent:null==_window?void 0:_window.navigator.userAgent,utm_medium:utm_medium||htm_medium,utm_content:utm_content||htm_content,utm_source:utm_source||htm_source,utm_campaign:utm_campaign||htm_campaign,utm_type:utm_type||htm_type,referrer_type:null==_window||null===(_window$document=_window.document)||void 0===_window$document?void 0:_window$document.referrer,prod_no:null==ppDataStore?void 0:ppDataStore.productNumber,sale_code:null==ppDataStore?void 0:ppDataStore.saleCode,promotions_no:null==ppDataStore?void 0:ppDataStore.promotionNumber,stage:noop(),action_id:noop(),feature:noop(),feature_type:noop(),personal_feature:noop(),campaign_name:noop(),campaign_details:noop(),scroll_height:noop(),ab_test_group:noop(),ab_test_name:noop(),additional_info:noop(),next_article_id:noop(),next_article_teaser_id:noop(),next_article_noinlist:noop(),recommendation_type:noop(),next_article_viewname:noop(),next_article_list_name:noop(),next_article_list_id:noop(),next_article_noinpage:noop(),newsletter_segment_id:noop(),newsletter_segment_name:noop(),newsletter_email:noop(),darkmode:noop(),utm_segment,marketing_element:noop()})}))}();return(0,jsx_runtime.jsx)(BiDataContext.Provider,{value:biData,children})}function useBiDataContext(){const context=react.useContext(BiDataContext);if(void 0===context)throw new Error("useBiDataContext must be used within a BiDataContext.");return context}try{BiDataContextProvider.displayName="BiDataContextProvider",BiDataContextProvider.__docgenInfo={description:"",displayName:"BiDataContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"]={docgenInfo:BiDataContextProvider.__docgenInfo,name:"BiDataContextProvider",path:"../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"../../hooks/s-use-config/src/useConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ConfigContext,Z:()=>useConfig});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const ConfigContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function useConfig(){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(ConfigContext);if(void 0===context)throw new Error("useConfig must be used within a ConfigContext");return context}},"../../pp-hooks/s-use-pp-data-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx").ZP},"../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>PPDataStoreContextProvider,vA:()=>usePPCouponStore,JV:()=>usePPDataStore,Z_:()=>usePPDataStoreActions,c:()=>usePPUpdateCouponStore,NJ:()=>usePpDataStoreInitialization});var objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),src=__webpack_require__("../../shared/s-consts/src/index.ts");const src_removeQueryParam=function removeQueryParam(param,router){const{pathname,query}=router,params=new URLSearchParams(query);params.delete(param),router.replace({pathname,query:params.toString()},void 0,{shallow:!0})};var dist=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/index.js"),react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const getPPDataStoreActionsContext=function actionsContextFactory(){const Context=react.createContext(void 0);return function(){return Context}}(),getPPDataStoreContext=function dataContextFactory(){const Context=react.createContext(void 0);return function(){return Context}}(),PPCouponStoreContext=react.createContext(void 0),PPCouponUpdateStoreContext=react.createContext(void 0);function PPDataStoreContextProvider(_ref){let{children,initialState}=_ref;const[store,setStore]=react.useState(initialState||{}),[coupon,setCoupon]=react.useState(null),storeActions=react.useMemo((()=>({updateStore:newState=>{setStore((prevState=>_objectSpread(_objectSpread({},prevState),newState)))},clearStore:field=>setStore((prevState=>{if(field){const{[field]:deleted}=prevState;return(0,objectWithoutProperties.Z)(prevState,[field].map(_toPropertyKey))}return{referrer:prevState.referrer}}))})),[]);react.useEffect((()=>{const referrer=document.referrer;referrer&&!store.referrer&&storeActions.updateStore({referrer})}),[storeActions,store.referrer]);const PPDataStoreContext=getPPDataStoreContext(),PPDataStoreActionsContext=getPPDataStoreActionsContext();return(0,jsx_runtime.jsx)(PPCouponStoreContext.Provider,{value:coupon,children:(0,jsx_runtime.jsx)(PPCouponUpdateStoreContext.Provider,{value:setCoupon,children:(0,jsx_runtime.jsx)(PPDataStoreContext.Provider,{value:store,children:(0,jsx_runtime.jsx)(PPDataStoreActionsContext.Provider,{value:storeActions,children})})})})}function usePPDataStore(){const context=react.useContext(getPPDataStoreContext());if(!context)throw new Error("usePPDataStore must be used within a PPDataStoreContextProvider");return context}function usePPDataStoreActions(){const context=react.useContext(getPPDataStoreActionsContext());if(!context)throw new Error("usePPDataStoreActions must be used within a PPDataStoreActionsContextProvider");return context}function usePPCouponStore(){const context=react.useContext(PPCouponStoreContext);if(void 0===context)throw new Error("usePPCouponStore must be used within a PPCouponStoreContext");return context}function usePPUpdateCouponStore(){const context=react.useContext(PPCouponUpdateStoreContext);if(!context)throw new Error("usePPUpdateCouponStore must be used within a PPCouponUpdateStoreContext");return context}function usePpDataStoreInitialization(){const store=usePPDataStore(),{updateStore}=usePPDataStoreActions(),router=(0,dist.useRouter)();react.useEffect((()=>{if(!store.contentId){const storeDataFromUrl=router.query.storeData,storeString="string"==typeof storeDataFromUrl?decodeURIComponent(storeDataFromUrl):sessionStorage.getItem(src.Mc);if(storeString)try{const restoredStore=JSON.parse(storeString);restoredStore&&updateStore(_objectSpread({},restoredStore)),sessionStorage.removeItem(src.Mc),storeDataFromUrl&&src_removeQueryParam("storeData",router)}catch(error){console.error(error.message)}}}),[router,store,updateStore])}try{usePPDataStore.displayName="usePPDataStore",usePPDataStore.__docgenInfo={description:"",displayName:"usePPDataStore",props:{initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"PPDataStoreContextProps | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx#usePPDataStore"]={docgenInfo:usePPDataStore.__docgenInfo,name:"usePPDataStore",path:"../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx#usePPDataStore"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx").ZP},"../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qf:()=>usePPOffsetStepsStoreActions,R8:()=>usePpPrevStepInitialization,ZP:()=>PPOffsetStepsStoreContextProvider,np:()=>usePPOffsetStepsStore,q9:()=>usePPPrevStepsStore,v:()=>usePPPrevStepsStoreActions});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_haaretz_s_atoms_user__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../utils/s-atoms/src/user/index.ts"),_haaretz_s_consts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../shared/s-consts/src/index.ts"),_haaretz_s_pp_routing_utils_getCurrentStepName__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../pp-utils/s-pp-routing-utils/src/getCurrentStepName/index.ts"),_haaretz_s_pp_routing_utils_isGqlPpStep__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../pp-utils/s-pp-routing-utils/src/isGqlPpStep/index.ts"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const OffsetStepsContext=react__WEBPACK_IMPORTED_MODULE_2__.createContext(void 0),PrevStepsContext=react__WEBPACK_IMPORTED_MODULE_2__.createContext(void 0),UdapteOffsetStepsContext=react__WEBPACK_IMPORTED_MODULE_2__.createContext(void 0),UdaptePrevStepsContext=react__WEBPACK_IMPORTED_MODULE_2__.createContext(void 0);function PPOffsetStepsStoreContextProvider(_ref){let{children,initialState}=_ref;const[prevSteps,setPrevSteps]=react__WEBPACK_IMPORTED_MODULE_2__.useState([]),[offsetSteps,setOffsetSteps]=react__WEBPACK_IMPORTED_MODULE_2__.useState(initialState||[]),isFilledRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef((null==initialState?void 0:initialState.includes("login"))||!1),[user]=(0,_haaretz_s_atoms_user__WEBPACK_IMPORTED_MODULE_3__.Z)(),router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),offsetStepsActions=react__WEBPACK_IMPORTED_MODULE_2__.useMemo((()=>({pushStep:step=>{if(!isFilledRef.current){const isLoggedInOnOffersPage=(null==user?void 0:user.userMail)&&"offers"===step;null!=user&&user.userMail&&"login"!==step&&!isLoggedInOnOffersPage||(("login"===step||isLoggedInOnOffersPage)&&(isFilledRef.current=!0),setOffsetSteps((prevState=>[...prevState,step])))}},clearSteps:()=>{setOffsetSteps([]),isFilledRef.current=!1}})),[null==user?void 0:user.userMail]),prevStepsActions=react__WEBPACK_IMPORTED_MODULE_2__.useMemo((()=>({pushPrevStep:step=>{(0,_haaretz_s_pp_routing_utils_isGqlPpStep__WEBPACK_IMPORTED_MODULE_4__.Z)(step)&&setPrevSteps((prevState=>prevState.includes(step)?prevState:[...prevState,step]))},pushPrevSteps:steps=>{prevSteps.length<=1&&steps.length&&setPrevSteps((prevState=>[...steps.filter(_haaretz_s_pp_routing_utils_isGqlPpStep__WEBPACK_IMPORTED_MODULE_4__.Z).filter((step=>!prevState.includes(step))),...prevState]))},getPrevSteps:()=>prevSteps})),[prevSteps]),resultOffsetSteps=react__WEBPACK_IMPORTED_MODULE_2__.useMemo((()=>{const currentStepName=(0,_haaretz_s_pp_routing_utils_getCurrentStepName__WEBPACK_IMPORTED_MODULE_5__.Z)(router.pathname);return isFilledRef.current&&"offers"!==currentStepName&&"coupon"!==currentStepName?offsetSteps:[]}),[offsetSteps,router.pathname]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OffsetStepsContext.Provider,{value:resultOffsetSteps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PrevStepsContext.Provider,{value:prevSteps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UdapteOffsetStepsContext.Provider,{value:offsetStepsActions,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UdaptePrevStepsContext.Provider,{value:prevStepsActions,children})})})})}function usePPOffsetStepsStore(){const context=react__WEBPACK_IMPORTED_MODULE_2__.useContext(OffsetStepsContext);if(!context)throw new Error("usePPOffsetStepsStore must be used within a PPOffsetStepsStoreContextProvider");return context}function usePPPrevStepsStore(){const context=react__WEBPACK_IMPORTED_MODULE_2__.useContext(PrevStepsContext);if(!context)throw new Error("usePPPrevStepsStore must be used within a PPOffsetStepsStoreContextProvider");return context}function usePPOffsetStepsStoreActions(){const context=react__WEBPACK_IMPORTED_MODULE_2__.useContext(UdapteOffsetStepsContext);if(!context)throw new Error("usePPOffsetStepsStoreActions must be used within a PPOffsetStepsStoreContextProvider");return context}function usePPPrevStepsStoreActions(){const context=react__WEBPACK_IMPORTED_MODULE_2__.useContext(UdaptePrevStepsContext);if(!context)throw new Error("usePPPrevStepsStoreActions must be used within a PPOffsetStepsStoreContextProvider");return context}function usePpPrevStepInitialization(){const prevSteps=usePPPrevStepsStore(),{pushPrevSteps}=usePPPrevStepsStoreActions(),router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{const prevPagesString=sessionStorage.getItem(_haaretz_s_consts__WEBPACK_IMPORTED_MODULE_6__.UB);if(prevPagesString)try{const prevPages=JSON.parse(prevPagesString);if(Array.isArray(prevPages)){const stepName=(0,_haaretz_s_pp_routing_utils_getCurrentStepName__WEBPACK_IMPORTED_MODULE_5__.Z)(router.pathname);pushPrevSteps([...prevPages,stepName])}sessionStorage.removeItem(_haaretz_s_consts__WEBPACK_IMPORTED_MODULE_6__.UB)}catch(error){console.error(error.message)}}),[prevSteps,pushPrevSteps,router.pathname])}try{usePPStepsOffsetStore.displayName="usePPStepsOffsetStore",usePPStepsOffsetStore.__docgenInfo={description:"",displayName:"usePPStepsOffsetStore",props:{initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"PurchasePageSteps[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx#usePPStepsOffsetStore"]={docgenInfo:usePPStepsOffsetStore.__docgenInfo,name:"usePPStepsOffsetStore",path:"../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx#usePPStepsOffsetStore"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-utils/s-pp-routing-utils/src/getCurrentStepName/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_getCurrentStepName});const src_getCurrentStepName=function getCurrentStepName(pathname){return pathname.startsWith("/")?pathname.slice(1):pathname}},"../../pp-utils/s-pp-routing-utils/src/isGqlPpStep/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_isGqlPpStep});const validGqlPpSteps={debt:!0,login:!0,offers:!0,payment:!0,specialMax:!0,specialSubscription:!0,thankYou:!0,updateDetails:!0,validSubscription:!0,coupon:!1,error:!1,changeSuccess:!1,paymentChange:!1,quickPlanChange:!1};const src_isGqlPpStep=function isGqlPpStep(step){return validGqlPpSteps[step]||!1}},"../../utils/s-common-utils/src/discardNullableValues/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_discardNullableValues});const src_discardNullableValues=obj=>{const result={};for(const key in obj)null!==obj[key]&&void 0!==obj[key]&&(result[key]=obj[key]);return result}},"../../utils/s-pp-storybook-providers/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_pp_storybook_providers_src});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx"),useConfig=__webpack_require__("../../hooks/s-use-config/src/useConfig.ts"),src=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/index.ts"),s_use_pp_offset_steps_store_src=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/index.ts"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const s_pp_storybook_providers_src=function withProviders(Story,context){return(0,jsx_runtime.jsx)(useConfig.E.Provider,{value:configShim.Z,children:(0,jsx_runtime.jsx)(src.ZP,{children:(0,jsx_runtime.jsx)(s_use_pp_offset_steps_store_src.ZP,{children:(0,jsx_runtime.jsx)(useBiDataContext.i,{children:(0,jsx_runtime.jsx)(Story,_objectSpread({},context))})})})})}}}]);