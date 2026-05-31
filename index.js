import{a as b,S as w,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const v="https://pixabay.com/api/",S="56048783-6f228d4081fb198149de51908";async function u(o,r){return(await b.get(v,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const r=o.map(e=>`
      <li class="gallery-item">
       <a href="${e.largeImageURL}">
        <img
         src="${e.webformatURL}"
         alt="${e.tags}"
        />
     </a>

        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function M(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function P(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");B.addEventListener("submit",O);$.addEventListener("click",R);let i="",s=1,d=0;async function O(o){if(o.preventDefault(),i=o.currentTarget.elements["search-text"].value.trim(),!i){l.warning({message:"Please enter a search query!",position:"topRight"});return}s=1,L(),M(),y();try{const r=await u(i,s),e=r.hits;if(d=r.totalHits,e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e),d>15&&P()}catch(r){console.log(r)}finally{g()}}async function R(){s+=1,y();try{const o=await u(i,s);p(o.hits);const r=Math.ceil(d/15);s>=r&&(L(),l.info({message:"We're sorry, but you've reached the end of search results."}));const e=document.querySelectorAll(".gallery-item");if(e.length===0)return;const a=e[0].getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch(o){console.log(o)}finally{g()}}
//# sourceMappingURL=index.js.map
