import"./assets/styles-1789dd1f.js";import{i as o}from"./assets/vendor-77e16229.js";function n(e,s){return new Promise((i,t)=>{setTimeout(s==="fulfilled"?()=>i(e):()=>t(e),e)})}const r=document.querySelector(".form");r.addEventListener("submit",function(e){e.preventDefault();const s=parseInt(this.elements.delay.value),i=this.elements.state.value;n(s,i).then(t=>{o.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:"Rejected",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map