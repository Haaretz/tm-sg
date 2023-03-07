/*! For license information please see TextFieldwithButton-stories.e832a769.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[5858],{"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,DisabledButton:()=>DisabledButton,Invalid:()=>Invalid,Overview:()=>Overview,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextFieldwithButton_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_TextFieldwithButton=__webpack_require__("../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_6m24vuloj5ihw4zc5lbsktc4fu/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"TextFieldwithButton"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldwithButton"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-text-field-with-button"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s\n",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-text-field-with-button": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldwithButton"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import TextFieldwithButton from '@haaretz/s-text-field-with-button';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Text Field with Button is a common pattern for single-field forms, which\ncomposes a ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextField>"})," input and a ",(0,jsx_runtime.jsx)(_components.code,{children:"<Button>"}),". Props are generally passed down\nto the ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextField>"}),", except for ",(0,jsx_runtime.jsx)(_components.code,{children:"btnContent"}),", which determines the content of\nthe button, ",(0,jsx_runtime.jsx)(_components.code,{children:"btnRef"}),", which is a reference to the html ",(0,jsx_runtime.jsx)(_components.code,{children:"button"})," element, and\n",(0,jsx_runtime.jsx)(_components.code,{children:"btnProps"}),", which is an object passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"<Button>"})," component as props."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For a more detailed documentation of the underlying components, see their pages."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-textfieldwithbutton--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-textfieldwithbutton--disabled"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{children:"Disabled Button"}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-textfieldwithbutton--disabled-button"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{children:"Invalid"}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-textfieldwithbutton--invalid"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{children:"Required"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Sending an empty textfield will invoke a required label, Nonetheless you can add\na Required attribute manually."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-textfieldwithbutton--required"})})]})}const TextFieldwithButton_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TextFieldwithButton_stories={component:src_TextFieldwithButton.P,title:"Molecules/TextFieldWithButton",args:{description:"אנא מלא את קוד הקופון",placeholder:"xxx xxxx xxxx xxx",label:"קוד קופון",btnContent:"שלח"},argTypes:{btnContent:{table:{category:"Button"}},btnProps:{table:{category:"Button"}},btnRef:{table:{category:"Button"}},label:{table:{category:"Input",subcategory:"Content"}},description:{table:{category:"Input",subcategory:"Content"}},placeholder:{description:"Input placeholder text",table:{category:"Input",subcategory:"Content"}},startIcon:{control:!1,table:{category:"Input",subcategory:"Content"}},endIcon:{control:!1,table:{category:"Input",subcategory:"Content"}},opaque:{control:"boolean",table:{category:"Input",subcategory:"Appearance"}},variant:{table:{category:"Input",subcategory:"Appearance"}},styleExtend:{control:!1,table:{category:"Input",subcategory:"Appearance"}},inlineStyle:{table:{category:"Input",subcategory:"Appearance"}},state:{table:{category:"Input",subcategory:"state"}},isInvalid:{control:"boolean",table:{category:"Input",subcategory:"state"}},required:{control:"boolean",table:{category:"Input",subcategory:"Pass-on props"}},type:{table:{category:"Input",subcategory:"Pass-on props"}},ref:{table:{category:"Input",subcategory:"Pass-on props"}},"...inputAttrs":{control:!1,description:"Html attributes passed to the underlying `input` element",table:{type:{summary:void 0},category:"Input",subcategory:"Pass-on props"}}},parameters:{docs:{page:TextFieldwithButton_doc}}},Overview=args=>__jsx(src_TextFieldwithButton.Z,args),Disabled=args=>__jsx(src_TextFieldwithButton.Z,(0,esm_extends.Z)({},args,{state:"disabled"})),DisabledButton=args=>__jsx(src_TextFieldwithButton.Z,(0,esm_extends.Z)({},args,{btnProps:{state:"disabled"}})),Invalid=args=>__jsx(src_TextFieldwithButton.Z,(0,esm_extends.Z)({},args,{isInvalid:!0})),Required=args=>__jsx(src_TextFieldwithButton.Z,(0,esm_extends.Z)({},args,{required:!0}));Overview.parameters=_objectSpread({storySource:{source:"args => (\n  <TextFieldWithButton {...args} />\n)"}},Overview.parameters),Disabled.parameters=_objectSpread({storySource:{source:'args => (\n  <TextFieldWithButton {...args} state="disabled" />\n)'}},Disabled.parameters),DisabledButton.parameters=_objectSpread({storySource:{source:"args => (\n  <TextFieldWithButton {...args} btnProps={{ state: 'disabled', }} />\n)"}},DisabledButton.parameters),Invalid.parameters=_objectSpread({storySource:{source:"args => (\n  <TextFieldWithButton {...args} isInvalid />\n)"}},Invalid.parameters),Required.parameters=_objectSpread({storySource:{source:"args => (\n  <TextFieldWithButton {...args} required />\n)"}},Required.parameters);const __namedExportsOrder=["Overview","Disabled","DisabledButton","Invalid","Required"]},"../../ds-atoms/s-button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-button/src/Button.tsx").ZP},"../../ds-atoms/s-text-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DO:()=>_TextField__WEBPACK_IMPORTED_MODULE_0__.DO,Nl:()=>_TextField__WEBPACK_IMPORTED_MODULE_0__.Nl,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../ds-atoms/s-text-field/src/TextField.tsx");const __WEBPACK_DEFAULT_EXPORT__=_TextField__WEBPACK_IMPORTED_MODULE_0__.ZP},"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>_TextFieldWithButton,Z:()=>src_TextFieldwithButton});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),s_text_field_src=__webpack_require__("../../ds-atoms/s-text-field/src/index.ts"),s_formfield_description_src=__webpack_require__("../../ds-atoms/s-formfield-description/src/index.ts");const _excluded=["onClick","state","busyNotice","variant","styleExtend"],_excluded2=["inlineStyle","isInvalid","opaque","styleExtend","state","variant","required","description","isInvalidDescription","btnContent","btnProps","btnRef"];var __jsx=react.createElement;const c={base:{display:"gSBWlu",flexDirection:"iMkoWi"},button:{flexGrow:"bcjLCN",transitionTimingFunction:"iaemGh",":active":{transformOrigin:"eFxeLn"},"@media all and (max-width:101.9375em)":{},"@media all and (min-width:102em)":{}},inputWithButton:{display:"gSBWlu"},input:{flexGrow:"iGDTOy",width:"fEmNDH"},disabledState:{opacity:"gOeSjL"}},src_TextFieldwithButton=react.forwardRef((function TextFieldWithButton(_ref,ref){let{inlineStyle,isInvalid,opaque,styleExtend=[],state,variant,required:requiredProp,description,isInvalidDescription,btnContent,btnProps:{onClick:btnOnClick,state:btnState,busyNotice,variant:btnVariant,styleExtend:btnStyleExtend=[]}={},btnRef}=_ref,btnProps=(0,objectWithoutProperties.Z)(_ref.btnProps,_excluded),textFieldProps=(0,objectWithoutProperties.Z)(_ref,_excluded2);const inputRef=react.useRef(null),[required,setRequired]=react.useState(!1);react.useImperativeHandle(ref,(()=>inputRef.current));const descriptionId=react.useId();if(isInvalid&&isInvalidDescription)throw new Error("both isInvalid and isInvaliDescription are set to true, if you want to control only the description you have to make sure isInvalid is set to false");const buttonState=isInvalid||"disabled"===state?"disabled":btnState,btnStateObjOverride="busy"===buttonState?{state:"busy",busyNotice}:{state:buttonState},buttonVariant=isInvalid?"danger":btnVariant,onButtonClick=react.useCallback((evt=>{if(inputRef.current&&!inputRef.current.value.trim())return evt.preventDefault(),void(requiredProp||setRequired(!0));btnOnClick&&btnOnClick(evt)}),[btnOnClick,requiredProp]);return __jsx(s_text_field_src.DO,{inlineStyle,isInvalid,opaque,styleExtend:[c.base,...styleExtend],state,variant},__jsx("div",{className:(0,style9.Z)(c.inputWithButton)},__jsx(s_text_field_src.Nl,(0,esm_extends.Z)({},textFieldProps,{describedBy:description&&descriptionId,hideBorder:"end",ref:inputRef,required:requiredProp||required,sharp:"end",state,styleExtend:[c.input]})),__jsx(src.ZP,(0,esm_extends.Z)({},btnProps,btnStateObjOverride,{onClick:onButtonClick,ref:btnRef,sharp:"start",variant:buttonVariant,styleExtend:[c.button,"disabled"===state&&c.disabledState,...btnStyleExtend]}),btnContent)),description?__jsx(s_formfield_description_src.Z,{id:descriptionId,isInvalid:isInvalidDescription||isInvalid,variant},description):null)}));function _TextFieldWithButton(_props){return null}try{_TextFieldWithButton.displayName="_TextFieldWithButton",_TextFieldWithButton.__docgenInfo={description:"",displayName:"_TextFieldWithButton",props:{btnContent:{defaultValue:null,description:"The text of the button",name:"btnContent",required:!0,type:{name:"ReactNode"}},btnProps:{defaultValue:null,description:"A subset of the `ButtonProps` type from `@haaretz/s-button`\n(sans the ones irrelevant to this component).\nSee [the Button component](/?path=%2Fdocs%2Fatoms-button--overview) for more details.",name:"btnProps",required:!1,type:{name:"ButtonProps | undefined"}},btnRef:{defaultValue:null,description:"A reference to the button element",name:"btnRef",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},isInvalidDescription:{defaultValue:null,description:"Indicates if only the description should be invalid",name:"isInvalidDescription",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:null,description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},required:{defaultValue:null,description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},isInvalid:{defaultValue:null,description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},opaque:{defaultValue:null,description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#_TextFieldWithButton"]={docgenInfo:_TextFieldWithButton.__docgenInfo,name:"_TextFieldWithButton",path:"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#_TextFieldWithButton"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldwithButton.displayName="TextFieldwithButton",TextFieldwithButton.__docgenInfo={description:"",displayName:"TextFieldwithButton",props:{btnContent:{defaultValue:null,description:"The text of the button",name:"btnContent",required:!0,type:{name:"ReactNode"}},btnProps:{defaultValue:null,description:"A subset of the `ButtonProps` type from `@haaretz/s-button`\n(sans the ones irrelevant to this component).\nSee [the Button component](/?path=%2Fdocs%2Fatoms-button--overview) for more details.",name:"btnProps",required:!1,type:{name:"ButtonProps | undefined"}},btnRef:{defaultValue:null,description:"A reference to the button element",name:"btnRef",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},isInvalidDescription:{defaultValue:null,description:"Indicates if only the description should be invalid",name:"isInvalidDescription",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:null,description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},required:{defaultValue:null,description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},isInvalid:{defaultValue:null,description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},opaque:{defaultValue:null,description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#TextFieldwithButton"]={docgenInfo:TextFieldwithButton.__docgenInfo,name:"TextFieldwithButton",path:"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#TextFieldwithButton"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);