import{f as g,i as C}from"./assets/vendor-651d7991.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const v=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),l=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let d,c;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){d=o[0],x()}};g(v,b);function x(){if(d<Date.now()){a.disabled=!0,C.show({message:"Please choose a date in the future",position:"topCenter"});return}else a.disabled=!1,c=setInterval(h,1e3)}a.addEventListener("click",()=>{d&&!c&&(clearInterval(c),c=setInterval(h,1e3),a.disabled=!0)});function h(){const o=d-Date.now();if(o<=0)clearInterval(c),l.textContent="00",f.textContent="00",m.textContent="00",y.textContent="00";else{const{days:n,hours:u,minutes:r,seconds:e}=q(o);l.textContent=i(n),f.textContent=i(u),m.textContent=i(r),y.textContent=i(e)}}function q(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),p=Math.floor(o%864e5%36e5/6e4),S=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:p,seconds:S}}function i(o){return String(o).padStart(2,0)}
//# sourceMappingURL=commonHelpers.js.map
