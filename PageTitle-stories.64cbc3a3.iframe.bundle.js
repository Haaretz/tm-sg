"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[6685],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../pp-atoms/s-pp-title/src/PageTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>PageTitle_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),src_PageTitle=__webpack_require__("../../pp-atoms/s-pp-title/src/PageTitle.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"pagetitle",children:"PageTitle"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PageTitle"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-page-title"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-page-title": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PageTitle"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PageTitle from '@haaretz/s-page-title';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The title for the promotion page is part of the ",(0,jsx_runtime.jsx)(_components.code,{children:"PpHeader"})," component. The\n",(0,jsx_runtime.jsx)(_components.code,{children:"PageTitle"})," will get the arg of ",(0,jsx_runtime.jsx)(_components.code,{children:"title"})," and will be a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pagetitle--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}const PageTitle_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const meta={component:src_PageTitle.Z,title:"Purchase/Atoms/PageTitle",args:{children:"כמעט סיימנו",inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:PageTitle_doc}}},Overview=args=>(0,jsx_runtime.jsx)(src_PageTitle.Z,_objectSpread({},args)),PageTitle_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <PageTitle {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})})},"../../pp-atoms/s-pp-title/src/PageTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PageTitle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{color:"gjYftY",fontWeight:"iLdtFu",textAlign:"kooHYa",fontFamily:"cGpNyn",marginInlineEnd:"gzedBA",marginInlineStart:"bMPiZO",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (max-width:37.4375em)":{maxWidth:"hoQPzd"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"dZvUak",lineHeight:"bynegB"}}};function PageTitle(_ref){let{children,styleExtend=[],inlineStyle}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,...styleExtend),style:inlineStyle,"data-testid":"pp-title",children})}try{PageTitle.displayName="PageTitle",PageTitle.__docgenInfo={description:"",displayName:"PageTitle",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"]={docgenInfo:PageTitle.__docgenInfo,name:"PageTitle",path:"../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);