"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[7947],{"../../ds-atoms/s-text-link/src/TextLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextLink_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),src_TextLink=__webpack_require__("../../ds-atoms/s-text-link/src/TextLink.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"TextLink"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"TextLink"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-text-link"})," listed\nin its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-text-link": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"TextLink"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import TextLink from '@haaretz/s-text-link';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A styled textual link"}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-textlink--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"})]})}const TextLink_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const TextLink_stories={component:src_TextLink.Z,title:"Atoms/TextLink",args:{children:"בדקו אם אתם זכאים להנחה",inlineStyle:{},styleExtend:[],href:"https://login.haaretz.co.il/misc/entitlement"},argTypes:{styleExtend:{control:!1},ref:{control:!1,description:"`<TextLink />` forwards refs to the underlying DOM element in order to expose it to its ascendant components",table:{type:{summary:"React.ForwardedRef<T extends React.ElementType>"}}}},parameters:{docs:{page:TextLink_doc}}},Overview=args=>__jsx(src_TextLink.Z,args);Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"args => <TextLink {...args} />"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-htz-link/src/HtzLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_txh_code_fe_node_modules_pnpm_babel_runtime_7_19_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_txh_code_fe_node_modules_pnpm_babel_runtime_7_19_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@12.3.0_ir3quccc6i62x6qn6jjhyjjiey/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["children","href","hrefAs","locale","prefetch","replace","scroll","shallow"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const HtzLink=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function HtzLinkComponent(_ref,forwardedRef){let{children=null,href,hrefAs,locale,prefetch,replace,scroll,shallow}=_ref,attrs=(0,_Users_txh_code_fe_node_modules_pnpm_babel_runtime_7_19_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);if("string"!=typeof href&&!href.href)return console.warn('The "href" prop you passed <HtzLink /> is a "URL" object without an "href" field:',href,"\nOpting out of rendering the element"),console.trace(),null;if(function isNextLink(href){return"string"!=typeof href||!href.startsWith("http")}(href))return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_Users_txh_code_fe_node_modules_pnpm_babel_runtime_7_19_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({as:hrefAs,href,locale,prefetch,ref:forwardedRef,replace,scroll,shallow,legacyBehavior:!1},attrs),children);const url="string"==typeof href?href:href.href||void 0;return __jsx("a",(0,_Users_txh_code_fe_node_modules_pnpm_babel_runtime_7_19_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({href:url,ref:forwardedRef},attrs),children)})),__WEBPACK_DEFAULT_EXPORT__=HtzLink;try{HtzLink.displayName="HtzLink",HtzLink.__docgenInfo={description:"",displayName:"HtzLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onMouseEnter",required:!1,type:{name:"((e: any) => void) | undefined"}},onTouchStart:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onTouchStart",required:!1,type:{name:"((e: any) => void) | undefined"}},onClick:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onClick",required:!1,type:{name:"((e: any) => void) | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"]={docgenInfo:HtzLink.__docgenInfo,name:"HtzLink",path:"../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-link/src/HtzLink.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onMouseEnter",required:!1,type:{name:"((e: any) => void) | undefined"}},onTouchStart:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onTouchStart",required:!1,type:{name:"((e: any) => void) | undefined"}},onClick:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onClick",required:!1,type:{name:"((e: any) => void) | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../ds-atoms/s-htz-link/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-text-link/src/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_TextLink});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-htz-link/src/index.tsx"),__jsx=react.createElement;const c_base={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"hnHEBj",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},TextLink=react.forwardRef((function TextLink({children=null,inlineStyle,styleExtend=[],href},ref){return __jsx(src.Z,{href,className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,ref},children)})),src_TextLink=TextLink;try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onMouseEnter",required:!1,type:{name:"((e: any) => void) | undefined"}},onTouchStart:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onTouchStart",required:!1,type:{name:"((e: any) => void) | undefined"}},onClick:{defaultValue:null,description:"requires experimental.newNextLinkBehavior",name:"onClick",required:!1,type:{name:"((e: any) => void) | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);