/*! For license information please see MagazineLayout-stories.5b03c62d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[2112],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-magazine-layout/src/MagazineLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MagazineLayout_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const src=__webpack_require__("../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx").Z;var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["as","children","inlineStyle","styleExtend"];var __jsx=react.createElement;const c_base={"--outerMarginWidth":"kBiUkV","--outerGutterWidth":"iTnceT","--marginaliaWidth":"itRiKY","--innerGutterWidth":"bzpSvb","--measure":"gborPl","--rowSpacing":"liOREO",display:"kbCXHY",rowGap:"ghDYqh",gridTemplateColumns:"dIOqzt","@media all and (min-width:37.5em)":{"--outerMarginWidth":"fDcmjg","--outerGutterWidth":"fpSvfH","--innerGutterWidth":"gJhBaI","--measure":"casSbf"},"@media all and (min-width:64em)":{"--outerGutterWidth":"juRxDn","--marginaliaWidth":"kFyrut","--measure":"byRwtc"},"@media all and (min-width:80em)":{"--outerMarginWidth":"dsHpov","--marginaliaWidth":"lfrits","--measure":"dBfyl","--rowSpacing":"lvbnD"},"@media all and (min-width:102em)":{"--measure":"bfdpdg","--rowSpacing":"bqvRZG"}},DEFAULT_ELEMENT="div";function MagazineLayout(props){const{as=DEFAULT_ELEMENT,children=null,inlineStyle,styleExtend=[]}=props,attrs=(0,objectWithoutProperties.Z)(props,_excluded);return __jsx(as,(0,esm_extends.Z)({className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle},attrs),children)}try{MagazineLayout.displayName="MagazineLayout",MagazineLayout.__docgenInfo={description:"",displayName:"MagazineLayout",props:{as:{defaultValue:null,description:"The HTML element (`string`) or React component\nthe `<LayoutContainer />` will be rendered as.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"main"'},{value:'"section"'}]}},children:{defaultValue:null,description:"The Children to be rendered inside `<MagazineLayout>`",name:"children",required:!1,type:{name:"(ReactNode & string) | (ReactNode & number) | (ReactNode & false) | (ReactNode & true) | (ReactNode & ReactElement<any, string | JSXElementConstructor<...>>) | (ReactNode & ReactFragment) | (ReactNode & ReactPortal) | null | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyMagazineLayout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <MagazineLayout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"(Omit<Properties<0 | (string & {}), string & {}>, AtRules | Pseudos> & { [key: `--${string}`]: string | number; }) | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<MagazineLayout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx#MagazineLayout"]={docgenInfo:MagazineLayout.__docgenInfo,name:"MagazineLayout",path:"../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx#MagazineLayout"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),s_story_callout_src=__webpack_require__("../s-story-callout/src/index.ts");const MagazineLayout_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"magazinelayout",children:"MagazineLayout"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineLayout"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-magazine-layout"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-magazine-layout": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineLayout"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import MagazineLayout from '@haaretz/s-magazine-layout';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A container component enables laying its child inside the predetermined Magazine\narticle page layout, and automatically provide default spacing between its child\nelements on the vertical plane (e.g. the space between two paragraphs), which\ncan be adjusted by each child if needed."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It uses ",(0,jsx_runtime.jsx)(_components.code,{children:"display: grid"})," to create the following inline-axis (horizontal) tracks:\n",(0,jsx_runtime.jsx)(_components.code,{children:"bleed"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"outerGutter"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"innerGutter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"main"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"+---------+-------------+------------------+-------------+------+-------------+----------------+-------------+---------+\n|  bleed  | outerGutter | marginalia-start | innerGutter | main | innerGutter | marginalia-end | outerGutter |  bleed  |\n+---------+-------------+------------------+-------------+------+-------------+----------------+-------------+---------+\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track is the main content container, designed to hold body-copy a\nmeasure providing an optimized reading experience. It is also well suited for\nmost other content elements such as pictures, videos and embeds. Child can be\nplaced in the main track with ",(0,jsx_runtime.jsx)(_components.code,{children:"grid-columnt: main"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"layout-tracks",children:"Layout Tracks"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"bleed"}),' track allows placing elements so that "bleed out" and extend to the\nedge of the screen.']}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"outerGutter"})," track can be used to stretch element almost to the edge of the\nscreen, while ensuring proper margin from it. One such use case is the content\nof opening element in the magazine page's header."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"marinalia"})," track can be used to place smaller elements at either side of\nthe ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track (on larger breakpoints). Additionally, it can be used to\nstretch out elements outside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track so that they extrude outside it\nand give a measured sense of purposeful asymmetry."]}),"\n",(0,jsx_runtime.jsx)(s_story_callout_src.Z,{title:"NOTICE",children:(0,jsx_runtime.jsxs)(_components.p,{children:["Elements can only be placed (in the ",(0,jsx_runtime.jsx)(_components.code,{children:"DOM"}),") alongside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column in an\norder that respects the flow of the grid. That means that elements in the\n",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia-start"})," column ",(0,jsx_runtime.jsxs)(_components.strong,{children:["should be ",(0,jsx_runtime.jsx)(_components.em,{children:"before"})," the element they are\ntop-aligned to"]})," , and those in the ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia-end"})," column ",(0,jsx_runtime.jsxs)(_components.strong,{children:["should be\n",(0,jsx_runtime.jsx)(_components.em,{children:"after"})," the element they are top-aligned to"]}),"."]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Elements placed in the ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia"})," column alongside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column, should\nuse the complementary ",(0,jsx_runtime.jsx)(_components.code,{children:"Marginalia"})," component from the\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-magazine-marginalia"})," package to take care of spacing and assignment\nto the correct grid column."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"child-element-spacing",children:"Child Element Spacing"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The default spacing between elements can be changed for an individual element by\nsimply assigning top or bottom margin on that element. A positive margin will\nincrease spacing, while a negative one will decrease it."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'One such use case are subheads. Since a subhead is used to split the content of\nan article into sections, it "belongs" to the text beneath it, which it\nheadlines. By default, all elements have equal spacing between them, but the\ndesign principle of proximity suggests that it is better for them to be closer\nto the element to which they are related:'}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-md",children:"**This is Better _(easy attached to next paragraph)_** Lorem ipsum dolor sit\namet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi.\nui minim minim sint cillum sint consectetur cupidatat.\n\nLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint.\n\n**Than This _(hard to determine attachment)_**\n\nLorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur\nofficia. Reprehenderit nostrud.\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To solve this, we can set a negative ",(0,jsx_runtime.jsx)(_components.code,{children:"margin-bottom"}),' on the subhead element so\nthat it "pulls up" the element beneath it into the grid gap and minimizes the\nspacing between the elements.']}),"\n",(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-magazinelayout--overview",inline:!1,height:"70vh"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n"]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3,MagazineLayout_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const MagazineLayout_stories={component:MagazineLayout,title:"Atoms/MagazineLayout",args:{inlineStyle:{},styleExtend:[]},argTypes:{children:{control:!1},styleExtend:{control:!1}},parameters:{docs:{page:MagazineLayout_doc}}},MagazineLayout_stories_c_header={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"henzaq",gridColumnStart:"gBZibj",height:"cxbVgb",justifyContent:"IVbXa"},MagazineLayout_stories_c_p={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"eeSwuc",gridColumnStart:"jrBSXg",height:"kyCuSk",justifyContent:"IVbXa"},MagazineLayout_stories_c_bleed={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gAgjeC",gridColumnStart:"lkWngP",height:"kyCuSk",justifyContent:"IVbXa"},MagazineLayout_stories_c_pullStart={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"eeSwuc",gridColumnStart:"kFmWPS",height:"kyCuSk",justifyContent:"IVbXa"},MagazineLayout_stories_c_pullEnd={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gnBXxX",gridColumnStart:"jrBSXg",height:"kyCuSk",justifyContent:"IVbXa"},MagazineLayout_stories_c_wide={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gnBXxX",gridColumnStart:"kFmWPS",height:"kyCuSk",justifyContent:"IVbXa"},MagazineLayout_stories_c_marginContent={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",height:"gwDIAE",justifyContent:"IVbXa"},Overview={parameters:{layout:"fullscreen"},args:{children:MagazineLayout_stories_jsx(react.Fragment,null,MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_header)},"כותרת"),MagazineLayout_stories_jsx("p",{className:(0,style9.Z)(MagazineLayout_stories_c_p)},"פיסקה"),MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_bleed)},"קצה לקצה"),MagazineLayout_stories_jsx("p",{className:(0,style9.Z)(MagazineLayout_stories_c_p)},"פיסקה"),MagazineLayout_stories_jsx(src,{side:"end"},MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_marginContent)},"תוכן צד (סוף)")),MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_pullStart)},"חורג אחורה"),MagazineLayout_stories_jsx(src,{side:"start"},MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_marginContent)},"תוכן צד (התחלה)")),MagazineLayout_stories_jsx("p",{className:(0,style9.Z)(MagazineLayout_stories_c_p)},"פיסקה"),MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_pullEnd)},"חורג קדימה"),MagazineLayout_stories_jsx("p",{className:(0,style9.Z)(MagazineLayout_stories_c_p)},"פיסקה"),MagazineLayout_stories_jsx("div",{className:(0,style9.Z)(MagazineLayout_stories_c_wide)},"אלמנט רחב"))}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    layout: 'fullscreen'\n  },\n  args: {\n    children: <>\n        <div className={s9(c.header)}>\n          {fork({\n          default: 'כותרת',\n          hdc: 'Title'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.bleed)}>\n          {fork({\n          default: 'קצה לקצה',\n          hdc: 'bleed'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <MagazineMarginalia side=\"end\">\n          <div className={s9(c.marginContent)}>\n            {fork({\n            default: 'תוכן צד (סוף)',\n            hdc: 'marginalia'\n          })}\n          </div>\n        </MagazineMarginalia>\n        <div className={s9(c.pullStart)}>\n          {fork({\n          default: 'חורג אחורה',\n          hdc: 'Pull to strat'\n        })}\n        </div>\n        <MagazineMarginalia side=\"start\">\n          <div className={s9(c.marginContent)}>\n            {fork({\n            default: 'תוכן צד (התחלה)',\n            hdc: 'marginalia'\n          })}\n          </div>\n        </MagazineMarginalia>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.pullEnd)}>\n          {fork({\n          default: 'חורג קדימה',\n          hdc: 'Pull to End'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.wide)}>\n          {fork({\n          default: 'אלמנט רחב',\n          hdc: 'Wide element'\n        })}\n        </div>\n      </>\n  }\n}"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MagazineMarginalia});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{position:"cjScYX",height:"cntfeo"},start:{"@media all and (min-width:80em)":{gridColumnEnd:"lkUcIY",gridColumnStart:"fgbYzP"}},end:{"@media all and (min-width:80em)":{gridColumnEnd:"jPYLCf",gridColumnStart:"dnTOyx",marginTop:"gcxHiz"}},hiddenFallback:{"@media all and (max-width:79.9375em)":{display:"bkXpXX"}},mainFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"bfzQfK",gridColumnStart:"kgrowE"}},bleedFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"dvgcva",gridColumnStart:"iXVvXc"}},outerGutterFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"jNTlpB",gridColumnStart:"jAaJlJ"}},child:{left:"jftpmT",position:"bEvNbr",top:"dqNEPM",width:"cRUUAa"},childEnd:{top:"iBYGnd"}};function MagazineMarginalia(_ref){let{children=null,inlineStyle,styleExtend=[],side,fallbackColumn="hidden"}=_ref;const fallbackClass="".concat(fallbackColumn,"Fallback");return __jsx("div",{className:(0,style9.Z)(c.base,c[side],c[fallbackClass],...styleExtend),style:inlineStyle},__jsx("div",{className:(0,style9.Z)(c.child,"end"===side&&c.childEnd)},children))}try{MagazineMarginalia.displayName="MagazineMarginalia",MagazineMarginalia.__docgenInfo={description:"",displayName:"MagazineMarginalia",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<MagazineMarginalia>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyMagazineMarginalia(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <MagazineMarginalia\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<MagazineMarginalia styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},side:{defaultValue:null,description:"The side of the `main` conlumn on which the\n`<MagazineMarginalia>` should be rendered.",name:"side",required:!0,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},fallbackColumn:{defaultValue:{value:"hidden"},description:"The column the to render the content in on smaller\nbreakpoints.\n\nNot displayed on small breakpoints if set to `'hidden'`\n@defaultValue 'hidden'",name:"fallbackColumn",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"main"'},{value:'"hidden"'},{value:'"bleed"'},{value:'"outerGutter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"]={docgenInfo:MagazineMarginalia.__docgenInfo,name:"MagazineMarginalia",path:"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"})}catch(__react_docgen_typescript_loader_error){}},"../s-story-callout/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_wrapper={backgroundColor:"jmyBGg",borderTopLeftRadius:"gvQKzB",borderTopRightRadius:"gXtGmO",borderBottomRightRadius:"gGmREU",borderBottomLeftRadius:"ia_DRrH",overflowX:"dUvWpK",overflowY:"hRLVFh",position:"cjScYX",letterSpacing:"iZHebp",paddingTop:"jWWtke",paddingBottom:"bnHxUw",paddingInlineStart:"dwXqlO",paddingInlineEnd:"kwGEcy"},c_strong={backgroundColor:"gtUqwH",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",color:"hugNVC",marginInlineEnd:"joUZpP",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL",fontSize:"fyHdVr",lineHeight:"iKTruj"},c_x={aspectRatio:"ldVxdb",backgroundColor:"kfThfC",borderTopLeftRadius:"ctWdVF",borderTopRightRadius:"jkGfDR",borderBottomRightRadius:"bSTogt",borderBottomLeftRadius:"hSDpeY",color:"kCxIXX",display:"cpOcAb",fontWeight:"inxVzO",lineHeight:"egGyMq",marginInlineEnd:"joUZpP",paddingInlineStart:"kQDwxQ",paddingInlineEnd:"cfEHVR",transform:"gEhxlz"};function StoryCallout(_ref){let{children=null,inlineStyle,styleExtend=[],title}=_ref;return __jsx("aside",{className:(0,style9.Z)(c_wrapper,...styleExtend),style:inlineStyle},title&&__jsx("strong",{className:"sb-unstyled  ".concat((0,style9.Z)(c_strong))},__jsx("span",{className:(0,style9.Z)(c_x)},"✗"),title,":"),title&&" ",children)}try{StoryCallout.displayName="StoryCallout",StoryCallout.__docgenInfo={description:"",displayName:"StoryCallout",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<StoryCallout>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyStoryCallout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <StoryCallout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<StoryCallout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-story-callout/src/StoryCallout.tsx#StoryCallout"]={docgenInfo:StoryCallout.__docgenInfo,name:"StoryCallout",path:"../s-story-callout/src/StoryCallout.tsx#StoryCallout"})}catch(__react_docgen_typescript_loader_error){}const src=StoryCallout},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);