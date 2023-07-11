/*! For license information please see Modal-stories.67da63b0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[32],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-molecules/s-modal/src/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>Modal_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_Modal=__webpack_require__("../../ds-molecules/s-modal/src/Modal.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("../s-story-callout/src/index.ts");const Modal_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-modal"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-modal": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Modal from '@haaretz/s-modal';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A modal is popup-like piece of UI, which blocks and disables all other content\nand focuses the user’s attention exclusively on a single task or message."}),"\n",(0,jsx_runtime.jsx)(src.Z,{title:"CAUTION",children:(0,jsx_runtime.jsxs)(_components.p,{children:["Modals prevent interaction with page content until the user completes an\naction or dismisses the modal. It intentionally interrupts the user’s natural\nworkflow, and should therefore be ",(0,jsx_runtime.jsx)(_components.strong,{children:"used sparingly and with caution to\nminimize unnecessary disruptions."})]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Modal>"})," is an unstyled component, which wraps around the native HTML\n",(0,jsx_runtime.jsx)(_components.code,{children:"<dialog>"})," element. It abstracts behavior and accessibility concerns, and is\nmeant to be used as a primitive for building more specific modal UIs."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Modal>"})," is a semi-controlled component, meaning, its open or closed state is\ncontrolled by a parent component through the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," prop, and to which it\ncommunicates back changes in its internal state using the ",(0,jsx_runtime.jsx)(_components.code,{children:"onToggle"})," callback\nprop:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'function Foo() {\n  const [isOpen, setIsopen] = React.useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsopen(true)} aria-haspopup>\n        Open Modal\n      </button>\n      <Modal isOpen={isOpen} onToggle={setIsopen} labelledBy="modalTitle">\n        <h2 id="modalTitle">Important message</h2>\n        <button onClick={() => setIsopen(false)}>Dismiss</button>\n      </Modal>\n    </>\n  );\n}\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-modal--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"a11y",children:"A11Y"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When a modal is opened, focus is moved into the first interactive element inside\nit (or, if one exists, to an element with the ",(0,jsx_runtime.jsx)(_components.code,{children:"autofocus"})," attribute). For users\nof assistive tech to be able to maintain orientation, it is crucial that a modal\ncontains an ",(0,jsx_runtime.jsx)(_components.code,{children:"<h*>"})," element, and that the ",(0,jsx_runtime.jsx)(_components.code,{children:"<Modal>"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"labelledBy"})," prop points to\nthe ",(0,jsx_runtime.jsx)(_components.code,{children:"<h*>"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"id"}),"."]})]})}};react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_Modal.Z,title:"Molecules/Modal",args:{inlineStyle:{},styleExtend:[]},argTypes:{children:{control:"text"},labelledBy:{control:"text"},isOpen:{control:"boolean"},styleExtend:{control:!1},ref:{control:!1,description:"`<Modal />` forwards refs to the underlying DOM element in order to expose it to an ascendant components",table:{type:{summary:"React.ForwardedRef<T extends React.ElementType>"}}}},parameters:{docs:{page:Modal_doc}}},Overview=args=>{const[isOpen,setIsopen]=react.useState(args.isOpen||!1);return react.createElement(react.Fragment,null,react.createElement("button",{onClick:()=>setIsopen(!0),"aria-haspopup":!0},"Open Modal"),react.createElement(src_Modal.Z,(0,esm_extends.Z)({},args,{isOpen,onToggle:setIsopen,labelledBy:"modalTitle"}),react.createElement("h2",{id:"modalTitle"},"Important message"),react.createElement("button",{onClick:()=>setIsopen(!1)},"Dismiss")))},Modal_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:'args => {\n  const [isOpen, setIsopen] = React.useState<boolean>(args.isOpen || false);\n  return <React.Fragment>\n      <button onClick={() => setIsopen(true)} aria-haspopup>\n        Open Modal\n      </button>\n\n      <Modal {...args} isOpen={isOpen} onToggle={setIsopen} labelledBy="modalTitle">\n        <h2 id="modalTitle">Important message</h2>\n        <button onClick={() => setIsopen(false)}>Dismiss</button>\n      </Modal>\n    </React.Fragment>;\n}'},Overview.parameters?.docs?.source)})}),Overview.__docgenInfo={description:"",methods:[],displayName:"Overview"}},"../../ds-molecules/s-modal/src/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["children","inlineStyle","isOpen","labelledBy","onClick","onToggle","onOpen","onClose","styleExtend"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const c_wrapper={position:"bEvNbr",bottom:"bLIxaN",left:"bOjOhu",right:"kLKrsq",top:"WhAZY",zIndex:"iYxGWt"},Modal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Modal(_ref,ref){let{children,inlineStyle,isOpen=!1,labelledBy,onClick,onToggle,onOpen,onClose:onCloseProp,styleExtend=[]}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const currentOpenState=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),_modalRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),modalRef=ref??_modalRef;react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const modalElem="current"in modalRef&&modalRef.current;modalElem&&(isOpen&&!currentOpenState.current?(modalElem.showModal(),currentOpenState.current=!0,onOpen&&onOpen(modalElem),onToggle&&onToggle(!0)):!isOpen&&currentOpenState.current&&(modalElem.close(),currentOpenState.current=!1))}),[isOpen,onOpen,onToggle,modalRef]);const onClose=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((evt=>{currentOpenState.current=!1,onCloseProp&&onCloseProp(evt),onToggle&&onToggle(!1)}),[onCloseProp,onToggle]),handleClick=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((evt=>{evt.target===evt.currentTarget&&evt.currentTarget.close(),onClick&&onClick(evt)}),[onClick]);return __jsx("dialog",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:modalRef,onClick:handleClick,tabIndex:-1,onClose},attrs,{"aria-labelledby":labelledBy||void 0,className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(...styleExtend),style:inlineStyle}),__jsx("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_wrapper)}),children)}));Modal.__docgenInfo={description:"",methods:[],displayName:"Modal"};const __WEBPACK_DEFAULT_EXPORT__=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<Modal>`",name:"children",required:!1,type:{name:"ReactNode"}},labelledBy:{defaultValue:null,description:"The ID of the element (usually an h*) that is the title of the modal.\n\nIn the **RARE** cases where labeling isn't required, manually pass `null`.",name:"labelledBy",required:!0,type:{name:"string | null"}},isOpen:{defaultValue:{value:"false"},description:"Controls whether the modal is open or closed",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A callback that is fired whenever the modal is opened or closed,\nand takes an `isOpen` boolean argument indicating if the modal is open",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},onOpen:{defaultValue:null,description:"A callback that's fired whenever a modal window is opened and passed\na reference to the modal's underlying `dialog` element.",name:"onOpen",required:!1,type:{name:"((elem: HTMLDialogElement) => void) | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyModal(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Modal\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Modal styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-modal/src/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"../../ds-molecules/s-modal/src/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"../s-story-callout/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_wrapper={backgroundColor:"jmyBGg",borderTopLeftRadius:"gvQKzB",borderTopRightRadius:"gXtGmO",borderBottomRightRadius:"gGmREU",borderBottomLeftRadius:"ia_DRrH",overflowX:"dUvWpK",overflowY:"hRLVFh",position:"cjScYX",letterSpacing:"iZHebp",paddingTop:"jWWtke",paddingBottom:"bnHxUw",paddingInlineStart:"dwXqlO",paddingInlineEnd:"kwGEcy"},c_strong={backgroundColor:"gtUqwH",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",color:"hugNVC",marginInlineEnd:"joUZpP",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL",fontSize:"fyHdVr",lineHeight:"iKTruj"},c_x={aspectRatio:"ldVxdb",backgroundColor:"kfThfC",borderTopLeftRadius:"ctWdVF",borderTopRightRadius:"jkGfDR",borderBottomRightRadius:"bSTogt",borderBottomLeftRadius:"hSDpeY",color:"kCxIXX",display:"cpOcAb",fontWeight:"inxVzO",lineHeight:"egGyMq",marginInlineEnd:"joUZpP",paddingInlineStart:"kQDwxQ",paddingInlineEnd:"cfEHVR",transform:"gEhxlz"};function StoryCallout(_ref){let{children=null,inlineStyle,styleExtend=[],title}=_ref;return __jsx("aside",{className:(0,style9.Z)(c_wrapper,...styleExtend),style:inlineStyle},title&&__jsx("strong",{className:`sb-unstyled  ${(0,style9.Z)(c_strong)}`},__jsx("span",{className:(0,style9.Z)(c_x)},"✗"),title,":"),title&&" ",children)}StoryCallout.__docgenInfo={description:"",methods:[],displayName:"StoryCallout"};try{StoryCallout.displayName="StoryCallout",StoryCallout.__docgenInfo={description:"",displayName:"StoryCallout",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<StoryCallout>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyStoryCallout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <StoryCallout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<StoryCallout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-story-callout/src/StoryCallout.tsx#StoryCallout"]={docgenInfo:StoryCallout.__docgenInfo,name:"StoryCallout",path:"../s-story-callout/src/StoryCallout.tsx#StoryCallout"})}catch(__react_docgen_typescript_loader_error){}const src=StoryCallout},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);