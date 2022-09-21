(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,loadStylesheet,installedCssChunks,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({83:"Elevation-stories-mdx",469:"s-url-utils-src-getSubHtzDomain-getHtzSubDomain-stories-mdx",532:"styles",581:"About-stories-mdx",1041:"s-url-utils-src-breakUrl-breakUrl-stories-mdx",1256:"s-card-src-Card-stories",1722:"Breakpoints-stories-mdx",1723:"s-url-utils-src-switchToDomain-switchToDomain-stories-mdx",1780:"s-pp-instructions-src-PromotionsInstructions-stories",2346:"Radii-stories-mdx",2632:"Typography-stories-mdx",2951:"s-htz-link-src-HtzLink-stories-mdx",3388:"Color-stories-mdx",3429:"Tokens-stories-mdx",4110:"s-use-radio-group-state-src-useRadioGroupState-stories-mdx",4129:"s-button-src-button-stories",5023:"s-layout-container-src-LayoutContainer-stories",5311:"s-stepper-src-Stepper-stories",5508:"s-pp-step-src-Step-stories",5560:"s-chip-src-Chip-stories",5959:"s-marker-logo-src-MarkerLogo-stories",6191:"s-text-field-src-TextField-stories",6739:"ZIndex-stories-mdx",6926:"s-visually-hidden-src-VisuallyHidden-stories-mdx",7026:"s-pp-offer-toggle-src-Toggle-stories",7120:"s-use-focus-within-src-useFocusWithin-stories-mdx",7297:"s-radio-group-src-RadioGroup-stories",7320:"VerticalRhythm-stories-mdx",7505:"s-offer-card-src-OfferCard-stories",7534:"s-pp-header-src-PpHeader-stories",7617:"s-radio-button-src-RadioButton-stories",7721:"s-url-utils-src-getHtzHostname-getHtzHostname-stories-mdx",7792:"s-pp-system-notice-src-PromotionsSystemNotice-stories",7842:"s-icon-src-Icon-stories",7947:"s-text-link-src-TextLink-stories",7967:"s-offer-links-src-OfferLinks-stories",8454:"s-rich-text-src-RichText-stories",8489:"s-pp-footer-src-PpFooter-stories",8520:"s-pp-system-notices-src-PromotionsSystemNotices-stories",8714:"s-pp-title-src-PageTitle-stories",8741:"s-checkbox-src-Checkbox-stories",9688:"s-parse-button-props-src-parseButtonProps-stories-mdx",9708:"s-formfield-description-src-FormfieldDescription-stories",9872:"s-htz-logo-src-HtzLogo-stories"}[chunkId]||chunkId)+"."+{83:"db2fa23d",469:"8c1e58e6",484:"a9a66010",532:"cd03ffed",581:"fae76793",1041:"52a7c9b6",1256:"dc628e60",1722:"f51cdf9e",1723:"379a5f04",1751:"4000bfd6",1780:"d74439cc",2164:"17396c08",2346:"a0bbd46f",2550:"4ce18daa",2632:"97d260aa",2656:"97404bbe",2951:"ad65326a",3108:"d6bbe334",3388:"4df8df3c",3429:"d1fad722",4110:"3bd72591",4129:"94442ba3",4222:"588d596c",4754:"d277d122",5023:"03e401cf",5311:"85c6062e",5508:"36748d34",5560:"997a8a4c",5835:"443d9526",5959:"109458ff",5996:"56104838",6191:"fbdd0e57",6509:"1c446e47",6739:"fbc2e675",6926:"490b964b",7026:"c522f686",7120:"a3d15e45",7297:"c5d0a24e",7320:"4f6b88ef",7505:"d67bbbfa",7534:"0f8b5852",7617:"d50bbff1",7689:"9158b3dd",7721:"c987c750",7792:"3549a53e",7842:"4cce9ec1",7947:"ed452492",7967:"950eeee0",8454:"bebaed5e",8489:"4666091e",8520:"4599430f",8607:"47594a72",8714:"3f515310",8741:"e46bf074",9688:"e2f34638",9708:"65419a50",9774:"f0ac47ae",9872:"124016ee"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"styles.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@haaretz/a-tm-sg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@haaretz/a-tm-sg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,document.head.appendChild(linkTag)})(chunkId,fullhref,resolve,reject)})),installedCssChunks={1303:0},__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{532:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))},(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(1303|532)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();