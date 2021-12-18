document.addEventListener("DOMContentLoaded", (event) => {
  
  document.querySelectorAll(".categoryType").forEach(widget => {
    
    widget.addEventListener("click", switchTab);
 })

});




  function switchTab(event){
    const tar = event.target;
    const mor = tar.parentNode;
    const gp = mor.parentNode;
    
console.log("test");
    mor.querySelectorAll('[aria-selected="true').forEach(t => t.setAttribute("aria-selected", false));
    tar.setAttribute("aria-selected", true);
    document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
    gp.parentNode.querySelector(`#${tar.getAttribute("aria-controls")}`).removeAttribute("hidden");
    /*
    if (event.target.getAttribute('aria-selected') === "false") {
      event.target.setAttribute('aria-selected','true');
      document.getElementById(event.target.getAttribute('aria-controls')).removeAttribute("hidden");      // this.remo
      
    } else {
  
      event.target.setAttribute('aria-selected','false');
      //event.target.nextElementSibling.setAttribute("hidden","");
      document.getElementById(event.target.getAttribute('aria-controls')).setAttribute("hidden","");      // this.remo
     
      }*/
  }





