/*! For license information please see Ripple-stories.6c6cfef5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[6700],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-ripple/src/Ripple.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Overview:()=>Overview,Small:()=>Small,default:()=>Ripple_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_Ripple=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const Ripple_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",a:"a",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"ripple",children:"Ripple"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Ripple"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-ripple"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-ripple": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Ripple"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Ripple from '@haaretz/s-ripple';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," component is used to indicate an action (e.g., tap or click) or\nstate change (e.g., gaining or losing focus). It uses a microanimation of a\ncircle expanding outward from an element as visual feedback for an action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," element must be wrapped by a positioned element to serve at its\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://mzl.la/3EaiA1I",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.code,{children:"offsetParent"})}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," is a semi-controlled component, meaning, its state is controlled by a\nparent through the ",(0,jsx_runtime.jsx)(_components.code,{children:"expansionState"})," prop, and to which it communicates back\nchanges in its state using the ",(0,jsx_runtime.jsx)(_components.code,{children:"onPulseEnd"})," callback prop:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"const [rippleState, setRippleState] =\n  React.useState<RippleExpansion>('contracted');\n\nconst onClick = () => setRippleState('pulse');\n\n<Ripple expansionState={rippleState} onPulseEnd={setRippleState} />;\n"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-ripple--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The size of the ripple can be adjusted using the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop, which can be set\nto ",(0,jsx_runtime.jsx)(_components.code,{children:"small"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"medium"})," (the default) or ",(0,jsx_runtime.jsx)(_components.code,{children:"large"}),"."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-ripple--small"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-ripple--medium"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-ripple--large"})]})]})}};react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_Ripple.Z,title:"Atoms/Ripple",args:{inlineStyle:{},styleExtend:[],size:"medium"},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:Ripple_doc}}};function Wrapper(_ref){let{children}=_ref;const[rippleState,setRippleState]=react.useState("contracted");return react.createElement("button",{onClick:()=>setRippleState("pulse"),style:{background:"none",border:"1px solid",aspectRatio:"1",padding:"2px",position:"relative",display:"inline-block",height:"2.75rem"}},children(rippleState,setRippleState))}const Overview=args=>react.createElement(Wrapper,null,((rippleState,setRippleState)=>react.createElement(react.Fragment,null,"Click",react.createElement(src_Ripple.Z,(0,esm_extends.Z)({},args,{expansionState:rippleState,onPulseEnd:setRippleState}))))),Small=args=>react.createElement(Wrapper,null,((rippleState,setRippleState)=>react.createElement(react.Fragment,null,"S",react.createElement(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"small",expansionState:rippleState,onPulseEnd:setRippleState}))))),Medium=args=>react.createElement(Wrapper,null,((rippleState,setRippleState)=>react.createElement(react.Fragment,null,"M",react.createElement(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"medium",expansionState:rippleState,onPulseEnd:setRippleState}))))),Large=args=>react.createElement(Wrapper,null,((rippleState,setRippleState)=>react.createElement(react.Fragment,null,"L",react.createElement(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"large",expansionState:rippleState,onPulseEnd:setRippleState}))))),Ripple_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <Wrapper>\n    {(rippleState, setRippleState) => <>\n        Click\n        <Ripple {...args} expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>}\n  </Wrapper>"},Overview.parameters?.docs?.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},Small.parameters?.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper>\n    {(rippleState, setRippleState) => <>\n        S\n        <Ripple {...args} size="small" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>}\n  </Wrapper>'},Small.parameters?.docs?.source)})}),Medium.parameters=_objectSpread(_objectSpread({},Medium.parameters),{},{docs:_objectSpread(_objectSpread({},Medium.parameters?.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper>\n    {(rippleState, setRippleState) => <>\n        M\n        <Ripple {...args} size="medium" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>}\n  </Wrapper>'},Medium.parameters?.docs?.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},Large.parameters?.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper>\n    {(rippleState, setRippleState) => <>\n        L\n        <Ripple {...args} size="large" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>}\n  </Wrapper>'},Large.parameters?.docs?.source)})}),Overview.__docgenInfo={description:"",methods:[],displayName:"Overview"},Small.__docgenInfo={description:"",methods:[],displayName:"Small"},Medium.__docgenInfo={description:"",methods:[],displayName:"Medium"},Large.__docgenInfo={description:"",methods:[],displayName:"Large"}},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Ripple(_ref,ref){let{size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]}=_ref;const sizeClass=`${size}Size`,onTransitionEnd=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return __jsx("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})}));Ripple.__docgenInfo={description:"",methods:[],displayName:"Ripple"};const __WEBPACK_DEFAULT_EXPORT__=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);