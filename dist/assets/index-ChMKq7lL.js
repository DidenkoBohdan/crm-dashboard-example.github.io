(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function a(c={},r=""){c.classList.add(r)}function n(c,r){c.classList.remove(r)}function d(){const c=document.body,r=document.querySelector(".sidebar"),s=r.querySelectorAll(".sidebar__nav-list li");let o=!1;n(c,"no-scroll"),r.addEventListener("click",e=>{e.preventDefault(),o||t()}),s.forEach(e=>{e.addEventListener("click",i=>{o&&(s.forEach(l=>n(l,"active")),a(i.currentTarget,"active"))})}),s.forEach(e=>{e.addEventListener("click",i=>{o?(s.forEach(l=>n(l,"active")),a(i.currentTarget,"active")):(i.preventDefault(),t())})}),document.addEventListener("click",e=>{o&&!r.contains(e.target)&&(o=!1,n(r,"active"),n(c,"no-scroll"))});function t(){o=!o,o?a(r,"active"):n(r,"active"),o?a(c,"no-scroll"):n(r,"no-scroll")}}const f=window.matchMedia("(max-width: 1280px)");f.onchange=c=>{c.matches&&d()};document.addEventListener("DOMContentLoaded",()=>{f.matches&&d()});