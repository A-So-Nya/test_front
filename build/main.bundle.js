!function(e){function t(t){for(var n,l,r=t[0],p=t[1],d=t[2],s=0,u=[];s<r.length;s++)l=r[s],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(c&&c(t);u.length;)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var p=a[r];0!==i[p]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window.webpackJsonp=window.webpackJsonp||[],p=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=p;o.push([31,1]),a()}({18:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.dataSlice=t.postData=void 0;const i=a(17),o=n(a(34)).default.create();t.postData=(0,i.createAsyncThunk)("data/sendData",async e=>(await o.post("https://eoj3r7f3r4ef6v4.m.pipedream.net",e,{headers:{"Content-Type":"application/json"}})).data);t.dataSlice=(0,i.createSlice)({name:"data",initialState:{isLoading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(t.postData.pending,(e,t)=>{e.isLoading=!0}).addCase(t.postData.fulfilled,(e,t)=>{e.isLoading=!1}).addCase(t.postData.rejected,(e,t)=>{e.isLoading=!1,e.error=t.error})}}),t.dataSlice.actions,t.default=t.dataSlice.reducer},28:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextField=void 0;const r=o(a(0)),p=l(a(13)),d=l(a(57));t.TextField=({children:e,type:t,className:a,align:n,color:i})=>r.createElement("span",{className:(0,p.default)(d.default.text,{[d.default["text--type--"+(t||"")]]:t,[d.default["text--align--"+(n||"")]]:n,[d.default["text--color--"+(i||"")]]:i},a)},e)},31:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(a(0)),p=a(33),d=a(28),c=l(a(59)),s=a(61),u=a(82),g=a(72),f=a(18),h=a(76);a(80);(0,s.createRoot)(document.querySelector("#root")).render(r.default.createElement(u.Provider,{store:p.store},r.default.createElement(()=>{const[e,t]=(0,r.useState)(1e6),[a,n]=(0,r.useState)(10),[i,o]=(0,r.useState)(1),l=(0,u.useDispatch)(),p=(0,u.useSelector)(e=>e.data);return console.log(p.isLoading),r.default.createElement("div",{className:c.default.container},r.default.createElement("div",{className:c.default.title},r.default.createElement(d.TextField,null,"Рассчитайте стоимость автомобиля в лизинг")),r.default.createElement("div",{className:c.default.inputs},r.default.createElement(g.InputWithSlider,{label:"Стоимость автомобиля",min:1e6,max:6e6,value:e,setValue:t,isLoading:!1,inputText:"₽",className:c.default.inputBlock,disabled:p.isLoading}),r.default.createElement(g.InputWithSlider,{label:"Первоначальный взнос",min:10,max:60,value:a,setValue:n,isLoading:!1,inputText:"%",inverted:!0,price:e,className:c.default.inputBlock,disabled:p.isLoading}),r.default.createElement(g.InputWithSlider,{label:"Срок лизинга",min:1,max:60,value:i,setValue:o,isLoading:!1,inputText:"мес.",className:c.default.inputBlock,disabled:p.isLoading})),r.default.createElement("div",{className:c.default.outputsAndControl},r.default.createElement("div",{className:c.default.outputs},r.default.createElement("div",{className:c.default.column},r.default.createElement(d.TextField,{type:"normal-400-14-19",className:c.default.titleColumn},"Сумма договора лизинга"),r.default.createElement(d.TextField,{type:"normal-900-22-20",className:c.default.column_text},Math.round(a/100*e+i*((e-a/100*e)*(.035*Math.pow(1.035,i)/(Math.pow(1.035,i)-1)))).toLocaleString("ru-RU")+" ₽")),r.default.createElement("div",{className:c.default.column},r.default.createElement(d.TextField,{type:"normal-400-14-19",className:c.default.titleColumn},"Ежемесячный платеж от"),r.default.createElement(d.TextField,{type:"normal-900-22-20",className:c.default.column_text},Math.round((e-e*(a/100))*(.035*Math.pow(1.035,i)/(Math.pow(1.035,i)-1))).toLocaleString("ru-RU")+" ₽"))),r.default.createElement("div",null,r.default.createElement(h.Button,{className:c.default.button,isLoading:p.isLoading,onClick:()=>{l((0,f.postData)({price:e,firstContribution:a,term:i}))},disabled:p.isLoading},r.default.createElement(d.TextField,{color:"white"},"Оставить заявку")))))},null)))},33:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;const i=a(17),o=n(a(18)),l=n(a(9));t.store=(0,i.configureStore)({reducer:{data:o.default},middleware:e=>e().concat(l.default)})},57:function(e,t,a){var n=a(6),i=a(58);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},58:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n)()(!1);i.push([e.i,".of\\+qd8SBbb7IOijJTA0qUw\\=\\={font-style:normal;font-weight:900;font-size:31px;line-height:31px}._0g2IX-f-TUH4vQKbP0wznQ\\=\\={font-style:normal;font-weight:900;font-size:22px;line-height:20px}._2XqJRQhYK6EKj2v6bNMzXg\\=\\={font-style:normal;font-weight:400;font-size:16px;line-height:20px}.aE0uN9jkuNO5fser8jLZRA\\=\\={font-style:normal;font-weight:400;font-size:14px;line-height:19px}._4OGk2IFcA8q-E7hQa9lIlg\\=\\={text-align:left}.T\\+LJ26dRBBXMaOe1Bn7MFA\\=\\={text-align:center}.Svro96QuCbniyboYxTacOw\\=\\={text-align:right}.-ZxUqF8Pd1CuohmZ9NPzXw\\=\\={color:#111}.SBVCRtl3gDNIrLS1nAd2zA\\=\\={color:#333}.-g94QUUvEeRRw63qa0970w\\=\\={color:#fff}.Fg147fKgArtegfebSNYugw\\=\\={color:#575757}.XajTNIJd8xU-8F7WxQ4PxQ\\=\\={color:#333e48}",""]),i.locals={"text--type--normal-900-34-31":"of+qd8SBbb7IOijJTA0qUw==","text--type--normal-900-22-20":"_0g2IX-f-TUH4vQKbP0wznQ==","text--type--normal-400-16-20":"_2XqJRQhYK6EKj2v6bNMzXg==","text--type--normal-400-14-19":"aE0uN9jkuNO5fser8jLZRA==","text--align--left":"_4OGk2IFcA8q-E7hQa9lIlg==","text--align--center":"T+LJ26dRBBXMaOe1Bn7MFA==","text--align--right":"Svro96QuCbniyboYxTacOw==","text--color--black":"-ZxUqF8Pd1CuohmZ9NPzXw==","text--color--grey":"SBVCRtl3gDNIrLS1nAd2zA==","text--color--white":"-g94QUUvEeRRw63qa0970w==","text--color--darkGrey":"Fg147fKgArtegfebSNYugw==","text--color--greyBlue":"XajTNIJd8xU-8F7WxQ4PxQ=="},t.default=i},59:function(e,t,a){var n=a(6),i=a(60);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},60:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n)()(!1);i.push([e.i,'.ltYaLpnpZNCd\\+J49vG8j7A\\=\\={display:flex;flex-direction:column;align-items:center;padding-left:20px;padding-right:20px;padding-top:44px;font-family:"Gilroy"}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\={padding-left:36px;padding-right:36px;padding-top:64px}}@media screen and (min-width: 1024px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\={padding-left:48px;padding-right:48px;padding-top:100px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\={padding-left:47px;padding-right:49px;padding-top:213px}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .Sf1t1CBULNHe0R\\+h9p8WSw\\=\\={font-family:"Nekst-Black";margin-bottom:32px;font-weight:900;font-size:34px;line-height:31px;flex:1 1 100%;width:100%;color:#111}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .Sf1t1CBULNHe0R\\+h9p8WSw\\=\\={font-weight:900;font-size:54px;line-height:49px;margin-bottom:44px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .Sf1t1CBULNHe0R\\+h9p8WSw\\=\\={margin-bottom:32px;width:800px;align-self:flex-start}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= ._5RTga-Gs7VeCj-3a3YMdnQ\\=\\={flex:1 1 100%;width:100%}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= ._5RTga-Gs7VeCj-3a3YMdnQ\\=\\= .lAtIVg9nt7CKf4CsPNMuww\\=\\={margin-bottom:16px;min-width:0;flex:1}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= ._5RTga-Gs7VeCj-3a3YMdnQ\\=\\= .lAtIVg9nt7CKf4CsPNMuww\\=\\={margin-bottom:37px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= ._5RTga-Gs7VeCj-3a3YMdnQ\\=\\= .lAtIVg9nt7CKf4CsPNMuww\\=\\={margin-bottom:51px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= ._5RTga-Gs7VeCj-3a3YMdnQ\\=\\={display:flex;flex-direction:row;gap:32px}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\={flex:1 1 100%;width:100%}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\={display:flex;flex-direction:row;gap:230px;height:68px;align-items:center}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={color:#333;margin-bottom:3px}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={display:flex;flex-direction:row;gap:85px}}@media screen and (min-width: 1024px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={gap:201px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={gap:180px;color:#575757}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\={display:flex;flex-direction:column;flex:1 0 auto;padding-bottom:29px}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\= .-q9JNTQMwFsWH4p3J7Ou7A\\=\\={margin-bottom:2px}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\= .-q9JNTQMwFsWH4p3J7Ou7A\\=\\={font-weight:400;font-size:16px;line-height:24px;margin-bottom:8px}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\= ._2pZhrP\\+WTfVs1fZLmKHf1w\\=\\={font-family:"Nekst-Black"}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\= ._2pZhrP\\+WTfVs1fZLmKHf1w\\=\\={font-weight:900;font-size:54px;line-height:49px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\= .bVL2fknaD4yT2HChiZe7Kg\\=\\={padding-bottom:0px}}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={margin-bottom:15px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .hepaPoqhk5PaBBNe4H1MRQ\\=\\={margin-bottom:0px}}.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .ezQ5we7PMM\\+C5ZAoPrInQg\\=\\={height:60px;width:280px;border:none;outline:none}@media screen and (min-width: 768px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .ezQ5we7PMM\\+C5ZAoPrInQg\\=\\={height:68px;width:345px}}@media screen and (min-width: 1440px){.ltYaLpnpZNCd\\+J49vG8j7A\\=\\= .XSQgpTyJpjgjqPB3FxpQDg\\=\\= .ezQ5we7PMM\\+C5ZAoPrInQg\\=\\={width:426px}}',""]),i.locals={container:"ltYaLpnpZNCd+J49vG8j7A==",title:"Sf1t1CBULNHe0R+h9p8WSw==",inputs:"_5RTga-Gs7VeCj-3a3YMdnQ==",inputBlock:"lAtIVg9nt7CKf4CsPNMuww==",outputsAndControl:"XSQgpTyJpjgjqPB3FxpQDg==",outputs:"hepaPoqhk5PaBBNe4H1MRQ==",column:"bVL2fknaD4yT2HChiZe7Kg==",titleColumn:"-q9JNTQMwFsWH4p3J7Ou7A==",column_text:"_2pZhrP+WTfVs1fZLmKHf1w==",button:"ezQ5we7PMM+C5ZAoPrInQg=="},t.default=i},72:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InputWithSlider=void 0;const r=o(a(0)),p=a(28),d=a(73),c=l(a(74)),s=l(a(13));t.InputWithSlider=({label:e,max:t,min:a,value:n,setValue:i,isLoading:o,inputText:l,inverted:u=!1,price:g,className:f,disabled:h})=>{const m=(0,d.useDebouncedCallback)(e=>{i(e<a?a:e>t?t:e)},1e3);return r.createElement("div",{className:(0,s.default)(c.default.container,f,h&&c.default.disabled)},r.createElement(p.TextField,{className:c.default.title,type:"normal-400-14-19",color:"greyBlue"},e),r.createElement("div",{className:c.default.inputWithSlider},r.createElement("div",{className:c.default.inputWithText},u?r.createElement("div",{className:c.default.invertedInputContainer},r.createElement(p.TextField,{className:c.default.invertedText,type:"normal-900-22-20",color:"greyBlue"},Math.round((n>t?t:n<a?a:n)/100*g).toLocaleString("ru-RU")+" ₽"),r.createElement("input",{value:n+"%",onChange:e=>{Number.parseInt(e.target.value)+"%"===e.target.value&&(i(Number.parseInt(e.target.value)),m(Number.parseInt(e.target.value)))},disabled:h,className:c.default.invertedInput})):r.createElement(r.Fragment,null,r.createElement("input",{value:n.toLocaleString("ru-RU"),onChange:e=>{Number.isNaN(+e.target.value.replace(/\s/g,""))||(i(+e.target.value.replace(/\s/g,"")),m(+e.target.value.replace(/\s/g,"")))},disabled:h,className:c.default.input}),r.createElement(p.TextField,{className:c.default.text,type:"normal-900-22-20",color:"greyBlue"},l))),r.createElement("input",{style:{background:`linear-gradient(to right, #FF9514 0%, #FF9514 ${(n-a)/(t-a)*100}%, #E1E1E1 ${(n-a)/(t-a)*100}%, #E1E1E1 100%)`},disabled:h,className:c.default.slider,max:t,min:a,value:n,onChange:e=>{console.log(e.target.value),i(+e.target.value)},type:"range"})))}},74:function(e,t,a){var n=a(6),i=a(75);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},75:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n)()(!1);i.push([e.i,'.wG2cOmS1reISaaQOll0Ojg\\=\\={display:flex;flex-direction:column}.wG2cOmS1reISaaQOll0Ojg\\=\\=.ttDpHhEy8l\\+gLvwKCPD7nA\\=\\={opacity:.4}.wG2cOmS1reISaaQOll0Ojg\\=\\= .XwQqcIyYmScNAxTONtHLIQ\\=\\={margin-bottom:8px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .XwQqcIyYmScNAxTONtHLIQ\\=\\={font-weight:400;font-size:16px;line-height:20px;margin-bottom:24px;color:#575757}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\={display:flex;flex-direction:column;position:relative;font-family:"Nekst-Black"}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\={position:relative}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .HSqX99Yx7RLi7akuVpaGbA\\=\\={height:60px;background-color:#f3f3f4;color:#333e48;border-radius:16px;padding-left:20px;padding-right:20px;border:2px solid rgba(0,0,0,0);box-sizing:border-box;width:100%;font-style:normal;font-weight:900;font-size:22px;line-height:20px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .HSqX99Yx7RLi7akuVpaGbA\\=\\={font-size:30px;line-height:36px;color:#575757;height:68px}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\={height:60px;background-color:#f3f3f4;border-radius:16px;padding-left:20px;padding-right:7px;border:2px solid rgba(0,0,0,0);box-sizing:border-box;width:100%;font-style:normal;font-weight:900;font-size:22px;line-height:20px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\={font-size:30px;line-height:36px;color:#575757;height:68px}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\= ._5-izlgPU4Q5AAvXIEE5Lhg\\=\\={position:absolute;right:7px;bottom:50%;font-style:normal;font-weight:900;font-size:22px;line-height:20px;margin-bottom:-24px;height:48px;width:67px;background:rgba(224,224,224,.4);border-radius:12px;border:none;outline:none;border:2px solid rgba(0,0,0,0);box-sizing:border-box;color:#333e48;padding-left:8px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\= ._5-izlgPU4Q5AAvXIEE5Lhg\\=\\={width:70px;font-size:20px;line-height:24px;padding-left:10px;color:#575757}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\= .ty76vrnJCSBOGis0Bg2NfA\\=\\={position:absolute;top:50%;left:20px;margin-top:-10px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .OFRqJGOG31AECDnu54LTVw\\=\\= .ty76vrnJCSBOGis0Bg2NfA\\=\\={font-size:30px;line-height:36px;margin-top:-18px;color:#575757}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .bAVQCPU6l3WieW20w1TNFQ\\=\\={position:absolute;right:20px;bottom:50%;font-style:normal;font-weight:900;font-size:22px;line-height:20px;margin-bottom:-10px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\= .bAVQCPU6l3WieW20w1TNFQ\\=\\={font-size:30px;line-height:36px;margin-bottom:-18px;color:#575757;right:24px}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\=:focus-within .HSqX99Yx7RLi7akuVpaGbA\\=\\={outline:none;border:2px solid #f3f3f4;background-color:rgba(0,0,0,0)}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .e2U8rhZ3a\\+D\\+YpoevdO4DA\\=\\=:focus-within .OFRqJGOG31AECDnu54LTVw\\=\\= ._5-izlgPU4Q5AAvXIEE5Lhg\\=\\={border:2px solid #f3f3f4;background-color:#fff}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\={-webkit-appearance:none;width:calc(100% - 40px);margin-left:20px;background:rgba(0,0,0,0);height:2px;position:absolute;top:56px;box-sizing:border-box}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\={top:64px}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-webkit-slider-thumb{-webkit-appearance:none}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=:focus{outline:none}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-ms-thumb{border:none;height:20px;width:20px;border-radius:20px;background:#ff9514;cursor:pointer}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-ms-track{width:100%;cursor:pointer;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0);height:2px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;border:none}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:20px;width:20px;border-radius:20px;background:#ff9514;cursor:pointer;margin-top:-10px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\= .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-moz-range-thumb{border:none;height:20px;width:20px;border-radius:20px;background:#ff9514;cursor:pointer}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:focus-within .BvSsI5\\+8896eQezP\\+my5-w\\=\\={height:1px;top:64px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\={top:57px;height:1px}@media screen and (min-width: 768px){.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\={top:65px}}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-ms-thumb{height:24px;width:24px;border-radius:24px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-moz-range-thumb{height:24px;width:24px;border-radius:24px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\=::-webkit-slider-thumb{height:24px;width:24px;border-radius:24px;margin-top:-12px}.wG2cOmS1reISaaQOll0Ojg\\=\\= .lh9ocGa0Kj\\+GvaopgL0Wjg\\=\\=:hover .BvSsI5\\+8896eQezP\\+my5-w\\=\\=:focus{height:2px}',""]),i.locals={container:"wG2cOmS1reISaaQOll0Ojg==",disabled:"ttDpHhEy8l+gLvwKCPD7nA==",title:"XwQqcIyYmScNAxTONtHLIQ==",inputWithSlider:"lh9ocGa0Kj+GvaopgL0Wjg==",inputWithText:"e2U8rhZ3a+D+YpoevdO4DA==",input:"HSqX99Yx7RLi7akuVpaGbA==",invertedInputContainer:"OFRqJGOG31AECDnu54LTVw==",invertedInput:"_5-izlgPU4Q5AAvXIEE5Lhg==",invertedText:"ty76vrnJCSBOGis0Bg2NfA==",text:"bAVQCPU6l3WieW20w1TNFQ==",slider:"BvSsI5+8896eQezP+my5-w=="},t.default=i},76:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const i=n(a(0)),o=n(a(13)),l=n(a(77)),r=n(a(79));t.Button=function({className:e,onClick:t,disabled:a,children:n,isLoading:p}){return i.default.createElement("button",{onClick:t,disabled:a,className:(0,o.default)(l.default.button,p?l.default.loading:"",e)},p?i.default.createElement("img",{src:r.default}):n)},t.default=null},77:function(e,t,a){var n=a(6),i=a(78);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},78:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n)()(!1);i.push([e.i,'.sRE36hvpQ5oc1svWlDAQnQ\\=\\={display:flex;align-items:center;justify-content:center;box-sizing:border-box;background:#ff9514;width:max-content;height:max-content;border-radius:40px;border:none;cursor:pointer;padding:0;position:relative;font-weight:900;font-size:22px;line-height:20px;font-family:"Nekst-Black"}@media screen and (min-width: 768px){.sRE36hvpQ5oc1svWlDAQnQ\\=\\={font-size:30px;line-height:36px}}.sRE36hvpQ5oc1svWlDAQnQ\\=\\=:hover:not(.MWdn7pmTNJa94Yi64aJBDQ\\=\\=){background-color:#111}.sRE36hvpQ5oc1svWlDAQnQ\\=\\=:active:not(.MWdn7pmTNJa94Yi64aJBDQ\\=\\=){background-color:#575757}.sRE36hvpQ5oc1svWlDAQnQ\\=\\=[disabled]{background-color:#ff9514;opacity:.5;pointer-events:none}',""]),i.locals={button:"sRE36hvpQ5oc1svWlDAQnQ==",loading:"MWdn7pmTNJa94Yi64aJBDQ=="},t.default=i},79:function(e,t,a){"use strict";a.r(t),t.default=a.p+"4e82ac858606a43fa04f9de824dc3dc3.svg"},80:function(e,t,a){var n=a(6),i=a(81);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},81:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n)()(!1);i.push([e.i,"@font-face {\n    font-family: 'Gilroy';\n    src: url(\"Gilroy-Regular.ttf\") format('truetype');\n}\n@font-face {\n    font-family: 'Nekst-Black';\n    src: url(\"Nekst-Black.ttf\") format('truetype');\n}",""]),t.default=i}});