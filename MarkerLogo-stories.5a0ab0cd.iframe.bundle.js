"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[3395],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-marker-logo/src/MarkerLogo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>MarkerLogo_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts");const _excluded=["a11yLabel","styleExtend"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const c={width:{width:"ixjdFc"}};function HtzLogo(_ref){let{a11yLabel="TheMarker",styleExtend=[]}=_ref,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(src.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({icon:"marker",a11yLabel,styleExtend:[c.width,...styleExtend]},restProps))}try{MarkerLogo.displayName="MarkerLogo",MarkerLogo.__docgenInfo={description:"",displayName:"MarkerLogo",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyIcon(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Icon\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Icon styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:null,description:"The color of the icon",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"inverse"'},{value:'"brandInverse"'}]}},focusable:{defaultValue:null,description:"Make the icon keyboard accessible",name:"focusable",required:!1,type:{name:"boolean | undefined"}},screenReaderText:{defaultValue:null,description:"Visually hidden text for screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},a11yLabel:{defaultValue:{value:"TheMarker"},description:"An A11Y label for the icon",name:"a11yLabel",required:!1,type:{name:"string | undefined"}},a11yDescription:{defaultValue:null,description:"An A11Y description for the icon",name:"a11yDescription",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-marker-logo/src/MarkerLogo.tsx#MarkerLogo"]={docgenInfo:MarkerLogo.__docgenInfo,name:"MarkerLogo",path:"../../ds-atoms/s-marker-logo/src/MarkerLogo.tsx#MarkerLogo"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"markerlogo",children:"MarkerLogo"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"MarkerLogo"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-marker-logo"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-marker-logo": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"MarkerLogo"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import MarkerLogo from '@haaretz/s-marker-logo';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The TheMarker logo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The size of the logo can be controlled by setting 'font-size'."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-markerlogo--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}var _Overview$parameters,_Overview$parameters2;function MarkerLogo_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function MarkerLogo_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?MarkerLogo_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MarkerLogo_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const MarkerLogo_stories_c={size:{fontSize:"bxbahe"}},Overview=args=>(0,jsx_runtime.jsx)(HtzLogo,MarkerLogo_stories_objectSpread(MarkerLogo_stories_objectSpread({},args),{},{styleExtend:[MarkerLogo_stories_c.size]})),MarkerLogo_stories={component:HtzLogo,title:"Atoms/MarkerLogo",args:{a11yLabel:void 0,a11yDescription:void 0,focusable:void 0,screenReaderText:void 0,variant:void 0,styleExtend:[],inlineStyle:{}},argTypes:{a11yLabel:{control:"text",table:{defaultValue:{summary:"הארץ"}}},a11yDescription:{control:"text"},focusable:{control:"boolean"},screenReaderText:{control:"text"},styleExtend:{control:!1},"...restProps":{control:!1,description:"Attributes passed to the underlying SVG component",table:{type:{summary:void 0}}}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};Overview.parameters=MarkerLogo_stories_objectSpread(MarkerLogo_stories_objectSpread({},Overview.parameters),{},{docs:MarkerLogo_stories_objectSpread(MarkerLogo_stories_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:MarkerLogo_stories_objectSpread({originalSource:"args => <MarkerLogo {...args} styleExtend={[c.size]} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})})},"../../ds-atoms/s-icon/src/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const _excluded=["a11yLabel","a11yDescription","variant","focusable","screenReaderText","icon","inlineStyle","styleExtend"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c={base:{"--_icn-c":"hmHRXt","--_icn-c2":"hxvpkK",height:"jXmXEB",width:"hHGIsI"},inheritVariant:{"--_icn-dflt-c":"kbMSva"},brandVariant:{"--_icn-dflt-c":"fsJCwT"},brandInverseVariant:{"--_icn-dflt-c":"kgVBQo"},neutralVariant:{"--_icn-dflt-c":"jowrTv"},inverseVariant:{"--_icn-dflt-c":"edhiKO"},dangerVariant:{"--_icn-dflt-c":"iRFORO"},successVariant:{"--_icn-dflt-c":"kEwWGm"}},Icon=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function Icon(_ref,ref){let{a11yLabel,a11yDescription,variant="inherit",focusable=!1,screenReaderText,icon,inlineStyle,styleExtend=[]}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);const hasA11yText=a11yLabel||a11yDescription,descriptionId=react__WEBPACK_IMPORTED_MODULE_2__.useId(),a11yAttrs=hasA11yText?_objectSpread({"aria-label":a11yLabel},a11yDescription?{"aria-describedby":descriptionId}:{}):{"aria-hidden":!0,role:"img"},focusAttrs=focusable&&hasA11yText?{focusable:!0}:{focusable:!1,tabIndex:-1},desc=a11yDescription?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("desc",{id:descriptionId,children:a11yDescription}):null,variantClass=`${variant}Variant`;return!focusable||a11yDescription||a11yLabel||console.error(`An "${icon}" icon is set to be focusable but has no a11y label or description\n`,'The "focusable" attribute will not be assigned'),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",_objectSpread(_objectSpread(_objectSpread(_objectSpread({ref,className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.base,c[variantClass],...styleExtend),style:inlineStyle},focusAttrs),attrs),a11yAttrs),{},{children:[desc,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use",{xlinkHref:`#icn-${icon}`})]})),screenReaderText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_5__.ZP,{children:screenReaderText}):null]})}));Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{variant:{defaultValue:{value:"'inherit'",computed:!1},required:!1},focusable:{defaultValue:{value:"false",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyIcon(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Icon\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Icon styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},icon:{defaultValue:null,description:"The icon to render",name:"icon",required:!0,type:{name:"enum",value:[{value:'"marker"'},{value:'"menu"'},{value:'"search"'},{value:'"play"'},{value:'"audio"'},{value:'"Login"'},{value:'"Logout"'},{value:'"a11y"'},{value:'"alef"'},{value:'"android"'},{value:'"apple"'},{value:'"arrow-right"'},{value:'"audio-ff"'},{value:'"audio-less"'},{value:'"audio-off"'},{value:'"audio-rw"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"camera"'},{value:'"check"'},{value:'"chevron-bottom"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"close"'},{value:'"comments"'},{value:'"discover"'},{value:'"dislike"'},{value:'"drive"'},{value:'"edit"'},{value:'"facebook"'},{value:'"gift"'},{value:'"hdc"'},{value:'"headphones"'},{value:'"heart"'},{value:'"hide"'},{value:'"home"'},{value:'"htz"'},{value:'"like"'},{value:'"lock"'},{value:'"m"'},{value:'"mail"'},{value:'"microphone"'},{value:'"minus"'},{value:'"most-viewed"'},{value:'"pause"'},{value:'"pdf"'},{value:'"phone"'},{value:'"playlist"'},{value:'"plus"'},{value:'"printer"'},{value:'"rss"'},{value:'"share"'},{value:'"show"'},{value:'"spotify"'},{value:'"star"'},{value:'"twitter"'},{value:'"user"'},{value:'"warn"'},{value:'"whattsup"'},{value:'"zen"'},{value:'"zoom-in"'}]}},variant:{defaultValue:{value:"inherit"},description:"The color of the icon",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"inverse"'},{value:'"brandInverse"'}]}},a11yLabel:{defaultValue:null,description:"An A11Y label for the icon",name:"a11yLabel",required:!1,type:{name:"string | undefined"}},a11yDescription:{defaultValue:null,description:"An A11Y description for the icon",name:"a11yDescription",required:!1,type:{name:"string | undefined"}},focusable:{defaultValue:{value:"false"},description:"Make the icon keyboard accessible",name:"focusable",required:!1,type:{name:"boolean | undefined"}},screenReaderText:{defaultValue:null,description:"Visually hidden text for screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-icon/src/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../ds-atoms/s-icon/src/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-icon/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-icon/src/Icon.tsx").Z},"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H6:()=>_VisuallyHidden,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pL:()=>DEFAULT_ELEMENT});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const _excluded=["as","children","inlineStyle","isFocusable","styleExtend"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const classNames={base:{borderTopWidth:"glXlAQ",borderRightWidth:"ejfOAg",borderBottomWidth:"imuUWK",borderLeftWidth:"jePIQM",clip:"beEFvi",clipPath:"dbEoLb",height:"ktUKSC",marginTop:"jTjNVR",marginRight:"dIYdMf",marginBottom:"jjXZbq",marginLeft:"bmFLeF",overflowX:"dUvWpK",overflowY:"hRLVFh",paddingTop:"kVZHcH",paddingRight:"dwawJR",paddingBottom:"iATxZH",paddingLeft:"jQenOz",position:"bEvNbr",width:"JkHvI",whiteSpace:"bwVBMs",wordWrap:"gOKRJN",opacity:"UXrzu"},focusable:{":active":{clip:"kuytCZ",clipPath:"fbPfaP",height:"denmys",marginTop:"jnzTFi",marginRight:"jeOFPx",marginBottom:"eGVclN",marginLeft:"laFZyU",overflowX:"dEHlfP",overflowY:"biNehD",position:"izcesL",width:"fINNBL",whiteSpace:"enUJRt",opacity:"bZiUOO"},":focus":{clip:"ftGVOL",clipPath:"hVQFuO",height:"hivugc",marginTop:"drTIif",marginRight:"ffoFcR",marginBottom:"fZAKYa",marginLeft:"cFSbZy",overflowX:"kGSnZF",overflowY:"kHnbRw",position:"dAAEuD",width:"eckYoa",whiteSpace:"hTDTat",opacity:"hFxcLz"}}},DEFAULT_ELEMENT="span",VisuallyHidden=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function VisuallyHidden(_ref,ref){let{as,children=null,inlineStyle,isFocusable,styleExtend=[]}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({ref,className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(classNames.base,isFocusable&&classNames.focusable,...styleExtend),style:inlineStyle},attrs),{},{children}))}));VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden",props:{children:{defaultValue:{value:"null",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=VisuallyHidden;function _VisuallyHidden(_props){return null}try{_VisuallyHidden.displayName="_VisuallyHidden",_VisuallyHidden.__docgenInfo={description:"",displayName:"_VisuallyHidden",props:{children:{defaultValue:{value:"null"},description:"The content to hide inside `<VisuallyHidden>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyVisuallyHidden(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <VisuallyHidden\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},isFocusable:{defaultValue:null,description:"Should the element become visible when focused, e.g., skip links",name:"isFocusable",required:!1,type:{name:"true | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<VisuallyHidden styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"]={docgenInfo:_VisuallyHidden.__docgenInfo,name:"_VisuallyHidden",path:"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-visually-hidden/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx").ZP},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);