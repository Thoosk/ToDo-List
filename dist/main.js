(()=>{"use strict";let e=[];function t(e){return""===e?1:0}class n{constructor(e){this.name=e,this.taskList=[]}addToList(e){this.taskList.add(e)}removeFromList(e){this.taskList.remove(e)}getName(){return this.name}getProjectList(e){return this.taskList}}function i(e){switch(Number(e)){case 0:return"../src/images/iconmonstr-warning-10-low.svg";case 1:return"../src/images/iconmonstr-warning-10-medium.svg";case 2:return"../src/images/iconmonstr-warning-10-high.svg"}}function l(e){document.querySelector(".task-list").setAttribute("value",e),document.querySelectorAll(".task").forEach((t=>{t.attributes.value.nodeValue.toLowerCase()==e.toLowerCase()?t.style.display="flex":t.style.display="none"}))}!function(){function s(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(()=>{l(e.textContent)}))}))}document.getElementById("add-task").addEventListener("click",(()=>{document.querySelector("#popup").style.display="block"})),function(){const n=document.querySelector("#submit-task"),l=document.querySelector("#popup");n.addEventListener("click",(()=>{const n=(s=document.querySelector("#taskName").value,o=document.querySelector("#dueDate").value,r=document.querySelector("#description").value,c=document.querySelector("#priority").value,{taskName:s||"Task",taskDueDate:o||(new Date).toDateString(),description:r||"Description",priority:c,finished:0});var s,o,r,c,a;l.style.display="none",document.querySelector("#taskName").value="",document.querySelector("#dueDate").value="",document.querySelector("#description").value="",document.querySelector("#priority").value="",function(e){const t=document.createElement("div");t.classList.add("task");const n=document.createElement("section");n.classList.add("info");const l=document.createElement("p");l.innerHTML=e.taskName;const s=document.createElement("p");s.innerHTML=e.taskDueDate;const o=document.createElement("img");let r=i(e.priority);o.setAttribute("src",r);const c=document.createElement("img");c.setAttribute("src","../src/images/iconmonstr-arrow-65.svg");const a=document.createElement("span");a.classList.add("expand"),a.appendChild(c);const d=document.createElement("img");d.setAttribute("src","../src/images/iconmonstr-x-mark-9.svg"),d.style.display="none",d.classList.add("delete");const m=document.createElement("img");m.setAttribute("src","../src/images/iconmonstr-pencil-8.svg"),m.style.display="none",m.classList.add("edit");const u=document.createElement("img");u.setAttribute("src","../src/images/iconmonstr-check-mark-13.svg"),u.style.display="none",u.classList.add("check"),n.appendChild(l),n.appendChild(s),n.appendChild(o),n.appendChild(d),n.appendChild(m),n.appendChild(u),n.appendChild(a),t.appendChild(n);const p=document.createElement("section");p.classList.add("description");const E=document.createElement("p");E.innerHTML=e.description;const v=document.createElement("section");v.classList.add("close");const g=document.createElement("img");g.setAttribute("src","../src/images/iconmonstr-arrow-66.svg"),v.appendChild(g),p.appendChild(E),p.appendChild(v),t.appendChild(p);const h=document.querySelector(".task-list");t.setAttribute("value",h.attributes.value.nodeValue),h.appendChild(t)}(n),a=n,e.push(a),function(){const e=document.querySelector(".task-list").lastElementChild.lastElementChild.previousElementSibling.lastElementChild;e.addEventListener("click",(()=>{!function(e){const t=e,n=t.parentElement.parentElement,i=t.parentElement;t.style.display="none",t.previousElementSibling.previousElementSibling.style.display="",t.previousElementSibling.previousElementSibling.previousElementSibling.style.display="",t.previousElementSibling.style.display="",n.classList.add("open"),i.nextElementSibling.classList.add("expanded")}(e)}))}(),Array.from(document.querySelectorAll(".close")).forEach((e=>{e.addEventListener("click",(()=>{!function(e){const t=e.parentElement,n=t.parentElement;t.classList.remove("expanded"),n.classList.remove("open");const i=n.firstElementChild.lastElementChild.previousSibling,l=n.firstElementChild.lastElementChild.previousSibling.previousSibling,s=n.firstElementChild.lastElementChild.previousSibling.previousSibling.previousSibling,o=n.firstElementChild.lastElementChild;i.style.display="none",s.style.display="none",l.style.display="none",o.style.display=""}(e)}))})),function(){const t=document.querySelector(".task-list"),n=t.lastElementChild;t.lastElementChild.lastElementChild.previousElementSibling.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.addEventListener("click",(()=>{!function(e){e.remove()}(n),function(t){let n=e.findIndex((e=>e.taskName===t));e.splice(n,1)}(n.firstElementChild.firstElementChild.textContent)})),console.log(e)}(),function(){const n=document.querySelector(".task-list").lastElementChild.lastElementChild.previousElementSibling.lastElementChild.previousElementSibling.previousElementSibling,l=n.parentElement.parentElement;n.addEventListener("click",(()=>{!function(n,l,s){let o=l;n.addEventListener("click",(()=>{const l=n.previousElementSibling.previousElementSibling,r=l.previousElementSibling.previousElementSibling.previousElementSibling,c=r.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling,a=c.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;n.parentElement.parentElement.remove(),function(n,i,l,s,o){let r=e.findIndex((e=>e.taskName===n));console.log(e),t(i)||(e[r].taskName=i,console.log("test2"),console.log(n,i)),t(l)||(e[r].taskDueDate=l),t(s)||(e[r].description=s),e[r].priority=o,console.log(e)}(o,a.value,c.value,r.value,l.value),function(e,n,l,s,o){const r=e.firstElementChild,c=e.lastElementChild;t(s)||(c.firstElementChild.innerHTML=s),t(n)||(r.firstElementChild.innerHTML=n),t(l)||(r.firstElementChild.nextElementSibling.innerHTML=l);let a=i(o);r.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("src",a)}(s,a.value,c.value,r.value,l.value)}))}(function(e){const t=document.getElementById("popup").cloneNode(!0),n=document.getElementById("main");return t.setAttribute("id","edit-popup"),t.style.display="",n.appendChild(t),t.lastElementChild.lastElementChild}(),l.firstChild.firstChild.innerHTML,l)}))}(),function(){const t=document.querySelector(".task-list").lastElementChild.lastElementChild.previousElementSibling.lastElementChild.previousElementSibling,n=t.parentElement.parentElement;t.addEventListener("click",(()=>{n.style.opacity=.2,function(t){let n=e.findIndex((e=>e.taskName===t));e[n].finished=1}(n.firstElementChild.firstElementChild.innerHTML)}))}()}))}(),function(){const e=document.getElementById("projects").firstElementChild.nextElementSibling;console.log(e),e.addEventListener("click",(()=>{!function(){const e=prompt("What is the name of your new project?","Projectname"),t=(new n(e),document.createElement("p"));t.innerHTML=e,t.classList.add("project"),document.getElementById("projects").appendChild(t),l(e)}(),s()}))}(),s()}()})();