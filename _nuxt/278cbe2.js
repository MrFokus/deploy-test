(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,6,7,8],{332:function(t,e,d){var content=d(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("fda20f58",content,!0,{sourceMap:!1})},333:function(t,e,d){t.exports=d.p+"img/telegram-icon.43de0f8.svg"},334:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjY3MTE5IDIuNjcxMTlDMCA1LjM0MjM3IDAgOS42NDE1OCAwIDE4LjI0VjE5Ljc2QzAgMjguMzU4NCAwIDMyLjY1NzYgMi42NzExOSAzNS4zMjg4QzUuMzQyMzcgMzggOS42NDE1NyAzOCAxOC4yNCAzOEgxOS43NkMyOC4zNTg0IDM4IDMyLjY1NzYgMzggMzUuMzI4OCAzNS4zMjg4QzM4IDMyLjY1NzYgMzggMjguMzU4NCAzOCAxOS43NlYxOC4yNEMzOCA5LjY0MTU4IDM4IDUuMzQyMzcgMzUuMzI4OCAyLjY3MTE5QzMyLjY1NzYgMCAyOC4zNTg0IDAgMTkuNzYgMEgxOC4yNEM5LjY0MTU4IDAgNS4zNDIzNyAwIDIuNjcxMTkgMi42NzExOVpNNi40MTI1NiAxMS41NTg0QzYuNjE4MzkgMjEuNDM4NCAxMS41NTgzIDI3LjM3NTkgMjAuMjE5MiAyNy4zNzU5SDIwLjcxMDFWMjEuNzIzNEMyMy44OTI2IDIyLjA0MDEgMjYuMjk5MSAyNC4zNjc2IDI3LjI2NDkgMjcuMzc1OUgzMS43NjE3QzMwLjUyNjcgMjIuODc5MiAyNy4yODA3IDIwLjM5MzQgMjUuMjU0MSAxOS40NDM0QzI3LjI4MDcgMTguMjcxNyAzMC4xMzA4IDE1LjQyMTcgMzAuODExNiAxMS41NTg0SDI2LjcyNjVDMjUuODM5OCAxNC42OTM0IDIzLjIxMTggMTcuNTQzNCAyMC43MTAxIDE3LjgxMjVWMTEuNTU4NEgxNi42MjVWMjIuNTE1MUMxNC4wOTE2IDIxLjg4MTcgMTAuODkzNCAxOC44MTAxIDEwLjc1MDkgMTEuNTU4NEg2LjQxMjU2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},335:function(t,e,d){"use strict";d.r(e);d(32);var o={props:["row","state"],data:function(){return{maxHeight:0,active:""}},watch:{state:function(){if(this.state){for(var t=this.$refs.allSchedule.getElementsByClassName("teacher"),e=0,i=0;i<t.length;i++){e+=t[i].offsetHeight}this.active="active",this.maxHeight=e}else this.active="",this.maxHeight=0}},methods:{OpenSchedule:function(){!0===this.state?this.$emit("nullStateRow",!1):this.$emit("nullStateRow",!0)}}},n=(d(338),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{class:"btn-show-all-schedule ".concat(t.active),on:{click:t.OpenSchedule}},[e("h1",[t._v(t._s(t.row.discipline))]),t._v(" "),e("h3",[t._v(t._s(t.row.group))])]),t._v(" "),e("div",{ref:"allSchedule",class:"all-schedule",style:"max-height:".concat(t.maxHeight,"px")},t._l(t.row.teacher,(function(d){return e("div",{staticClass:"teacher"},[e("h3",[t._v(t._s(d.name))]),t._v(" "),e("div",{staticClass:"days"},t._l(d.days,(function(d){return e("p",{staticClass:"day"},[t._v("\n            "+t._s(d.day)+"\n          ")])})),0),t._v(" "),e("div",{staticClass:"times"},t._l(d.days,(function(d){return e("div",{staticClass:"time"},[e("p",[t._v(t._s(d.time))])])})),0),t._v(" "),e("div",{staticClass:"addresses"},t._l(d.days,(function(d){return e("div",{staticClass:"address"},[e("div",{staticClass:"container"},[d.address_hall?e("p",{staticClass:"visible-address"},[t._v(t._s(d.address))]):e("p",{staticClass:"standard-address"},[t._v(t._s(d.address))]),t._v(" "),e("div",{staticClass:"modal-address"},[e("p",{staticClass:"hidden-address"},[t._v(t._s(d.address_hall))])])])])})),0)])})),0)])}),[],!1,null,"8e796ef4",null);e.default=component.exports},337:function(t,e,d){var content=d(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("5669b86e",content,!0,{sourceMap:!1})},338:function(t,e,d){"use strict";d(332)},339:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".row[data-v-8e796ef4]{flex-direction:column}h1[data-v-8e796ef4],h3[data-v-8e796ef4]{color:#fff}.btn-show-all-schedule[data-v-8e796ef4]{align-items:center;border-bottom:1px solid #edb406;border-top:none;border-top:1px solid #edb406;cursor:pointer;height:-moz-fit-content;height:fit-content;justify-content:space-between;padding:30px 90px;transition:background-color .3s ease;width:100%}.btn-show-all-schedule[data-v-8e796ef4]:hover{background-color:#131313}.active[data-v-8e796ef4],.active[data-v-8e796ef4]:hover{background-color:#edb406}.all-schedule[data-v-8e796ef4]{flex-direction:column;margin:0 90px;overflow:hidden;transition:max-height 1s ease}.teacher[data-v-8e796ef4]{border-bottom:2px solid #edb406;display:grid;grid-template-columns:2.3fr .7fr 1fr 1fr;padding:35px 0}.teacher[data-v-8e796ef4]:last-child{border-bottom:none}.addresses[data-v-8e796ef4],.days[data-v-8e796ef4],.times[data-v-8e796ef4]{flex-direction:column;justify-content:center}.address[data-v-8e796ef4]:not(:last-child),.day[data-v-8e796ef4]:not(:last-child),.time[data-v-8e796ef4]:not(:last-child){margin-bottom:2rem}.teacher p[data-v-8e796ef4]{color:#a3a3a3;font-size:20px;font-weight:600}.teacher h3[data-v-8e796ef4]{align-items:center;display:flex;font-size:28px;font-weight:600}.address[data-v-8e796ef4]{flex-grow:1;justify-content:flex-end}.addresses[data-v-8e796ef4]{position:relative}.modal-address[data-v-8e796ef4]{background-color:#131313;border:1px solid #edb406;bottom:0;display:none;height:-moz-fit-content;height:fit-content;max-width:500px;padding:10px;position:absolute;right:110%;width:-moz-max-content;width:max-content;z-index:9}.modal-address p[data-v-8e796ef4]{text-overflow:ellipsis;width:100%}.visible-address[data-v-8e796ef4]{color:#edb406!important;display:block;line-height:100%;text-decoration:underline;-webkit-text-decoration:underline #edb406;text-decoration:underline #edb406}.modal-address:hover+.visible-address[data-v-8e796ef4],.visible-address[data-v-8e796ef4]:hover{color:#a3a3a3!important;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.modal-address[data-v-8e796ef4]:hover,.visible-address:hover+.modal-address[data-v-8e796ef4]{display:inline-block}.container[data-v-8e796ef4]{position:relative}@media (max-width:1439px){.row[data-v-8e796ef4]{flex-direction:column}h1[data-v-8e796ef4]{font-size:2.5vw}h3[data-v-8e796ef4]{font-size:1.7vw}.btn-show-all-schedule[data-v-8e796ef4]{padding:2.1vw 6.25vw}.all-schedule[data-v-8e796ef4]{margin:0 6.25vw}.teacher[data-v-8e796ef4]{padding:2.4vw 0}.address[data-v-8e796ef4]:not(:last-child),.day[data-v-8e796ef4]:not(:last-child),.time[data-v-8e796ef4]:not(:last-child){margin-bottom:2rem}.teacher p[data-v-8e796ef4]{font-size:1.39vw}.teacher h3[data-v-8e796ef4]{font-size:2vw}.modal-address[data-v-8e796ef4]{max-width:34.7vw;padding:.7vw}}",""]),o.locals={},t.exports=o},340:function(t,e,d){var content=d(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("2ce7ab68",content,!0,{sourceMap:!1})},341:function(t,e,d){var content=d(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("2123cf3c",content,!0,{sourceMap:!1})},342:function(t,e,d){var content=d(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("63229ba9",content,!0,{sourceMap:!1})},343:function(t,e,d){var content=d(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("4f964c95",content,!0,{sourceMap:!1})},344:function(t,e,d){var content=d(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("5717848b",content,!0,{sourceMap:!1})},345:function(t,e,d){t.exports=d.p+"img/scratches-background.0173e88.png"},346:function(t,e,d){t.exports=d.p+"img/btn-arrow.3c964a7.png"},347:function(t,e,d){t.exports=d.p+"img/first-break-background.5cfa803.png"},348:function(t,e,d){t.exports=d.p+"img/second-break-background.9baf543.png"},349:function(t,e,d){t.exports=d.p+"img/portrait-title.ec5c78b.png"},350:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMTY3MzIgNi4xNjY5OUgzMC44MzRDMzIuNTI5OCA2LjE2Njk5IDMzLjkxNzMgNy41NTQ0OSAzMy45MTczIDkuMjUwMzNWMjcuNzUwM0MzMy45MTczIDI5LjQ0NjIgMzIuNTI5OCAzMC44MzM3IDMwLjgzNCAzMC44MzM3SDYuMTY3MzJDNC40NzE0OCAzMC44MzM3IDMuMDgzOTggMjkuNDQ2MiAzLjA4Mzk4IDI3Ljc1MDNWOS4yNTAzM0MzLjA4Mzk4IDcuNTU0NDkgNC40NzE0OCA2LjE2Njk5IDYuMTY3MzIgNi4xNjY5OVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMy45MTYzIDkuMjVMMTguNDk5NyAyMC4wNDE3TDMuMDgzMDEgOS4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},351:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAyNSAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjIwOSAzLjA4MzAxSDQuNzkyMzJDMy4wODk0NCAzLjA4MzAxIDEuNzA4OTggNC40NjM0NiAxLjcwODk4IDYuMTY2MzRWMzAuODMzQzEuNzA4OTggMzIuNTM1OSAzLjA4OTQ0IDMzLjkxNjMgNC43OTIzMiAzMy45MTYzSDIwLjIwOUMyMS45MTE5IDMzLjkxNjMgMjMuMjkyMyAzMi41MzU5IDIzLjI5MjMgMzAuODMzVjYuMTY2MzRDMjMuMjkyMyA0LjQ2MzQ2IDIxLjkxMTkgMy4wODMwMSAyMC4yMDkgMy4wODMwMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMi41IDI3Ljc1SDEyLjUxNTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="},352:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjM3NSAxNS40MTdDMzIuMzc1IDI2LjIwODcgMTguNSAzNS40NTg3IDE4LjUgMzUuNDU4N0MxOC41IDM1LjQ1ODcgNC42MjUgMjYuMjA4NyA0LjYyNSAxNS40MTdDNC42MjUgMTEuNzM3MSA2LjA4NjgzIDguMjA3OTUgOC42ODg4OSA1LjYwNTg5QzExLjI5MSAzLjAwMzgyIDE0LjgyMDEgMS41NDE5OSAxOC41IDEuNTQxOTlDMjIuMTc5OSAxLjU0MTk5IDI1LjcwOSAzLjAwMzgyIDI4LjMxMTEgNS42MDU4OUMzMC45MTMyIDguMjA3OTUgMzIuMzc1IDExLjczNzEgMzIuMzc1IDE1LjQxN1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC41IDIwLjA0MkMyMS4wNTQzIDIwLjA0MiAyMy4xMjUgMTcuOTcxMyAyMy4xMjUgMTUuNDE3QzIzLjEyNSAxMi44NjI3IDIxLjA1NDMgMTAuNzkyIDE4LjUgMTAuNzkyQzE1Ljk0NTcgMTAuNzkyIDEzLjg3NSAxMi44NjI3IDEzLjg3NSAxNS40MTdDMTMuODc1IDE3Ljk3MTMgMTUuOTQ1NyAyMC4wNDIgMTguNSAyMC4wNDJaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},355:function(t,e,d){var map={"./BurgerMenu.svg":356,"./Karate.png":357,"./KickBoxing.png":358,"./Logo.svg":220,"./YoungTR.png":359,"./black-img.png":360,"./btn-arrow.png":346,"./first-break-background.png":347,"./mail-icon.svg":350,"./map-point-icon.svg":352,"./point-map.svg":361,"./portrait-title.png":349,"./scratches-background.png":345,"./second-break-background.png":348,"./smartphone-icon.svg":351,"./telegram-icon.svg":333,"./vk-icon.svg":334};function o(t){var e=n(t);return d(e)}function n(t){if(!d.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=355},356:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAyMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMS41MTI3SDE5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMSA4LjM0OTEySDE5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"},357:function(t,e,d){t.exports=d.p+"img/Karate.1962680.png"},358:function(t,e,d){t.exports=d.p+"img/KickBoxing.a54f83c.png"},359:function(t,e,d){t.exports=d.p+"img/YoungTR.fdbde63.png"},360:function(t,e,d){t.exports=d.p+"img/black-img.15369b6.png"},361:function(t,e,d){t.exports=d.p+"img/point-map.874dece.svg"},362:function(t,e,d){"use strict";d(337)},363:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".card-discipline[data-v-611adcd6]{flex-direction:column}.card[data-v-611adcd6]{background-position:50%!important;background-size:cover!important;min-height:210px;position:relative}.card[data-v-611adcd6],.content[data-v-611adcd6]{flex-direction:column;width:100%}.content[data-v-611adcd6]{height:100%;padding:10px 0 0 8px;z-index:2}.content>*[data-v-611adcd6]{color:#fff;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.blackout[data-v-611adcd6]{background-color:rgba(0,0,0,.6);height:100%;position:absolute;width:100%;z-index:1}h3[data-v-611adcd6]{font-size:20px;font-weight:600}.age[data-v-611adcd6]{font-size:18px;font-weight:400}.price[data-v-611adcd6]{background-color:#edb406;border:none;font-size:20px;font-weight:600;margin:72px 0 0 26px;outline:none;padding:7px 17px}.price[data-v-611adcd6]:hover{background-color:#dfa900}.price[data-v-611adcd6]:active{background-color:#c79600}.sign-up-training[data-v-611adcd6]{background:none;border:0;color:#fff;font-size:12px;font-weight:600;margin-top:40px;outline:2px solid #edb406;padding:21px 0;transition:background-color .3s;width:100%}.sign-up-training[data-v-611adcd6]:hover{background:#edb406}.sign-up-training[data-v-611adcd6]:active{background:#c79600;transition:background-color 0s}@media (max-width:1449px){.card[data-v-611adcd6]{min-height:14.58vw}h3[data-v-611adcd6]{font-size:1.4vw}.age[data-v-611adcd6]{font-size:1.35vw}.price[data-v-611adcd6]{font-size:1.4vw;margin:5vw 0 0 1.8vw;padding:.5vw 1.3vw}.sign-up-training[data-v-611adcd6]{font-size:.8vw;margin-top:2.8vw;padding:1.5vw 0}}",""]),o.locals={},t.exports=o},364:function(t,e,d){var o=d(2),n=d(365),c=d(150);o({target:"Array",proto:!0},{fill:n}),c("fill")},365:function(t,e,d){"use strict";var o=d(28),n=d(92),c=d(36);t.exports=function(t){for(var e=o(this),d=c(e),r=arguments.length,l=n(r>1?arguments[1]:void 0,d),v=r>2?arguments[2]:void 0,f=void 0===v?d:n(v,d);f>l;)e[l++]=t;return e}},366:function(t,e,d){"use strict";d(340)},367:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".table-schedule[data-v-3325d5e9]{background-color:#181818;border-color:#edb406;border-style:solid;border-width:1px 2px;flex-direction:column;width:100%}",""]),o.locals={},t.exports=o},368:function(t,e,d){"use strict";d(341)},369:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".gallery[data-v-2efaa362]{max-width:100%;overflow-x:scroll}.video[data-v-2efaa362]{aspect-ratio:16/9;border:1px solid #edb406;margin-right:40px}",""]),o.locals={},t.exports=o},370:function(t,e,d){"use strict";d(342)},371:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".coaches[data-v-f0c2104e]{max-width:100%;overflow-x:scroll}.coach[data-v-f0c2104e]{margin-right:40px}.coach[data-v-f0c2104e],.name-block[data-v-f0c2104e]{flex-direction:column}.name-block[data-v-f0c2104e]{margin-top:20px}.name[data-v-f0c2104e]{color:#fff;font-size:24px;font-weight:700}.discipline[data-v-f0c2104e]{color:#a3a3a3;font-size:20px;font-weight:400;margin-top:20px}@media (max-width:1439px){.coaches[data-v-f0c2104e]{max-width:100%}.coach[data-v-f0c2104e]{margin-right:2.8vw;width:28.26vw}.name-block[data-v-f0c2104e]{margin-top:1.4vw}.name[data-v-f0c2104e]{font-size:1.7vw}.discipline[data-v-f0c2104e]{font-size:1.4vw;margin-top:1.4vw}}",""]),o.locals={},t.exports=o},372:function(t,e,d){"use strict";d(343)},373:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".form[data-v-1c6d097c]{align-items:center;height:100vh;justify-content:center;position:fixed;width:100vw;z-index:100}.out-space[data-v-1c6d097c]{background-color:hsla(0,0%,9%,.3);height:100%;position:absolute;width:100%}.content[data-v-1c6d097c]{outline:2px solid #edb406;position:absolute;width:50%}",""]),o.locals={},t.exports=o},374:function(t,e,d){"use strict";d(344)},375:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,"iframe{font-size:2vw}",""]),o.locals={},t.exports=o},377:function(t,e,d){"use strict";d.r(e);var o={props:["card"]},n=(d(362),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-discipline"},[e("div",{staticClass:"card",style:{background:"url('".concat(d(355)("./".concat(t.card.img)),"')")}},[e("div",{staticClass:"blackout"}),t._v(" "),e("div",{staticClass:"content"},[e("h3",[t._v(t._s(t.card.title))]),t._v(" "),e("p",{staticClass:"age"},[t._v("от "+t._s(t.card.age)+" лет")]),t._v(" "),e("button",{staticClass:"price",on:{click:function(e){return t.$store.commit("modal/setModalActive",!0)}}},[t._v("от "+t._s(t.card.price)+" ₽")])])]),t._v(" "),e("button",{staticClass:"sign-up-training",on:{click:function(e){return t.$store.commit("modal/setModalActive",!0)}}},[t._v(" ЗАПИСАТЬСЯ НА ПРОБНУЮ ТРЕНИРОВКУ ")])])}),[],!1,null,"611adcd6",null);e.default=component.exports},378:function(t,e,d){"use strict";d.r(e);d(219),d(364);var o={props:["schedule"],data:function(){return{stateRow:[]}},components:{RowTableSchedule:d(335).default},methods:{nullStateRow:function(t,e){for(var i=0;i<this.stateRow.length;i++)this.stateRow[i]=!1;this.stateRow.splice(e,1,t)}},mounted:function(){this.stateRow=new Array(this.schedule.length).fill(!1)}},n=(d(366),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-schedule"},t._l(t.schedule,(function(d,o){return e("row-table-schedule",{key:o,attrs:{state:t.stateRow[o],row:d},on:{nullStateRow:function(e){return t.nullStateRow(e,o)}}})})),1)}),[],!1,null,"3325d5e9",null);e.default=component.exports;installComponents(component,{RowTableSchedule:d(335).default})},379:function(t,e,d){"use strict";d.r(e);var o={data:function(){return{width:0,height:0,source:["https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2","https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2","https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2","https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2","https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2"]}},methods:{WidthWindow:function(){this.width=window.innerWidth*(640/1440),this.height=.25*window.innerWidth}},mounted:function(){this.WidthWindow(),window.addEventListener("resize",this.WidthWindow)}},n=(d(368),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery"},t._l(t.source,(function(s){return e("div",{staticClass:"video"},[e("iframe",{staticClass:"frame",attrs:{src:s,width:t.width,height:t.height,allow:"autoplay; encrypted-media; fullscreen; picture-in-picture;",frameborder:"0",allowfullscreen:""}})])})),0)}),[],!1,null,"2efaa362",null);e.default=component.exports},380:function(t,e,d){"use strict";d.r(e);d(32);var o={data:function(){return{coaches:[{img:"/coaches/Kyzym-Evgeniy.png",name:"Кызым Евгений<br>Васильевич",discipline:"Карате, Кикбоксинг"},{img:"/coaches/Kyzym_Igor.png",name:"Кызым Игорь<br>Васильевич",discipline:"Карате"},{img:"/coaches/Mamedov-Rauf.png",name:"Мамедов Рауф<br>Фахрадович",discipline:"Кикбоксинг"},{img:"/coaches/Buneev-Maxim.png",name:"Бунеев Максим<br>Николаевич",discipline:"Карате"},{img:"/coaches/Kyzym-German.png",name:"Кызым Герман<br>Игоревич",discipline:"Карате"}]}}},n=(d(370),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"coaches"},t._l(t.coaches,(function(d){return e("div",{staticClass:"coach"},[e("img",{attrs:{src:d.img,alt:""}}),t._v(" "),e("div",{staticClass:"name-block"},[e("h3",{staticClass:"name",domProps:{innerHTML:t._s(d.name)}}),t._v(" "),e("p",{staticClass:"discipline"},[t._v(t._s(d.discipline))])])])})),0)}),[],!1,null,"f0c2104e",null);e.default=component.exports},381:function(t,e,d){"use strict";d.r(e);var o={methods:{closeModal:function(){this.$emit("closeModal")}}},n=(d(372),d(374),d(27)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"form"},[e("div",{staticClass:"out-space",on:{click:t.closeModal}}),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"content"},[t("script",{attrs:{src:"https://yastatic.net/s3/frontend/forms/_/embed.js"}}),t("iframe",{attrs:{src:"https://forms.yandex.ru/u/6485c2d2f47e7327e5346859/?iframe=1",frameborder:"0",name:"ya-form-6485c2d2f47e7327e5346859",height:"600px !important",width:"100%"}})])}],!1,null,"1c6d097c",null);e.default=component.exports},383:function(t,e,d){var content=d(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("0fe80b08",content,!0,{sourceMap:!1})},384:function(t,e,d){var content=d(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(45).default)("84af695c",content,!0,{sourceMap:!1})},387:function(t,e,d){"use strict";d(383)},388:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,"main[data-v-ab239708]{flex-direction:column;justify-content:center;width:100%}.background-block[data-v-ab239708]{background-position:top!important;background-size:cover;flex-direction:column;-o-object-fit:contain!important;object-fit:contain!important;position:relative;width:100%}.background-block[data-v-ab239708]:first-child{padding-bottom:90px}.background-block>div[data-v-ab239708]{margin:auto;width:min(1300px,100%)}.first-break-background[data-v-ab239708]{top:-80px;z-index:6}.content[data-v-ab239708]{flex-direction:column;margin:auto;position:relative;width:min(1300px,100%)}.title-block[data-v-ab239708]{width:100%}.title[data-v-ab239708]{flex-direction:column;height:-moz-fit-content;height:fit-content;margin-top:135px}h1[data-v-ab239708]{color:#fff;font-size:48px;font-weight:600;width:600px}.btn-block[data-v-ab239708]{align-items:flex-end;margin:20px 0 0;overflow:hidden}.btn-block>button[data-v-ab239708]{align-items:center;background:#edb406;border:none;box-sizing:border-box;color:#fff;display:flex;font-size:14px;font-weight:600;height:-moz-fit-content;height:fit-content;justify-content:center;margin:0 0 25px;outline:none;padding:18px 30px;width:400px}.btn-arrow[data-v-ab239708]{margin-left:70px}.btn-block>button[data-v-ab239708]:hover{background-color:#dfa900}.btn-block>button[data-v-ab239708]:active{background-color:#c79600}.portrait-title[data-v-ab239708]{margin-left:30px;margin-top:95px}.portrait-title>img[data-v-ab239708]{-o-object-fit:contain;object-fit:contain;width:110%}.training[data-v-ab239708]{box-sizing:border-box;padding-top:270px;z-index:6}.title-training[data-v-ab239708],.training[data-v-ab239708]{flex-direction:column}.block-gallery>p[data-v-ab239708],.title-training>p[data-v-ab239708]{color:hsla(0,0%,100%,.6);font-size:20px;font-weight:600;margin-bottom:15px}.cards-discipline[data-v-ab239708]{grid-column-gap:40px;-moz-column-gap:40px;column-gap:40px;display:grid;grid-template-columns:1fr 1fr 1fr;margin-top:60px}.schedule[data-v-ab239708],.title-schedule[data-v-ab239708]{z-index:8}.schedule-block[data-v-ab239708]{flex-direction:column;padding:150px 0 0}.title-schedule[data-v-ab239708]{justify-content:center;margin-bottom:60px}.title-schedule>h1[data-v-ab239708]{font-size:48px;font-weight:700;margin-right:22px;width:-moz-fit-content;width:fit-content}.title-schedule>button[data-v-ab239708]{background:none;border:0;color:#fff;font-size:16px;font-weight:700;outline:2px solid #edb406;padding:21px 0;transition:background-color .3s;width:185px}.title-schedule>button[data-v-ab239708]:hover{background-color:#edb406}.title-schedule>button[data-v-ab239708]:active{background-color:#c79600}.block-gallery[data-v-ab239708]{flex-direction:column;margin-top:80px!important;padding-left:calc(50vw - 650px);z-index:10}.block-gallery[data-v-ab239708],.coaches-block[data-v-ab239708]{width:100vw!important}.coaches-block[data-v-ab239708]{align-items:center;padding-left:calc(50vw - 650px);padding-top:190px;z-index:6}.block-gallery p[data-v-ab239708],.coaches-block p[data-v-ab239708]{color:#a3a3a3;font-size:20px;font-weight:600;width:auto}.coaches-block h1[data-v-ab239708]{width:auto}.coaches-block>.title[data-v-ab239708]{margin:0 100px 0 0;width:-moz-fit-content;width:fit-content}.background-block>div[data-v-ab239708]{z-index:10}.background-block>.contacts[data-v-ab239708]{margin:120px auto 0}.contacts>.title[data-v-ab239708]{height:100%;justify-content:center;margin:0}.contacts-info[data-v-ab239708]{grid-column-gap:60px;grid-row-gap:40px;-moz-column-gap:60px;column-gap:60px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;row-gap:40px}.contacts-info>div[data-v-ab239708]{align-items:center}.contacts-info p[data-v-ab239708]{color:#fff;font-size:20px;font-weight:800}.contacts-info img[data-v-ab239708]{margin-right:16px;max-height:40px;width:40px}.map[data-v-ab239708]{height:60vh;z-index:10}.form[data-v-ab239708]{position:fixed;top:0;z-index:100}@media (max-width:1439px){.background-block>div[data-v-ab239708]{padding:0 4.9vw;width:100%}.background-block[data-v-ab239708]:first-child{padding-bottom:6.25vw}.background-block[data-v-ab239708]:nth-child(2){margin-top:-13.2vw!important}.content[data-v-ab239708]{width:100%}.title[data-v-ab239708]{margin-top:9.375vw}h1[data-v-ab239708]{font-size:3.33vw;width:41.7vw}.btn-block[data-v-ab239708]{margin:1.39vw 0 0}.btn-block>button[data-v-ab239708]{font-size:1vw;margin:0 0 1.7vw;padding:1.25vw 2.08vw;width:27.8vw}.btn-arrow[data-v-ab239708]{margin-left:4.86vw;width:11.8vw}.portrait-title[data-v-ab239708]{margin-left:2.08vw;margin-top:6.6vw}.training[data-v-ab239708]{padding-top:18.75vw!important}.block-gallery>p[data-v-ab239708],.title-training>p[data-v-ab239708]{font-size:1.39vw;margin-bottom:1.04vw}.cards-discipline[data-v-ab239708]{-moz-column-gap:2.8vw;column-gap:2.8vw;margin-top:4.17vw}.schedule-block[data-v-ab239708]{padding:10.42vw 0 0!important}.title-schedule[data-v-ab239708]{margin-bottom:4.17vw}.title-schedule>h1[data-v-ab239708]{font-size:3.33vw;margin-right:1.53vw}.title-schedule>button[data-v-ab239708]{font-size:1.1vw;padding:1.5vw 0;width:12.9vw}.block-gallery[data-v-ab239708]{margin-top:5.5vw!important;padding-right:0!important}.coaches-block[data-v-ab239708]{padding-right:0!important;padding-top:13.2vw!important}.block-gallery p[data-v-ab239708],.coaches-block p[data-v-ab239708]{font-size:1.4vw}.coaches-block>.title[data-v-ab239708]{margin-right:7vw}.background-block>.contacts[data-v-ab239708]{margin:8.3vw auto 0}.contacts-info[data-v-ab239708]{-moz-column-gap:4.2vw;column-gap:4.2vw;row-gap:2.8vw}.contacts-info p[data-v-ab239708]{font-size:1.4vw}.contacts-info img[data-v-ab239708]{margin-right:1vw;max-height:2.8vw;width:2.8vw}.map[data-v-ab239708]{height:60vh}.form[data-v-ab239708]{position:fixed;top:0;z-index:100}}",""]),o.locals={},t.exports=o},389:function(t,e,d){"use strict";d(384)},390:function(t,e,d){var o=d(44)((function(i){return i[1]}));o.push([t.i,".ymaps-2-1-79-ground-pane{filter:grayscale(100%)}.ymaps-2-1-79-inner-panes{mix-blend-mode:difference}",""]),o.locals={},t.exports=o},392:function(t,e,d){"use strict";d.r(e);var o=[function(){var t=this,e=t._self._c;return e("h1",[t._v("ШКОЛА СПОРТИВНОГО РАЗВИТИЯ ИМЕНИ "),e("br"),t._v(" В. Н. КЫЗЫМ")])},function(){var t=this._self._c;return t("div",{staticClass:"portrait-title"},[t("img",{attrs:{src:d(349),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-training"},[e("p",[t._v("НАШИ")]),t._v(" "),e("h1",[t._v("ТРЕНИРОВКИ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("p",[t._v("НАШИ НАСТАВНИКИ")]),t._v(" "),e("h1",[t._v("ТРЕНЕРЫ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"contacts",attrs:{id:"contacts"}},[e("div",{staticClass:"title"},[e("h1",[t._v("\n          КОНТАКТЫ\n        ")])]),t._v(" "),e("div",{staticClass:"contacts-info"},[e("div",{staticClass:"mail"},[e("img",{attrs:{src:d(350),alt:""}}),t._v(" "),e("p",[t._v("example@mail.ru")])]),t._v(" "),e("div",{staticClass:"phone"},[e("img",{attrs:{src:d(351),alt:""}}),t._v(" "),e("p",[t._v("+7 (888) 888-88-88")])]),t._v(" "),e("div",{staticClass:"address"},[e("img",{attrs:{src:d(352),alt:""}}),t._v(" "),e("p",[t._v("г. Липецк, ул. Перова 47 ")])]),t._v(" "),e("div",{staticClass:"messengers"},[e("a",{attrs:{href:"https://t.me/karatelipetsk"}},[e("img",{attrs:{src:d(333),alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://vk.com/kickboxinglipetsk"}},[e("img",{attrs:{src:d(334),alt:""}})])])])])}],n=d(377),c=d(378),r=d(379),l=d(380),v=d(381),f={components:{CardDiscipline:n.default,TableSchedule:c.default,Gallery:r.default,Coaches:l.default,ModalForm:v.default},mounted:function(){console.log(this.$store.getters["modal/active"])},data:function(){return{modal:!1,main_coord:[52.600753,39.566943],coord:[[52.598325,39.558508],[52.583165,39.505077],[52.61337,39.547243],[52.590945,39.518785],[52.589118,39.523878],[52.606141,39.548815],[52.535731,39.589455]],schedule:[{discipline:"КАРАТЭ",group:"ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ",teacher:[{name:"Кызым Евгений Васильевич",days:[{day:"ВТ/ЧТ",time:"18:00 – 19:00",address:"Школа №45",address_hall:"УЛ. П.А. ПАПИНА 4"}]},{name:"Кызым Игорь Васильевич",days:[{day:"СБ",time:"10:00 – 11:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СР",time:"18:00 – 19:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"ВТ/ЧТ",time:"8:30 – 9:30",address:"Школа №18",address_hall:"УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25"},{day:"ВТ/ЧТ",time:"17:30 – 18:30",address:"Школа №18",address_hall:"УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25"},{day:"ПН/ПТ",time:"17:30 – 18:30",address:"Школа №48",address_hall:"УЛ. КОСМОНАВТОВ 82/4"},{day:"ПН/ПТ",time:"20:00 – 21:00",address:"Школа №49",address_hall:"УЛ. ЗВЁЗДНАЯ 12"}]},{name:"Кызым Герман Игоревич",days:[{day:"ВТ/ЧТ",time:"19:00 – 20:00",address:"Школа №33",address_hall:"БУЛ. ШУБИНА 15"},{day:"ЧТ",time:"15:10 – 16:40",address:"ГДЮЦ «Спортивный»",address_hall:"УЛ. СТАХАНОВА 28Б"},{day:"ЧТ",time:"16:50 – 18:20",address:"ГДЮЦ «Спортивный»",address_hall:"УЛ. СТАХАНОВА 28Б"},{day:"СБ",time:"15:20 – 16:50",address:"ГДЮЦ «Спортивный»",address_hall:"УЛ. СТАХАНОВА 28Б"},{day:"СБ",time:"17:00 – 18:30",address:"ГДЮЦ «Спортивный»",address_hall:"УЛ. СТАХАНОВА 28Б"}]}]},{discipline:"КАРАТЭ",group:"ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ (2 ГОД)",teacher:[{name:"Кызым Евгений Васильевич",days:[{day:"ПН/СР/ПТ",time:"18:00 – 19:00",address:"Школа №45",address_hall:"УЛ. П.А. ПАПИНА 4"}]}]},{discipline:"КАРАТЭ",group:"ТРЕНИРОВОЧНАЯ ГРУППА",teacher:[{name:"Кызым Евгений Васильевич",days:[{day:"ВТ/ЧТ",time:"19:00 – 20:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СБ",time:"12:00 – 13:00",address:"УЛ. ПЕРОВА 47",address_hall:null}]},{name:"Кызым Игорь Васильевич",days:[{day:"СР",time:"19:00 – 20:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СБ",time:"11:00 – 12:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"ВТ/ЧТ",time:"16:30 – 17:30",address:"Школа №18",address_hall:"УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25"},{day:"ПН/ПТ",time:"17:30 – 18:30",address:"Школа №48",address_hall:"УЛ. КОСМОНАВТОВ 82/4"}]},{name:"Бунеев Максим Николаевич",days:[{day:"ВТ/ЧТ",time:"18:00 – 19:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СБ",time:"12:00 – 13:00",address:"УЛ. ПЕРОВА 47",address_hall:null}]}]},{discipline:"КИКБОКСИНГ",group:"ТРЕНИРОВОЧНАЯ ГРУППА",teacher:[{name:"Кызым Евгений Васильевич",days:[{day:"ВТ/ЧТ",time:"20:00 – 21:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"ПН/ПТ",time:"19:00 – 20:30",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СР",time:"16:30 – 17:30",address:"УЛ. ПЕРОВА 47",address_hall:null}]}]},{discipline:"КИКБОКСИНГ",group:"ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ",teacher:[{name:"Кызым Евгений Васильевич",days:[{day:"ВТ/ЧТ",time:"9:00 – 10:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"ВТ/ЧТ",time:"16:00 – 17:00",address:"УЛ. ПЕРОВА 47",address_hall:null},{day:"СР",time:"16:30 – 17:30",address:"УЛ. ПЕРОВА 47",address_hall:null}]},{name:"Мамедов Рауф Фахрадович",days:[{day:"СР/ПТ",time:"13:30 – 14:30",address:"ФИЛЛИПЧЕНКО 7/4",address_hall:null},{day:"ПН/СБ",time:"13:20 – 14:20",address:"ФИЛЛИПЧЕНКО 7/4",address_hall:null},{day:"ПТ",time:"15:10 – 16:10",address:"ФИЛЛИПЧЕНКО 7/4",address_hall:null},{day:"ПТ",time:"16:50 – 17:50",address:"ФИЛЛИПЧЕНКО 7/4",address_hall:null},{day:"ВТ/ЧТ",time:"14:00 – 15:00",address:"Ильича 31",address_hall:null},{day:"ВТ/ЧТ",time:"15:40 – 16:40",address:"Ильича 31",address_hall:null}]}]}],cardDiscipline:[{title:"Каратэ",age:5,price:200,img:"Karate.png"},{title:"Кикбоксинг",age:5,price:200,img:"KickBoxing.png"},{title:"Развивающие детские тренировки",age:3,price:200,img:"YoungTR.png"}]}}},h=(d(387),d(389),d(27)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"background-block",style:{background:"url('".concat(d(345)),backgroundSize:"cover"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"title-block"},[e("div",{staticClass:"title"},[t._m(0),t._v(" "),e("div",{staticClass:"btn-block"},[e("button",{on:{click:function(e){return t.$store.commit("modal/setModalActive",!0)}}},[t._v("ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ТРЕНИРОВКУ")]),t._v(" "),e("img",{staticClass:"btn-arrow",attrs:{src:d(346),alt:""}})])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"background-block",style:{zIndex:"10",marginTop:"-190px",background:"url('".concat(d(347),"')"),backgroundSize:"cover"}},[e("div",{staticClass:"training"},[t._m(2),t._v(" "),e("div",{staticClass:"cards-discipline"},t._l(t.cardDiscipline,(function(t,d){return e("card-discipline",{key:d,attrs:{card:t}})})),1)])]),t._v(" "),e("div",{staticClass:"background-block",staticStyle:{"z-index":"6","background-size":"cover"},style:{paddingBottom:"70px",background:"url('".concat(d(348),"')"),backgroundSize:"cover"}},[e("div",{staticClass:"schedule-block",attrs:{id:"schedule"}},[e("div",{staticClass:"title-schedule"},[e("h1",[t._v("РАСПИСАНИЕ")]),t._v(" "),e("button",{on:{click:function(e){return t.$store.commit("modal/setModalActive",!0)}}},[t._v("ЗАПИСАТЬСЯ")])]),t._v(" "),e("div",{staticClass:"schedule"},[e("table-schedule",{attrs:{schedule:t.schedule}})],1)]),t._v(" "),e("div",{staticClass:"block-gallery"},[e("p",[t._v("НАШИ ТЕРНИРОВКИ")]),t._v(" "),e("h1",[t._v("ГАЛЕРЕЯ")]),t._v(" "),e("Gallery")],1),t._v(" "),e("div",{staticClass:"coaches-block",attrs:{id:"teachers"}},[t._m(3),t._v(" "),e("coaches")],1),t._v(" "),t._m(4)]),t._v(" "),e("ClientOnly",[e("yandex-map",{ref:"map",staticClass:"map",attrs:{coords:t.main_coord,zoom:17,controls:["fullscreenControl"]}},[e("ymap-marker",{attrs:{coords:t.main_coord,searchControl:!1,markerId:1}}),t._v(" "),t._l(t.coord,(function(t,d){return e("ymap-marker",{key:d++,attrs:{coords:t,searchControl:!1,markerId:d++}})}))],2)],1),t._v(" "),e("modal-form",{directives:[{name:"show",rawName:"v-show",value:!0===t.$store.getters["modal/active"],expression:"$store.getters['modal/active']===true"}],staticClass:"form",on:{closeModal:function(e){return t.$store.commit("modal/setModalActive",!1)}}})],1)}),o,!1,null,"ab239708",null);e.default=component.exports;installComponents(component,{CardDiscipline:d(377).default,TableSchedule:d(378).default,Gallery:d(379).default,Coaches:d(380).default,ModalForm:d(381).default})}}]);