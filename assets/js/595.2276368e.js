(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[595,173],{4608:function(e,t,l){"use strict";l.r(t);var n=l(7294),a=l(4565),r=l(4973);t.default=function(){return n.createElement(a.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4908:function(e,t,l){"use strict";var n=l(7294),a=l(6742),r=l(6700),c=l(4996),o=l(6010),i=l(1370);t.Z=function(){var e=(0,r.LU)().footer.links;return n.createElement("footer",{className:"bg-monochrome-light-tint"},n.createElement("div",{className:"container"},n.createElement("section",{className:"grid py-16 grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-12 gap-x-5"},n.createElement("a",{href:"https://github.com/Drill4J",target:"_blank",rel:"noreferrer noopener",className:"col-span-full lg:col-span-4"},n.createElement("img",{src:(0,c.Z)("img/drill4j-logo-grayscale.svg"),alt:"drill4j github"})),e.map((function(e,t){var l=e.title,r=void 0===l?"":l,c=e.items;return n.createElement("div",{key:r,className:(0,o.Z)("space-y-3","md:col-span-"+(2===t?2:3)+" lg:col-span-3 lg:col-start-"+(5+3*t))},n.createElement("h5",null," "===r?n.createElement("span",null,"\xa0"):r),n.createElement("ul",null,c.map((function(e){var t=e.label,l=e.href;return n.createElement("li",{key:t,className:"mb-2"},n.createElement(a.Z,{className:"gray-link",to:l},t))}))))}))),n.createElement("section",{className:"flex flex-col gap-y-4 py-6 border-t border-monochrome-medium-tint sm:flex-row justify-between"},n.createElement("span",{className:"flex flex-col gap-y-2 items-center gap-x-2 text-16 leading-24 text-monochrome-default sm:flex-row"},"Sponsored by",n.createElement(a.Z,{to:"https://www.epam.com/"},n.createElement("img",{src:(0,c.Z)("img/epam-logo.svg"),alt:"Epam"})),"Licensed under Apache v2.0"),n.createElement("ul",{className:"flex justify-center gap-x-4 items-center"},i.K.map((function(e){var t=e.bg,l=e.link;return n.createElement("li",{key:l},n.createElement(a.Z,{to:l,className:t+" block w-6 h-6 cursor-pointer"}))}))))))}},5752:function(e,t,l){"use strict";l.d(t,{Z:function(){return g}});var n=l(7294),a=l(4996),r=l(5977),c=l(6742),o=l(6700),i=l(1839),m=l(1370),s="activeTab_bgKI",u="tab_WL9E",g=function(){var e=(0,o.LU)().navbar.items,t=(0,r.TH)().pathname,l=(0,n.useState)(!1),g=l[0],d=l[1];(0,i.Z)(g);var f=[].concat(e),p=f.splice(-1,1)[0];return n.createElement("header",{className:"sticky top-0 z-50 h-22"},n.createElement("div",{className:"absolute top-0 left-0 z-40 w-full bg-monochrome-white shadow"},n.createElement("nav",{className:"flex items-center justify-between h-22 container"},n.createElement(c.Z,{to:(0,a.Z)("/")},n.createElement("img",{src:(0,a.Z)("/img/drill4j-logo.svg"),alt:"drill-logo"})),n.createElement("div",{className:"md:flex items-center"},n.createElement("ul",{className:"invisible md:visible fixed md:static flex flex-row gap-6 items-center"},f.map((function(e){var l=e.to,r=void 0===l?"":l,o=e.label,i=void 0===o?"":o;return n.createElement("li",{key:r},n.createElement(c.Z,{style:{textDecoration:"none"},className:"flex items-center h-22\n                      text-16 text-monochrome-default hover:text-blue-default\n                      "+(t.includes(r.split("/")[0])?s:u)+"\n                      ",to:(0,a.Z)(r)},i))})),n.createElement("li",null,n.createElement(c.Z,{style:{textDecoration:"none"},className:"button-primary ml-5 px-8",to:(0,a.Z)(p.to)},p.label))),n.createElement("button",{"aria-label":"menu button",className:"flex items-center justify-center w-9 h-9 md:hidden text-monochrome-black fill-current "+(g?"bg-close":"bg-menu")+" bg-no-repeat",type:"button",onClick:function(){return d(!g)}})))),g&&n.createElement("nav",{className:"visible md:invisible fixed w-full h-full left-0 top-22"},n.createElement("div",{className:"bg-monochrome-white"},n.createElement("div",{className:"container pt-2 pb-6"},n.createElement("ul",null,f.map((function(e){var t=e.to,l=void 0===t?"":t,r=e.label,o=void 0===r?"":r;return n.createElement("li",{className:"text-16 leading-24 border-b border-monochrome-medium-tint"},n.createElement(c.Z,{style:{textDecoration:"none"},className:"gray-link inline-flex py-4 w-full h-full",to:(0,a.Z)(l),onClick:function(){return d(!1)}},o))})),n.createElement("div",{className:"flex gap-x-6 mt-9 mb-30"},m.K.map((function(e){var t=e.bg,l=e.link;return n.createElement("li",null,n.createElement(c.Z,{to:l,className:t+" bg-no-repeat bg-center transform scale-150 block w-9 h-9 cursor-pointer"}))}))),n.createElement("li",null,n.createElement(c.Z,{style:{textDecoration:"none"},className:"button-primary w-full",to:(0,a.Z)(p.to),onClick:function(){return d(!1)}},p.label))))),n.createElement("div",{className:"w-full h-full bg-monochrome-black bg-opacity-50",onClick:function(){return d(!g)}})))}},1370:function(e,t,l){"use strict";l.d(t,{K:function(){return n}});var n=[{bg:"bg-git-hub",link:"https://github.com/Drill4J"},{bg:"bg-telegram",link:"https://t.me/drill4j"},{bg:"bg-twiter",link:"https://twitter.com/"},{bg:"bg-youtube",link:"https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"}]}}]);