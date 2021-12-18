document.addEventListener("DOMContentLoaded", (event) => {
  
//  document.getElementById("logo").addEventListener("click", goToMainPage);

});
/*
function goToMainPage(){

document.getElementById("frontPage").style.visibility = "visible";

{
  const tar = event.target;
  const mor = tar.parentNode;
  const gp = mor.parentNode;
  document.getElementById("frontPage").style.display = "none";
console.log("test");
  mor.querySelectorAll('[aria-selected="true').forEach(t => t.setAttribute("aria-selected", false));
  tar.setAttribute("aria-selected", true);
  document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
  gp.parentNode.querySelector(`#${tar.getAttribute("aria-controls")}`).removeAttribute("hidden");
  
  if (event.target.getAttribute('aria-selected') === "false") {
    event.target.setAttribute('aria-selected','true');
    document.getElementById(event.target.getAttribute('aria-controls')).removeAttribute("hidden");      // this.remo
    
  } else {

    event.target.setAttribute('aria-selected','false');
    //event.target.nextElementSibling.setAttribute("hidden","");
    document.getElementById(event.target.getAttribute('aria-controls')).setAttribute("hidden","");      // this.remo
   
    }
}
}
*/
/*

function toggleStatus(event){
 if (event.target.getAttribute('aria-expanded') === "false") {
    event.target.setAttribute('aria-expanded','true');
    event.target.nextElementSibling.removeAttribute("hidden"); 
    // this.remo
    } else {

    event.target.setAttribute('aria-expanded','false');
    event.target.nextElementSibling.setAttribute("hidden","");

    }
  
}


function createWidgetAccordion(widget) {


  // create UL
  let ul = document.createElement('ul');
  ul.classList.add('ul');
  widget.appendChild(ul);
  let tmp = widget.querySelectorAll("h2");

  for (let i = 0; i < tmp.length; i++) {
  let headers = widget.querySelectorAll("h2");
    // create List
  let li = document.createElement('li');
  li.classList.add('li');
  ul.appendChild(li);
    //create buttons
  let newButton = document.createElement('button');
  newButton.setAttribute("aria-expanded", "false");
  newButton.addEventListener('click', toggleStatus); ///<<<LA TILL EVENTLISTERNERS HÄR ISTÄLLET. >>>
  newButton.innerHTML = headers[0].innerHTML;
  li.appendChild(newButton);
  headers[0].remove(); 

 // move the divs inside our List.
  let divMove = widget.querySelector("div");
  divMove.setAttribute("role", "region");
  divMove.setAttribute("hidden", "");
  li.appendChild(divMove)

*/

