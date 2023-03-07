(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,loadStylesheet,installedCssChunks,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({32:"Modal-stories",83:"Elevation-stories-mdx",304:"PpCoupon-stories",372:"RichText-stories",498:"PpErrors-stories",532:"styles",581:"About-stories-mdx",623:"NoSSR-stories",698:"LayoutContainer-stories",880:"PpOffersPageHdc-stories",1095:"TextField-stories",1134:"PpErrorPage-stories",1235:"components-LoginForm-LoginForm-stories",1478:"Card-stories",1722:"Breakpoints-stories-mdx",1760:"breakUrl-breakUrl-stories-mdx",1809:"PpPayPalLogo-stories",1863:"PpPageLayout-stories",2196:"parseButtonProps-stories-mdx",2346:"Radii-stories-mdx",2612:"PpPaymentChangePage-stories",2632:"Typography-stories-mdx",2668:"PpHeader-stories",2677:"PpModal-stories",2714:"Stepper-stories",2877:"PromotionsInstructions-stories",3099:"getArticleID-getArticleID-stories-mdx",3140:"PpFooter-stories",3289:"Step-stories",3388:"Color-stories-mdx",3395:"MarkerLogo-stories",3429:"Tokens-stories-mdx",3597:"ClickArea-stories",3641:"HtzLink-stories-mdx",3674:"Icon-stories",3715:"OfferLinks-stories",3727:"HtzLogo-stories",3820:"RelatedArticles-stories",4143:"components-OfferCard-OfferCard-stories",4274:"PpOffersPage-stories",4467:"EmailField-EmailField-stories",5112:"HdcLogo-stories",5161:"button-stories",5238:"Dialog-stories",5429:"useRadioGroupState-stories-mdx",5532:"PromotionsSystemNotices-stories",5579:"HtzLi-stories",5667:"PpForgotPassword-stories",5703:"RadioGroup-stories",5839:"PpLoginPage-stories",5858:"TextFieldwithButton-stories",6169:"Toggle-stories",6301:"PpImage-stories",6406:"VisuallyHidden-stories-mdx",6475:"PpCouponPage-stories",6522:"PpSpecialMaxPage-stories",6569:"HtzImage-stories",6685:"PageTitle-stories",6700:"Ripple-stories",6739:"ZIndex-stories-mdx",6871:"PpCreditCardIcn-stories",6878:"Checkbox-stories",6939:"RadioButton-stories",7063:"nextFontOpenSans-stories-mdx",7136:"PpDebtPage-stories",7320:"VerticalRhythm-stories-mdx",7348:"nextFontMerriweather-stories-mdx",7379:"PpMasthead-stories",7596:"TextLink-stories",8070:"PromotionsSystemNotice-stories",8074:"GraphqlFetcher-stories-mdx",8234:"LogoLoadingIndicator-stories",8288:"FormfieldDescription-stories",8411:"PpTerms-stories",8473:"PpSecurePayment-stories",8637:"components-RegistrationForm-RegistrationForm-stories",8847:"PpErrorPageLink-stories",8850:"useImpressionObserver-stories-mdx",8890:"components-TermsCheckBox-TermsCheckBox-stories",8898:"OfferCard-stories",9008:"ChangeAccountBanner-stories",9292:"switchToDomain-switchToDomain-stories-mdx",9355:"getHtzHostname-getHtzHostname-stories-mdx",9388:"getSubHtzDomain-getHtzSubDomain-stories-mdx",9462:"useFocusWithin-stories-mdx",9743:"Chip-stories",9953:"PpThankYouPage-stories",9959:"PpPaymentPage-stories"}[chunkId]||chunkId)+"."+{32:"dec9c4b1",83:"74dfeba0",304:"971ae8b5",372:"2a7b6ab2",417:"dbfbcaf7",498:"d940db24",532:"a33faa72",581:"0961f1cf",623:"cbe57b21",698:"6df25416",732:"0d09625b",872:"8eedce08",880:"12cff804",1095:"adfdf86b",1134:"87fa548b",1175:"0f7c23b8",1235:"c4f99cf5",1478:"9ef7b45a",1722:"7fb500f5",1760:"96401d22",1798:"38624787",1809:"75a6494b",1860:"33e801b6",1863:"905cdd94",2074:"1573bbd8",2131:"d9f15190",2196:"89bc2b1d",2219:"65679993",2346:"224a1875",2412:"882e50ec",2612:"3d0cc940",2632:"86435029",2668:"478927a2",2677:"068baf84",2714:"ae6041b1",2877:"52ce6e77",3099:"9113807e",3140:"07464915",3154:"8f1e5574",3187:"345f4f3b",3289:"7eb9ac26",3388:"fa02afbb",3395:"6dfc8fbe",3429:"b393407c",3597:"14518986",3641:"ef69e6c7",3674:"905aeb2e",3715:"7dff2886",3727:"6a92aa49",3820:"67d6f992",4143:"cc108cd7",4147:"3ba73346",4274:"f56610fa",4467:"09a60359",4739:"ecc95b61",4790:"18be0bb5",5112:"0845bf50",5161:"ddc92010",5238:"e21a6c22",5429:"9c38ae85",5532:"d96a54e2",5579:"35a1e6fe",5667:"247b7005",5703:"5459421c",5809:"85dff37b",5839:"59b92469",5858:"e832a769",6169:"6ad39fbc",6301:"c3a543b0",6406:"cd2728b4",6475:"748e4aba",6522:"55be288d",6569:"017d05b0",6685:"18ab7baf",6700:"05b0151c",6739:"466ef42c",6811:"e2aae88b",6871:"f7f66390",6878:"a63d9655",6911:"d5a2f62d",6939:"26678639",7063:"9cacf731",7136:"3d7eec31",7320:"8a9943fa",7348:"17bf0459",7379:"e599678c",7596:"3ddb3915",8070:"4a371ede",8074:"81b7d572",8234:"19e9983a",8284:"79c9082e",8288:"54b8e28b",8369:"f8a4dba6",8411:"91374e0f",8473:"1ac7ac45",8637:"341e0f6d",8847:"b82c5377",8850:"1e2d38fa",8890:"58b001cc",8898:"a6278b2b",9008:"1cf0a45f",9292:"bbb2de5f",9355:"8d123fda",9388:"bf9b70b2",9462:"67c1afba",9691:"775dff2d",9743:"1c26d575",9859:"a09e1128",9887:"4f6ac7f0",9953:"6a349f38",9959:"b863f297"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"styles.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@haaretz/a-tm-sg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@haaretz/a-tm-sg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,document.head.appendChild(linkTag)})(chunkId,fullhref,resolve,reject)})),installedCssChunks={1303:0},__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{532:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))},(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(1303|532)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();