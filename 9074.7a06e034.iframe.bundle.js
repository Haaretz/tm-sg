"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[9074],{"../../ds-atoms/s-click-area/src/ClickArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,Kx:()=>_ClickArea,ZP:()=>src_ClickArea});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const s_ripple_src=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx").Z,_excluded=["as","children","disableRipple","inlineStyle","onClick","onFocus","onBlur","screenReaderText","size","rippleSize","styleExtend","rippleExpansionState"];var __jsx=react.createElement;const c={base:{"--_size":"hdFffA",backgroundColor:"KqcXP",minHeight:"gbheqr",minWidth:"geazWn",position:"cjScYX",transform:"iTaucd",transitionDuration:"hxGPkc",transitionProperty:"PQKIY",":focus":{outlineStyle:"larHMv"},":active":{transform:"iNlVNY"}},extraSmallSize:{"--size":"jKtEpn"},smallSize:{"--size":"iJqbGP"},mediumSize:{"--size":"gSaMJF"},largeSize:{"--size":"dLAWNH"},disabled:{opacity:"iItPPl",":active":{transform:"hFTWVM"}}},DEFAULT_ELEMENT="button",src_ClickArea=react.forwardRef((function ClickArea(_ref,ref){let{as,children=null,disableRipple,inlineStyle,onClick:onClickProp,onFocus:onFocusProp,onBlur:onBlurProp,screenReaderText,size="medium",rippleSize,styleExtend=[],rippleExpansionState}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const[rippleState,setRippleState]=react.useState(rippleExpansionState||"contracted"),Element=as||DEFAULT_ELEMENT,isDisabled=isTruthyBooleanish(attrs["aria-disabled"])||isTruthyBooleanish(attrs.disabled),sizeClass="".concat(size,"Size");return __jsx(Element,(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c.base,c[sizeClass],isDisabled&&c.disabled,...styleExtend),style:inlineStyle,ref,onClick:isDisabled?void 0:evt=>{onClickProp&&onClickProp(evt),rippleExpansionState||setRippleState("pulse")},onFocus:isDisabled?void 0:evt=>{onFocusProp&&onFocusProp(evt),rippleExpansionState||setRippleState("expanded")},onBlur:isDisabled?void 0:evt=>{onBlurProp&&onBlurProp(evt),rippleExpansionState||setRippleState("contracting")}}),disableRipple||isDisabled?null:__jsx(s_ripple_src,{size:rippleSize,expansionState:rippleState,onPulseEnd:setRippleState}),screenReaderText?__jsx(src.ZP,null,screenReaderText):null,children)}));function _ClickArea(_props){return null}function isTruthyBooleanish(value){return!0===value||"true"===value}try{_ClickArea.displayName="_ClickArea",_ClickArea.__docgenInfo={description:"",displayName:"_ClickArea",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<ClickArea>`",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"Size for the click area. also controls the the size of the Ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},screenReaderText:{defaultValue:null,description:"Text that will only be visible to screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},disableRipple:{defaultValue:null,description:"Prevent the ClickArea from emiting a ripple to indicate interactivity",name:"disableRipple",required:!1,type:{name:"boolean | undefined"}},rippleSize:{defaultValue:null,description:"Set the size of the ripple",name:"rippleSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},rippleExpansionState:{defaultValue:null,description:"Directly control the ripple state from the outside",name:"rippleExpansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyClickArea(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <ClickArea\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<ClickArea styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"]={docgenInfo:_ClickArea.__docgenInfo,name:"_ClickArea",path:"../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-click-area/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-click-area/src/ClickArea.tsx").ZP},"../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_FormfieldDescription});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["children","id","inlineStyle","isInvalid","styleExtend","variant"];var __jsx=react.createElement;const c={base:{color:"koPyoH",marginTop:"iqhvfj",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},isInvalid:{"--clr":"dtWzvY"},hidden:{display:"fcXWHl"},defaultVariant:{"--clr":"hneilo"},inverseVariant:{"--clr":"fVxgiL","--err":"dFKLrR"}},FormfieldDescription=react.forwardRef((function FormfieldDescription(_ref,ref){let{children,id,inlineStyle,isInvalid,styleExtend=[],variant="default"}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const variantClass="".concat(variant,"Variant");return __jsx("div",(0,esm_extends.Z)({ref,"aria-live":isInvalid?"assertive":"off",role:isInvalid?"alert":void 0},attrs,{id,className:(0,style9.Z)(c.base,c[variantClass],isInvalid&&c.isInvalid,...styleExtend),style:inlineStyle}),children)})),src_FormfieldDescription=FormfieldDescription;try{FormfieldDescription.displayName="FormfieldDescription",FormfieldDescription.__docgenInfo={description:"",displayName:"FormfieldDescription",props:{children:{defaultValue:null,description:"The description or error message to render",name:"children",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"default"},description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},id:{defaultValue:null,description:"The ID attribute attached to the element",name:"id",required:!0,type:{name:"string"}},isInvalid:{defaultValue:null,description:"Indicate the description is an error message",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyFormfieldDescription(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <FormfieldDescription\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<FormfieldDescription styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx#FormfieldDescription"]={docgenInfo:FormfieldDescription.__docgenInfo,name:"FormfieldDescription",path:"../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx#FormfieldDescription"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-formfield-description/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx").Z},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Ripple});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react.forwardRef((function Ripple(_ref,ref){let{size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]}=_ref;const sizeClass="".concat(size,"Size"),onTransitionEnd=react.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return __jsx("div",{className:(0,style9.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})})),src_Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-text-field/src/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nl:()=>TextFieldInput,DO:()=>TextFieldWrapper,ZP:()=>src_TextField});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-formfield-description/src/index.ts"),s_icon_src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),s_click_area_src=__webpack_require__("../../ds-atoms/s-click-area/src/index.ts");const _excluded=["as","children","inlineStyle","styleExtend","state","isInvalid","variant","opaque"],_excluded2=["autoFocus","describedBy","hideBorder","endIcon","inlineStyle","label","required","sharp","startIcon","state","isInvalid","styleExtend","type"],_excluded3=["description","inlineStyle","styleExtend","state","isInvalid","variant","opaque"];var __jsx=react.createElement;const c={base:{"--show-bg":"iEDzBg","--inp-bgc-fallback":"hXIXxv","--dflt-inp-bgc":"bOzouQ","--dflt-lbl-bgc":"fLQgnW","--_inp-bgc":"cEqLBq","--_lbl-bgc":"fpfvBd",display:"jhKQav",flexWrap:"kiDYix",fontFamily:"cGpNyn",":hover":{"--inp-brdr-c":"jCIVeq"},":focus-within":{"--inp-brdr-c":"fCzHaA"}},opaque:{"--show-bg":"hOdlBv"},borderTransition:{transitionProperty:"fXEOVo",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh"},disabled:{cursor:"kFEjTq"},input:{backgroundColor:"cYfanZ",color:"hugODO",height:"gdPTUr",paddingBottom:"dRUifP",paddingTop:"daWMfK",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL",width:"cRUUAa",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:102em)":{fontSize:"iswsIN",lineHeight:"lbqvfo"},"::placeholder":{transitionProperty:"ekwGOM",transitionDuration:"bjgoBS",color:"dTBCNQ"},":focus":{outlineStyle:"larHMv"}},inputWithRaisedLabel:{"::placeholder":{transitionDelay:"wDoMa",color:"bLkLaC"}},inputEmail:{textAlign:"klEWBS"},inputWrapper:{position:"bEvNbr",height:"gdPTUr",width:"cRUUAa",display:"gSBWlu",left:"bOjOhu",right:"kLKrsq",pointerEvents:"eDssNQ",maxWidth:"fwqTyU"},inputWithStartIcon:{paddingInlineStart:"cwzYpM","@media all and (min-width:102em)":{paddingInlineStart:"dKJgVq"}},inputWithEndIcon:{paddingInlineEnd:"cDwtMO","@media all and (min-width:102em)":{paddingInlineEnd:"jskWrC"}},wrapper:{display:"gSBWlu",width:"cRUUAa",position:"cjScYX"},icon:{fontSize:"jrcYoY",lineHeight:"oZPxp"},endIcon:{color:"iFtZBt",alignItems:"foGVKH",display:"gSBWlu",position:"bEvNbr",top:"gWNFme",transform:"bIXblk",insetInlineEnd:"kUYKuW"},showPassword:{alignItems:"foGVKH",display:"gSBWlu",position:"bEvNbr",insetInlineEnd:"ciDTZv"},showPasswordIcon:{fontSize:"kMkSmA",lineHeight:"QGZZw"},endPart:{flexGrow:"iGDTOy",borderStartEndRadius:"cRDWRt",borderEndEndRadius:"bGojQK",borderTopColor:"bIAnar",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"bdXHYu",borderBottomColor:"fLMmlN",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"eejUxl",borderInlineEndColor:"hGXSyb",borderInlineEndStyle:"hszzXi",borderInlineEndWidth:"bTnXNj",paddingInlineEnd:"cfEHVR"},label:{backgroundColor:"lgybsK",color:"lleaHT",display:"cpOcAb",paddingTop:"bBWxza",paddingRight:"jfgdf",paddingBottom:"iCWAjF",paddingLeft:"eoipNy",position:"cjScYX",top:"WhAZY",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",fontSize:"fyHdVr",lineHeight:"iKTruj"},labelWithStartIcon:{insetInlineStart:"ihgzHw","@media all and (min-width:102em)":{insetInlineStart:"giRxjY"}},labelRaised:{color:"bgkfaA",fontWeight:"iLdtFu",paddingTop:"kVZHcH",paddingRight:"jWtTdy",paddingBottom:"iATxZH",paddingLeft:"iSNqlA",transform:"hLxPXo",top:"kNfNrW",insetInlineStart:"eAUDaE",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},labelWrapper:{flexGrow:"dYbGIK",flexShrink:"bUPwGt",flexBasis:"iBlkxz",display:"gSBWlu",alignItems:"foGVKH",maxWidth:"hegOAG",width:"fEmNDH",borderBottomColor:"fLMmlN",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"eejUxl",borderTopColor:"bIAnar",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"bdXHYu",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh"},labelWrapperRaised:{borderTopColor:"bnHkVP"},required:{color:"jqAPKC",marginInlineStart:"gceMZP",transitionProperty:"gMKDja",transitionDuration:"YqHpi",transitionTimingFunction:"iaemGh",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em)":{fontSize:"hauAvq",lineHeight:"fKdRdV"}},requiredRaised:{fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:80em)":{fontSize:"fbDSck",lineHeight:"cIlhEA"}},startIcon:{alignItems:"foGVKH",display:"gSBWlu",position:"bEvNbr",top:"gWNFme",transform:"bIXblk",insetInlineStart:"cuuCgJ"},startPart:{width:"bPiKds",height:"gdPTUr",borderStartStartRadius:"dzqoCh",borderEndStartRadius:"doYnwO",borderTopColor:"bIAnar",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"bdXHYu",borderBottomColor:"fLMmlN",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"eejUxl",borderInlineStartColor:"dTtLmh",borderInlineStartStyle:"itlHSH",borderInlineStartWidth:"hXXzlB",paddingInlineStart:"kQDwxQ"},defaultState:{},disabledState:{opacity:"iItPPl","--inp-brdr-c":"hkhLnH"},isInvalid:{"--inp-brdr-c":"fiOnme","--inp-hvr-brdr-c":"hyEuIz","--lbl-rsd-c":"fSQpwN","--end-icn-c":"dFzPtY"},defaultVariant:{"--txt-c":"jtyxHP","--inp-brdr-c":"jeSXiv","--inp-hvr-brdr-c":"eijLoJ","--inp-rqrd-color":"kyfqLx","--plchldr-c":"hpypZP","--inp-bgc":"coRyxn","--lbl-c":"fXJDFv","--lbl-rsd-c":"fYpUZn"},inverseVariant:{"--txt-c":"klzHgR","--plchldr-c":"cizztM","--inp-brdr-c":"fVvAbJ","--inp-hvr-brdr-c":"cAETdP","--inp-rqrd-color":"hFryRZ","--inp-bgc":"kluTfy","--lbl-c":"eZRTBv","--lbl-rsd-c":"gSNdQF","--lbl-err-c":"cvbkGf","--inp-err-brdr-c":"dulJhj","--inp-err-hvr-brdr-c":"eDFsdl"},topSharp:{borderTopLeftRadius:"liNQyG",borderTopRightRadius:"ecAwHT"},bottomSharp:{borderBottomLeftRadius:"dIuexX",borderBottomRightRadius:"hPkSBF"},startSharp:{borderStartStartRadius:"crUSOB",borderEndStartRadius:"ignlgT",borderInlineStartWidth:"dpSXwx"},endSharp:{borderStartEndRadius:"hFXfyo",borderEndEndRadius:"iIbjtj",borderInlineEndWidth:"gRCNku"},allSharp:{borderStartStartRadius:"crUSOB",borderStartEndRadius:"hFXfyo",borderEndStartRadius:"ignlgT",borderEndEndRadius:"iIbjtj"},topHideBorder:{borderTopWidth:"iRcVuj"},bottomHideBorder:{borderBottomWidth:"cCftdL"},blockHideBorder:{borderBottomWidth:"cCftdL",borderTopWidth:"iRcVuj"},startHideBorder:{borderInlineStartWidth:"iqBHEN"},endHideBorder:{borderInlineEndWidth:"bSCbpw"},inlineHideBorder:{borderInlineEndWidth:"bSCbpw",borderInlineStartWidth:"iqBHEN"},allHideBorder:{borderTopWidth:"iRcVuj",borderInlineEndWidth:"bSCbpw",borderBottomWidth:"cCftdL",borderInlineStartWidth:"iqBHEN"}},inputTypes=["email","hidden","number","password","search","tel","text"];function TextFieldWrapper(_ref){let{as,children,inlineStyle,styleExtend=[],state="default",isInvalid,variant="default",opaque=!1}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const Element=as||"div",variantClass="".concat(variant,"Variant"),stateClass="".concat(state,"State");return __jsx(Element,(0,esm_extends.Z)({className:(0,style9.Z)(c.base,c[variantClass],c[stateClass],isInvalid&&c.isInvalid,opaque&&c.opaque,...styleExtend),style:inlineStyle},attrs),children)}const TextFieldInput=react.forwardRef((function TextFieldinput(_ref2,ref){let{autoFocus=!1,describedBy,hideBorder,endIcon,inlineStyle={},label,required=!1,sharp,startIcon,state="default",isInvalid,styleExtend=[],type}=_ref2,attrs=(0,objectWithoutProperties.Z)(_ref2,_excluded2);const[isAutoFilled,setIsAutoFilled]=react.useState(!1),[isLabelRaised,setIsLabelRaised]=react.useState(!!attrs.value||!!attrs.defaultValue),[controlledInputType,setControlledInputType]=react.useState(type),inputId=(0,react.useId)(),inputRef=react.useRef(null),containerRef=react.useRef(null);(0,react.useImperativeHandle)(ref,(()=>inputRef.current));const attrsOverride={},didInitialLabelRaisedCheck=react.useRef(!1);didInitialLabelRaisedCheck.current||(didInitialLabelRaisedCheck.current=!0,checkIsLabelRaised()),(0,react.useEffect)((()=>{var _containerRef$current;const selectors=["input[id='".concat(inputId,"']:-autofill"),"input[id='".concat(inputId,"']:-webkit-autofill")].join(","),autofilledElement=null===(_containerRef$current=containerRef.current)||void 0===_containerRef$current?void 0:_containerRef$current.querySelector(selectors);setIsAutoFilled(!!autofilledElement)}),[inputId]);const isDisabled="disabled"===state;null==attrs.value||attrs.onChange||attrs.readOnly||(attrsOverride.defaultValue=attrs.defaultValue||attrs.value,attrsOverride.value=void 0),autoFocus&&(attrsOverride.autofocus="true");const isPassword="password"===type,isEmail="email"===type,isHiddenType="hidden"===type,sharpClass=sharp?"".concat(sharp,"Sharp"):void 0,cancelBorderClass=hideBorder?"".concat(hideBorder,"HideBorder"):void 0;function checkIsLabelRaised(){const isFilled=null!=inputRef.current?!!inputRef.current.value:function hasValueInAttrs(){return!!(attrs.value||attrs.defaultValue||attrsOverride.value||attrsOverride.defaultValue)}();setIsLabelRaised(isFilled||isAutoFilled)}controlledInputType&&inputTypes.includes(controlledInputType)?isEmail&&(attrsOverride.dir="ltr"):attrsOverride.type="text",describedBy&&(attrsOverride["aria-describedby"]=describedBy);const showPassword=react.useCallback((event=>{event.preventDefault(),isPassword&&setControlledInputType((value=>"password"===value?"text":"password"))}),[isPassword]);return __jsx("div",{className:(0,style9.Z)(c.wrapper,...styleExtend),style:inlineStyle,ref},__jsx("div",{className:(0,style9.Z)(c.startIcon,c.borderTransition)},startIcon),__jsx("div",{className:(0,style9.Z)(c.endIcon,c.borderTransition)},isPassword?__jsx(s_click_area_src.ZP,{size:"small",rippleSize:"extraSmall",styleExtend:[c.showPassword],onClick:showPassword,type:"button"},__jsx(s_icon_src.Z,{icon:"password"===controlledInputType?"show":"hide",variant:isInvalid?"danger":"neutral",a11yDescription:"חשיפת סיסמה",a11yLabel:"חשיפת סיסמה",styleExtend:[c.showPasswordIcon]})):isInvalid?__jsx(s_icon_src.Z,{icon:"warn"}):endIcon),__jsx("input",(0,esm_extends.Z)({className:(0,style9.Z)(c.input,!!startIcon&&c.inputWithStartIcon,(isPassword||!!endIcon)&&c.inputWithEndIcon,isEmail&&c.inputEmail,isLabelRaised&&c.inputWithRaisedLabel),type:controlledInputType,id:inputId,ref:inputRef,required,onBlur:function onBlur(event){"function"==typeof attrs.onBlur&&attrs.onBlur(event),checkIsLabelRaised()},onFocus:function onFocus(event){"function"==typeof attrs.onFocus&&attrs.onFocus(event),setIsLabelRaised(!0)}},attrs,attrsOverride,{disabled:isDisabled})),isHiddenType?null:__jsx("div",{className:(0,style9.Z)(c.inputWrapper)},__jsx("div",{className:(0,style9.Z)(c.startPart,c.borderTransition,!!sharpClass&&c[sharpClass],!!cancelBorderClass&&c[cancelBorderClass])}),__jsx("div",{className:(0,style9.Z)(c.labelWrapper,isLabelRaised&&c.labelWrapperRaised,!!cancelBorderClass&&c[cancelBorderClass],c.borderTransition)},label?__jsx("label",{htmlFor:inputId,className:(0,style9.Z)(c.label,!!startIcon&&c.labelWithStartIcon,isLabelRaised&&c.labelRaised,isDisabled&&c.disabled)},label,required?__jsx("span",{className:(0,style9.Z)(c.required,isLabelRaised&&c.requiredRaised)},"*"):null):null),__jsx("div",{className:(0,style9.Z)(c.endPart,c.borderTransition,!!sharpClass&&c[sharpClass],!!cancelBorderClass&&c[cancelBorderClass])})))})),TextField=react.forwardRef((function TextField(_ref3,ref){let{description,inlineStyle,styleExtend=[],state="default",isInvalid=!1,variant="default",opaque=!1}=_ref3,attrs=(0,objectWithoutProperties.Z)(_ref3,_excluded3);const descriptionId=react.useId(),isHiddenType="hidden"===attrs.type;return __jsx(TextFieldWrapper,{styleExtend,inlineStyle,state,isInvalid,variant,opaque},__jsx(TextFieldInput,(0,esm_extends.Z)({},attrs,{describedBy:description&&descriptionId,state,isInvalid,ref})),description&&!isHiddenType?__jsx(src.Z,{variant,isInvalid,id:descriptionId},description):null)})),src_TextField=TextField;try{TextFieldWrapper.displayName="TextFieldWrapper",TextFieldWrapper.__docgenInfo={description:"",displayName:"TextFieldWrapper",props:{children:{defaultValue:null,description:"Elements to render inside the wrapper, e.g., an input, a label,\ndescription text",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},opaque:{defaultValue:{value:"false"},description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},state:{defaultValue:{value:"default"},description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},isInvalid:{defaultValue:{value:"false"},description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:{value:"{}"},description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-field/src/TextField.tsx#TextFieldWrapper"]={docgenInfo:TextFieldWrapper.__docgenInfo,name:"TextFieldWrapper",path:"../../ds-atoms/s-text-field/src/TextField.tsx#TextFieldWrapper"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldInput.displayName="TextFieldInput",TextFieldInput.__docgenInfo={description:"",displayName:"TextFieldInput",props:{describedBy:{defaultValue:null,description:"The `id` of the element describing the input",name:"describedBy",required:!1,type:{name:"string | undefined"}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},sharp:{defaultValue:null,description:"Sets sharp corners (without border-radius) on two or more corners",name:"sharp",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"all"'},{value:'"bottom"'},{value:'"top"'}]}},type:{defaultValue:null,description:"The input's type attribue\n@defaultValue 'text'",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"hidden"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'}]}},hideBorder:{defaultValue:null,description:"An input edge (or edges) on which the border is invisible\n(e.g. for grouping with a button)",name:"hideBorder",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"inline"'},{value:'"all"'},{value:'"bottom"'},{value:'"top"'},{value:'"block"'}]}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},required:{defaultValue:{value:"false"},description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},state:{defaultValue:{value:"default"},description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},isInvalid:{defaultValue:{value:"false"},description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:{value:"{}"},description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-field/src/TextField.tsx#TextFieldInput"]={docgenInfo:TextFieldInput.__docgenInfo,name:"TextFieldInput",path:"../../ds-atoms/s-text-field/src/TextField.tsx#TextFieldInput"})}catch(__react_docgen_typescript_loader_error){}try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},state:{defaultValue:{value:"default"},description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},inlineStyle:{defaultValue:{value:"{}"},description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:{value:"default"},description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},isInvalid:{defaultValue:{value:"false"},description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},opaque:{defaultValue:{value:"false"},description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"The input's type attribue\n@defaultValue 'text'",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"hidden"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'}]}},sharp:{defaultValue:null,description:"Sets sharp corners (without border-radius) on two or more corners",name:"sharp",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"all"'},{value:'"bottom"'},{value:'"top"'}]}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},hideBorder:{defaultValue:null,description:"An input edge (or edges) on which the border is invisible\n(e.g. for grouping with a button)",name:"hideBorder",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"inline"'},{value:'"all"'},{value:'"bottom"'},{value:'"top"'},{value:'"block"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-field/src/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"../../ds-atoms/s-text-field/src/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}}}]);