!function(){"use strict";var e,n={641:function(){var e=window.wp.blocks,n=window.wp.element,r=window.wp.i18n,t=window.wp.blockEditor;(0,e.registerBlockType)("demo/static",{edit:function(){return(0,n.createElement)("p",{...(0,t.useBlockProps)()},(0,r.__)("Example Static – hello from the editor!","static"))},save:function(){return(0,n.createElement)("p",{...t.useBlockProps.save()},"Example Static – hello from the saved content!")}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,r,o,i){if(!r){var c=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<c&&(c=i));if(u){e.splice(f--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={304:0,910:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,c=r[0],u=r[1],l=r[2],a=0;if(c.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(l)var f=l(t)}for(n&&n(r);a<c.length;a++)i=c[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self.webpackChunkse_block=self.webpackChunkse_block||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[910],(function(){return t(641)}));o=t.O(o)}();