"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[3289],{"../../pp-atoms/s-pp-step/src/Step.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Offset:()=>Offset,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Step_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Step_component=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.component.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");__webpack_require__("../../pp-atoms/s-pp-step/src/Step.tsx");const Step_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"step",children:"Step"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-step"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-step": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Step from '@haaretz/s-step';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Displays the current step of the user in the subscription process. The ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"}),"\nwill get the args of ",(0,jsx_runtime.jsx)(_components.code,{children:"currentStep"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"steps"})," and needs to match the type\n",(0,jsx_runtime.jsx)(_components.code,{children:"StepName"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"StepName[]"})," respectively."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Step"})," has another argument, the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),", that will be set manually if we\nadded steps for the user, and will be a ",(0,jsx_runtime.jsx)(_components.code,{children:"number"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-step--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"step-offset",children:"Step Offset"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When requesting new data from the server mid-process, new data is unaware of\npast steps already taken, so we sometimes need to adjust our position and the\ntotal number of steps based on that. Doing so can be done useing the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),"\nprop."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["So, if after completing the ",(0,jsx_runtime.jsx)(_components.code,{children:"offer"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"login"})," steps the server returns the\nfollowing ",(0,jsx_runtime.jsx)(_components.code,{children:"steps"})," array: ",(0,jsx_runtime.jsx)(_components.code,{children:"[ 'debt', 'payment', 'thankYou', ]"}),", we need to offset\neverything by ",(0,jsx_runtime.jsx)(_components.code,{children:"2"})," to account for the already completed steps of ",(0,jsx_runtime.jsx)(_components.code,{children:"offer"})," and\n",(0,jsx_runtime.jsx)(_components.code,{children:"login"}),":"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-step--offset"})})]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3,_Offset$parameters,_Offset$parameters2,_Offset$parameters2$d;react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:Step_component.Z,title:"Purchase/Atoms/Step",args:{currentStep:"offers",allSteps:[{__typename:"StepData",name:"offers"},{__typename:"StepData",name:"login"}]},argTypes:{currentStep:{control:!1},allSteps:{control:!1}},parameters:{docs:{page:Step_doc}}},Overview=args=>react.createElement(Step_component.Z,(0,esm_extends.Z)({},args,{currentStep:"offers"})),Offset=args=>react.createElement(Step_component.Z,(0,esm_extends.Z)({},args,{currentStep:"debt"})),Step_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Step {...args} currentStep="offers" />'},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})}),Offset.parameters=_objectSpread(_objectSpread({},Offset.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Offset$parameters=Offset.parameters)||void 0===_Offset$parameters?void 0:_Offset$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Step {...args} currentStep={'debt'} />"},null===(_Offset$parameters2=Offset.parameters)||void 0===_Offset$parameters2||null===(_Offset$parameters2$d=_Offset$parameters2.docs)||void 0===_Offset$parameters2$d?void 0:_Offset$parameters2$d.source)})});const __namedExportsOrder=["Overview","Offset"]},"../../graphql/s-fragments/src/__generated__/HTZ_image_Image.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ImageFragmentGql});const ImageFragmentGql="\n    fragment ImageFragment on htz_image_Image {\n  __typename\n  alt\n  caption\n  contentId\n  credit\n  files {\n    crops {\n      headline {\n        ...ImageCropFragment\n      }\n      landscape {\n        ...ImageCropFragment\n      }\n      regular {\n        ...ImageCropFragment\n      }\n      square {\n        ...ImageCropFragment\n      }\n      vertical {\n        ...ImageCropFragment\n      }\n      wide {\n        ...ImageCropFragment\n      }\n    }\n    height\n    path\n    width\n  }\n  link\n  photographer\n  type\n}\n    "},"../../graphql/s-fragments/src/__generated__/ImageCrop.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ImageCropFragmentGql});const ImageCropFragmentGql="\n    fragment ImageCropFragment on ImageCrop {\n  __typename\n  height\n  width\n  x\n  y\n}\n    "},"../../graphql/s-pp-queries/src/__generated__/PurchasePage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RF:()=>usePurchasePagePersonalQuery});__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js");var HTZ_image_Image=__webpack_require__("../../graphql/s-fragments/src/__generated__/HTZ_image_Image.ts"),ImageCrop=__webpack_require__("../../graphql/s-fragments/src/__generated__/ImageCrop.ts");var useQuery=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),GraphqlFetcher=(__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs"),__webpack_require__("../../graphql/s-graphql-fetcher/src/GraphqlFetcher.tsx"));const PurchasePagePersonalQueryDocument="\n    query PurchasePagePersonalQuery($couponId: String, $pathSegment: String, $selectedOfferId: String, $ticketId: String, $userId: String, $cartData: Boolean, $previousSteps: String) {\n  PurchasePage(\n    couponId: $couponId\n    pathSegment: $pathSegment\n    selectedOfferId: $selectedOfferId\n    ticketId: $ticketId\n    userId: $userId\n    cartData: $cartData\n    previousSteps: $previousSteps\n  ) {\n    pageData {\n      ...PageDataFragment\n    }\n  }\n}\n    ".concat("\n    fragment PageDataFragment on PageData {\n  allSteps {\n    ...StepDataFragment\n  }\n  contentId\n  couponId\n  couponErrorMessage\n  toggleKicker {\n    ...PurchaseToggleKickerFragment\n  }\n  annual {\n    ...PurchaseOfferFragment\n  }\n  marketingBullets {\n    ...MarketingBulletFragment\n  }\n  monthly {\n    ...PurchaseOfferFragment\n  }\n  personalCouponId\n  steps {\n    ...StepDataFragment\n  }\n  specialSaleData {\n    ...SpecialSaleDataFragment\n  }\n  thankYouPageText\n  cartData {\n    ...CartDataFragment\n  }\n  image {\n    ...ImageFragment\n  }\n}\n    ","\n").concat("\n    fragment StepDataFragment on StepData {\n  __typename\n  content {\n    ...HtmlNodeFragment\n  }\n  instructions\n  messageIds\n  messages\n  name\n  title\n}\n    ","\n").concat("\n    fragment HtmlNodeFragment on HtmlNode {\n  __typename\n  as: tag\n  content\n  id\n}\n    ","\n").concat("\n    fragment PurchaseToggleKickerFragment on PurchaseToggleKicker {\n  __typename\n  billing\n  text\n}\n    ","\n").concat("\n    fragment PurchaseOfferFragment on PurchaseOffer {\n  __typename\n  benefits {\n    ...HtmlNodeFragment\n  }\n  benefitsHeading\n  contentId\n  description\n  exclusive\n  legalText {\n    ...HtmlNodeFragment\n  }\n  line1Text {\n    ...HtmlNodeFragment\n  }\n  line2Text {\n    ...HtmlNodeFragment\n  }\n  offerHighlight\n  paymentType\n  periodCalc\n  prices\n  product\n  productName\n  saleCode\n  thankYouMailTemplate\n  promotionNumber\n  productNumber\n}\n    ","\n").concat("\n    fragment MarketingBulletFragment on MarketingBullet {\n  __typename\n  text\n  title\n}\n    ","\n").concat("\n    fragment SpecialSaleDataFragment on SpecialSaleData {\n  __typename\n  exclusive\n  image {\n    ...ImageFragment\n  }\n  title\n}\n    ","\n").concat(HTZ_image_Image.I,"\n").concat(ImageCrop.T,"\n").concat("\n    fragment CartDataFragment on CartData {\n  approveDebtClaim\n  contentId\n  periodCalc\n  prices\n  productNumber\n  promotionNumber\n  saleCode\n  thankYouMailTemplate\n  paymentType\n  __typename\n}\n    "),usePurchasePagePersonalQuery=(variables,options)=>(0,useQuery.a)(void 0===variables?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",variables],(0,GraphqlFetcher.Z)(PurchasePagePersonalQueryDocument,variables),options);usePurchasePagePersonalQuery.document=PurchasePagePersonalQueryDocument,usePurchasePagePersonalQuery.getKey=variables=>void 0===variables?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",variables];usePurchasePagePersonalQuery.fetcher=(variables,options)=>(0,GraphqlFetcher.Z)(PurchasePagePersonalQueryDocument,variables,options)},"../../pp-atoms/s-pp-step/src/Step.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={fontFamily:"cGpNyn",color:"URsRO",textAlign:"kooHYa",fontSize:"hmImpX",lineHeight:"bwFuZl","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},c_current={fontWeight:"iLdtFu"};function Step(_ref){let{currentStep,allSteps}=_ref;const stepNames=allSteps.map((step=>step.name)),numOfSteps=stepNames.length,stepPositionInArray=stepNames.indexOf(currentStep),step=-1===stepPositionInArray?NaN:stepPositionInArray+1;return Number.isNaN(step)?null:__jsx("div",{className:(0,style9.Z)(c_base),"data-testid":"pp-step"},__jsx("span",{className:(0,style9.Z)(c_current)},"שלב"," ",step)," ","מתוך"," ",numOfSteps)}try{Stepcomponent.displayName="Stepcomponent",Stepcomponent.__docgenInfo={description:"",displayName:"Stepcomponent",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"debt"'},{value:'"login"'},{value:'"offers"'},{value:'"payment"'},{value:'"specialMax"'},{value:'"specialSubscription"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"validSubscription"'}]}},allSteps:{defaultValue:null,description:"",name:"allSteps",required:!0,type:{name:"StepDataFragment[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.component.tsx#Stepcomponent"]={docgenInfo:Stepcomponent.__docgenInfo,name:"Stepcomponent",path:"../../pp-atoms/s-pp-step/src/Step.component.tsx#Stepcomponent"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-step/src/Step.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_haaretz_s_pp_queries_PurchasePage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../graphql/s-pp-queries/src/__generated__/PurchasePage.ts"),_haaretz_s_use_pp_data_variables__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../pp-hooks/s-use-pp-data-variables/src/index.ts"),_Step_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.component.tsx");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Step(_ref){var _data$PurchasePage,_data$PurchasePage$pa;let{currentStep}=_ref;const variables=(0,_haaretz_s_use_pp_data_variables__WEBPACK_IMPORTED_MODULE_2__.Z)(),{data}=(0,_haaretz_s_pp_queries_PurchasePage__WEBPACK_IMPORTED_MODULE_3__.RF)(variables,{enabled:!1}),allSteps=null==data||null===(_data$PurchasePage=data.PurchasePage)||void 0===_data$PurchasePage||null===(_data$PurchasePage$pa=_data$PurchasePage.pageData)||void 0===_data$PurchasePage$pa?void 0:_data$PurchasePage$pa.allSteps;return allSteps?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Step_component__WEBPACK_IMPORTED_MODULE_1__.Z,{allSteps,currentStep}):null}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"debt"'},{value:'"login"'},{value:'"offers"'},{value:'"payment"'},{value:'"specialMax"'},{value:'"specialSubscription"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"validSubscription"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"../../pp-atoms/s-pp-step/src/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-hooks/s-use-pp-data-variables/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx"),dist=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.2_next@13.3.0_react@18.2.0/node_modules/next-router-mock/dist/index.js"),src_discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts");const src_discardValues=(obj,keys)=>{const result={};for(const key in obj)keys[key]||(result[key]=obj[key]);return result};var usePPStepsOffsetStore=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx"),isAbandonedCartRoute=__webpack_require__("../../pp-utils/s-pp-routing-utils/src/isAbandonedCartRoute/index.ts"),use_user=__webpack_require__("../../hooks/s-use-user/src/use-user/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function getVariabelFromQuery(query,isLoggedIn){return{pathSegment:query.pathSegment,cartData:isLoggedIn&&(0,isAbandonedCartRoute.Z)(query),previousSteps:""}}const src=function usePpDataVariables(excludeValues){const router=(0,dist.useRouter)(),{contentId}=(0,usePPDataStore.JV)(),couponId=(0,usePPDataStore.vA)(),offsetSteps=(0,usePPStepsOffsetStore.np)(),{data:userData}=(0,use_user.Z)(),previousSteps=offsetSteps.join(","),variabelFromQuery=react.useMemo((()=>getVariabelFromQuery(router.query,(null==userData?void 0:userData.isLoggedIn)||!1)),[router.query,null==userData?void 0:userData.isLoggedIn]);return react.useMemo((()=>(0,src_discardNullableValues.Z)(src_discardValues(_objectSpread(_objectSpread({},variabelFromQuery),{},{selectedOfferId:null!=userData&&userData.isLoggedIn?contentId:void 0,couponId,previousSteps:variabelFromQuery.previousSteps||previousSteps}),excludeValues||{}))),[contentId,couponId,excludeValues,previousSteps,null==userData?void 0:userData.isLoggedIn,variabelFromQuery])}},"../../pp-utils/s-pp-routing-utils/src/isAbandonedCartRoute/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_isAbandonedCartRoute});const src_isAbandonedCartRoute=function isAbandonedCartRoute(query){return"preference"in query}}}]);