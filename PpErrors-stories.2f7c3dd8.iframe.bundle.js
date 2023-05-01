/*! For license information please see PpErrors-stories.2f7c3dd8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[498],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../pp-atoms/s-pp-errors/src/PpErrors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PpErrors_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_PpErrors=__webpack_require__("../../pp-atoms/s-pp-errors/src/PpErrors.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const PpErrors_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"pperrors",children:"PpErrors"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrors"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-link"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-link": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrors"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpErrors from '@haaretz/s-pp-link';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A link that can be either a TextLink or a Button"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linktype",children:"LinkType"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Type can be either text or button"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--text"}),(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--button"})]})]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3;react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_PpErrors.Z,title:"Purchase/Atoms/PpErrors",args:{children:"חזרה לעמוד הבית"},argTypes:{children:{control:{type:"text"}}},parameters:{docs:{page:PpErrors_doc}}},Overview=()=>react.createElement(src_PpErrors.Z,null,"אנא נסו שוב"),PpErrors_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"() => <PpErrors>אנא נסו שוב</PpErrors>"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-rich-text/src/RichText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>DEFAULT_ELEMENT,Z:()=>RichText});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["as","inlineStyle","styleExtend","content","strongStyleExtend"];var __jsx=react.createElement;const c_base={},c_em={fontStyle:"foKnQA"},c_strong={fontWeight:"iLdtFu"},c_mark={backgroundColor:"hCbFkR"},c_link={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"hnHEBj",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},c_u={textDecorationLine:"dLUwcr",textDecorationSkip:"jqXfau"},DEFAULT_ELEMENT="p",allowedElements=["p","ul","ol","li","h3","span"];function RichText(_ref){let{as,inlineStyle,styleExtend=[],content,strongStyleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT;if("string"==typeof as&&!allowedElements.includes(as)||"function"==typeof as)throw new TypeError('<RichTextProps /> may only render a "p", "h3", "ul", "ol" or  a "li" element.\nYou passed something else to the "as" prop');const html=function replaceAll(str,mapObj){if("string"!=typeof str)return"";const replaceStr=new RegExp(Object.keys(mapObj).join("|"),"gi");return str.replace(replaceStr,(matched=>mapObj[matched.toLowerCase()]||"#placeholder#"))}(content,{"#em#":(0,style9.Z)(c_em),"#strong#":(0,style9.Z)(c_strong,...strongStyleExtend),"#a#":(0,style9.Z)(c_link),"#mark#":(0,style9.Z)(c_mark),"#u#":(0,style9.Z)(c_u)});return __jsx(Element,(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,dangerouslySetInnerHTML:{__html:html}}))}try{RichText.displayName="RichText",RichText.__docgenInfo={description:"",displayName:"RichText",props:{as:{defaultValue:null,description:"The HTML element (`${AllowedElements}`) the `<RichText />` will be rendered as.\n@defaultValue 'p'",name:"as",required:!1,type:{name:'(ElementType<any> & (ComponentType<any> | "h3" | "li" | "ol" | "p" | "span" | "ul")) | undefined'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRichText(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RichText\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RichText styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},strongStyleExtend:{defaultValue:{value:"[]"},description:"Same as styleExtend for strong class.",name:"strongStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},content:{defaultValue:null,description:"The html string to set the elment's innerHtml.\nHas to be replaced with style9 classes first.",name:"content",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"HtmlElement id attribute.",name:"id",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"]={docgenInfo:RichText.__docgenInfo,name:"RichText",path:"../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-rich-text/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-rich-text/src/RichText.tsx").Z},"../../pp-atoms/s-pp-errors/src/PpErrors.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PpErrors});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-rich-text/src/index.ts"),__jsx=react.createElement;const c_errors={textAlign:"kooHYa",color:"flyuuT",gridColumnStart:"DIEXk",marginTop:"cUXNmd",marginBottom:"biWxPv"};function PpError(_ref){let{children:error}=_ref;return __jsx(src.Z,{as:"p",content:error})}function PpErrors(_ref2){let{children}=_ref2;return __jsx("div",{className:(0,style9.Z)(c_errors),"aria-live":"assertive","aria-relevant":"additions"},Array.isArray(children)?children.map((error=>__jsx(PpError,{key:error},error))):children?__jsx(PpError,null,children):null)}try{PpErrors.displayName="PpErrors",PpErrors.__docgenInfo={description:"",displayName:"PpErrors",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<PpErrors>`",name:"children",required:!1,type:{name:"((string | string[]) & (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null)) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-errors/src/PpErrors.tsx#PpErrors"]={docgenInfo:PpErrors.__docgenInfo,name:"PpErrors",path:"../../pp-atoms/s-pp-errors/src/PpErrors.tsx#PpErrors"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);