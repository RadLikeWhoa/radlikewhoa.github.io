(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g}),a.d(t,"pageQuery",function(){return o});var n=a(0),M=a.n(n),i=a(152),r=a(163),c=a(161);function g(e){var t=e.data,a=t.markdownRemark,n=t.site,g=a.frontmatter,o=a.html,s=n.siteMetadata.siteUrl;return M.a.createElement(r.a,null,M.a.createElement(c.a,{title:g.title}),M.a.createElement("article",{class:"post-full wrap hentry"},M.a.createElement("h2",{class:"h1 post-title entry-title"},g.title),M.a.createElement("div",{class:"post-meta"},M.a.createElement("time",null,g.date)),M.a.createElement("div",{className:"post-body entry-content",dangerouslySetInnerHTML:{__html:o}}),M.a.createElement("div",{class:"post-links",style:{display:"none"}},M.a.createElement("h3",null,"Links in this post"),M.a.createElement("div",{id:"post-links-list","data-grid":!0})),M.a.createElement("p",{"data-block":"share"},"If you enjoyed reading this article you might want to share it ",M.a.createElement("a",{href:"https://twitter.com/intent/tweet?url="+s+g.path+"&amp;text="+g.title},"on Twitter"),", ",M.a.createElement("a",{href:"https://facebook.com/sharer.php?u="+s+g.path},"on Facebook"),", or ",M.a.createElement("a",{href:"https://pinboard.in/add?next=same&amp;url="+s+g.path+"&amp;title="+g.title},"on Pinboard"),". For comments and questions, ",M.a.createElement("a",{href:"mailto:hello@sacha.me"},"contact me through e-mail"),"."),M.a.createElement("div",{className:"text-center"},M.a.createElement(i.Link,{to:"/articles","data-button":"dark"},M.a.createElement("span",{class:"label"},"View more articles")))))}var o="659308415"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return I}),a.d(t,"StaticQueryContext",function(){return N}),a.d(t,"StaticQuery",function(){return D});var n=a(0),M=a.n(n),i=a(4),r=a.n(i),c=a(151),g=a.n(c);a.d(t,"Link",function(){return g.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(153),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var l=a(32);a.d(t,"parsePath",function(){return l.a});var N=M.a.createContext({}),D=function(e){return M.a.createElement(N.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):M.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}D.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),M=a.n(n),i=function(e){var t,a=window.pageYOffset,n=0;e&&e.preventDefault();requestAnimationFrame(function e(){window.pageYOffset>a||(t=(n+=60)/3e3,a-=a*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(1,t)),window.scrollTo(0,Math.floor(a)),a>0&&requestAnimationFrame(e))})};t.a=function(){return M.a.createElement("footer",{className:"site-footer"},M.a.createElement("div",{className:"wrap"},M.a.createElement("div",{"data-grid":!0},M.a.createElement("div",{"data-col":"M1-2"},M.a.createElement("a",{href:"/feed.xml"},"RSS")," ","·"," ",M.a.createElement("a",{href:"https://github.com/RadLikeWhoa/radlikewhoa.github.io",target:"_blank",rel:"noreferrer noopener"},"GitHub")),M.a.createElement("div",{"data-col":"M1-2"},M.a.createElement("a",{href:"#top",onClick:i},"Back to top")))))}},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),M=a.n(n),i=a(4),r=a.n(i),c=a(51),g=a(2),o=function(e){var t=e.location,a=g.default.getResourcesForPathnameSync(t.pathname);return M.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Sacha Schmid"}}}}},158:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzc1cHgiIGhlaWdodD0iMzQ0cHgiIHZpZXdCb3g9IjAgMCAzNzUgMzQ0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOSAoMzE2NjcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5LjAwMDAwMCwgLTUwLjAwMDAwMCkiIGZpbGw9IiNlOTVlN2EiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjc4MDAyMzgsNTUuNzQ2NTY1IEMxMS44NjUyMjIyLDU0LjY0NzU0ODUgMTIuODIzMTEzNiw1My45MDIwNTU2IDEzLjkwNTM0NTIsNTQuMDc5MTM4MyBMMTY5Ljk3OTY2NCw3OS42MTcxNjI3IEMxNzguMTYwMzc2LDgwLjk1NTc1MDggMTg1LjU0MjE4Nyw4OC43MTU4MTI0IDE4Ni40Njc4OTgsOTYuOTU0MTY5NCBMMTkxLjg2MzIyMSwxNDQuOTY5ODIzIEw0Ljg2MzIyMTM4LDE0NC45Njk4MjMgTDExLjc4MDAyMzgsNTUuNzQ2NTY1IFoiIGlkPSJSZWN0YW5nbGUtNi1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OC4zNjMyMjEsIDk5LjM2MzIyMSkgc2NhbGUoLTEsIDEpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtOTguMzYzMjIxLCAtOTkuMzYzMjIxKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNDkuNzgwMDI0LDU0Ljc0NjU2NSBDMjQ5Ljg2NTIyMiw1My42NDc1NDg1IDI1MC44MjMxMTQsNTIuOTAyMDU1NiAyNTEuOTA1MzQ1LDUzLjA3OTEzODMgTDQwNy45Nzk2NjQsNzguNjE3MTYyNyBDNDE2LjE2MDM3Niw3OS45NTU3NTA4IDQyMy41NDIxODcsODcuNzE1ODEyNCA0MjQuNDY3ODk4LDk1Ljk1NDE2OTQgTDQyOS44NjMyMjEsMTQzLjk2OTgyMyBMMjQyLjg2MzIyMSwxNDMuOTY5ODIzIEwyNDkuNzgwMDI0LDU0Ljc0NjU2NSBaIiBpZD0iUmVjdGFuZ2xlLTYtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzYuMzYzMjIxLCA5OC4zNjMyMjEpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMzM2LjM2MzIyMSwgLTk4LjM2MzIyMSkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjE2Ljc1MjMwOSw4My4zNzYxNTQzIEwzNTAuMTI4NDYzLDIxNi43NTIzMDkgTDIyMC4yODU0NDMsMzQ2LjU5NTMyOSBDMjE4LjMzNDE0NywzNDguNTQ2NjI1IDIxNS4xNzMyNzYsMzQ4LjU0OTQzMSAyMTMuMjE5MTc1LDM0Ni41OTUzMjkgTDgzLjM3NjE1NDMsMjE2Ljc1MjMwOSBMMjE2Ljc1MjMwOSw4My4zNzYxNTQzIFogTTI2NC4wMDA4NzksMjMwLjAwOTY2OCBDMjcyLjU2MTI5MywyMzAuMDA5NjY4IDI3OS41MDA4NzksMjIzLjA3MDA4MiAyNzkuNTAwODc5LDIxNC41MDk2NjggQzI3OS41MDA4NzksMjA1Ljk0OTI1NCAyNzIuNTYxMjkzLDE5OS4wMDk2NjggMjY0LjAwMDg3OSwxOTkuMDA5NjY4IEMyNTUuNDQwNDY1LDE5OS4wMDk2NjggMjQ4LjUwMDg3OSwyMDUuOTQ5MjU0IDI0OC41MDA4NzksMjE0LjUwOTY2OCBDMjQ4LjUwMDg3OSwyMjMuMDcwMDgyIDI1NS40NDA0NjUsMjMwLjAwOTY2OCAyNjQuMDAwODc5LDIzMC4wMDk2NjggWiBNMTcxLjAwMDg3OSwyMzAuMDA5NjY4IEMxNzkuNTYxMjkzLDIzMC4wMDk2NjggMTg2LjUwMDg3OSwyMjMuMDcwMDgyIDE4Ni41MDA4NzksMjE0LjUwOTY2OCBDMTg2LjUwMDg3OSwyMDUuOTQ5MjU0IDE3OS41NjEyOTMsMTk5LjAwOTY2OCAxNzEuMDAwODc5LDE5OS4wMDk2NjggQzE2Mi40NDA0NjUsMTk5LjAwOTY2OCAxNTUuNTAwODc5LDIwNS45NDkyNTQgMTU1LjUwMDg3OSwyMTQuNTA5NjY4IEMxNTUuNTAwODc5LDIyMy4wNzAwODIgMTYyLjQ0MDQ2NSwyMzAuMDA5NjY4IDE3MS4wMDA4NzksMjMwLjAwOTY2OCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},159:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzc1cHgiIGhlaWdodD0iMzQ0cHgiIHZpZXdCb3g9IjAgMCAzNzUgMzQ0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOSAoMzE2NjcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5LjAwMDAwMCwgLTUwLjAwMDAwMCkiIGZpbGw9IiNmYWYwZTEiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjc4MDAyMzgsNTUuNzQ2NTY1IEMxMS44NjUyMjIyLDU0LjY0NzU0ODUgMTIuODIzMTEzNiw1My45MDIwNTU2IDEzLjkwNTM0NTIsNTQuMDc5MTM4MyBMMTY5Ljk3OTY2NCw3OS42MTcxNjI3IEMxNzguMTYwMzc2LDgwLjk1NTc1MDggMTg1LjU0MjE4Nyw4OC43MTU4MTI0IDE4Ni40Njc4OTgsOTYuOTU0MTY5NCBMMTkxLjg2MzIyMSwxNDQuOTY5ODIzIEw0Ljg2MzIyMTM4LDE0NC45Njk4MjMgTDExLjc4MDAyMzgsNTUuNzQ2NTY1IFoiIGlkPSJSZWN0YW5nbGUtNi1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OC4zNjMyMjEsIDk5LjM2MzIyMSkgc2NhbGUoLTEsIDEpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtOTguMzYzMjIxLCAtOTkuMzYzMjIxKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNDkuNzgwMDI0LDU0Ljc0NjU2NSBDMjQ5Ljg2NTIyMiw1My42NDc1NDg1IDI1MC44MjMxMTQsNTIuOTAyMDU1NiAyNTEuOTA1MzQ1LDUzLjA3OTEzODMgTDQwNy45Nzk2NjQsNzguNjE3MTYyNyBDNDE2LjE2MDM3Niw3OS45NTU3NTA4IDQyMy41NDIxODcsODcuNzE1ODEyNCA0MjQuNDY3ODk4LDk1Ljk1NDE2OTQgTDQyOS44NjMyMjEsMTQzLjk2OTgyMyBMMjQyLjg2MzIyMSwxNDMuOTY5ODIzIEwyNDkuNzgwMDI0LDU0Ljc0NjU2NSBaIiBpZD0iUmVjdGFuZ2xlLTYtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzYuMzYzMjIxLCA5OC4zNjMyMjEpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMzM2LjM2MzIyMSwgLTk4LjM2MzIyMSkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjE2Ljc1MjMwOSw4My4zNzYxNTQzIEwzNTAuMTI4NDYzLDIxNi43NTIzMDkgTDIyMC4yODU0NDMsMzQ2LjU5NTMyOSBDMjE4LjMzNDE0NywzNDguNTQ2NjI1IDIxNS4xNzMyNzYsMzQ4LjU0OTQzMSAyMTMuMjE5MTc1LDM0Ni41OTUzMjkgTDgzLjM3NjE1NDMsMjE2Ljc1MjMwOSBMMjE2Ljc1MjMwOSw4My4zNzYxNTQzIFogTTI2NC4wMDA4NzksMjMwLjAwOTY2OCBDMjcyLjU2MTI5MywyMzAuMDA5NjY4IDI3OS41MDA4NzksMjIzLjA3MDA4MiAyNzkuNTAwODc5LDIxNC41MDk2NjggQzI3OS41MDA4NzksMjA1Ljk0OTI1NCAyNzIuNTYxMjkzLDE5OS4wMDk2NjggMjY0LjAwMDg3OSwxOTkuMDA5NjY4IEMyNTUuNDQwNDY1LDE5OS4wMDk2NjggMjQ4LjUwMDg3OSwyMDUuOTQ5MjU0IDI0OC41MDA4NzksMjE0LjUwOTY2OCBDMjQ4LjUwMDg3OSwyMjMuMDcwMDgyIDI1NS40NDA0NjUsMjMwLjAwOTY2OCAyNjQuMDAwODc5LDIzMC4wMDk2NjggWiBNMTcxLjAwMDg3OSwyMzAuMDA5NjY4IEMxNzkuNTYxMjkzLDIzMC4wMDk2NjggMTg2LjUwMDg3OSwyMjMuMDcwMDgyIDE4Ni41MDA4NzksMjE0LjUwOTY2OCBDMTg2LjUwMDg3OSwyMDUuOTQ5MjU0IDE3OS41NjEyOTMsMTk5LjAwOTY2OCAxNzEuMDAwODc5LDE5OS4wMDk2NjggQzE2Mi40NDA0NjUsMTk5LjAwOTY2OCAxNTUuNTAwODc5LDIwNS45NDkyNTQgMTU1LjUwMDg3OSwyMTQuNTA5NjY4IEMxNTUuNTAwODc5LDIyMy4wNzAwODIgMTYyLjQ0MDQ2NSwyMzAuMDA5NjY4IDE3MS4wMDA4NzksMjMwLjAwOTY2OCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAA7dJREFUWAnFl1tsTEEYx/9zztnV7Xa3F7qqaAlCXCJRbRpR0aZII+oaxENdKm7vREhLCJH0QeLZAxLxIF54cElRlyaoS8QlEZdEiEvdWla7tZdjvqk59pw9tuc01DzszPfNN9//N+fMzNlh+FXa1zRUQE9shY7pOvRh0v83awb2Fgy3wZSm0JG91yg3o5/21Tt28uYeXdcVsv91YYwlAL0xdHT/PvZr5i0DJS4nJyCYMluhxz7Q4gQhNLk2B8B0SWVXM78PuY2bEKhfAng0uxCzT1URWLsIgw9ugzo8ZO6zWlxb6WvBBbmwZ8xI+GaVIHd7PVgg05rGsAk2Z9ta+GaXQs3LRvaWlWmhSTvtosuoLMWgkomGgGdsEfJ2bYY6LN/wyYYayhNPyjthtHRBGzEUWStrDNuu8UcAEgmsmp8yRs3nQg0b4RlXbPSpXCiXg2kFQwyfbGRWl8M7dbw0U2p7AE1FcMsKMK8nZQA5Ep1hxNs/GX3xdx8Rff7KsK2N4PqlULIDVrewbQGyls+Dp8j+LIq9+YCOA4cFREbFNPiqyoBYHJ2HjqPn/hN7kaAfwQ3L7PusXu+UcfDNnWF1C9sqHli3GFl1tY4gvJPHIrNmZkpe8xPg2yywfgn4IZESaCfOFEXEOoXwL5sDhe+O5GICoBWv5gST+0X7T+IykICdQDBNQ8bMaXKYqE0AtJWspS9xGe8UQh2SI4eI2gSQ+PLN1OlUXA5yAhH/2CHDUwF67j5GoisiOtyKy6zpIPRYDJHWezJU1OrWqRW7DU80hviXTmiFIdNWo9VOC85pIQg6fPSvYcSev0ZP20NoowrRffEmoo+emdKw93U7dJOHDDqAfkRB+5w+QpSQis4BwycvwDtpDAZZTrfoi9didv6FVVD4vhfxuo7wsdPovnQLUPkE4vxvgKXYT4uLa8WFJnEaF3v5Bt3nW9F15oolDcTsuptv4MeDp0affB30DbETp0DzKzCG0nH7DYxTe8f//rgoOQGo+bnwVZbxWWYlRUM8Yq0gHxnlU8D4US4LAUeu3pFmSm3/CpLC/Eur4a+tTPI4b3adu47wibNpB9i/gqQh30814/vpy0keZ00n4pSpTwAKcgvhVNwxgBsIN+KuAJxAuBV3DZAOoj/i/QKwg+ivOOXS6LrU1z9jCrQWWpjx9595BhWRljZrtyObtDVxV9OxwNEIS1Dk+l2Lx6XJ74n8L43SxI/M1EPaZS634UKTayu9t1S9cSAherX45ZTfkHs/cxz/f13PfwJ3DZ6nmzfdxAAAAABJRU5ErkJggg=="},161:function(e,t,a){"use strict";var n=a(162),M=a(0),i=a.n(M),r=a(4),c=a.n(r),g=a(154),o=a.n(g),s=a(152);function l(e){var t=e.description,a=e.lang,M=e.meta,r=e.keywords,c=e.title;return i.a.createElement(s.StaticQuery,{query:N,render:function(e){var n=t||e.site.siteMetadata.description,g=r.length?r:e.site.siteMetadata.keywords;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s — "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(g.length>0?{name:"keywords",content:g.join(", ")}:[]).concat(M)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l;var N="2563317202"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Sacha Schmid",description:"Sacha Schmid is a front-end developer from Switzerland, designing and building websites and applications.",keywords:["Front-End","Developer","Switzerland","Engineer","Web","Designer","Developer"]}}}}},163:function(e,t,a){"use strict";var n=a(157),M=a(0),i=a.n(M),r=a(4),c=a.n(r),g=a(152),o=a(154),s=a.n(o),l=a(7),N=a.n(l),D=a(158),I=a.n(D),u=a(159),A=a.n(u),j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),M=0;M<a;M++)n[M]=arguments[M];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t}return N()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.alternate,n=t.highlightColor,M=this.state.open;return i.a.createElement("header",{className:"site-header "+(a&&"is-alternate")},i.a.createElement("div",{className:"wrap"},i.a.createElement("h1",null,i.a.createElement(g.Link,{to:"/"},i.a.createElement("img",{className:"site-logo",src:a?A.a:I.a,alt:"Logo"}))),i.a.createElement("nav",{className:"site-nav "+(M&&"is-open"),onClick:function(){return e.setState({open:!1})}},i.a.createElement(g.Link,{to:"/",getProps:function(e){return{className:"site-nav-item "+(e.isCurrent?"is-active":"")}}},i.a.createElement("span",{className:"label",style:{color:n}},"Home"),i.a.createElement("span",{"data-icon":"home",style:{color:n}})),i.a.createElement(g.Link,{to:"/projects",getProps:function(e){return{className:"site-nav-item "+(e.isCurrent||e.isPartiallyCurrent?"is-active":"")}}},i.a.createElement("span",{className:"label",style:{color:n}},"Projects"),i.a.createElement("span",{"data-icon":"case",style:{color:n}})),i.a.createElement(g.Link,{to:"/articles",getProps:function(e){return{className:"site-nav-item "+(e.isCurrent||e.isPartiallyCurrent?"is-active":"")}}},i.a.createElement("span",{className:"label",style:{color:n}},"Articles"),i.a.createElement("span",{"data-icon":"archive",style:{color:n}})),i.a.createElement(g.Link,{to:"/about",getProps:function(e){return{className:"site-nav-item "+(e.isCurrent||e.isPartiallyCurrent?"is-active":"")}}},i.a.createElement("span",{className:"label",style:{color:n}},"About"),i.a.createElement("span",{"data-icon":"person",style:{color:n}})),i.a.createElement("div",{className:"active-nav-item"})),i.a.createElement("button",{className:"nav-toggle",onClick:function(){return e.setState({open:!0})},style:{color:n}},i.a.createElement("span",{"data-icon":"list"}))))},t}(i.a.Component);j.propTypes={alternate:c.a.bool,highlightColor:c.a.string},j.defaultProps={alternate:!1,highlightColor:"#fff"};var w=j,y=a(155),T=a(160),d=a.n(T),m=function(e){var t=e.children,a=e.alternate,M=e.highlightColor;return i.a.createElement(g.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{link:[{rel:"shortcut icon",type:"image/png",href:d.a}]}),i.a.createElement(w,{siteTitle:e.site.siteMetadata.title,alternate:a,highlightColor:M}),i.a.createElement("main",{className:"site-main"},t),i.a.createElement(y.a,null))},data:n})};m.propTypes={children:c.a.node.isRequired,alternate:c.a.bool,highlightColor:c.a.string},m.defaultProps={alternate:!1,highlightColor:"#fff"};t.a=m}}]);
//# sourceMappingURL=component---src-templates-article-js-82663cc7392f4e2e0cb1.js.map