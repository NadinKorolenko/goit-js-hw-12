import{a as w,S,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",P="56048783-6f228d4081fb198149de51908";async function f(n,r){return(await w.get(v,{params:{key:P,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const r=n.map(e=>`
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
    `).join("");h.insertAdjacentHTML("beforeend",r),q.refresh()}function M(){h.innerHTML=""}function p(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function b(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");B.addEventListener("submit",O);$.addEventListener("click",R);let c="",i=1,u=0;async function O(n){if(n.preventDefault(),c=n.currentTarget.elements["search-text"].value.trim(),!c){a.warning({message:"Please enter a search query!",position:"topRight"});return}i=1,d(),M(),p();try{const r=await f(c,i),e=r.hits;if(u=r.totalHits,e.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e);const s=Math.ceil(u/15);i>=s?a.info({message:"We're sorry, but you've reached the end of search results."}):b()}catch{a.error({message:"Something went wrong. Please try again!"})}finally{L()}}async function R(){i+=1,d(),p();try{const n=await f(c,i);g(n.hits);const r=Math.ceil(u/15);i>=r?(d(),a.info({message:"We're sorry, but you've reached the end of search results."})):b();const e=document.querySelectorAll(".gallery-item");if(e.length===0)return;const s=e[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{a.error({message:"Something went wrong. Please try again!"})}finally{L()}}
//# sourceMappingURL=index.js.map
