/*! For license information please see useRadioGroupState-stories-mdx.e30f41d6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[5429],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../hooks/s-use-radio-group-state/src/useRadioGroupState.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,buildingACustomComponent:()=>buildingACustomComponent,default:()=>useRadioGroupState_stories,useRadioGroupState:()=>useRadioGroupState_stories_useRadioGroupState});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("../../ds-molecules/s-radio-group/src/index.ts");react.createElement;function UseRadioGroupStateMockComponent(_ref){let{checked,defaultChecked,input,isRequired,onChange}=_ref;const value=input?.value??"blah";return react.createElement("input",{style:{display:"none"},type:"radio",value,checked,required:isRequired,defaultChecked,onChange})}UseRadioGroupStateMockComponent.__docgenInfo={description:"",methods:[],displayName:"UseRadioGroupStateMockComponent"};try{UseRadioGroupStateMockComponent.displayName="UseRadioGroupStateMockComponent",UseRadioGroupStateMockComponent.__docgenInfo={description:"",displayName:"UseRadioGroupStateMockComponent",props:{checked:{defaultValue:null,description:"The `checked` state of the radioButton or toggle.\n@defaultValue undefined",name:"checked",required:!1,type:{name:"boolean | undefined"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"HTMLInputElement | null"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/StoryDemo.tsx#UseRadioGroupStateMockComponent"]={docgenInfo:UseRadioGroupStateMockComponent.__docgenInfo,name:"UseRadioGroupStateMockComponent",path:"../../hooks/s-use-radio-group-state/src/StoryDemo.tsx#UseRadioGroupStateMockComponent"})}catch(__react_docgen_typescript_loader_error){}var style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),useRadioGroupState=__webpack_require__("../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx"),AlignButtonDemo_jsx=react.createElement;const c={wrapper:{backgroundColor:"fozssY",color:"kCxIXX",paddingTop:"kMKXDC",paddingRight:"ftIldC",paddingBottom:"jOeduE",paddingLeft:"iDuqPI",":hover":{backgroundColor:"jBkNei"},":focus-within":{backgroundColor:"frwJwB"}},checked:{backgroundColor:"kBEdbU",color:"cFAUdv",":hover":{backgroundColor:"QklzP"},":focus-within":{backgroundColor:"fTVUtS"}},input:{height:"edsxqC",width:"lksDzB",opacity:"UXrzu",position:"bEvNbr"}};function AlignButton(_ref){let{value}=_ref;const inputRef=react.useRef(null),{isChecked,name,onChange,tabIndex}=(0,useRadioGroupState.Z)({checked:void 0,defaultChecked:void 0,input:inputRef.current});return AlignButtonDemo_jsx("label",{className:(0,style9.Z)(c.wrapper,isChecked&&c.checked)},AlignButtonDemo_jsx("input",{checked:isChecked,onChange,tabIndex,name,value,className:(0,style9.Z)(c.input),type:"radio",ref:inputRef}),value)}AlignButton.__docgenInfo={description:"",methods:[],displayName:"AlignButton"};try{AlignButtonDemo.displayName="AlignButtonDemo",AlignButtonDemo.__docgenInfo={description:"",displayName:"AlignButtonDemo",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/AlignButtonDemo.tsx#AlignButtonDemo"]={docgenInfo:AlignButtonDemo.__docgenInfo,name:"AlignButtonDemo",path:"../../hooks/s-use-radio-group-state/src/AlignButtonDemo.tsx#AlignButtonDemo"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Template=args=>(0,jsx_runtime.jsx)(UseRadioGroupStateMockComponent,{...args});const useRadioGroupState_stories_useRadioGroupState=Template.bind({});useRadioGroupState_stories_useRadioGroupState.storyName="useRadioGroupState",useRadioGroupState_stories_useRadioGroupState.parameters={storySource:{source:"args => <UseRadioGroupStateMockComponent {...args} />"}};const buildingACustomComponent=()=>(0,jsx_runtime.jsxs)(src.Z,{dir:"ltr",defaultValue:"center",groupName:"alignment",inlineStyle:{display:"flex",gap:"0.25rem"},isUnstyled:!0,labelInlineStyle:{marginBottom:"0.25rem"},labelText:"Align",orientation:"horizontal",children:[(0,jsx_runtime.jsx)(AlignButton,{value:"left"}),(0,jsx_runtime.jsx)(AlignButton,{value:"center"}),(0,jsx_runtime.jsx)(AlignButton,{value:"right"})]});buildingACustomComponent.storyName="Building a Custom Component",buildingACustomComponent.parameters={storySource:{source:'<RadioGroup dir="ltr" defaultValue="center" groupName="alignment" inlineStyle={{\n  display: "flex",\n  gap: "0.25rem"\n}} isUnstyled labelInlineStyle={{\n  marginBottom: "0.25rem"\n}} labelText="Align" orientation="horizontal"><AlignButton value="left" /><AlignButton value="center" /><AlignButton value="right" /></RadioGroup>'}};const componentMeta={title:"Hooks/useRadioGroupState",parameters:{chromatic:{disableSnapshot:!0}},component:UseRadioGroupStateMockComponent,argTypes:{checked:{control:!1,table:{defaultValue:{summary:"undefined"}}},input:{control:!1,description:"Is the radio button checked by default, before any user interaction",table:{defaultValue:{summary:"null"}}},isRequired:{control:!1,description:"Marks the `<RadioGroup>` as requiring a selection",table:{defaultValue:{summary:"undefined"}}},defaultChecked:{control:!1,description:"Is the radio button checked by default, before any user interaction",table:{type:{summary:"boolean|undefined"},defaultValue:{summary:"undefined"}}},onChange:{control:!1,description:"handler to fire when the radio button is checked or unchecked",table:{type:{summary:"React.ChangeEventHandler<HTMLInputElement>|undefined"},defaultValue:{summary:"undefined"}}}},tags:["stories-mdx"],includeStories:["useRadioGroupState","buildingACustomComponent"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"useradiogroupstate",children:"useRadioGroupState"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n",(0,jsx_runtime.jsx)(dist.h_,{component:UseRadioGroupStateMockComponent,subcomponent:useRadioGroupState.w,title:"Hooks/useRadioGroupState",parameters:{chromatic:{disableSnapshot:!0}},argTypes:{checked:{control:!1,table:{defaultValue:{summary:"undefined"}}},input:{control:!1,description:"Is the radio button checked by default, before any user interaction",table:{defaultValue:{summary:"null"}}},isRequired:{control:!1,description:"Marks the `<RadioGroup>` as requiring a selection",table:{defaultValue:{summary:"undefined"}}},defaultChecked:{control:!1,description:"Is the radio button checked by default, before any user interaction",table:{type:{summary:"boolean|undefined"},defaultValue:{summary:"undefined"}}},onChange:{control:!1,description:"handler to fire when the radio button is checked or unchecked",table:{type:{summary:"React.ChangeEventHandler<HTMLInputElement>|undefined"},defaultValue:{summary:"undefined"}}}}}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"useRadioGroupState"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-use-radio-group-state"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-use-radio-group-state": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"useRadioGroupState"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import useRadioGroupState from '@haaretz/s-use-radio-group-state';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A low-level hook providing radio-group-related state to components implementing\nradio-button-like components."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"useRadioGroupState",children:Template.bind({})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"useRadioGroupState"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"building-a-custom-component",children:"Building a Custom Component"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Can be used to implement components with custom UI that have radio-group\nsemantics (select a single option out of several mutually-exclusive choices),\nand may only be used in components that are wrapped by a ",(0,jsx_runtime.jsx)(_components.code,{children:"<RadioGroup>"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'import useRadioGroupState from \'@haaretz/s-use-radio-group-state\';\nimport RadioGroup from \'@haaretz/s-radio-group\';\n\nfunction AlignButton({ value }: { value: string }) {\n  const inputRef = React.useRef(null);\n\n  const { isChecked, name, onChange, tabIndex } = useRadioGroupState({\n    checked: undefined,\n    defaultChecked: undefined,\n    input: inputRef.current,\n  });\n\n  return (\n    <label>\n      <input\n        className="visually-hidden"\n        checked={isChecked}\n        onChange={onChange}\n        tabIndex={tabIndex}\n        name={name}\n        value={value}\n        type="radio"\n        ref={inputRef}\n      />\n      {value}\n    </label>\n  );\n}\n\n<RadioGroup\n  defaultValue="center"\n  groupName="alignment"\n  isUnstyled\n  labelText="Align"\n  orientation="horizontal"\n>\n  <>\n    <AlignButton value="left" />\n    <AlignButton value="center" />\n    <AlignButton value="right" />\n  </>\n</RadioGroup>;\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{name:"Building a Custom Component",children:(0,jsx_runtime.jsxs)(src.Z,{dir:"ltr",defaultValue:"center",groupName:"alignment",inlineStyle:{display:"flex",gap:"0.25rem"},isUnstyled:!0,labelInlineStyle:{marginBottom:"0.25rem"},labelText:"Align",orientation:"horizontal",children:[(0,jsx_runtime.jsx)(AlignButton,{value:"left"}),(0,jsx_runtime.jsx)(AlignButton,{value:"center"}),(0,jsx_runtime.jsx)(AlignButton,{value:"right"})]})})})]})}}};const useRadioGroupState_stories=componentMeta},"../../ds-molecules/s-radio-group/src/RadioGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>DEFAULT_ELEMENT});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),_haaretz_s_use_radio_group_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../hooks/s-use-radio-group-state/src/index.ts");const _excluded=["as","children","groupName","state","isRequired","isInvalid","inlineStyle","styleExtend","labelInlineStyle","labelStyleExtend","labelText","orientation","isUnstyled","defaultValue","onChange"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const c={base:{"--lbl-c":"leHlzj",display:"gSBWlu",flexWrap:"kiDYix",columnGap:"kEFtPS",rowGap:"eSylHt"},verticalOrientation:{flexDirection:"iMkoWi",flexWrap:"fyjYdE"},horizontalOrientation:{flexDirection:"dugTDd",flexWrap:"kiDYix"},errorState:{"--lbl-c":"kflLcy"},label:{color:"lleaHT",fontWeight:"iLdtFu",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},labelRequired:{"::after":{content:"JMIrS",color:"hClXwE"}}},DEFAULT_ELEMENT="fieldset";function RadioGroup(_ref){let{as,children,groupName,state="enabled",isRequired,isInvalid,inlineStyle,styleExtend=[],labelInlineStyle,labelStyleExtend=[],labelText,orientation="vertical",isUnstyled=!1,defaultValue,onChange}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);const isStyled=!isUnstyled,defaultGroupName=react__WEBPACK_IMPORTED_MODULE_0__.useId(),labelId=react__WEBPACK_IMPORTED_MODULE_0__.useId(),radioGroupRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[firstRadioButton,setFirstRadioButton]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(radioGroupRef.current){const firstRadioFromDom=radioGroupRef.current.querySelector('input[type="radio"]');firstRadioFromDom&&setFirstRadioButton(firstRadioFromDom)}}),[]);const WrapperElement=as||DEFAULT_ELEMENT,a11yOverride={role:"radiogroup","aria-disabled":"disabled"===state||void 0,"aria-readonly":"read-only"===state||void 0,"aria-errormessage":isInvalid?attrs["aria-errormessage"]:void 0,"aria-invalid":isInvalid||void 0,"aria-orientation":orientation,"aria-required":isRequired||void 0,"aria-labelledby":attrs["aria-labelledby"]||(labelText?labelId:void 0),"aria-describedby":isInvalid?void 0:attrs["aria-describedby"]};return __jsx(WrapperElement,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},attrs,a11yOverride,{style:inlineStyle,className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(isStyled&&c.base,isStyled&&("vertical"===orientation?c.verticalOrientation:c.horizontalOrientation),isInvalid&&c.errorState,...styleExtend),ref:radioGroupRef}),labelText?__jsx("span",{id:labelId,className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(isStyled&&c.label,isRequired&&c.labelRequired,...labelStyleExtend),style:labelInlineStyle},labelText):null,__jsx(_haaretz_s_use_radio_group_state__WEBPACK_IMPORTED_MODULE_2__.w,{defaultValue,isRequired,firstRadioButton,onChange,name:groupName??defaultGroupName,state},children))}RadioGroup.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const __WEBPACK_DEFAULT_EXPORT__=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<RadioGroup>`",name:"children",required:!1,type:{name:"ReactNode"}},isInvalid:{defaultValue:null,description:"Marks the group as invalid being in an invalid state.",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},state:{defaultValue:{value:"enabled"},description:"The functional state of the group",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},isRequired:{defaultValue:null,description:"Marks the `<RadioGroup>` as requiring a selection",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},labelText:{defaultValue:null,description:"Text to visually label the `<RadioGroup>` with.",name:"labelText",required:!1,type:{name:"string | undefined"}},isUnstyled:{defaultValue:{value:"false"},description:"Remove all styling from the component and turns it\ninto one that purely manages state and accessibility.\n\nUse in conjucntion with `styleExtend`, `inlineStyle`,\n`labelStyleExtend` and `labelInlineStyle` to add your\nown styles to the wrapper and label elements rendered\nby the component.",name:"isUnstyled",required:!1,type:{name:"boolean | undefined"}},groupName:{defaultValue:null,description:"The shared `name` attribute to assign to all radio buttons in the group",name:"groupName",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:{value:"vertical"},description:"Sets the orientation of the radio-buttons in the group,\nboth visually (as long as `isUnstyled` is not set) and to\nscreen readers.\n@defaultValue 'vertical'",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},onChange:{defaultValue:null,description:"A callback fired whenever a radio button is checked.\nPassed the value of the checked input and the html element.",name:"onChange",required:!1,type:{name:"((value: T, checkedElement: HTMLInputElement) => void) | undefined"}},defaultValue:{defaultValue:null,description:"The value of the radio button that is checked by default.",name:"defaultValue",required:!1,type:{name:"string | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nwrapper html element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     labelStyleExtend={[ labelStyleExtend, ]}\n     labelInlineStyle={labelInlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()` which will\nextend the default styles assigned to the wrapper element.\n\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\n\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},labelInlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nlabel's html element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { labelStyleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const labelInlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     labelStyleExtend={[ labelStyleExtend, ]}\n     labelInlineStyle={labelInlineStyle}\n   />\n  );\n}\n```",name:"labelInlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},labelStyleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()` which will\nextend the default styles assigned to the label element.\n\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\n\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton labelStyleExtend={[ someCondition && foo, bar, ]} />\n```",name:"labelStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'ComponentType<any> | "aside" | "div" | "fieldset" | "section" | "span" | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-radio-group/src/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"../../ds-molecules/s-radio-group/src/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-molecules/s-radio-group/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-molecules/s-radio-group/src/RadioGroup.tsx").Z},"../../hooks/s-use-radio-group-state/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.w});var _useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx");const __WEBPACK_DEFAULT_EXPORT__=_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.Z},"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRadioGroupState,w:()=>RadioGroupContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;const getRadioGroupContext=function contextFactory(){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});return function(){return Context}}();function RadioGroupContextProvider(){let{children,defaultValue,firstRadioButton,isRequired,name,onChange,state}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const RadioGroupContext=getRadioGroupContext(),[groupChecked,setGroupChecked]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);if(null!=name){const hasCheckedInGroup=!!groupChecked;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupContext.Provider,{value:{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired,name,onChange,setGroupChecked,state}},children)}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupContext.Provider,{value:{}},children)}function useRadioGroupState(_ref){let{checked,defaultChecked,input,isRequired:isRequiredProp,onChange:onChangeFromProp}=_ref;const RadioGroupContext=getRadioGroupContext(),{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired:isRequiredFromGroup,name,onChange:onGroupChange,setGroupChecked,state}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RadioGroupContext),value=input?.value??void 0,groupCheckedValue=groupChecked&&groupChecked[0],isChecked=void 0!==checked?checked:!hasCheckedInGroup&&(null!=groupCheckedValue&&!!value&&groupCheckedValue===value||(null==defaultValue&&defaultChecked||value&&defaultValue===value))||!!groupChecked&&!!value&&groupCheckedValue===value,tabIndex=isChecked?0:hasCheckedInGroup?-1:!(!input||input!==firstRadioButton)?0:-1,onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((evt=>{setGroupChecked&&setGroupChecked([evt.currentTarget.value,evt.currentTarget]),"function"==typeof onChangeFromProp&&onChangeFromProp(evt),onGroupChange&&onGroupChange(evt.currentTarget.value,evt.currentTarget)}),[onChangeFromProp,onGroupChange,setGroupChecked]);return{checkedElement:groupChecked&&groupChecked[1],firstRadioButton,isChecked,isRequired:isRequiredProp??isRequiredFromGroup,name,onChange,tabIndex,state}}RadioGroupContextProvider.__docgenInfo={description:"",methods:[],displayName:"RadioGroupContextProvider"};try{RadioGroupContextProvider.displayName="RadioGroupContextProvider",RadioGroupContextProvider.__docgenInfo={description:"",displayName:"RadioGroupContextProvider",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, element: HTMLInputElement) => void) | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},firstRadioButton:{defaultValue:null,description:"",name:"firstRadioButton",required:!1,type:{name:"HTMLInputElement | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"]={docgenInfo:RadioGroupContextProvider.__docgenInfo,name:"RadioGroupContextProvider",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"})}catch(__react_docgen_typescript_loader_error){}try{useRadioGroupState.displayName="useRadioGroupState",useRadioGroupState.__docgenInfo={description:"",displayName:"useRadioGroupState",props:{checked:{defaultValue:null,description:"The `checked` state of the radioButton or toggle.\n@defaultValue undefined",name:"checked",required:!1,type:{name:"boolean | undefined"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"HTMLInputElement | null"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"]={docgenInfo:useRadioGroupState.__docgenInfo,name:"useRadioGroupState",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);