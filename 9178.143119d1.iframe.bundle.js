(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[9178],{"../../config/l-storybook-config/wwwroot/public/configShim.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>configShim});const configShim_namespaceObject=JSON.parse('{"brightspot":"https://www.haaretz.co.il","gqlServer":"https://fake-graphql-server.haaretz.co.il/graphql","gqlServerCluster":"http://fake-graphql-server.haaretz.co.il/graphql","bIServer":"https://services.haaretz.co.il/ds","env":"prod","msConfirmation":"https://services.haaretz.co.il/ms-confirmation","msPurchaseUrl":"https://ms-purchase.haaretz.co.il","cookieGenerator":"http://cookie-generator.ms-app","appType":"site","GA4Key":"G-V6JW03P6HP","UAKey":"UA-589309-3"}'),configShim={getSafe(property){const keys=Array.isArray(property)?property:property.split(".");let key,value=configShim_namespaceObject;for(;keys.length;){if(null===value||"object"!=typeof value){value=void 0;break}key=keys.shift(),value=value[key]}return value},get(property){const keyPath=Array.isArray(property)?property.join("."):property,value=this.getSafe(property);if(void 0===value)throw new Error(`Configuration property "${keyPath}" is not defined`);return value},has(property){return null!=property&&void 0!==this.getSafe(property)}}},"../../graphql/s-graphql-fetcher/src/GraphqlFetcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>fetcherFactory});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("../../shared/s-consts/src/index.ts"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js"),sha256=__webpack_require__("../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/sha256.js"),sha256_default=__webpack_require__.n(sha256),enc_hex=__webpack_require__("../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/enc-hex.js"),enc_hex_default=__webpack_require__.n(enc_hex);const src_getOperationName=function getOperationName(doc){const defenitions=doc?.definitions?.filter((definition=>"OperationDefinition"===definition.kind&&definition.name));return defenitions?.map((x=>x?.name?.value))[0]||null};const src_getOperationType=function getOperationType(doc){const defenition=doc?.definitions?.find((definition=>"OperationDefinition"===definition.kind));return defenition?.operation||"query"};var parser=__webpack_require__("../../../node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/parser.mjs");const src_parseQuery=function parseQuery(query){try{return(0,parser.Qc)(query)}catch(err){return console.error(err.message),null}};var breakUrl=__webpack_require__("../../utils/s-url-utils/src/breakUrl/index.ts");const src_getHtzHostname=function getHtzHostname(url){const{hostname}=(0,breakUrl.Z)(url),[,htzHostname]=/(?:.+)?((?:\.)?(?:haaretz|themarker)(?:\.co\.il|\.com))/.exec(hostname)||[];if(!htzHostname)throw new Error(`Something went wrong, htz hostname of ${hostname} not found`);return htzHostname};const src_switchToDomain=function switchToDomain(url,replaceTo){const newHostname=src_getHtzHostname(replaceTo),hostname=src_getHtzHostname(url);if("string"==typeof url){return url.replace(hostname,newHostname)}const result=url.hostname.replace(hostname,newHostname);return url.hostname=result,url},_excluded=["host","connection"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const gqlServerKey="undefined"==typeof window?"gqlServerCluster":"gqlServer",gqlServerUrl=configShim.Z.get(gqlServerKey),hostname=`www.${src.Kn}`;function fetcherFactory(query,variables,headers){let options=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return async function fetcher(context){try{const document=src_parseQuery(query),operationName=document&&src_getOperationName(document)||"",operationType=document&&src_getOperationType(document)||"",url=gqlServerUrl.startsWith("https://")?src_switchToDomain(gqlServerUrl,"themarker.com"):gqlServerUrl,sha256Hash=sha256_default()(query).toString(enc_hex_default()),{signal}=context||{},params={operationName,variables:JSON.stringify(variables||{}),extensions:JSON.stringify({persistedQuery:{version:1,sha256Hash}})},_ref=_objectSpread(_objectSpread({},headers||{}),{},{"content-type":"application/json",accept:"application/json",hostname}),{host,connection}=_ref,defaultHeaders=(0,objectWithoutProperties.Z)(_ref,_excluded),queryParams=new URLSearchParams(params);if("query"===operationType){const persistedResult=await fetch(`${url}?${queryParams.toString()}`,_objectSpread({credentials:"include",method:"GET",headers:defaultHeaders,signal},options));if(persistedResult.status<400){const persistendData=await persistedResult.json();if(!persistendData?.errors?.some((error=>"PersistedQueryNotFound"===error.message)))return persistendData.data}}const result=await fetch(`${url}?operation=${operationName}`,_objectSpread({method:"POST",credentials:"include",headers:defaultHeaders,body:JSON.stringify({query,variables:JSON.parse(queryParams.get("variables")||""),operationName,extensions:JSON.parse(queryParams.get("extensions")||"")}),signal},options)),json=await result.json();if(json.errors){const{message}=json.errors[0]||{};throw new Error(message||"Error…")}return json.data}catch(error){throw console.error(`GraphQL fetcher error: ${error.message}`),error}}}},"../../shared/s-consts/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Aq:()=>currency,Bt:()=>defaultUser,Kn:()=>hostname,Mc:()=>PP_STORE_DATA_KEY,OE:()=>siteId,TQ:()=>defaultNetworkErrorMessage,UB:()=>PP_PREV_STEPS_KEY,pq:()=>siteAlias});var _haaretz_s_common_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../utils/s-common-utils/src/capitalize/index.ts");const hostname="themarker.com",UserTypes_anonymous="anonymous",defaultUser={anonymousId:"",type:UserTypes_anonymous,extendedType:(0,_haaretz_s_common_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__.Z)(UserTypes_anonymous)},siteId=10,defaultNetworkErrorMessage="לא הצלחנו לקבל תשובה מהשרת, אנא נסו שוב.",siteAlias="TM",PP_STORE_DATA_KEY="pp-store-data",currency="ILS",PP_PREV_STEPS_KEY="pp-prev-steps"},"../../utils/s-atoms/src/user/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../utils/s-atoms/src/user/userAtom.ts").Z},"../../utils/s-atoms/src/user/userAtom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>user_userAtom,L:()=>userAtom});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vanilla=__webpack_require__("../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/vanilla.mjs"),react=__webpack_require__("../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/react.mjs"),cookieToMap=__webpack_require__("../../utils/s-cookie-utils/src/cookieToMap/index.ts");const src_isValidSsoMap=function isValidSsoMap(ssoMap){return!!(ssoMap&&void 0!==ssoMap&&"object"==typeof ssoMap&&"string"==typeof ssoMap.userName&&"string"==typeof ssoMap.userName&&/\S+@\S+\.\S+/.test(ssoMap.userName))};var src=__webpack_require__("../../shared/s-consts/src/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const src_createUser=function createUser(cookieVal){let forceRefresh=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const cookieMap=(0,cookieToMap.Z)(cookieVal,forceRefresh),ssoMap=cookieMap?._hs_ud,anonymousId=cookieMap.anonymousId;let userOptions=src.Bt;return ssoMap&&"object"==typeof ssoMap&&src_isValidSsoMap(ssoMap)&&(userOptions=_objectSpread(_objectSpread({},userOptions),ssoMap)),"string"==typeof anonymousId&&(userOptions=_objectSpread(_objectSpread({},userOptions),{},{anonymousId})),userOptions};var useQuery=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),GraphqlFetcher=(__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs"),__webpack_require__("../../graphql/s-graphql-fetcher/src/GraphqlFetcher.tsx"));const UserTypePersonalQueryDocument="\n    query UserTypePersonalQuery($site: Site!) {\n  user {\n    type(site: $site)\n    extendedType(site: $site)\n  }\n}\n    ",useUserTypePersonalQuery=(variables,options)=>(0,useQuery.a)(["UserTypePersonalQuery",variables],(0,GraphqlFetcher.Z)(UserTypePersonalQueryDocument,variables),options);useUserTypePersonalQuery.document=UserTypePersonalQueryDocument,useUserTypePersonalQuery.getKey=variables=>["UserTypePersonalQuery",variables];function userAtom_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function userAtom_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?userAtom_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):userAtom_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}useUserTypePersonalQuery.fetcher=(variables,options)=>(0,GraphqlFetcher.Z)(UserTypePersonalQueryDocument,variables,options);const initialUser=userAtom_objectSpread(userAtom_objectSpread({},src.Bt),{},{isLoggedIn:!1}),baseUserAtom=(0,vanilla.cn)(initialUser);baseUserAtom.debugPrivate=!0;const userAtom=(0,vanilla.cn)((get=>get(baseUserAtom)),(async(_get,set,action)=>{if("object"==typeof action)set(baseUserAtom,action);else if("logout"===action)set(baseUserAtom,initialUser);else if("login"===action){const clientUser=src_createUser(document.cookie,!0),isLoggedIn=!!clientUser.userName,types=await getUserWithTypes(isLoggedIn,document.cookie);set(baseUserAtom,userAtom_objectSpread(userAtom_objectSpread(userAtom_objectSpread({},clientUser),types),{},{isLoggedIn}))}else console.error(`Invalid user action: ${action}`)}));function getUserWithTypes(isLoggedIn,cookie){return new Promise((resolve=>isLoggedIn?useUserTypePersonalQuery.fetcher({site:src.pq},{cookie})().then((data=>resolve(data?.user?data.user:src.Bt))).catch((error=>(console.error(error.message),resolve(src.Bt)))):resolve(src.Bt)))}function useUser(){return(0,react.KO)(userAtom)}userAtom.debugLabel="user","undefined"==typeof window||window?.__NEXT_DATA__?.props?.pageProps?.user||(userAtom.onMount=setAtom=>{const clientUser=src_createUser(document.cookie,!0),isLoggedIn=!!clientUser.userName;getUserWithTypes(isLoggedIn,document.cookie).then((types=>{setAtom(userAtom_objectSpread(userAtom_objectSpread(userAtom_objectSpread({},clientUser),types),{},{isLoggedIn}))}))}),useUser.userDispenserFactory=function userDispenserFactory(cookie,types){const newUser=src_createUser(cookie,!0);return userAtom_objectSpread(userAtom_objectSpread(userAtom_objectSpread({},newUser),types),{},{isLoggedIn:!!newUser.userName})},useUser.getUserWithTypes=getUserWithTypes;const user_userAtom=useUser},"../../utils/s-common-utils/src/capitalize/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function capitalize(str){return str.replace(/\b[a-z]/gi,(function(char){return char.toUpperCase()}))}__webpack_require__.d(__webpack_exports__,{Z:()=>src_capitalize});try{capitalize.displayName="capitalize",capitalize.__docgenInfo={description:"",displayName:"capitalize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../utils/s-common-utils/src/capitalize/capitalize.tsx#capitalize"]={docgenInfo:capitalize.__docgenInfo,name:"capitalize",path:"../../utils/s-common-utils/src/capitalize/capitalize.tsx#capitalize"})}catch(__react_docgen_typescript_loader_error){}const src_capitalize=capitalize},"../../utils/s-common-utils/src/decodeUnicodeBase64/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>decodeUnicodeBase64});const decodeUnicodeBase64=function b64DecodeUnicode(str){return"undefined"==typeof document?Buffer.from(str,"base64").toString("utf-8"):decodeURIComponent(Array.prototype.map.call(atob(str),(function(c){return`%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`})).join(""))}},"../../utils/s-cookie-utils/src/cookieToMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_cookieToMap});var decodeUnicodeBase64=__webpack_require__("../../utils/s-common-utils/src/decodeUnicodeBase64/index.ts");function stringToMap(str){let{separator=/;\s*/,operator="="}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const map=Object.create(null);if("string"!=typeof str)throw new Error(`Parameter 'str' must be string, current value is ${str}`);if(!(separator instanceof RegExp))throw new Error(`Parameter 'Separator' must be instance of RegExp, current value is ${separator}`);if("string"!=typeof operator)throw new Error(`Parameter 'operator' must be string, current value is ${operator}`);const itemsArr=str.split(separator);return itemsArr.forEach((element=>{if("string"==typeof element){const splitPos=element.indexOf(operator),keyValue=[element.substring(0,splitPos),element.substring(splitPos+1)];try{keyValue[0]&&(map[keyValue[0]]=decodeURIComponent(keyValue[1]))}catch(error){console.error(error.message)}}})),map}let cookieAsMap;const src_cookieToMap=function cookieToMap(cookieVal){let forceRefresh=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!cookieAsMap||forceRefresh){if(cookieAsMap=stringToMap(cookieVal,{separator:/;\s?/}),"string"==typeof cookieAsMap._hs_ud)try{cookieAsMap._hs_ud=stringToMap((0,decodeUnicodeBase64.Z)(cookieAsMap._hs_ud),{separator:/:\s?/})}catch(error){console.error(error.message)}if("string"==typeof cookieAsMap["promotions-response-message"])try{cookieAsMap.ppResponseMessage=JSON.parse(cookieAsMap["promotions-response-message"])}catch(error){console.error(error.message)}}return cookieAsMap}},"../../utils/s-url-utils/src/breakUrl/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_breakUrl});const src_breakUrl=function breakUrl(url){if(!("string"==typeof url)||url.indexOf("://")>0||0===url.indexOf("//")){const{href,origin,protocol,username,password,hostname,port,pathname,search,hash,host,searchParams,toString}=new URL(url);return{href,origin,protocol,username,password,hostname,port,pathname,search,hash,host,searchParams,toString}}return function breakRelativeUrl(url){const[href="",origin="",protocol="",username="",password="",hostname="",,,port="",pathname="",search="",hash=""]=/^((?:(ws|https?)(?::\/\/))?(?:(\w.*):(.+?)@)?(([^\s?#/]+?)\.([^\s?#/]+?))?(?::(\d{2,5}))?)?(\/[^\s?#]*?)?(?:\/?(\?[^\s#]+?))?(#.+)?$/.exec(url)||[];return{href,origin,protocol,username,password,hostname,port,pathname,search,hash,host:hostname+port?`:${port}`:"",searchParams:new URLSearchParams(search),toString:url.toString}}(url)}},"?8823":()=>{}}]);