(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,loadStylesheet,installedCssChunks,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({23:"AudioPlayer-stories",32:"Modal-stories",51:"MagazineMarginalia-stories",83:"Elevation-stories-mdx",304:"PpCoupon-stories",316:"Tldr-stories",372:"RichText-stories",498:"PpErrors-stories",532:"styles",550:"Embed-stories",581:"About-stories-mdx",623:"NoSSR-stories",698:"LayoutContainer-stories",880:"PpOffersPageHdc-stories",942:"useBreakpoint-stories",1095:"TextField-stories",1134:"PpErrorPage-stories",1235:"components-LoginForm-LoginForm-stories",1352:"ActionBar-stories",1478:"Card-stories",1722:"Breakpoints-stories-mdx",1809:"PpPayPalLogo-stories",1863:"PpPageLayout-stories",1897:"PullQuote-stories",2112:"MagazineLayout-stories",2196:"parseButtonProps-stories-mdx",2306:"BenderList-stories",2346:"Radii-stories-mdx",2612:"PpPaymentChangePage-stories",2632:"Typography-stories-mdx",2668:"PpHeader-stories",2677:"PpModal-stories",2714:"Stepper-stories",2877:"PromotionsInstructions-stories",3140:"PpFooter-stories",3289:"Step-stories",3388:"Color-stories-mdx",3395:"MarkerLogo-stories",3429:"Tokens-stories-mdx",3597:"ClickArea-stories",3641:"HtzLink-stories-mdx",3674:"Icon-stories",3715:"OfferLinks-stories",3727:"HtzLogo-stories",3751:"SpotList-stories",3820:"RelatedArticles-stories",3941:"BeforeAndAfter-stories",3974:"Notification-stories",4143:"components-OfferCard-OfferCard-stories",4274:"PpOffersPage-stories",4467:"EmailField-EmailField-stories",4752:"Popover-stories",5051:"HtzPicture-stories",5105:"NewsletterCard-stories",5112:"HdcLogo-stories",5238:"Dialog-stories",5429:"useRadioGroupState-stories-mdx",5532:"PromotionsSystemNotices-stories",5579:"HtzLi-stories",5613:"Scrollytelling-stories",5661:"useFocusWithin-stories",5667:"PpForgotPassword-stories",5703:"RadioGroup-stories",5839:"PpLoginPage-stories",5858:"TextFieldwithButton-stories",5862:"Footer-stories",5929:"TeaserImage-stories",6169:"Toggle-stories",6256:"NewsletterRecommendationsList-stories",6301:"PpImage-stories",6406:"VisuallyHidden-stories-mdx",6463:"Button-stories",6475:"PpCouponPage-stories",6522:"PpSpecialMaxPage-stories",6569:"HtzImage-stories",6685:"PageTitle-stories",6700:"Ripple-stories",6739:"ZIndex-stories-mdx",6871:"PpCreditCardIcn-stories",6878:"Checkbox-stories",6935:"Dropdown-stories",6939:"RadioButton-stories",7063:"nextFontOpenSans-stories-mdx",7127:"BlockLink-stories",7136:"PpDebtPage-stories",7249:"ArticleTags-stories",7320:"VerticalRhythm-stories-mdx",7348:"nextFontMerriweather-stories-mdx",7379:"PpMasthead-stories",7587:"MagazineHeader-stories",7596:"TextLink-stories",7678:"PpQuickPlanChangePage-stories",7742:"Caption-stories",8008:"ArticleBreadcrumbs-stories",8070:"PromotionsSystemNotice-stories",8074:"GraphqlFetcher-stories-mdx",8234:"LogoLoadingIndicator-stories",8288:"FormfieldDescription-stories",8338:"Collage-stories",8408:"ArticleByline-stories",8411:"PpTerms-stories",8473:"PpSecurePayment-stories",8474:"AlertsSubscriptionPopover-stories",8637:"components-RegistrationForm-RegistrationForm-stories",8717:"TeaserPlaceholder-stories",8847:"PpErrorPageLink-stories",8890:"components-TermsCheckBox-TermsCheckBox-stories",8898:"OfferCard-stories",8969:"InlineLinkList-stories",8993:"TopicHead-stories",9008:"ChangeAccountBanner-stories",9151:"ArticleTime-stories",9743:"Chip-stories",9831:"useImpressionObserver-stories",9916:"FileDownload-stories",9953:"PpThankYouPage-stories",9959:"PpPaymentPage-stories"}[chunkId]||chunkId)+"."+{23:"4c6cb8fc",32:"d964f603",51:"b90bdd3c",83:"0958698a",89:"c9682b19",304:"59e44c63",316:"c57b1c64",345:"015e985d",372:"9567f575",498:"297b61fa",532:"7d64d676",550:"e03d5654",581:"eda1ef8a",583:"19ebd6e1",623:"fa02798e",698:"fa20d647",778:"4c723864",880:"e385c770",942:"c2bcb3f1",1095:"8cf2fd18",1097:"dbff1da8",1134:"2925f15d",1235:"82669b79",1352:"87b502ee",1478:"085cdd80",1514:"da0aaacd",1722:"ea6ee6c7",1772:"27a08877",1809:"a92ceb17",1863:"f35e3707",1897:"1fe1847d",2002:"3f878e55",2092:"4b82e1a3",2112:"19411cbd",2196:"93a4e1b4",2306:"7eab67f5",2346:"f8279e11",2612:"154d87a9",2632:"f3fdc47d",2658:"fc09980f",2668:"c4a87db3",2677:"39ebbc2c",2714:"3d116114",2877:"b807117b",3140:"ab8f4a05",3160:"872fe1fc",3289:"09dc20b1",3388:"9c97f1b0",3395:"5a0ab0cd",3429:"ae0d5874",3597:"7fe1b8a3",3641:"d3562b2e",3674:"fd555065",3715:"3f316bfb",3727:"5636e4ec",3751:"8704f28a",3759:"4357e4f5",3820:"b4f9c268",3941:"73092a90",3974:"e9d44880",4143:"15344f58",4274:"0a5af3cf",4467:"b217bac3",4512:"5e71121a",4674:"9758c31d",4741:"6c60a9c9",4752:"fdcb5b4b",4948:"9ac8fb7b",4993:"19ae0858",5047:"406da781",5051:"773d6c1b",5080:"f7622434",5105:"2c5720d0",5112:"eb103029",5184:"eba322d1",5238:"134c28eb",5259:"5d82090b",5409:"8f13e88c",5429:"ba9a0203",5532:"e3e37b0a",5556:"495a80dc",5579:"627839b7",5613:"839aa6ae",5661:"f9ccd481",5667:"330fab93",5703:"354f7890",5834:"65b5627f",5839:"2c9cee27",5842:"739571c8",5858:"24c71b64",5862:"105617ad",5887:"490bd9a6",5929:"caab1ca0",6169:"b70494b3",6256:"8bac4f65",6265:"b0781042",6276:"8c65e165",6301:"8f8d98b0",6406:"2d8acbcf",6463:"97bf0fe4",6475:"1e72b182",6522:"aeaf0af2",6569:"bd392de8",6685:"64cbc3a3",6700:"1efd43e0",6739:"6ab1913a",6749:"3b81e72b",6868:"b50d5e49",6871:"63d1fe4e",6878:"3a49a47f",6894:"0f20d8ec",6911:"848e392b",6935:"e7b0e86c",6939:"1991296e",7061:"8a5f32cd",7063:"ffcd447f",7127:"7bf3ad0c",7136:"aecfeee4",7249:"47e425a8",7320:"21e1f2e3",7348:"44658fc4",7379:"d280d5e6",7438:"4927a04a",7445:"c5cfa138",7587:"718c0fbd",7596:"47bfd2ce",7678:"a4e4d7ab",7708:"dc951f4d",7742:"d8a89b2f",7783:"85aab62c",7832:"2d49f0f2",7868:"38020df4",8008:"dae8c4e0",8070:"c7b01fc8",8074:"a907a0cf",8171:"4854a778",8234:"29ebb8cf",8288:"9a548d6d",8338:"d234255b",8408:"884b1458",8411:"152b8fde",8473:"0a87aaaf",8474:"517d1ee5",8563:"71aa03d8",8637:"4d878cc3",8717:"16e70c0b",8847:"3e4b0e67",8890:"d5b77935",8898:"47f6e3df",8969:"c0dae451",8993:"5d8ba363",9008:"3b641472",9093:"c561a1ae",9151:"1df2149d",9223:"2a9f5531",9508:"82aec159",9743:"1532601d",9831:"83c2996e",9880:"88a6c734",9916:"4a3b9ceb",9953:"6b695383",9959:"c388b86d"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"styles.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@haaretz/a-tm-sg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@haaretz/a-tm-sg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,document.head.appendChild(linkTag)})(chunkId,fullhref,resolve,reject)})),installedCssChunks={1303:0},__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{532:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))},(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(1303|532)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();