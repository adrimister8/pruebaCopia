(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"33yf":function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var a=t[r];"."===a?t.splice(r,1):".."===a?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",a=!1,s=arguments.length-1;s>=-1&&!a;s--){var i=s>=0?arguments[s]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,a="/"===i.charAt(0))}return(a?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!a).join("/"))||"."},e.normalize=function(t){var s=e.isAbsolute(t),i="/"===a(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!s).join("/"))||s||(t="."),t&&i&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var a=r(t.split("/")),s=r(n.split("/")),i=Math.min(a.length,s.length),o=i,l=0;l<i;l++)if(a[l]!==s[l]){o=l;break}var c=[];for(l=o;l<a.length;l++)c.push("..");return(c=c.concat(s.slice(o))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,a=!0,s=t.length-1;s>=1;--s)if(47===(e=t.charCodeAt(s))){if(!a){r=s;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,a=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!a){n=e+1;break}}else-1===r&&(a=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,a=!0,s=0,i=t.length-1;i>=0;--i){var o=t.charCodeAt(i);if(47!==o)-1===r&&(a=!1,r=i+1),46===o?-1===e?e=i:1!==s&&(s=1):-1!==e&&(s=-1);else if(!a){n=i+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))},"6yUG":function(t,e,n){"use strict"},GXTx:function(t,e,n){"use strict";var r=n("KQm4"),a=n("q1tI"),s=n.n(a),i=n("JKlR"),o=n("U2p6");e.a=function(t){var e=t.tags,n=t.showHeading;if(!e)return s.a.createElement(s.a.Fragment,null);var a=Object(r.a)(e).sort(),l=n?s.a.createElement("span",{className:"font-weight-bold mr-2"},s.a.createElement(o.a,{icon:"fas/tags"}),"Tags:"):null;return s.a.createElement("div",{className:"tags d-flex align-items-center"},l,s.a.createElement("div",{className:"flex-1  mt-n3"},a.map((function(t){return s.a.createElement("a",{key:t,href:i.blogTagsPath+"#"+t,className:"btn btn-info btn-sm mt-3 mr-1"},s.a.createElement(o.a,{icon:"fas/tag"})," ",t)}))))}},Klgk:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("JKlR"),a=n("33yf"),s=n.n(a),i=function(t){return t.allMarkdownRemark.nodes.map((function(t){var e,n,a=t.frontmatter,i=t.fileAbsolutePath;return{title:a.title,date:a.date,tags:a.tags,path:r.blogPath+(e=i,n=s.a.basename(e),"/"+n.slice(0,n.lastIndexOf(".")))}}))}},qzEK:function(t,e,n){t.exports={post:"PostEntry-module--post--1O85B",postTitle:"PostEntry-module--post-title--dm2tu"}},"xGn/":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return h}));var r=n("q1tI"),a=n.n(r),s=n("Bnta"),i=n("Klgk"),o=n("hEBL"),l=n("GXTx"),c=n("Wbzz"),u=n("qzEK"),f=n.n(u),m=n("TSYQ"),p=n.n(m),g=function(t){var e=t.post;return a.a.createElement("div",{className:p()("card mb-4 border-info",f.a.post)},a.a.createElement("div",{className:"card-body"},a.a.createElement("time",{className:"annotation",dateTime:e.date},Object(o.a)(e.date)),a.a.createElement("p",{className:p()("card-title",f.a.postTitle)},a.a.createElement(c.a,{to:e.path,className:"text-primary"},e.title))),a.a.createElement("div",{className:"card-footer"},a.a.createElement(l.a,{tags:e.tags,showHeading:!0})))},d=function(t){var e=t.posts;return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-12 col-lg-8"},e.map((function(t){return a.a.createElement(g,{key:t.path,post:t})})))))},h=(n("6yUG"),e.default=function(t){var e=t.data;return a.a.createElement(s.a,{title:"Blog"},a.a.createElement(d,{posts:Object(i.a)(e)}))},"4015709412")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-2b4c27bbf65eefc1c248.js.map