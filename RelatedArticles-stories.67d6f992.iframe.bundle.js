/*! For license information please see RelatedArticles-stories.67d6f992.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[3820],{"../../ds-molecules/s-related-articles/src/RelatedArticles.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RelatedArticles_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-htz-link/src/index.ts");const s_htz_li_src=__webpack_require__("../../ds-atoms/s-htz-li/src/HtzLi.tsx").Z;var __jsx=react.createElement;const c={base:{marginBottom:"biWxPv",fontSize:"jrcYoY",lineHeight:"oZPxp","@media all and (min-width:64em) and (max-width:79.9375em)":{marginBottom:"bnaWag"},"@media all and (min-width:80em)":{fontSize:"ecfhKk",lineHeight:"klepka"}},lastItem:{marginBottom:"jfXcDa"},link:{color:"IYzP"}};function RelatedArticle({title,url,author,lastItem}){return __jsx(s_htz_li_src,{styleExtend:[c.base,lastItem&&c.lastItem]},__jsx(src.Z,{href:url,className:(0,style9.Z)(c.link)},title," "),__jsx("span",null,"| ",author.name))}try{RelatedArticle.displayName="RelatedArticle",RelatedArticle.__docgenInfo={description:"",displayName:"RelatedArticle",props:{contentId:{defaultValue:null,description:"",name:"contentId",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"Author"}},lastItem:{defaultValue:null,description:"",name:"lastItem",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-related-articles/src/components/RelatedArticle/RelatedArticle.tsx#RelatedArticle"]={docgenInfo:RelatedArticle.__docgenInfo,name:"RelatedArticle",path:"../../ds-molecules/s-related-articles/src/components/RelatedArticle/RelatedArticle.tsx#RelatedArticle"})}catch(__react_docgen_typescript_loader_error){}var RelatedArticles_jsx=react.createElement;const RelatedArticles_c_title={fontWeight:"iLdtFu",marginBottom:"biWxPv",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:64em) and (max-width:79.9375em)":{marginBottom:"jbvMne"},"@media all and (min-width:102em)":{fontSize:"iswsIN",lineHeight:"lbqvfo"},"@media all and (max-width:63.9375em)":{marginBottom:"XFEqP"}};function RelatedArticles_RelatedArticles({articles}){return articles.length?RelatedArticles_jsx("section",null,RelatedArticles_jsx("h3",{className:(0,style9.Z)(RelatedArticles_c_title)},"כתבות קשורות"),RelatedArticles_jsx("ul",null,articles.map(((article,index)=>RelatedArticles_jsx(RelatedArticle,(0,esm_extends.Z)({key:article.contentId},article,{lastItem:index===articles.length-1})))))):null}try{RelatedArticles_RelatedArticles.displayName="RelatedArticles",RelatedArticles_RelatedArticles.__docgenInfo={description:"",displayName:"RelatedArticles",props:{articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"RelatedArticleProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-related-articles/src/RelatedArticles.tsx#RelatedArticles"]={docgenInfo:RelatedArticles_RelatedArticles.__docgenInfo,name:"RelatedArticles",path:"../../ds-molecules/s-related-articles/src/RelatedArticles.tsx#RelatedArticles"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_pu76jrox5ef7vkjrotgp34yn6i/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"RelatedArticles"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"RelatedArticles"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-related-articles"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-related-articles": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"RelatedArticles"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import RelatedArticles from '@haaretz/s-related-articles';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A list of articles related to the article being viewed."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"molecules-relatedarticles--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"})]})}const RelatedArticles_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var RelatedArticles_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const RelatedArticles_stories={component:RelatedArticles_RelatedArticles,title:"Atoms/RelatedArticles",args:{articles:[{contentId:"1",title:'"אין לי שליטה על הגוף": סימון ביילס מסבירה את התסמונת הנדירה שמונעת ממנה להתחרות',url:"/",author:{contentId:"11",name:"אמנון הררי",url:"/"}},{contentId:"2",title:"ברגע אחד, העל-אנושית הוכיחה שגם היא נכשלת. זה רק הפך אותה למרשימה יותר",url:"/",author:{contentId:"22",name:"חדשות טוקיו 2020",url:"/"}},{contentId:"1",title:'"עדיין גאים בה ובאומץ שלה": סימון ביילס פרשה משני גמרים נוספים',url:"/",author:{contentId:"33",name:"איתמר קציר",url:"/"}}]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:RelatedArticles_doc}}},Overview=args=>RelatedArticles_stories_jsx(RelatedArticles_RelatedArticles,args);Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"args => (\n  <RelatedArticles {...args} />\n)"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-htz-li/src/HtzLi.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_HtzLi});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{listStyleType:"gnqlFF",paddingInlineStart:"hIfrmf",position:"cjScYX","::before":{position:"kvHVCE",insetInlineStart:"gnPqdD",top:"jYPXoJ",content:"dhXOUR",fontSize:"dElDiw",color:"fyqyeZ","@media all and (min-width:64em) and (max-width:101.9375em)":{marginInlineEnd:"cvCPgu"},"@media all and (min-width:102em)":{marginInlineEnd:"eVWFfg"}}},circleStyleType:{"--shape":"hBsTjU","--size":"hMHPlb"},triangleStyleType:{"--shape":"daPjKe","--size":"cnQeDY"},brandVariant:{"--htz-lnk-c":"fXdvYN"},neutralVariant:{"--htz-lnk-c":"ikQboA"},dangerVariant:{"--htz-lnk-c":"loKmYP"},successVariant:{"--htz-lnk-c":"hgnXgH"},salesVariant:{"--htz-lnk-c":"eOqKAR"}},HtzLi=function HtzLi({children=null,styleExtend=[],inlineStyle,variant="brand",styleType="circle"}){const variantClass=`${variant}Variant`,shape=`${styleType}StyleType`;return __jsx("li",{className:(0,style9.Z)(c.base,c[shape],c[variantClass],...styleExtend),style:inlineStyle},children)},src_HtzLi=HtzLi;try{HtzLi.displayName="HtzLi",HtzLi.__docgenInfo={description:"",displayName:"HtzLi",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<HtzLi>`, parent must be '<ul>'",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyHtzLi(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <HtzLi\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<HtzLi styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},styleType:{defaultValue:{value:"circle"},description:"Sets the color of the bullet\n@defaultValue 'circle'",name:"styleType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"circle"'},{value:'"triangle"'}]}},variant:{defaultValue:{value:"brand"},description:"Sets the color of the bullet\n@defaultValue 'brand'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"sales"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-li/src/HtzLi.tsx#HtzLi"]={docgenInfo:HtzLi.__docgenInfo,name:"HtzLi",path:"../../ds-atoms/s-htz-li/src/HtzLi.tsx#HtzLi"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/HtzLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.2.3_6m24vuloj5ihw4zc5lbsktc4fu/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["children","href","hrefAs","locale","prefetch","replace","scroll","shallow"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const HtzLink=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function HtzLinkComponent(_ref,forwardedRef){let{children=null,href,hrefAs,locale,prefetch,replace,scroll,shallow}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);if("string"!=typeof href&&!href.href)return console.warn('The "href" prop you passed <HtzLink /> is a "URL" object without an "href" field:',href,"\nOpting out of rendering the element"),console.trace(),null;if(function isNextLink(href){return"string"!=typeof href||!href.startsWith("http")}(href))return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({as:hrefAs,href,locale,prefetch,ref:forwardedRef,replace,scroll,shallow,legacyBehavior:!1},attrs),children);const url="string"==typeof href?href:href.href||void 0;return __jsx("a",(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({href:url,ref:forwardedRef},attrs),children)})),__WEBPACK_DEFAULT_EXPORT__=HtzLink;try{HtzLink.displayName="HtzLink",HtzLink.__docgenInfo={description:"",displayName:"HtzLink",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"]={docgenInfo:HtzLink.__docgenInfo,name:"HtzLink",path:"../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-link/src/HtzLink.tsx").Z},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);