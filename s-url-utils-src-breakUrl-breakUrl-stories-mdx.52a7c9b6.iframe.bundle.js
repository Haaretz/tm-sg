"use strict";(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[1041],{"../../utils/s-url-utils/src/breakUrl/breakUrl.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22/node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",null,"breakUrl"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{component:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null),title:"Utils/breakUrl",argTypes:{url:{name:"url",description:"The URL to split into parts",table:{type:{summary:"string | URL",detail:"\n            Examples:\n            String: 'https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000'\n            URL: new URL('https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000')\n          ",required:!0}},control:!1}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",null,"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"breakUrl")," has ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-url-utils")," listed in\nits ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"dependencies")," field:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-url-utils": "workspace:*"\n    // ...\n  }\n}\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"breakUrl")," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"You can then import it like this:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-ts"},"import breakUrl from '@haaretz/s-url-utils/breakUrl';\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",null,"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"A utility function that takes url and splits it into specific parts, e.g.\nprotocol, hostname, port, path and other."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.$4,{story:"^",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"In the following example, we split a regular article url into its granular\ncomponents:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from \'react\';\nimport breakUrl from \'@haaretz/s-url-utils/breakUrl\';\n\ninterface Props {\n  url: string | URL;\n}\n\nfunction RelativeLink({ url = \'https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000\' }: Props) {\n  const {\n      host, // => "www.haaretz.co.il"\n      hostname, // => "www.haaretz.co.il"\n      href, // => "https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000"\n      origin, // => "https://www.haaretz.co.il"\n      pathname, // => "/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000"\n      protocol, // => "https:"\n      ...rest\n    } = breakUrl(url);\n\n\n  return <Link href={pathname}>;\n}\n')))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utils/breakUrl",component:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null),argTypes:{url:{name:"url",description:"The URL to split into parts",table:{type:{summary:"string | URL",detail:"\n            Examples:\n            String: 'https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000'\n            URL: new URL('https://www.haaretz.co.il/ty-article/.premium/00000182-ad64-dd18-afa6-af6d7ec10000')\n          ",required:!0}},control:!1}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]}}]);