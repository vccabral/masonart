(function(){function la(){return f}function t(){if(!0!==f.isInitialized){for(var a=f,b={},c=h.getElementsByTagName("meta"),d=0;d<c.length;d++)b[c[d].name.toLowerCase()]=c[d].content;a.metas=b;for(var a=f,c={},d=location.search.substring(1).split("\x26"),g=0;g<d.length;g++)b=d[g].split("\x3d"),c[b[0].toLowerCase()]=unescape(b[1]);a.args=c;f.pageName=f.args.vpagename||k.ewt_pagename||f.metas[T+"pagename"]||"";a=f;b=(b=f.metas["com.silverpop.primary_domain"])&&0<b.length?("."==b[0]?"":".")+b:H(q.hostname);
a.primaryDomain=b;a=f;b=[];c=null;if(c=f.metas["com.silverpop.brandeddomains"])b=c.split(",");a.brandedDomains=b;f.metas[T+ma]&&(r=!0);f.isInitialized=!0}}function H(a){a=a.replace("http://","").replace("https://","").split(/[\/?#]/)[0];var b;a:if(b=a.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/),"0.0.0.0"===a||"255.255.255.255"===a||null===b)b=!1;else{for(var c=0;4>c;c++)if(255<b[c]){b=!1;break a}b=!0}if(b)return a;a=a.split(".");return 1==a.length?"":3<=a.length&&2==a[a.length-1].length&&
2<=a[a.length-2].length&&"www"!=a[a.length-3].toLowerCase()?"."+a[a.length-3]+"."+a[a.length-2]+"."+a[a.length-1]:"."+a[a.length-2]+"."+a[a.length-1]}function I(a){if(!m||!m.cookieEnabled||!A())return r&&(a=n(".referrer"),null!=h.referrer&&""==a&&(a={uid:encodeURIComponent(h.referrer),ttl:J,name:p+".referrer"},s(a))),!1;f.websync=B();a=a?a:K?K:u(!0);var b=L();U();v(M()+N({session:a,webSync:f.websync,newPageVisit:b},"pageview"));for(var c=document.getElementsByTagName("FORM"),d=0;d<c.length;d++){var g=
O(c[d]),e=c[d].getAttribute("pageId"),k=c[d].getAttribute("siteId"),l=c[d].getAttribute("parentPageId");if(C(g)&&e&&k){var na=V(g),q=W(g),g=X(g);a.isNew=!1;v(M()+N({session:a,webSync:f.websync,pageId:e,siteId:k,parentPageId:l,hostname:na,pathname:q,pagename:g,trackedExternalFormPost:"1",newPageVisit:b},"pageview"))}}return a}function A(){return r?"true"==n(".accept_cookies"):!0}function M(){return y()+Y()+oa.path+"event.jpeg?accesskey\x3d"+Z()+"\x26v\x3d"+pa}function y(){return q.protocol&&"https:"==
q.protocol.toString().toLowerCase()?"https://":"http://"}function P(a){return""===a.target||"_self"===a.target.toLowerCase()||"_top"===a.target.toLowerCase()||"_parent"===a.target.toLowerCase()}function Y(){if(!k.ewt_host)for(var a=h.getElementsByTagName("script"),b=0;b<a.length;b++)if(a[b].src&&a[b].src.match($)){k.ewt_host=a[b].src.split("\x26")[1].substr(2);break}return k.ewt_host}function N(a,b){var c={},d=(a.session.isNew?"\x26isNewSession\x3d1":"\x26isNewSession\x3d0")+"\x26type\x3d"+b;c.isNewVisitor=
a.webSync?a.webSync.isNew?"1":"0":"";c.eventName=a.eventName||"";c.sessionGUID=a.session.uid;c.webSyncID=f.websync.uid;c.associatedWebSyncID=f.websync.associatedUID;c.url=h.URL;c.newSiteVisit=a.session.newSiteVisit?"1":"0";var g;r&&a.session.newSiteVisit?(g=n(".referrer"),null!=g?(D(p+".referrer"),g=decodeURIComponent(g)):g=h.referrer):g=h.referrer;c.referringURL=g;c.gclid=f.args.gclid||"";c.hostname=a.hostname?a.hostname:q.hostname;c.pathname=a.pathname?a.pathname:q.pathname;c.pagename=a.pagename?
a.pagename:f.pageName;c.pageId=a.pageId;c.siteId=a.siteId;c.parentPageId=a.parentPageId||"";c.gwkey=f.args.gwkey||"";c.spMailingID=l(0)||"";c.spUserID=l(1)||"";c.spJobID=l(2)||"";c.spReportId=l(3)||"";c.trackedExternalFormPost=a.trackedExternalFormPost||"";c.defaultSource=f.args[f.metas["com.silverpop.defaultsourceparam"]];c.defaultSource||(c.defaultSource=f.metas["com.silverpop.defaultsource"]);c.defaultTerm=f.args[f.metas["com.silverpop.defaulttermparam"]];c.defaultTerm||(c.defaultTerm=f.metas["com.silverpop.defaultterm"]);
"pageview"==b&&(c.newPageVisit=a.newPageVisit?a.newPageVisit:L());c.eventKey=Q();g="";for(var e in c)"string"==typeof c[e]&&""!=c[e]&&(g+="\x26"+e+"\x3d"+encodeURIComponent(c[e]));return d+g}function s(a){m&&m.cookieEnabled&&(a=a.name+"\x3d"+a.uid+aa(a.ttl)+"; path\x3d/;domain\x3d"+f.primaryDomain+";",h.cookie=a)}function ba(a,b,c){m&&m.cookieEnabled&&(a=p+a+"\x3d"+b+aa(c)+"; path\x3d/;domain\x3d"+f.primaryDomain+";",h.cookie=a)}function n(a){var b=h.cookie?h.cookie.split("; "):[];a=p+a;for(var c=
0;c<b.length;c++)if(0==b[c].indexOf(a))return b[c].split("\x3d")[1];return""}function D(a){s({name:a,uid:"",ttl:-1})}function Q(){for(var a="",b=0;32>b;b++)a+=Math.floor(15*Math.random()).toString(15)+(7==b||11==b||15==b||19==b?"-":"");return a}function aa(a){if(a){var b=new Date;b.setTime(b.getTime()+a);return"; expires\x3d"+b.toGMTString()}return""}function v(a){var b=h.createElement("img");b.style.display="none";h.body.appendChild(b);b.src=a}function Z(){if(!k.ewt_page_key)for(var a=h.getElementsByTagName("script"),
b=0;b<a.length;b++)if(a[b].src&&a[b].src.match($)){a=a[b].src.split("?")[1];k.ewt_page_key=a.substr(0,a.indexOf("\x26"));break}return k.ewt_page_key?k.ewt_page_key:"no-key"}function B(){if(!f.websync){var a=n("WebCookie"),b=n(".webSyncID");""!=a&&""!=b&&D(p+".webSyncID");""==a&&""!=b&&(s({uid:b,ttl:ca,name:p+"WebCookie"}),D(p+".webSyncID"));a={uid:n("WebCookie"),ttl:ca,name:p+"WebCookie",isNew:!1,associatedUID:""};b=f.args.websyncid;null!=b&&(""!=a.uid&&(a.associatedUID=a.uid),a.uid=b);""==a.uid?
(a.uid=Q(),s(a),a.isNew=!0):ba("WebCookie",a.uid,a.ttl);f.websync=a}return f.websync}function u(a){var b={uid:n(".session"),ttl:J,name:p+".session",isNew:!1,newSiteVisit:!1},c=f.args.sessionguid;a&&(!b.uid||c&&b.uid.toLowerCase()!=c.toLowerCase())&&(b.newSiteVisit=!0);if(a){for(var d=[],g=[],e=0;4>e;e++)d[e]=f.args[w[e].toLowerCase()],"undefined"==typeof d[e]&&(d[e]=""),g[e]=n("."+E[e].toLowerCase());for(e=0;4>e;e++)if(0<d[e].length&&0<g[e].length&&d[e]!=g[e]){b.uid="";break}}c&&(b.uid=c);if(a&&""!=
b.uid&&h.referrer&&0<h.referrer.length){c=f.brandedDomains;d=!1;if(0<c.length&&-1<h.referrer.indexOf("://"))for(g=h.referrer.toLowerCase(),e=0;e<c.length;e++)if(0<g.indexOf(c[e].toLowerCase())){d=!0;break}if(c=!d)c=h.referrer.indexOf("://"),-1!=c?(d=h.referrer.indexOf("/",c+3),c=h.referrer.substring(c+3,-1==d?h.referrer.length:d).toLowerCase(),c=c.replace("www.",""),c=-1!=q.hostname.toLowerCase().indexOf(c)):c=!1,c=!c;c&&(b.uid="")}""==b.uid?(D(p+F),b.uid=Q(),s(b),b.isNew=!0,b.newSiteVisit=!0):ba(".session",
b.uid,b.ttl);a&&G();return b}function L(){var a=n(F);return da(a,q.pathname)?"0":"1"}function da(a,b){var c=R(b),d=a.split(",");return 0<=ea(d,c)}function R(a){var b=0;if(0<a.length)for(var c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c),b&=b;return b+""}function ea(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}function U(){var a=n(F);(a=fa(a,q.pathname))&&s({name:p+F,ttl:J,uid:a})}function fa(a,b){var c=R(b),d=a.split(",");return-1==ea(d,
c)?(d.unshift(c),d.toString().substr(0,1024)):null}function ga(){if(m&&m.cookieEnabled&&A()){for(var a=ha(f),b=a,c=document.getElementsByTagName("A"),d=0;d<c.length;d++){var g=c[d].href;if(-1==g.toLowerCase().indexOf("mailto:")&&0!=g.indexOf("#")&&C(g)){var e=c[d].innerHTML;c[d].href=S(g,b);c[d].innerHTML=e}}r&&(a+="\x26spWebTrackingOptIn\x3d1");ia(a)}else r&&ia("spWebTrackingOptIn\x3d0")}function O(a){var b=a.getAttribute("action");return b?"string"==typeof b?b:"string"!=typeof b&&"string"==typeof b.value?
a.attributes.action.value:"":""}function ia(a){for(var b=document.getElementsByTagName("FORM"),c=0;c<b.length;c++){var d=O(b[c]);C(d)&&(b[c].attributes.action.value=S(d,a+"\x26trackedExternalFormPost\x3d1"))}}function ja(a,b){a=a.toLowerCase();b=b.toLowerCase();var c;c=b.replace(/^\s+|\s+$/g,"");0===c.indexOf("www.")&&(c=c.substring(c.indexOf("www.")+4,c.length));var d=a;0===d.indexOf("https://")&&(d=d.substring(d.indexOf("https://")+8,d.length));0===d.indexOf("http://")&&(d=d.substring(d.indexOf("http://")+
7,d.length));0===d.indexOf("www.")&&(d=d.substring(d.indexOf("www.")+4,d.length));return x(d,c)}function C(a){if((x(a,"http://")||x(a,"https://"))&&H(a)!==f.primaryDomain){if(x(a,"http://"+k.ewt_host)||x(a,"https://"+k.ewt_host))return!0;for(var b=0;b<f.brandedDomains.length;b++)if(ja(a,f.brandedDomains[b]))return!0}return!1}function x(a,b){return 0===a.indexOf(b)}function V(a){var b=a.indexOf("://");return 0>b?"":a.substring(b+3).split("/")[0]}function W(a){var b=a.indexOf("://");if(0>b)return"";
a=a.substring(b+3);b=a.indexOf("/");return a=a.substring(b)}function X(a){if(0>a.indexOf("://"))return"";a=a.split("/");return a[a.length-1]}function S(a,b){var c=-1,d=-1;if(-1!=(c=a.indexOf("\x26webSyncID\x3d"))||-1!=(d=a.indexOf("?webSyncID\x3d"))){for(var g=c=-1==c?d:c,e=c+11;e<a.length;e++)if("\x26"==a.charAt(e)){g=e;break}g==c&&(g=a.length);a=a.replace(a.substr(c,g-c),"");-1!=d&&(a=a.replace("\x26","?"))}d=a.indexOf("#");c=-1==d?a:a.substring(0,d);d=-1==d?"":a.substring(d);return 0<a.indexOf("?")?
c+"\x26"+b+d:c+"?"+b+d}function ha(a){a="webSyncID\x3d"+a.websync.uid+"\x26sessionGUID\x3d"+u(!1).uid;for(var b=null,c=0;c<w.length;c++)b=n("."+E[c].toLowerCase()),""!=b&&(a+="\x26"+w[c]+"\x3d"+b);return a}function G(){for(var a=null,b=0;b<w.length;b++)null!=(a=f.args[w[b].toLowerCase()])&&(a={uid:a,name:p+"."+E[b].toLowerCase()},s(a))}function l(a){var b=n("."+E[a].toLowerCase());if(b)return b;b=f.args[w[a].toLowerCase()];"undefined"==typeof b&&(b="");return b}function ka(a){var b=a.length,c=a.substring(b-
1);a=a.substring(0,b-2);switch(parseInt(c,void 0)){case 1:a+="*";break;case 2:a+="**"}c=[];for(b=0;25>=b;b++)c[b]=String.fromCharCode(65+b);for(b=0;25>=b;b++)c[b+26]=String.fromCharCode(97+b);for(b=0;9>=b;b++)c[b+52]=String.fromCharCode(48+b);c[62]="_";c[63]="-";for(var b=[],d=0;256>d;d++)b[d]=-1;for(d=0;64>d;d++)b[c[d].charCodeAt(0)]=d;b[61]=-2;for(var c=Array(3*(a.length/4)),g=0,e=0,f=0,k=0,d=0;d<a.length;d++){var h=a.charAt(d),h="."==h?"\n":"*"==h?"\x3d":a.charAt(d),h=h.charCodeAt(0),h=255>=h?
b[h]:-1;switch(h){case -1:break;case -2:h=0,k++;default:switch(g){case 0:e=h;g=1;break;case 1:e<<=6;e|=h;g=2;break;case 2:e<<=6;e|=h;g=3;break;case 3:e<<=6,e|=h,c[f+2]=e&255,e>>>=8,c[f+1]=e&255,e>>>=8,c[f]=e&255,f+=3,g=0}}}if(0!=g)a=null;else for(f-=k,a="",b=c.length!=f?f:c.length,d=0;d<b;d++)a+=String.fromCharCode(c[d]);return a}var pa=1.28,f={},p="com.silverpop.iMA",T="com.silverpop.",ma="webtrackingoptin",F=".page_visit",ca=864E8,J=12E5,w=["spMailingID","spUserID","spJobID","spReportId"],E=["MID",
"UID","JID","RID"],oa={path:"/WTS/"},K,r=!1,h=document,q=location,m=navigator,k=window,z=[],$=/iMAWebCookie(\.uncompressed)?\.js(\?.*)$/i;k.ewt=k.ewt||{track:function(a){return k.ewt.trackEvent(a)},trackLink:function(a){if(a.link)if(P(a.link))a.onCompleteFunction=function(){document.location=a.link.href};else return k.ewt.trackEvent(a),!0;return k.ewt.trackEvent(a)},trackFormSubmit:function(a){a.form&&(a.onCompleteFunction=function(){a.form.submit()});return k.ewt.trackEvent(a)},trackEvent:function(a){if(!m||
!m.cookieEnabled||!A())return!0;var b=u(!1);b.isNew&&(I(b),b.isNew=!1,b.newSiteVisit=!1);v(M()+N({session:b,eventName:a.name||"n/a"},a.type));a.onCompleteFunction instanceof Function&&setTimeout(a.onCompleteFunction,700);return!1},cot:function(a){t();G();var b=l(0),c=l(1),d=l(2);if(""!=b&&""!=c&&""!=d){var g=null;if(g=f.metas["com.silverpop.cothost"]){var e="";a.action&&0<a.action.length&&(e="\x26a\x3d"+encodeURIComponent(a.action));a.detail&&0<a.detail.length&&(e+="\x26d\x3d"+encodeURIComponent(a.detail));
a.amount&&0<a.amount.length&&(e+="\x26amt\x3d"+encodeURIComponent(a.amount));v(y()+g+"/cot?m\x3d"+b+"\x26r\x3d"+c+"\x26j\x3d"+d+e)}}},cotLink:function(a){t();G();var b=l(0),c=l(1),d=l(2);if(""!=b&&""!=c&&""!=d){var g=null;if(g=f.metas["com.silverpop.cothost"]){var e="";a.action&&0<a.action.length&&(e="\x26a\x3d"+encodeURIComponent(a.action));a.detail&&0<a.detail.length&&(e+="\x26d\x3d"+encodeURIComponent(a.detail));a.amount&&0<a.amount.length&&(e+="\x26amt\x3d"+encodeURIComponent(a.amount));var h=
a.link;if(P(h))return v(y()+g+"/cot?m\x3d"+b+"\x26r\x3d"+c+"\x26j\x3d"+d+e),setTimeout(function(){document.location=h.href},700),!1;v(y()+g+"/cot?m\x3d"+b+"\x26r\x3d"+c+"\x26j\x3d"+d+e);return!0}}},setIFrameSrc:function(a,b){t();if(-1==a.src.indexOf(b)){var c="";m&&m.cookieEnabled&&A()?(G(),f.websync||(f.websync=B(),K=u(!0)),c=ha(f),r&&(c+="\x26spWebTrackingOptIn\x3d1")):c=r?"spWebTrackingOptIn\x3d0":"";a.src=S(b,c)}},init:function(a){t();!a||a&&a.generatePageViewEvent?I(null):f.websync||(f.websync=
B(),u(!0));(!a||a&&a.appendVisitoryKeyToLinks)&&ga()},getVisitorKey:function(){return f.websync.uid},unitTest:function(){var a={};a.getFormActionHostName=V;a.getFormActionResourceUri=W;a.getFormActionResourceName=X;a.isTargetNonBlank=P;a.isUrlStartsWith=x;a.isUrlStartsWithBrandDomainScheme=ja;a.isBrandedDomain=C;a.isFirstPageVisit=L;a.recordPageVisit=U;a.containsPage=da;a.addPage=fa;a.hashString=R;a.getRootDomain=H;a.getPage=la;a.getFormActionUrl=O;a.decode=ka;return a},smartContent:function(a,b){t();
var c=document.createElement("script");c.type="text/javascript";var d=y()+Y()+"/service/smartcontent?contentUrl\x3d"+b+"\x26webSyncID\x3d";f.websync||(f.websync=B());d=d+f.websync.uid+"\x26sessionGUID\x3d"+u(!1).uid+"\x26orgGuid\x3d"+Z()+"\x26elementId\x3d"+a;var g=l(0),e=l(1),h=l(2),k=l(3);c.src=d+(g&&e?"\x26spMailingID\x3d"+g+"\x26spUserID\x3d"+e+"\x26spJobID\x3d"+h+"\x26spReportId\x3d"+k:"");document.getElementsByTagName("head")[0].appendChild(c)},smartContentSuccess:function(a){document.getElementById(a.elementId).innerHTML=
a.content},getContactID:function(){return""==l(1)?null:ka(l(1))}};z.push(t);z.push(I);z.push(ga);(function(a){if(k.addEventListener)k.addEventListener("load",a,!1);else if(k.attachEvent)k.attachEvent("onload",a);else{var b=k.onload;k.onload=function(){b&&b(null);a()}}})(function(){for(var a=0;a<z.length;a++)z[a]()})})();