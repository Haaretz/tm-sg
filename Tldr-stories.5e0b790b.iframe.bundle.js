"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[316],{"../../ds-organisms/s-tldr/src/Tldr.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Paying:()=>Paying,default:()=>Tldr_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),esm_react=__webpack_require__("../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/react.mjs"),vanilla=__webpack_require__("../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/vanilla.mjs"),userAtom=__webpack_require__("../../utils/s-atoms/src/user/userAtom.ts"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),src=__webpack_require__("../../ds-atoms/s-rich-text/src/index.ts");__webpack_require__("../../utils/s-server-data-fetchers/src/getArticleSlots/index.ts");var isHtmlNode=__webpack_require__("../../utils/s-type-predicates/src/isHtmlNode/index.ts"),s_icon_src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),s_button_src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts"),__jsx=react.createElement;const c={base:{backgroundColor:"fozssY"},title:{fontWeight:"iLdtFu",fontSize:"jrcYoY",lineHeight:"oZPxp","@media all and (min-width:80em)":{fontSize:"ecfhKk",lineHeight:"klepka"}},closeBtn:{backgroundColor:"ecNEpg",fontSize:"hkDjJj",display:"gSBWlu",alignItems:"foGVKH",justifyContent:"IVbXa",height:"cWFuRD",aspectRatio:"eUirwo",":focus":{backgroundColor:"NFulG"},":active":{backgroundColor:"gIXsZA"},"@media all and (min-width:102em)":{fontSize:"fqgvwS",height:"hqPcqw"}},header:{display:"gSBWlu",alignItems:"foGVKH",columnGap:"haEjPJ",width:"cRUUAa",cursor:"jsvbrX"},description:{paddingTop:"dmKgnC",paddingRight:"gcnSZS",paddingLeft:"hHZVWs",paddingBottom:"eayRfw","@media all and (max-width:37.4375em)":{paddingTop:"jVuyWd",paddingBottom:"ilviKd"},"@media all and (min-width:64em) and (max-width:79.9375em)":{paddingTop:"kBBRGt",paddingBottom:"gvYxOg"},"@media all and (min-width:64em)":{paddingRight:"liNAVd",paddingLeft:"ksdfHT",paddingBottom:"bAGpzR"},"@media all and (max-width:79.9375em)":{fontSize:"dSMmWD",lineHeight:"jkHOgb"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"kHlstv",lineHeight:"kPqvZ"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"}},paywall:{display:"gSBWlu",flexDirection:"iMkoWi",paddingTop:"bKjKUN",paddingBottom:"bnHxUw",paddingRight:"ftIldC",paddingLeft:"iDuqPI",fontSize:"jrcYoY",lineHeight:"oZPxp","@media all and (min-width:80em)":{fontSize:"ecfhKk",lineHeight:"klepka"},"@media all and (max-width:37.4375em)":{paddingTop:"ivOnmH",paddingBottom:"hcvRcP",paddingRight:"kXiRgE",paddingLeft:"iUeBXE"}},icon:{transitionDuration:"nplEL",transitionTimingFunction:"iaemGh",transitionProperty:"PQKIY"},iconIsOpen:{transform:"irojIS"},iconIsClosed:{transform:"ivASkU"},purchaseBtn:{marginTop:"fClzDx",alignSelf:"eAxdLi"}};function TldrClient(_ref){let{wordCount,children}=_ref;const[isOpen,setIsOpen]=react.useState(!1),[user]=(0,src_user.Z)(),isPayingUser="paying"===user.type,content=isPayingUser?__jsx("div",{className:(0,style9.Z)(c.description)},children):__jsx("div",{className:(0,style9.Z)(c.paywall)},"רכשו מינוי דיגיטלי ותיהנו מקריאה ללא הגבלה ושירותים הזמינים למנויים בלבד",__jsx(s_button_src.ZP,{as:"a",href:"https://promotion.themarker.com/?htm_source=site&htm_medium=button&htm_campaign=TLDR&htm_content=subscribe",variant:"sales",styleExtend:[c.purchaseBtn]},"כן, אני רוצה")),title=isPayingUser?(wordCount||0)>0?`תקציר הכתבה ב-${wordCount} מילים`:"תקציר הכתבה עד 100 מילים":"רוצה לקרוא תקציר של הכתבה?";return __jsx("aside",{className:(0,style9.Z)(c.base)},__jsx("div",{className:(0,style9.Z)(c.header),onClick:()=>setIsOpen((prev=>!prev))},__jsx("button",{className:(0,style9.Z)(c.closeBtn)},__jsx(s_icon_src.Z,{icon:"plus",styleExtend:[c.icon,isOpen?c.iconIsClosed:c.iconIsOpen],inlineStyle:{"--icon-color-override":"rgb(var(--c-tldrIcon))"}})),__jsx("h3",{className:(0,style9.Z)(c.title)},title)),isOpen?content:null)}TldrClient.__docgenInfo={description:"",methods:[],displayName:"TldrClient"};try{TldrClient.displayName="TldrClient",TldrClient.__docgenInfo={description:"",displayName:"TldrClient",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<TldrClient>`",name:"children",required:!1,type:{name:"ReactNode"}},wordCount:{defaultValue:null,description:"",name:"wordCount",required:!0,type:{name:"number | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-organisms/s-tldr/src/components/TldrClient.tsx#TldrClient"]={docgenInfo:TldrClient.__docgenInfo,name:"TldrClient",path:"../../ds-organisms/s-tldr/src/components/TldrClient.tsx#TldrClient"})}catch(__react_docgen_typescript_loader_error){}react.createElement;function PayingUserContent(_ref){let{tldr}=_ref;return react.createElement(react.Fragment,null,tldr&&tldr.map((richText=>(0,isHtmlNode.Z)(richText)?react.createElement(src.Z,(0,esm_extends.Z)({key:richText.content},richText)):null)))}PayingUserContent.__docgenInfo={description:"",methods:[],displayName:"PayingUserContent"};try{PayingUserContent.displayName="PayingUserContent",PayingUserContent.__docgenInfo={description:"",displayName:"PayingUserContent",props:{tldr:{defaultValue:null,description:"",name:"tldr",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-organisms/s-tldr/src/Tldr.tsx#PayingUserContent"]={docgenInfo:PayingUserContent.__docgenInfo,name:"PayingUserContent",path:"../../ds-organisms/s-tldr/src/Tldr.tsx#PayingUserContent"})}catch(__react_docgen_typescript_loader_error){}const Tldr_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"tldr",children:"Tldr"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Tldr"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-tldr"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-tldr": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Tldr"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Tldr from '@haaretz/s-tldr';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An expandable box containing containing a subscription offer message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-tldr--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An expandable box containing a short summation of the content it is attached to."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-tldr--paying"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}};var Tldr_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Tldr_stories_c_base={"@media all and (min-width:48em)":{width:"guyJGt"},"@media all and (min-width:64em)":{width:"eakUMC"},"@media all and (min-width:80em)":{width:"bEmlLq"},"@media all and (min-width:102em)":{width:"fgoaak"}},tldr=[{__typename:"HtmlNode",content:'עד שהגיעה הקורונה, ובמהלך כמה חודשים טובים, התמידה רונית ידעיה בהתנדבות. פעם בשבוע היתה צועדת מביתה בצפון יפו לבת ים, ומסייעת בחלוקת המזון של "כריך למי שצריך", ארגון חברתי שמחלק כריכים וממתקים לנזקקים. ידעיה היתה מספר 4 בהיררכיה, "כי בכל מקום שיש בו אנשים — יש היררכיות", אבל אין לה טענות. בכריעה או בישיבה על הרצפה היתה ממיינת ירקות לשקיות קטנות, זורקת שקיות אשפה',as:"p"}];function TldrWrapper(_ref){let{children,wordCount}=_ref;return Tldr_stories_jsx("div",{className:(0,style9.Z)(Tldr_stories_c_base)},Tldr_stories_jsx(TldrClient,{wordCount},children))}const Overview=args=>Tldr_stories_jsx(esm_react.zt,null,Tldr_stories_jsx(TldrWrapper,args,Tldr_stories_jsx(PayingUserContent,{tldr}))),Paying=args=>{userAtom.L.onMount=()=>{};const jotaiStore=(0,vanilla.MT)();return jotaiStore.set(userAtom.L,__webpack_require__("../../mocks/s-user-mocks/src/paying.json")),Tldr_stories_jsx(esm_react.zt,{store:jotaiStore},Tldr_stories_jsx(TldrWrapper,args,Tldr_stories_jsx(PayingUserContent,{tldr})))},Tldr_stories={component:TldrClient,title:"Atoms/Tldr",args:{wordCount:150},argTypes:{children:{control:!1},wordCount:{control:!1}},parameters:{docs:{page:Tldr_doc}}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <JotaiProvider>\n      <TldrWrapper {...args}>\n        <PayingUserContent tldr={tldr} />\n      </TldrWrapper>\n    </JotaiProvider>;\n}"},Overview.parameters?.docs?.source)})}),Paying.parameters=_objectSpread(_objectSpread({},Paying.parameters),{},{docs:_objectSpread(_objectSpread({},Paying.parameters?.docs),{},{source:_objectSpread({originalSource:"args => {\n  userAtom.onMount = () => undefined;\n  const jotaiStore = createJotaiStore();\n  // eslint-disable-next-line @typescript-eslint/no-var-requires\n  jotaiStore.set(userAtom, require('@haaretz/s-user-mocks/paying.json'));\n  return <JotaiProvider store={jotaiStore}>\n      <TldrWrapper {...args}>\n        <PayingUserContent tldr={tldr} />\n      </TldrWrapper>\n    </JotaiProvider>;\n}"},Paying.parameters?.docs?.source)})}),Overview.__docgenInfo={description:"",methods:[],displayName:"Overview"},Paying.__docgenInfo={description:"",methods:[],displayName:"Paying"}},"../../ds-atoms/s-rich-text/src/RichText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RichText,p:()=>DEFAULT_ELEMENT});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["as","inlineStyle","styleExtend","content","strongStyleExtend"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const c_base={},c_em={fontStyle:"foKnQA"},c_strong={fontWeight:"iLdtFu"},c_mark={backgroundColor:"hCbFkR"},c_link={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"hnHEBj",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},c_u={textDecorationLine:"dLUwcr",textDecorationSkip:"jqXfau"},DEFAULT_ELEMENT="p",allowedElements=["p","ul","ol","li","h3","span"];function RichText(_ref){let{as,inlineStyle,styleExtend=[],content,strongStyleExtend=[]}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT;if("string"==typeof as&&!allowedElements.includes(as)||"function"==typeof as)throw new TypeError('<RichTextProps /> may only render a "p", "h3", "ul", "ol" or  a "li" element.\nYou passed something else to the "as" prop');const html=function replaceAll(str,mapObj){if("string"!=typeof str)return"";const replaceStr=new RegExp(Object.keys(mapObj).join("|"),"gi");return str.replace(replaceStr,(matched=>mapObj[matched.toLowerCase()]||"#placeholder#"))}(content,{"#em#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_em),"#strong#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_strong,...strongStyleExtend),"#a#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_link),"#mark#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_mark),"#u#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_u)});return __jsx(Element,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},attrs,{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_base,...styleExtend),style:inlineStyle,dangerouslySetInnerHTML:{__html:html}}))}RichText.__docgenInfo={description:"",methods:[],displayName:"RichText"};try{RichText.displayName="RichText",RichText.__docgenInfo={description:"",displayName:"RichText",props:{as:{defaultValue:null,description:"The HTML element (`${AllowedElements}`) the `<RichText />` will be rendered as.\n@defaultValue 'p'",name:"as",required:!1,type:{name:'(ElementType<any> & (ComponentType<any> | "h3" | "li" | "ol" | "p" | "span" | "ul")) | undefined'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRichText(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RichText\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RichText styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},strongStyleExtend:{defaultValue:{value:"[]"},description:"Same as styleExtend for strong class.",name:"strongStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},content:{defaultValue:null,description:"The html string to set the elment's innerHtml.\nHas to be replaced with style9 classes first.",name:"content",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"HtmlElement id attribute.",name:"id",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"]={docgenInfo:RichText.__docgenInfo,name:"RichText",path:"../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-rich-text/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-rich-text/src/RichText.tsx").Z},"../../utils/s-type-predicates/src/isHtmlNode/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_isHtmlNode});const src_isHtmlNode=function isHtmlNode(item){return item instanceof Object&&"HtmlNode"===item.__typename}},"../../mocks/s-user-mocks/src/paying.json":module=>{module.exports=JSON.parse('{"anonymousId":"3543634563456","type":"paying","userName":"userName","firstName":"firstName","lastName":"lastName","university":false,"isLoggedIn":true}')}}]);