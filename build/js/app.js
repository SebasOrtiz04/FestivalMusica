function iniciarApp(){crearGaleria(),scrolNav(),navegacionFija(),mostrarMenuMovil()}function mostrarMenuMovil(){const e=document.querySelector(".menu-celular"),t=document.querySelector(".navegacion-principal"),n=document.querySelector("body"),o=document.createElement("P");o.onclick=function(){cerrarMenuMovil(o)},o.textContent="X",o.classList.add("btn-cerrar"),e.addEventListener("click",(function(){n.classList.add("fijar-body"),t.appendChild(o),t.classList.add("movil")}))}function cerrarMenuMovil(e=!1){const t=document.querySelector(".navegacion-principal"),n=document.querySelector("body");e&&e.remove(),t.classList.remove("movil"),n.classList.remove("fijar-body")}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrolNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value,n=document.querySelector(t);cerrarMenuMovil(),setTimeout(()=>{n.scrollIntoView({behavior:"smooth"})},200)}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("PICTURE");n.innerHTML=`\n        <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n        <img width="200" loading="lazy" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">\n        `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.querySelector("body"),n=document.createElement("PICTURE");n.innerHTML=`\n    <source srcset="build/img/grande/${e}.avif" type="image/avif">\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img width="200" loading="lazy" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `;const o=document.createElement("DIV");o.onclick=function(){o.remove(),t.classList.remove("fijar-body")},o.appendChild(n),o.classList.add("overlay");const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){o.remove(),t.classList.remove("fijar-body")},o.appendChild(i),t.appendChild(o),t.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map