var Shopware6Client=function(t,a){"use strict";a=a&&a.hasOwnProperty("default")?a.default:a;const n={endpoint:"https://shopware-2.vuestorefront.io/sales-channel-api/v1",accessToken:"SWSCBVBBZET1RTFIYWY4YVLICA",contextToken:"",defaultPaginationLimit:10};let e={};const o=function(t={}){e=Object.assign(e,n,t)};o();const c=function(t){e=Object.assign(e,t)},r=e,i=a.create({timeout:1e3});function s(){i.defaults.baseURL=r.endpoint,i.defaults.headers.common["sw-access-key"]=r.accessToken,r.contextToken?i.defaults.headers.common["sw-context-token"]=r.contextToken:delete i.defaults.headers.common["sw-context-token"]}s();const u=()=>"/category",d=t=>`/category/${t}`,f=t=>`/product/${t}`,l=t=>t?`/customer/address/${t}`:"/customer/address",g=(t,a)=>`/customer/address/${a}/default-${t}`,p=t=>g("billing",t),y=t=>g("shipping",t),m=()=>"/customer",w=()=>"/customer/login",h=()=>"/customer/logout",C=()=>"/customer/email",T=()=>"/customer/password",E=()=>"/checkout/cart",k=t=>`/checkout/cart/product/${t}`,I=t=>`/checkout/cart/line-item/${t}`,x=t=>`/checkout/cart/code/${t}`,P=()=>"/context",D=()=>"/currency",F=()=>"/language",N=()=>"/country",v=()=>"/payment-method",A=()=>"/shipping-method";var O;!function(t){t[t.ONE=1]="ONE",t[t.FIVE=5]="FIVE",t[t.TEN=10]="TEN",t[t.TWENTY_FIVE=25]="TWENTY_FIVE",t[t.FIFTY=50]="FIFTY",t[t.SEVENTY_FIVE=75]="SEVENTY_FIVE",t[t.HUNDRED=100]="HUNDRED",t[t.FIVE_HUNDRED=500]="FIVE_HUNDRED"}(O||(O={}));const V=t=>{let a={};if(!t)return a;const{filters:n,sort:e,pagination:o,configuration:c}=t;if(o){const{limit:t,page:n}=o;t&&Object.values(O).includes(t)&&(a.limit=t),n&&(a.page=n,a.limit||(a.limit=r.defaultPaginationLimit))}if(e){let t=e.desc?"-":"";a.sort=`${t}${e.field}`}return n&&n.length&&(a.filter=n),c&&(a.associations=function t(a=[]){if(!a||!a.length)return;let n={};return a.forEach(a=>{n[a.name]={associations:t(a.associations)}}),n}(c.associations)),a};async function b(t){const a=(await i.patch(P(),t)).data["sw-context-token"];return $({contextToken:a}),{contextToken:a}}var R;function $(t={}){c(t),s()}return function(t){t.PRODUCT="product",t.CREDIT="credit",t.CUSTOM="custom",t.PROMOTION="promotion"}(R||(R={})),t.addCartItemQuantity=async function(t,a){let n={type:R.PRODUCT,quantity:a};return(await i.post(I(t),n)).data},t.addProductToCart=async function(t,a){return(await i.post(k(t),{quantity:a})).data},t.addPromotionCode=async function(t){return(await i.post(x(t))).data},t.changeCartItemQuantity=async function(t,a){let n={quantity:a};return(await i.patch(I(t),n)).data},t.clearCart=async function(){let t=(await i.post(E())).data["sw-context-token"];return $({contextToken:t}),{contextToken:t}},t.config=r,t.createCustomerAddress=async function(t){return(await i.post(l(),t)).data},t.deleteCustomerAddress=async function(t){await i.delete(l(t))},t.getAvailableCountries=async function(){return(await i.get(N())).data},t.getAvailableCurrencies=async function(){return(await i.get(D())).data},t.getAvailableLanguages=async function(){return(await i.get(F())).data},t.getAvailablePaymentMethods=async function(){return(await i.get(v())).data},t.getAvailableShippingMethods=async function(){return(await i.get(A())).data},t.getCart=async function(){return(await i.get(E())).data},t.getCategories=async function(t){return(await i.get(u(),{params:V(t)})).data},t.getCategory=async function(t){return(await i.get(d(t))).data.data},t.getCustomer=async function(){return(await i.get(m())).data.data},t.getCustomerAddress=async function(t){return(await i.get(l(t))).data.data},t.getCustomerAddresses=async function(){return(await i.get(l())).data.data},t.getProduct=async function(t){return(await i.get(f(t))).data.data},t.getProducts=async function(t){return(await i.post("/product",V(t))).data},t.getProductsIds=async function(){return(await i.post("/search-ids/product")).data},t.login=async function(t){const a=(await i.post(w(),t)).data["sw-context-token"];return $({contextToken:a}),{contextToken:a}},t.logout=async function(){await i.post(h()),$({contextToken:""})},t.register=async function(t){return(await i.post(m(),t)).data},t.removeCartItem=async function(t){return(await i.delete(I(t))).data},t.setCurrentCurrency=async function(t){let a={currencyId:t};return await b(a)},t.setCurrentLanguage=async function(t){let a={languageId:t};return await b(a)},t.setCurrentPaymentMethod=async function(t){let a={paymentMethodId:t};return await b(a)},t.setCurrentShippingMethod=async function(t){let a={shippingMethodId:t};return await b(a)},t.setDefaultCustomerBillingAddress=async function(t){return(await i.patch(p(t))).data},t.setDefaultCustomerShippingAddress=async function(t){return(await i.patch(y(t))).data},t.setup=function(t={}){o(t),s()},t.update=$,t.updateEmail=async function(t){await i.patch(C(),t)},t.updatePassword=async function(t){await i.patch(T(),t)},t.updateProfile=async function(t){await i.patch(m(),t)},t}({},axios);
