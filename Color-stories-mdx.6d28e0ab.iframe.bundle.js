/*! For license information please see Color-stories-mdx.6d28e0ab.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[3388],{"../s-ds-stories/src/Color.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,_01BaseColorsLight:()=>_01BaseColorsLight,_02AliasesLight:()=>_02AliasesLight,_03BaseColorsDark:()=>_03BaseColorsDark,_04AliasesDark:()=>_04AliasesDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Color_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist=__webpack_require__("../../theme/l-theme-shared/dist/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),SelectSite=__webpack_require__("../s-ds-stories/src/SelectSite.tsx"),__jsx=react.createElement;const classes={wrapper:{backgroundColor:"dzEaaE",borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"dluNpM",borderRightColor:"dNIzAK",borderBottomColor:"bdGkXN",borderLeftColor:"ia_Ddtg",borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",color:"kXcUpd",columnGap:"cNnHyy",direction:"ezxVBo",display:"kbCXHY",fontFamily:"bnyhBV",marginTop:"cUXNmd",paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI","@media all and (min-width:64em)":{gridTemplateColumns:"clZXPm"}},wrapperDark:{backgroundColor:"fAbKiy",color:"hHWGqA"},aliasesWrapper:{display:"gSBWlu",flexWrap:"kiDYix"},alias:{flexGrow:"bcjLCN",flexShrink:"hriXhD",flexBasis:"cUPohL"},links:{fontWeight:"iLdtFu",gridColumnStart:"bkSasJ",gridColumnEnd:"kvMsDB",marginBottom:"cMjA_dD",fontSize:"gVscJz",lineHeight:"kvNqZl"},linkItem:{display:"fdLHFk"},link:{color:"IYzP"},palette:{marginBottom:"dkSlsL"},headline:{fontSize:"dGDAum",lineHeight:"dRpeUM",borderBottomWidth:"ctibpX",borderBottomStyle:"hpBjJb",paddingBottom:"dPFrWx"},th:{fontWeight:"buowod",paddingInlineEnd:"bWNKbL",textAlign:"hgpJrQ",verticalAlign:"dceYFX",fontSize:"efkEmg",lineHeight:"dqhMCA"},value:{color:"jnSwYR"},swatch:{height:"fUbPPZ",width:"cRUUAa"},aliasSwatch:{aspectRatio:"ldVxdb"}};function ColorSwatches({site,isDarkMode,isAliases}){const{0:currentSite,1:setSite}=(0,react.useState)(site),colorGroups={},colorAliases=[];if(isAliases)for(const aliasName of dist.$y){const aliasOf=getAliasedColor(aliasName,currentSite,isDarkMode);if(!aliasOf)continue;const value=getRgbValueFromName(aliasOf,currentSite,isDarkMode);if(!value)continue;const swatchProps={name:aliasName,value,aliasOf};colorAliases.push(swatchProps)}else for(const colorName of dist.oP){const colorGroupName=(colorName.match(/(\D+)\d+$/i)||[])[1];if(colorGroupName){colorGroups[colorGroupName]||(colorGroups[colorGroupName]=[]);const colorValue=getRgbValueFromName(colorName,currentSite,isDarkMode);colorValue&&colorGroups[colorGroupName].push({name:colorName,value:colorValue})}}if(isAliases)return __jsx(react.Fragment,null,__jsx(SelectSite.Z,{currentSite,setSite}),__jsx(ColorPalette,{name:"Aliases",colors:colorAliases,isDarkMode,isAlias:!0}));const colorGroupNames=Object.keys(colorGroups);return __jsx(react.Fragment,null,__jsx(SelectSite.Z,{currentSite,setSite}),__jsx("section",{className:(0,style9.Z)(classes.wrapper,isDarkMode&&classes.wrapperDark)},__jsx("ul",{className:(0,style9.Z)(classes.links)},colorGroupNames.map(((colorGroup,i)=>__jsx("li",{key:colorGroup,className:(0,style9.Z)(classes.linkItem)},__jsx("a",{target:"_self",href:`#${colorGroup}-${isDarkMode?"dark":"light"}`,className:(0,style9.Z)(classes.link)},colorGroup[0].toUpperCase()+colorGroup.slice(1)),i===colorGroupNames.length-1?"":" | ")))),Object.entries(colorGroups).map((([colorGroup,colorsInGroup])=>__jsx(ColorPalette,{key:colorGroup,name:colorGroup,colors:colorsInGroup,isDarkMode})))))}function ColorPalette(props){const{name,colors,isDarkMode=!1}=props;return"isAlias"in props?__jsx("section",{className:(0,style9.Z)(classes.wrapper,classes.aliasesWrapper,isDarkMode&&classes.wrapperDark)},props.colors.map((({name:aliasName,value,aliasOf})=>__jsx("div",{key:aliasName,className:(0,style9.Z)(classes.alias)},__jsx("div",{className:(0,style9.Z)(classes.aliasSwatch),style:{backgroundColor:value}}),__jsx("div",{className:(0,style9.Z)(classes.th)},__jsx("strong",null,aliasName),__jsx("br",null),__jsx("span",{className:(0,style9.Z)(classes.value)},"Alias of: ",aliasOf,__jsx("br",null)),__jsx("span",{className:(0,style9.Z)(classes.value)},value)))))):__jsx("div",{className:(0,style9.Z)(classes.palette)},__jsx("h4",{id:`${name}-${isDarkMode?"dark":"light"}`,className:(0,style9.Z)(classes.headline)},name[0].toUpperCase()+name.slice(1)),__jsx("table",{style:{width:"100%"}},__jsx("tbody",null,colors.map((({name:colorName,value})=>__jsx("tr",{key:colorName},__jsx("th",{className:(0,style9.Z)(classes.th)},__jsx("strong",null,colorName),__jsx("br",null),__jsx("span",{className:(0,style9.Z)(classes.value)},value)),__jsx("td",{className:(0,style9.Z)(classes.swatch),style:{backgroundColor:value}})))))))}function getAliasedColor(name,site,isDarkMode=!1){var _sitePalette$mode;const mode=isDarkMode?"darkMode":dist.rk,colorAliasVar=null===(_sitePalette$mode=dist.K5[site][mode])||void 0===_sitePalette$mode?void 0:_sitePalette$mode[name];if(!colorAliasVar)return;return(colorAliasVar.match(/(?<=^var\(--c-)[\da-z-]+(?=\)$)/i)||[])[0]}function getRgbValueFromName(name,site,isDarkMode=!1){var _sitePalette$mode2;const mode=isDarkMode?"darkMode":dist.rk,innerRgbValues=null===(_sitePalette$mode2=dist.K5[site][mode])||void 0===_sitePalette$mode2?void 0:_sitePalette$mode2[name];return innerRgbValues?`rgb(${innerRgbValues})`:void 0}try{ColorSwatches.displayName="ColorSwatches",ColorSwatches.__docgenInfo={description:"",displayName:"ColorSwatches",props:{site:{defaultValue:null,description:"",name:"site",required:!0,type:{name:"enum",value:[{value:'"htz"'},{value:'"tm"'},{value:'"hdc"'}]}},isDarkMode:{defaultValue:null,description:"",name:"isDarkMode",required:!1,type:{name:"true | undefined"}},isAliases:{defaultValue:null,description:"",name:"isAliases",required:!1,type:{name:"true | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/ColorSwatches.tsx#ColorSwatches"]={docgenInfo:ColorSwatches.__docgenInfo,name:"ColorSwatches",path:"../s-ds-stories/src/ColorSwatches.tsx#ColorSwatches"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(ColorSwatches,args);function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Color"}),"\n","\n","\n",(0,jsx_runtime.jsx)(esm.h_,{title:"Tokens/Color",component:ColorSwatches,parameters:{chromatic:{disableSnapshot:!0}},args:{site:"tm",isDarkMode:!1,isAliases:!1},argTypes:{isDarkMode:{control:{type:"boolean"}},isAliases:{control:{type:"boolean"}},site:{type:{name:"inline-radio",required:!0},options:["htz","tm","hdc"],control:{type:"inline-radio"}}}}),"\n","\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Haaretz applications support light and dark mode at their core through the use\nof the ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-color.macro"})," babel macro and a set of CSS custom properties,\nwhich define base colors (e.g., ",(0,jsx_runtime.jsx)(_components.code,{children:"primary900"}),") and semantic alias (e.g.,\n",(0,jsx_runtime.jsx)(_components.code,{children:"bodyText"}),"). Semantic alias should generally only be used in cases where the\nlight mode and dark mode UI of a component need to use different colors from the\npalette (e.g., when a title needs to use ",(0,jsx_runtime.jsx)(_components.code,{children:"primary1100"})," in light mode and\n",(0,jsx_runtime.jsx)(_components.code,{children:"primary800"})," in dark mode)."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The exact same color palettes are used by both our designers and developers,\nensuring consistency and reducing friction. This creates a joint language around\ncolor (no more discussing hex codes or rgb numbers) and means a design handoff\nthat contains colors which aren't part of the site's color palette should raise\na red flag and are probably a mistake, which developers should discuss with\ndesign. For designers, any sighting of colors diverging form the design system\nor the intended design, are an obvious and easy to fix bug report."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Light Mode"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Base Colors"}),"\n",(0,jsx_runtime.jsx)(esm.oG,{name:"01. Base colors (light)",children:Template.bind({})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Semantic Color Aliases"}),"\n",(0,jsx_runtime.jsx)(esm.oG,{name:"02. Aliases (light)",args:{isAliases:!0},children:Template.bind({})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Dark Mode"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Base Colors"}),"\n",(0,jsx_runtime.jsx)(esm.oG,{name:"03. Base colors (dark)",args:{isDarkMode:!0},children:Template.bind({})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Semantic Color Aliases"}),"\n",(0,jsx_runtime.jsx)(esm.oG,{name:"04. Aliases (dark)",args:{isAliases:!0,isDarkMode:!0},children:Template.bind({})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const _01BaseColorsLight=Template.bind({});_01BaseColorsLight.storyName="01. Base colors (light)",_01BaseColorsLight.parameters={storySource:{source:"args => <ColorSwatches {...args} />"}};const _02AliasesLight=Template.bind({});_02AliasesLight.storyName="02. Aliases (light)",_02AliasesLight.args={isAliases:!0},_02AliasesLight.parameters={storySource:{source:"args => <ColorSwatches {...args} />"}};const _03BaseColorsDark=Template.bind({});_03BaseColorsDark.storyName="03. Base colors (dark)",_03BaseColorsDark.args={isDarkMode:!0},_03BaseColorsDark.parameters={storySource:{source:"args => <ColorSwatches {...args} />"}};const _04AliasesDark=Template.bind({});_04AliasesDark.storyName="04. Aliases (dark)",_04AliasesDark.args={isAliases:!0,isDarkMode:!0},_04AliasesDark.parameters={storySource:{source:"args => <ColorSwatches {...args} />"}};const componentMeta={title:"Tokens/Color",parameters:{chromatic:{disableSnapshot:!0}},component:ColorSwatches,args:{site:"tm",isDarkMode:!1,isAliases:!1},argTypes:{isDarkMode:{control:{type:"boolean"}},isAliases:{control:{type:"boolean"}},site:{type:{name:"inline-radio",required:!0},options:["htz","tm","hdc"],control:{type:"inline-radio"}}},includeStories:["_01BaseColorsLight","_02AliasesLight","_03BaseColorsDark","_04AliasesDark"]},mdxStoryNameToKey={"01. Base colors (light)":"_01BaseColorsLight","02. Aliases (light)":"_02AliasesLight","03. Base colors (dark)":"_03BaseColorsDark","04. Aliases (dark)":"_04AliasesDark"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const Color_stories=componentMeta,__namedExportsOrder=["Template","_01BaseColorsLight","_02AliasesLight","_03BaseColorsDark","_04AliasesDark"]},"../s-ds-stories/src/SelectSite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SelectSite});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_fieldset={borderTopColor:"hJnbij",borderRightColor:"inkqsI",borderBottomColor:"iUJTlr",borderLeftColor:"itSVRh",borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",color:"hBVYrM",display:"gSBWlu",columnGap:"hmmyz",fontFamily:"lffHhj",paddingBottom:"dPFrWx",paddingLeft:"iDuqPI",paddingRight:"ftIldC",width:"efDQIp","@media all and (min-width:64em)":{fontSize:"jYpfGj",lineHeight:"dXCjGe"}},c_legend={borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",letterSpacing:"hzIFrK",marginInlineStart:"BkTRv",paddingTop:"kVZHcH",paddingRight:"cVJMrm",paddingBottom:"iATxZH",paddingLeft:"JxWnH",fontWeight:"iLdtFu"},c_input={appearance:"cBRpiW"},options=["htz","tm","hdc"];function SelectSite({currentSite,setSite}){return __jsx("form",{onChange:function handleChange(evt){const value=evt.target.value;(function isSite(candidate){for(const option of options)if(candidate===option)return!0;return!1})(value)&&setSite(value)},dir:"ltr"},__jsx("fieldset",{className:(0,style9.Z)(c_fieldset)},__jsx("legend",{className:(0,style9.Z)(c_legend)},"Select site"),options.map((siteName=>__jsx("label",{key:siteName},__jsx("input",{type:"radio",checked:currentSite===siteName,value:siteName,className:(0,style9.Z)(c_input),id:`method-radio--${siteName}`}),` ${siteName}`)))))}try{SelectSite.displayName="SelectSite",SelectSite.__docgenInfo={description:"",displayName:"SelectSite",props:{currentSite:{defaultValue:null,description:"",name:"currentSite",required:!0,type:{name:"enum",value:[{value:'"htz"'},{value:'"tm"'},{value:'"hdc"'}]}},setSite:{defaultValue:null,description:"",name:"setSite",required:!0,type:{name:"Dispatch<SetStateAction<Site>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/SelectSite.tsx#SelectSite"]={docgenInfo:SelectSite.__docgenInfo,name:"SelectSite",path:"../s-ds-stories/src/SelectSite.tsx#SelectSite"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);