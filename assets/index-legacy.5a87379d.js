!function(){var n=document.createElement("style");n.innerHTML="/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;font-size:12px}#app{width:90%;margin:0 auto;padding-bottom:20px}.info{background:#FFFBCC;border:1px solid #FFEC19;color:#666;line-height:2;margin-top:12px;text-indent:6px;font-size:13px}h1{font-size:20px;border-bottom:1px solid #ccc;padding:10px 0}h1 em{font-size:9px;color:#666;margin-left:6px}h3{font-size:16px;margin:20px 0 4px}h3 span{color:#06c}span.label{color:#666}span.norm .r{color:red}span.norm .g{color:green}\n",document.head.appendChild(n),System.register(["./vendor-legacy.a58894e8.js"],(function(){"use strict";var n;return{setters:[function(e){n=e.j}],execute:function(){var e,t,o,i=function(){var n,e,t,o,i;for(t=navigator.userAgent,o=0,i=(e=[["Windows NT 5.1","WinXP"],["Windows NT 6.0","WinVista"],["Windows NT 6.1","Win7"],["Windows NT 5.2","Win2003"],["Windows NT 5.0","Win2000"],["Macintosh","Macintosh"],["Windows","WinOther"],["Ubuntu","Ubuntu"],["Linux","Linux"]]).length;o<i;o++)if(n=e[o],t.indexOf(n[0])>-1)return n[1];return"Other"},a=function(){var n,e,t,o,i;for(t=navigator.userAgent,o=0,i=(e=["Opera","Chrome","Safari","MSIE 6","MSIE 7","MSIE 8","Firefox"]).length;o<i;o++)if(n=e[o],t.indexOf(n)>-1)return n.replace(" ","");return"Other"},r=function(n){return document.querySelector(n)},s=function(n,e){return'<span class="'.concat(e,'">').concat(n,"</span>")},c=function(e){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var e=16*Math.random()|0;return("x"==n?e:3&e|8).toString(16)}));return function(e,t){return n.ajax({url:e,dataType:"jsonp",timeout:1e4,jsonp:"cb",success:t})}("https://".concat(t,".dns-detect.alicdn.com/api/detect/DescribeDNSLookup"),e)};(e=[],t=[],o=function(n,e,t){var o=e?s("连接成功","g"):s("连接失败","r");r("#".concat(n)).innerHTML="".concat(o,"   ").concat((t||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),"ms")},{start:function(){var u,l,p;[{title:"基础信息",items:[{name:"系统时间",val:new Date},{name:"UA信息",val:navigator.userAgent},{name:"系统信息",val:i()},{name:"浏览器信息",val:a()},{name:"语言信息",val:navigator.language},{name:"JavaScript 状态",val:s("开启 (版本号："+JS_VERSION+")","g")},{name:"Cookie 状态",val:document.cookie||navigator.cookieEnabled?s("开启","g"):s("禁用","r")},{name:"LocalStorage 状态",val:window.localStorage?s("开启","g"):s("禁用","r")}]},{title:"网络信息",items:[{name:"本地 IP",val:"检测中...",id:"s_local_ip"},{name:"Local DNS",val:"检测中...",id:"s_local_dns"},{name:"图片 CDN",val:"检测中...",id:"s_cdn_image"},{name:"静态 CDN",val:"检测中...",id:"s_cdn_assets"},{name:"异乡 API",val:"检测中...",id:"s_web_uhomes_api",url:"https://api.uhomes.com/robots.txt"},{name:"淘宝首页",val:"检测中...",id:"s_web_taobao",url:"https://www.taobao.com"},{name:"新浪首页",val:"检测中...",id:"s_web_sina",url:"https://www.sina.com"},{name:"腾讯首页",val:"检测中...",id:"s_web_qq",url:"https://www.qq.com"},{name:"BBC首页",val:"检测中...",id:"s_web_bbc",url:"https://www.bbc.com"},{name:"CNN首页",val:"检测中...",id:"s_web_cnn",url:"https://cnn.com"}]}].forEach((function(n,o){e.push("<h3><span>".concat(n.title,"：</span></h3>")),n.items.forEach((function(n,o){e.push('<div><span class="label">'.concat(n.name,'：</span><span class="norm" id="').concat(n.id,'">').concat(n.val,"</span></div>")),n.url&&n.id&&t.push({id:n.id,url:n.url})}))})),r("#content").innerHTML=e.join("\n"),c((function(n){r("#s_local_ip").innerHTML=n.content.localIp||"",r("#s_local_dns").innerHTML=n.content.ldns||""})),function(n,e){var t,o,i,a,r,s;for(o=0,t=function(){var t,i;if(!((o+=1)<n.length))return t=function(){var e,t,o;for(o=[],e=0,t=n.length;e<t;e++)(i=n[e])[3]&&o.push(i);return o}(),"function"==typeof e?e(t.length,n.length):void 0},s=[],a=0,r=n.length;a<r;a++)i=n[a],s.push(function(){var n,e,o,a,r,s;return r=i[0],s=i[1],n=i[2],e=new Image,a=r.indexOf("?")>-1?"&":"?",e.src=""+r+a+"t="+ +new Date,o=i,e.onload=function(){return o.push(e.width===s&&e.height===n),t()},e.onerror=function(){return o.push(!1),t()}}())}([["https://image.uhzcdn.com/default.png",560,314],["https://img.uhzcdn.com/static/general/default_house.jpg",750,420],["https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg",80,80]],(function(n,e){var t=n===e?s("连接成功","g"):s("连接失败","r");r("#s_cdn_image").innerHTML="".concat(t,"，共尝试 ").concat(e," 张图片，其中 ").concat(n," 张解析正常")})),u="https://pcpic.uhomes.com/static/lodash/lodash-4.17.15.min.js",l=function(n,e){o("s_cdn_assets",n,e)},p=+new Date,n.ajax({url:u,dataType:"script",timeout:1e4,success:function(n,e,t){return l(1,+new Date-p)},error:function(n,e,t){return l(0,+new Date-p)},complete:function(n,e){}}),t.forEach((function(e,t){!function(e,t){var o=+new Date;n.ajax({url:e,dataType:"script",timeout:1e4,success:function(n,e,i){return t(1,+new Date-o)},error:function(n,e,i){return t(0,+new Date-o)},complete:function(n,e){}})}(e.url,(function(n,t){o(e.id,n,t)}))}))}}).start()}}}))}();
