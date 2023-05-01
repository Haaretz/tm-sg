/*! For license information please see PpModal-stories.47d93984.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[2677],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../pp-organisms/s-pp-modal/src/PpModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PpModal_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src_PpModal=__webpack_require__("../../pp-organisms/s-pp-modal/src/PpModal.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const PpModal_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"ppmodal",children:"PpModal"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpModal"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-modal"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-modal": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpModal"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpModal from '@haaretz/s-pp-modal';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Purchase-page modal."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-molecules-ppmodal--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3,__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c_wrapper={height:"gUKmr",display:"gSBWlu",justifyContent:"IVbXa",alignItems:"foGVKH",borderTopColor:"gWAjGt",borderRightColor:"fIkpjz",borderBottomColor:"afJwC",borderLeftColor:"bOuZgY",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR"},meta={component:src_PpModal.Z,title:"Purchase/Molecules/PpModal",args:{},argTypes:{},parameters:{layout:"fullscreen",docs:{page:PpModal_doc}}},Overview=args=>{const[isOpen,setIsOpen]=react.useState(!1);return __jsx(react.Fragment,null,__jsx(src.ZP,{onClick:()=>setIsOpen(!isOpen)},isOpen?"Close":"Open"," Modal"),__jsx(src_PpModal.Z,(0,esm_extends.Z)({},args,{isOpen,onToggle:setIsOpen}),__jsx("div",{className:(0,style9.Z)(c_wrapper)},"The Children to be rendered inside ")))},PpModal_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  return <>\n      <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'} Modal</Button>\n      <PpModal {...args} isOpen={isOpen} onToggle={setIsOpen}>\n        <div className={s9(c.wrapper)}>The Children to be rendered inside </div>\n      </PpModal>\n    </>;\n}"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-button/src/Button.tsx").ZP},"../../ds-atoms/s-click-area/src/ClickArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,Kx:()=>_ClickArea,ZP:()=>src_ClickArea});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const s_ripple_src=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx").Z,_excluded=["as","children","disableRipple","inlineStyle","onClick","onFocus","onBlur","screenReaderText","size","rippleSize","styleExtend","rippleExpansionState"];var __jsx=react.createElement;const c={base:{"--_size":"hdFffA",backgroundColor:"KqcXP",minHeight:"gbheqr",minWidth:"geazWn",position:"cjScYX",transform:"iTaucd",transitionDuration:"hxGPkc",transitionProperty:"PQKIY",":focus":{outlineStyle:"larHMv"},":active":{transform:"iNlVNY"}},extraSmallSize:{"--size":"jKtEpn"},smallSize:{"--size":"iJqbGP"},mediumSize:{"--size":"gSaMJF"},largeSize:{"--size":"dLAWNH"},disabled:{opacity:"iItPPl",":active":{transform:"hFTWVM"}}},DEFAULT_ELEMENT="button",src_ClickArea=react.forwardRef((function ClickArea(_ref,ref){let{as,children=null,disableRipple,inlineStyle,onClick:onClickProp,onFocus:onFocusProp,onBlur:onBlurProp,screenReaderText,size="medium",rippleSize,styleExtend=[],rippleExpansionState}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const[rippleState,setRippleState]=react.useState(rippleExpansionState||"contracted"),Element=as||DEFAULT_ELEMENT,isDisabled=isTruthyBooleanish(attrs["aria-disabled"])||isTruthyBooleanish(attrs.disabled),sizeClass="".concat(size,"Size");return __jsx(Element,(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c.base,c[sizeClass],isDisabled&&c.disabled,...styleExtend),style:inlineStyle,ref,onClick:isDisabled?void 0:evt=>{onClickProp&&onClickProp(evt),rippleExpansionState||setRippleState("pulse")},onFocus:isDisabled?void 0:evt=>{onFocusProp&&onFocusProp(evt),rippleExpansionState||setRippleState("expanded")},onBlur:isDisabled?void 0:evt=>{onBlurProp&&onBlurProp(evt),rippleExpansionState||setRippleState("contracting")}}),disableRipple||isDisabled?null:__jsx(s_ripple_src,{size:rippleSize,expansionState:rippleState,onPulseEnd:setRippleState}),screenReaderText?__jsx(src.ZP,null,screenReaderText):null,children)}));function _ClickArea(_props){return null}function isTruthyBooleanish(value){return!0===value||"true"===value}try{_ClickArea.displayName="_ClickArea",_ClickArea.__docgenInfo={description:"",displayName:"_ClickArea",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<ClickArea>`",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"Size for the click area. also controls the the size of the Ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},screenReaderText:{defaultValue:null,description:"Text that will only be visible to screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},disableRipple:{defaultValue:null,description:"Prevent the ClickArea from emiting a ripple to indicate interactivity",name:"disableRipple",required:!1,type:{name:"boolean | undefined"}},rippleSize:{defaultValue:null,description:"Set the size of the ripple",name:"rippleSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},rippleExpansionState:{defaultValue:null,description:"Directly control the ripple state from the outside",name:"rippleExpansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyClickArea(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <ClickArea\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<ClickArea styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"]={docgenInfo:_ClickArea.__docgenInfo,name:"_ClickArea",path:"../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-click-area/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-click-area/src/ClickArea.tsx").ZP},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Ripple});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react.forwardRef((function Ripple(_ref,ref){let{size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]}=_ref;const sizeClass="".concat(size,"Size"),onTransitionEnd=react.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return __jsx("div",{className:(0,style9.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})})),src_Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-molecules/s-modal/src/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Modal});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["children","inlineStyle","isOpen","labelledBy","onClick","onToggle","onOpen","onClose","styleExtend"];var __jsx=react.createElement;const c_wrapper={position:"bEvNbr",bottom:"bLIxaN",left:"bOjOhu",right:"kLKrsq",top:"WhAZY",zIndex:"iYxGWt"},Modal=react.forwardRef((function Modal(_ref,ref){let{children,inlineStyle,isOpen=!1,labelledBy,onClick,onToggle,onOpen,onClose:onCloseProp,styleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const currentOpenState=react.useRef(!1),_modalRef=react.useRef(null),modalRef=null!=ref?ref:_modalRef;react.useEffect((()=>{const modalElem="current"in modalRef&&modalRef.current;modalElem&&(isOpen&&!currentOpenState.current?(modalElem.showModal(),currentOpenState.current=!0,onOpen&&onOpen(modalElem),onToggle&&onToggle(!0)):!isOpen&&currentOpenState.current&&(modalElem.close(),currentOpenState.current=!1))}),[isOpen,onOpen,onToggle,modalRef]);const onClose=react.useCallback((evt=>{currentOpenState.current=!1,onCloseProp&&onCloseProp(evt),onToggle&&onToggle(!1)}),[onCloseProp,onToggle]),handleClick=react.useCallback((evt=>{evt.target===evt.currentTarget&&evt.currentTarget.close(),onClick&&onClick(evt)}),[onClick]);return __jsx("dialog",(0,esm_extends.Z)({ref:modalRef,onClick:handleClick,tabIndex:-1,onClose},attrs,{"aria-labelledby":labelledBy||void 0,className:(0,style9.Z)(...styleExtend),style:inlineStyle}),__jsx("div",{className:(0,style9.Z)(c_wrapper)}),children)})),src_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<Modal>`",name:"children",required:!1,type:{name:"ReactNode"}},labelledBy:{defaultValue:null,description:"The ID of the element (usually an h*) that is the title of the modal.\n\nIn the **RARE** cases where labeling isn't required, manually pass `null`.",name:"labelledBy",required:!0,type:{name:"string | null"}},isOpen:{defaultValue:{value:"false"},description:"Controls whether the modal is open or closed",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A callback that is fired whenever the modal is opened or closed,\nand takes an `isOpen` boolean argument indicating if the modal is open",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},onOpen:{defaultValue:null,description:"A callback that's fired whenever a modal window is opened and passed\na reference to the modal's underlying `dialog` element.",name:"onOpen",required:!1,type:{name:"((elem: HTMLDialogElement) => void) | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyModal(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Modal\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Modal styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-modal/src/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"../../ds-molecules/s-modal/src/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-organisms/s-pp-modal/src/PpModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PpModal});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const src=__webpack_require__("../../ds-molecules/s-modal/src/Modal.tsx").Z;var s_click_area_src=__webpack_require__("../../ds-atoms/s-click-area/src/index.ts"),s_icon_src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts");const _excluded=["children","isOpen","labelledBy","styleExtend","inlineStyle","onToggle","closeBtnOnClick"];var __jsx=react.createElement;const c={base:{borderTopStyle:"jAobFs",borderRightStyle:"dQbyJV",borderBottomStyle:"oTbqa",borderLeftStyle:"gwsGKP",borderTopLeftRadius:"kjdjaJ",borderTopRightRadius:"OUBEB",backgroundColor:"hXoEex",paddingTop:"icKiSN",paddingInlineStart:"dwXqlO",paddingInlineEnd:"kwGEcy",paddingBottom:"izetJs",overflowX:"dUvWpK",overflowY:"hRLVFh","::backdrop":{"--bgc":"jnXWKX",backdropFilter:"fNdmJG",backgroundColor:"jvkdtx",animationName:"bCIYPq",animationPlayState:"hiPugQ",animationDuration:"iGOlqW",animationDirection:"GNuRI",animationFillMode:"dRDwYY"},"@media all and (max-width:37.4375em)":{marginBottom:"gVzGtB",minWidth:"hkWxRA"},"@media all and (min-width:37.5em)":{"::backdrop":{"--bgc":"iJTkLm"},borderTopLeftRadius:"jYVHaP",borderTopRightRadius:"gTufyh",borderBottomRightRadius:"bdSBAK",borderBottomLeftRadius:"fSITDU",width:"cHYRhi"},"@media all and (min-width:64em)":{width:"kncOoy"}},onOpenKeyFrames:{"--trsfrm-a":"gvOsMs","--trsfrm-b":"ecTztE",animationName:"cnLsGC",animationDuration:"dbaUeh",animationFillMode:"hMOwcK",animationTimingFunction:"dDrDcI",opacity:"UXrzu","@media all and (min-width:37.5em)":{"--trsfrm-a":"gbAXaG","--trsfrm-b":"ekGltn"}},closeBtnClickArea:{display:"gSBWlu",justifyContent:"IVbXa",alignItems:"foGVKH",insetInlineEnd:"laZGxq",position:"bEvNbr",top:"WhAZY"},closeButtonCircle:{backgroundColor:"fIcjCT",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",display:"gSBWlu",justifyContent:"IVbXa",alignItems:"foGVKH",height:"fdoezE",width:"byQvkk"}};function PpModal(_ref){let{children,isOpen=!1,labelledBy,styleExtend=[],inlineStyle,onToggle,closeBtnOnClick}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(src,(0,esm_extends.Z)({onToggle,isOpen,styleExtend:[c.base,isOpen&&c.onOpenKeyFrames,...styleExtend],inlineStyle},attrs,{labelledBy}),__jsx(s_click_area_src.ZP,{size:"large",onClick:closeBtnOnClick,styleExtend:[c.closeBtnClickArea],"data-testid":"pp-modal-close-btn"},__jsx("div",{className:(0,style9.Z)(c.closeButtonCircle)},__jsx(s_icon_src.Z,{icon:"close",variant:"inverse"}))),children)}try{PpModal.displayName="PpModal",PpModal.__docgenInfo={description:"",displayName:"PpModal",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<PpModal>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyModal(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Modal\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Modal styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},isOpen:{defaultValue:{value:"false"},description:"Controls the opening and closing of the modal",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A callback to update ascendant state when a modal by and action inside it",name:"onToggle",required:!0,type:{name:"((isOpen: boolean) => void) | undefined"}},labelledBy:{defaultValue:null,description:"",name:"labelledBy",required:!0,type:{name:"string | null"}},closeBtnOnClick:{defaultValue:null,description:"",name:"closeBtnOnClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-pp-modal/src/PpModal.tsx#PpModal"]={docgenInfo:PpModal.__docgenInfo,name:"PpModal",path:"../../pp-organisms/s-pp-modal/src/PpModal.tsx#PpModal"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);