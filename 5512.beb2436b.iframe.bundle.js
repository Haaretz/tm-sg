/*! For license information please see 5512.beb2436b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_haaretz_a_tm_sg=self.webpackChunk_haaretz_a_tm_sg||[]).push([[5512],{"../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/queryObserver.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>QueryObserver});var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/utils.mjs"),_notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs"),_focusManager_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/focusManager.mjs"),_subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/subscribable.mjs"),_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/retryer.mjs");class QueryObserver extends _subscribable_mjs__WEBPACK_IMPORTED_MODULE_0__.l{constructor(client,options){super(),this.client=client,this.options=options,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(options)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(options,notifyOptions){const prevOptions=this.options,prevQuery=this.currentQuery;if(this.options=this.client.defaultQueryOptions(options),(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.VS)(prevOptions,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=prevOptions.queryKey),this.updateQuery();const mounted=this.hasListeners();mounted&&shouldFetchOptionally(this.currentQuery,prevQuery,this.options,prevOptions)&&this.executeFetch(),this.updateResult(notifyOptions),!mounted||this.currentQuery===prevQuery&&this.options.enabled===prevOptions.enabled&&this.options.staleTime===prevOptions.staleTime||this.updateStaleTimeout();const nextRefetchInterval=this.computeRefetchInterval();!mounted||this.currentQuery===prevQuery&&this.options.enabled===prevOptions.enabled&&nextRefetchInterval===this.currentRefetchInterval||this.updateRefetchInterval(nextRefetchInterval)}getOptimisticResult(options){const query=this.client.getQueryCache().build(this.client,options);return this.createResult(query,options)}getCurrentResult(){return this.currentResult}trackResult(result){const trackedResult={};return Object.keys(result).forEach((key=>{Object.defineProperty(trackedResult,key,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(key),result[key])})})),trackedResult}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage,...options}={}){return this.fetch({...options,meta:{refetchPage}})}fetchOptimistic(options){const defaultedOptions=this.client.defaultQueryOptions(options),query=this.client.getQueryCache().build(this.client,defaultedOptions);return query.isFetchingOptimistic=!0,query.fetch().then((()=>this.createResult(query,defaultedOptions)))}fetch(fetchOptions){var _fetchOptions$cancelR;return this.executeFetch({...fetchOptions,cancelRefetch:null==(_fetchOptions$cancelR=fetchOptions.cancelRefetch)||_fetchOptions$cancelR}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(fetchOptions){this.updateQuery();let promise=this.currentQuery.fetch(this.options,fetchOptions);return null!=fetchOptions&&fetchOptions.throwOnError||(promise=promise.catch(_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.ZT)),promise}updateStaleTimeout(){if(this.clearStaleTimeout(),_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.sk||this.currentResult.isStale||!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.PN)(this.options.staleTime))return;const timeout=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),timeout)}computeRefetchInterval(){var _this$options$refetch;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(_this$options$refetch=this.options.refetchInterval)&&_this$options$refetch}updateRefetchInterval(nextInterval){this.clearRefetchInterval(),this.currentRefetchInterval=nextInterval,!_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.sk&&!1!==this.options.enabled&&(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||_focusManager_mjs__WEBPACK_IMPORTED_MODULE_2__.j.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(query,options){const prevQuery=this.currentQuery,prevOptions=this.options,prevResult=this.currentResult,prevResultState=this.currentResultState,prevResultOptions=this.currentResultOptions,queryChange=query!==prevQuery,queryInitialState=queryChange?query.state:this.currentQueryInitialState,prevQueryResult=queryChange?this.currentResult:this.previousQueryResult,{state}=query;let data,{dataUpdatedAt,error,errorUpdatedAt,fetchStatus,status}=state,isPreviousData=!1,isPlaceholderData=!1;if(options._optimisticResults){const mounted=this.hasListeners(),fetchOnMount=!mounted&&shouldFetchOnMount(query,options),fetchOptionally=mounted&&shouldFetchOptionally(query,prevQuery,options,prevOptions);(fetchOnMount||fetchOptionally)&&(fetchStatus=(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.Kw)(query.options.networkMode)?"fetching":"paused",dataUpdatedAt||(status="loading")),"isRestoring"===options._optimisticResults&&(fetchStatus="idle")}if(options.keepPreviousData&&!state.dataUpdatedAt&&null!=prevQueryResult&&prevQueryResult.isSuccess&&"error"!==status)data=prevQueryResult.data,dataUpdatedAt=prevQueryResult.dataUpdatedAt,status=prevQueryResult.status,isPreviousData=!0;else if(options.select&&void 0!==state.data)if(prevResult&&state.data===(null==prevResultState?void 0:prevResultState.data)&&options.select===this.selectFn)data=this.selectResult;else try{this.selectFn=options.select,data=options.select(state.data),data=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.oE)(null==prevResult?void 0:prevResult.data,data,options),this.selectResult=data,this.selectError=null}catch(selectError){0,this.selectError=selectError}else data=state.data;if(void 0!==options.placeholderData&&void 0===data&&"loading"===status){let placeholderData;if(null!=prevResult&&prevResult.isPlaceholderData&&options.placeholderData===(null==prevResultOptions?void 0:prevResultOptions.placeholderData))placeholderData=prevResult.data;else if(placeholderData="function"==typeof options.placeholderData?options.placeholderData():options.placeholderData,options.select&&void 0!==placeholderData)try{placeholderData=options.select(placeholderData),this.selectError=null}catch(selectError){0,this.selectError=selectError}void 0!==placeholderData&&(status="success",data=(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.oE)(null==prevResult?void 0:prevResult.data,placeholderData,options),isPlaceholderData=!0)}this.selectError&&(error=this.selectError,data=this.selectResult,errorUpdatedAt=Date.now(),status="error");const isFetching="fetching"===fetchStatus,isLoading="loading"===status,isError="error"===status;return{status,fetchStatus,isLoading,isSuccess:"success"===status,isError,isInitialLoading:isLoading&&isFetching,data,dataUpdatedAt,error,errorUpdatedAt,failureCount:state.fetchFailureCount,failureReason:state.fetchFailureReason,errorUpdateCount:state.errorUpdateCount,isFetched:state.dataUpdateCount>0||state.errorUpdateCount>0,isFetchedAfterMount:state.dataUpdateCount>queryInitialState.dataUpdateCount||state.errorUpdateCount>queryInitialState.errorUpdateCount,isFetching,isRefetching:isFetching&&!isLoading,isLoadingError:isError&&0===state.dataUpdatedAt,isPaused:"paused"===fetchStatus,isPlaceholderData,isPreviousData,isRefetchError:isError&&0!==state.dataUpdatedAt,isStale:isStale(query,options),refetch:this.refetch,remove:this.remove}}updateResult(notifyOptions){const prevResult=this.currentResult,nextResult=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.VS)(nextResult,prevResult))return;this.currentResult=nextResult;const defaultNotifyOptions={cache:!0};!1!==(null==notifyOptions?void 0:notifyOptions.listeners)&&(()=>{if(!prevResult)return!0;const{notifyOnChangeProps}=this.options;if("all"===notifyOnChangeProps||!notifyOnChangeProps&&!this.trackedProps.size)return!0;const includedProps=new Set(null!=notifyOnChangeProps?notifyOnChangeProps:this.trackedProps);return this.options.useErrorBoundary&&includedProps.add("error"),Object.keys(this.currentResult).some((key=>{const typedKey=key;return this.currentResult[typedKey]!==prevResult[typedKey]&&includedProps.has(typedKey)}))})()&&(defaultNotifyOptions.listeners=!0),this.notify({...defaultNotifyOptions,...notifyOptions})}updateQuery(){const query=this.client.getQueryCache().build(this.client,this.options);if(query===this.currentQuery)return;const prevQuery=this.currentQuery;this.currentQuery=query,this.currentQueryInitialState=query.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==prevQuery||prevQuery.removeObserver(this),query.addObserver(this))}onQueryUpdate(action){const notifyOptions={};"success"===action.type?notifyOptions.onSuccess=!action.manual:"error"!==action.type||(0,_retryer_mjs__WEBPACK_IMPORTED_MODULE_3__.DV)(action.error)||(notifyOptions.onError=!0),this.updateResult(notifyOptions),this.hasListeners()&&this.updateTimers()}notify(notifyOptions){_notifyManager_mjs__WEBPACK_IMPORTED_MODULE_4__.V.batch((()=>{var _this$options$onSucce,_this$options,_this$options$onSettl,_this$options2;if(notifyOptions.onSuccess)null==(_this$options$onSucce=(_this$options=this.options).onSuccess)||_this$options$onSucce.call(_this$options,this.currentResult.data),null==(_this$options$onSettl=(_this$options2=this.options).onSettled)||_this$options$onSettl.call(_this$options2,this.currentResult.data,null);else if(notifyOptions.onError){var _this$options$onError,_this$options3,_this$options$onSettl2,_this$options4;null==(_this$options$onError=(_this$options3=this.options).onError)||_this$options$onError.call(_this$options3,this.currentResult.error),null==(_this$options$onSettl2=(_this$options4=this.options).onSettled)||_this$options$onSettl2.call(_this$options4,void 0,this.currentResult.error)}notifyOptions.listeners&&this.listeners.forEach((listener=>{listener(this.currentResult)})),notifyOptions.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function shouldFetchOnMount(query,options){return function shouldLoadOnMount(query,options){return!(!1===options.enabled||query.state.dataUpdatedAt||"error"===query.state.status&&!1===options.retryOnMount)}(query,options)||query.state.dataUpdatedAt>0&&shouldFetchOn(query,options,options.refetchOnMount)}function shouldFetchOn(query,options,field){if(!1!==options.enabled){const value="function"==typeof field?field(query):field;return"always"===value||!1!==value&&isStale(query,options)}return!1}function shouldFetchOptionally(query,prevQuery,options,prevOptions){return!1!==options.enabled&&(query!==prevQuery||!1===prevOptions.enabled)&&(!options.suspense||"error"!==query.state.status)&&isStale(query,options)}function isStale(query,options){return query.isStaleByTime(options.staleTime)}},"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>useBaseQuery});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useSyncExternalStore=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs"),notifyManager=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs");function createValue(){let isReset=!1;return{clearReset:()=>{isReset=!1},reset:()=>{isReset=!0},isReset:()=>isReset}}const QueryErrorResetBoundaryContext=react.createContext(createValue());var QueryClientProvider=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");const IsRestoringContext=react.createContext(!1);IsRestoringContext.Provider;var utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/utils.mjs");function useBaseQuery(options,Observer){const queryClient=(0,QueryClientProvider.NL)({context:options.context}),isRestoring=react.useContext(IsRestoringContext),errorResetBoundary=react.useContext(QueryErrorResetBoundaryContext),defaultedOptions=queryClient.defaultQueryOptions(options);defaultedOptions._optimisticResults=isRestoring?"isRestoring":"optimistic",defaultedOptions.onError&&(defaultedOptions.onError=notifyManager.V.batchCalls(defaultedOptions.onError)),defaultedOptions.onSuccess&&(defaultedOptions.onSuccess=notifyManager.V.batchCalls(defaultedOptions.onSuccess)),defaultedOptions.onSettled&&(defaultedOptions.onSettled=notifyManager.V.batchCalls(defaultedOptions.onSettled)),(defaultedOptions=>{defaultedOptions.suspense&&"number"!=typeof defaultedOptions.staleTime&&(defaultedOptions.staleTime=1e3)})(defaultedOptions),((options,errorResetBoundary)=>{(options.suspense||options.useErrorBoundary)&&(errorResetBoundary.isReset()||(options.retryOnMount=!1))})(defaultedOptions,errorResetBoundary),(errorResetBoundary=>{react.useEffect((()=>{errorResetBoundary.clearReset()}),[errorResetBoundary])})(errorResetBoundary);const[observer]=react.useState((()=>new Observer(queryClient,defaultedOptions))),result=observer.getOptimisticResult(defaultedOptions);if((0,useSyncExternalStore.$)(react.useCallback((onStoreChange=>isRestoring?()=>{}:observer.subscribe(notifyManager.V.batchCalls(onStoreChange))),[observer,isRestoring]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),react.useEffect((()=>{observer.setOptions(defaultedOptions,{listeners:!1})}),[defaultedOptions,observer]),((defaultedOptions,result,isRestoring)=>(null==defaultedOptions?void 0:defaultedOptions.suspense)&&((result,isRestoring)=>result.isLoading&&result.isFetching&&!isRestoring)(result,isRestoring))(defaultedOptions,result,isRestoring))throw((defaultedOptions,observer,errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).then((({data})=>{null==defaultedOptions.onSuccess||defaultedOptions.onSuccess(data),null==defaultedOptions.onSettled||defaultedOptions.onSettled(data,null)})).catch((error=>{errorResetBoundary.clearReset(),null==defaultedOptions.onError||defaultedOptions.onError(error),null==defaultedOptions.onSettled||defaultedOptions.onSettled(void 0,error)})))(defaultedOptions,observer,errorResetBoundary);if((({result,errorResetBoundary,useErrorBoundary,query})=>result.isError&&!errorResetBoundary.isReset()&&!result.isFetching&&(0,utils.L)(useErrorBoundary,[result.error,query]))({result,errorResetBoundary,useErrorBoundary:defaultedOptions.useErrorBoundary,query:observer.getCurrentQuery()}))throw result.error;return defaultedOptions.notifyOnChangeProps?result:observer.trackResult(result)}},"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useInfiniteQuery});var utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/utils.mjs"),queryObserver=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/queryObserver.mjs"),infiniteQueryBehavior=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs");class InfiniteQueryObserver extends queryObserver.z{constructor(client,options){super(client,options)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(options,notifyOptions){super.setOptions({...options,behavior:(0,infiniteQueryBehavior.Gm)()},notifyOptions)}getOptimisticResult(options){return options.behavior=(0,infiniteQueryBehavior.Gm)(),super.getOptimisticResult(options)}fetchNextPage({pageParam,...options}={}){return this.fetch({...options,meta:{fetchMore:{direction:"forward",pageParam}}})}fetchPreviousPage({pageParam,...options}={}){return this.fetch({...options,meta:{fetchMore:{direction:"backward",pageParam}}})}createResult(query,options){var _state$fetchMeta,_state$fetchMeta$fetc,_state$fetchMeta2,_state$fetchMeta2$fet,_state$data,_state$data2;const{state}=query,result=super.createResult(query,options),{isFetching,isRefetching}=result,isFetchingNextPage=isFetching&&"forward"===(null==(_state$fetchMeta=state.fetchMeta)||null==(_state$fetchMeta$fetc=_state$fetchMeta.fetchMore)?void 0:_state$fetchMeta$fetc.direction),isFetchingPreviousPage=isFetching&&"backward"===(null==(_state$fetchMeta2=state.fetchMeta)||null==(_state$fetchMeta2$fet=_state$fetchMeta2.fetchMore)?void 0:_state$fetchMeta2$fet.direction);return{...result,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,infiniteQueryBehavior.Qy)(options,null==(_state$data=state.data)?void 0:_state$data.pages),hasPreviousPage:(0,infiniteQueryBehavior.ZF)(options,null==(_state$data2=state.data)?void 0:_state$data2.pages),isFetchingNextPage,isFetchingPreviousPage,isRefetching:isRefetching&&!isFetchingNextPage&&!isFetchingPreviousPage}}}var useBaseQuery=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs");function useInfiniteQuery(arg1,arg2,arg3){const options=(0,utils._v)(arg1,arg2,arg3);return(0,useBaseQuery.r)(options,InfiniteQueryObserver)}},"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useQuery.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/utils.mjs"),_tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/queryObserver.mjs"),_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs");function useQuery(arg1,arg2,arg3){const parsedOptions=(0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__._v)(arg1,arg2,arg3);return(0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(parsedOptions,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__.z)}},"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>useSyncExternalStore});const useSyncExternalStore=__webpack_require__("../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js").useSyncExternalStore},"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/utils.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function shouldThrowError(_useErrorBoundary,params){return"function"==typeof _useErrorBoundary?_useErrorBoundary(...params):!!_useErrorBoundary}__webpack_require__.d(__webpack_exports__,{L:()=>shouldThrowError})},"../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/core.js":function(module,exports,__webpack_require__){var CryptoJS;module.exports=(CryptoJS=CryptoJS||function(Math,undefined){var crypto;if("undefined"!=typeof window&&window.crypto&&(crypto=window.crypto),"undefined"!=typeof self&&self.crypto&&(crypto=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(crypto=globalThis.crypto),!crypto&&"undefined"!=typeof window&&window.msCrypto&&(crypto=window.msCrypto),!crypto&&void 0!==__webpack_require__.g&&__webpack_require__.g.crypto&&(crypto=__webpack_require__.g.crypto),!crypto)try{crypto=__webpack_require__("?8823")}catch(err){}var cryptoSecureRandomInt=function(){if(crypto){if("function"==typeof crypto.getRandomValues)try{return crypto.getRandomValues(new Uint32Array(1))[0]}catch(err){}if("function"==typeof crypto.randomBytes)try{return crypto.randomBytes(4).readInt32LE()}catch(err){}}throw new Error("Native crypto module could not be used to get secure random number.")},create=Object.create||function(){function F(){}return function(obj){var subtype;return F.prototype=obj,subtype=new F,F.prototype=null,subtype}}(),C={},C_lib=C.lib={},Base=C_lib.Base={extend:function(overrides){var subtype=create(this);return overrides&&subtype.mixIn(overrides),subtype.hasOwnProperty("init")&&this.init!==subtype.init||(subtype.init=function(){subtype.$super.init.apply(this,arguments)}),subtype.init.prototype=subtype,subtype.$super=this,subtype},create:function(){var instance=this.extend();return instance.init.apply(instance,arguments),instance},init:function(){},mixIn:function(properties){for(var propertyName in properties)properties.hasOwnProperty(propertyName)&&(this[propertyName]=properties[propertyName]);properties.hasOwnProperty("toString")&&(this.toString=properties.toString)},clone:function(){return this.init.prototype.extend(this)}},WordArray=C_lib.WordArray=Base.extend({init:function(words,sigBytes){words=this.words=words||[],this.sigBytes=sigBytes!=undefined?sigBytes:4*words.length},toString:function(encoder){return(encoder||Hex).stringify(this)},concat:function(wordArray){var thisWords=this.words,thatWords=wordArray.words,thisSigBytes=this.sigBytes,thatSigBytes=wordArray.sigBytes;if(this.clamp(),thisSigBytes%4)for(var i=0;i<thatSigBytes;i++){var thatByte=thatWords[i>>>2]>>>24-i%4*8&255;thisWords[thisSigBytes+i>>>2]|=thatByte<<24-(thisSigBytes+i)%4*8}else for(var j=0;j<thatSigBytes;j+=4)thisWords[thisSigBytes+j>>>2]=thatWords[j>>>2];return this.sigBytes+=thatSigBytes,this},clamp:function(){var words=this.words,sigBytes=this.sigBytes;words[sigBytes>>>2]&=4294967295<<32-sigBytes%4*8,words.length=Math.ceil(sigBytes/4)},clone:function(){var clone=Base.clone.call(this);return clone.words=this.words.slice(0),clone},random:function(nBytes){for(var words=[],i=0;i<nBytes;i+=4)words.push(cryptoSecureRandomInt());return new WordArray.init(words,nBytes)}}),C_enc=C.enc={},Hex=C_enc.Hex={stringify:function(wordArray){for(var words=wordArray.words,sigBytes=wordArray.sigBytes,hexChars=[],i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;hexChars.push((bite>>>4).toString(16)),hexChars.push((15&bite).toString(16))}return hexChars.join("")},parse:function(hexStr){for(var hexStrLength=hexStr.length,words=[],i=0;i<hexStrLength;i+=2)words[i>>>3]|=parseInt(hexStr.substr(i,2),16)<<24-i%8*4;return new WordArray.init(words,hexStrLength/2)}},Latin1=C_enc.Latin1={stringify:function(wordArray){for(var words=wordArray.words,sigBytes=wordArray.sigBytes,latin1Chars=[],i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;latin1Chars.push(String.fromCharCode(bite))}return latin1Chars.join("")},parse:function(latin1Str){for(var latin1StrLength=latin1Str.length,words=[],i=0;i<latin1StrLength;i++)words[i>>>2]|=(255&latin1Str.charCodeAt(i))<<24-i%4*8;return new WordArray.init(words,latin1StrLength)}},Utf8=C_enc.Utf8={stringify:function(wordArray){try{return decodeURIComponent(escape(Latin1.stringify(wordArray)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(utf8Str){return Latin1.parse(unescape(encodeURIComponent(utf8Str)))}},BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm=Base.extend({reset:function(){this._data=new WordArray.init,this._nDataBytes=0},_append:function(data){"string"==typeof data&&(data=Utf8.parse(data)),this._data.concat(data),this._nDataBytes+=data.sigBytes},_process:function(doFlush){var processedWords,data=this._data,dataWords=data.words,dataSigBytes=data.sigBytes,blockSize=this.blockSize,nBlocksReady=dataSigBytes/(4*blockSize),nWordsReady=(nBlocksReady=doFlush?Math.ceil(nBlocksReady):Math.max((0|nBlocksReady)-this._minBufferSize,0))*blockSize,nBytesReady=Math.min(4*nWordsReady,dataSigBytes);if(nWordsReady){for(var offset=0;offset<nWordsReady;offset+=blockSize)this._doProcessBlock(dataWords,offset);processedWords=dataWords.splice(0,nWordsReady),data.sigBytes-=nBytesReady}return new WordArray.init(processedWords,nBytesReady)},clone:function(){var clone=Base.clone.call(this);return clone._data=this._data.clone(),clone},_minBufferSize:0}),C_algo=(C_lib.Hasher=BufferedBlockAlgorithm.extend({cfg:Base.extend(),init:function(cfg){this.cfg=this.cfg.extend(cfg),this.reset()},reset:function(){BufferedBlockAlgorithm.reset.call(this),this._doReset()},update:function(messageUpdate){return this._append(messageUpdate),this._process(),this},finalize:function(messageUpdate){return messageUpdate&&this._append(messageUpdate),this._doFinalize()},blockSize:16,_createHelper:function(hasher){return function(message,cfg){return new hasher.init(cfg).finalize(message)}},_createHmacHelper:function(hasher){return function(message,key){return new C_algo.HMAC.init(hasher,key).finalize(message)}}}),C.algo={});return C}(Math),CryptoJS)},"../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/enc-hex.js":function(module,exports,__webpack_require__){var CryptoJS;module.exports=(CryptoJS=__webpack_require__("../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/core.js"),CryptoJS.enc.Hex)},"../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/sha256.js":function(module,exports,__webpack_require__){var CryptoJS;module.exports=(CryptoJS=__webpack_require__("../../../node_modules/.pnpm/crypto-js@4.1.1/node_modules/crypto-js/core.js"),function(Math){var C=CryptoJS,C_lib=C.lib,WordArray=C_lib.WordArray,Hasher=C_lib.Hasher,C_algo=C.algo,H=[],K=[];!function(){function isPrime(n){for(var sqrtN=Math.sqrt(n),factor=2;factor<=sqrtN;factor++)if(!(n%factor))return!1;return!0}function getFractionalBits(n){return 4294967296*(n-(0|n))|0}for(var n=2,nPrime=0;nPrime<64;)isPrime(n)&&(nPrime<8&&(H[nPrime]=getFractionalBits(Math.pow(n,.5))),K[nPrime]=getFractionalBits(Math.pow(n,1/3)),nPrime++),n++}();var W=[],SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0))},_doProcessBlock:function(M,offset){for(var H=this._hash.words,a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7],i=0;i<64;i++){if(i<16)W[i]=0|M[offset+i];else{var gamma0x=W[i-15],gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3,gamma1x=W[i-2],gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;W[i]=gamma0+W[i-7]+gamma1+W[i-16]}var maj=a&b^a&c^b&c,sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),t1=h+((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))+(e&f^~e&g)+K[i]+W[i];h=g,g=f,f=e,e=d+t1|0,d=c,c=b,b=a,a=t1+(sigma0+maj)|0}H[0]=H[0]+a|0,H[1]=H[1]+b|0,H[2]=H[2]+c|0,H[3]=H[3]+d|0,H[4]=H[4]+e|0,H[5]=H[5]+f|0,H[6]=H[6]+g|0,H[7]=H[7]+h|0},_doFinalize:function(){var data=this._data,dataWords=data.words,nBitsTotal=8*this._nDataBytes,nBitsLeft=8*data.sigBytes;return dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32,dataWords[14+(nBitsLeft+64>>>9<<4)]=Math.floor(nBitsTotal/4294967296),dataWords[15+(nBitsLeft+64>>>9<<4)]=nBitsTotal,data.sigBytes=4*dataWords.length,this._process(),this._hash},clone:function(){var clone=Hasher.clone.call(this);return clone._hash=this._hash.clone(),clone}});C.SHA256=Hasher._createHelper(SHA256),C.HmacSHA256=Hasher._createHmacHelper(SHA256)}(Math),CryptoJS.SHA256)},"../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var e=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);