document.addEventListener("DOMContentLoaded", () => {
document.getElementById("left").addEventListener("mouseover", mouseOverL);
document.getElementById("left").addEventListener("mouseout", mouseOutL);
document.getElementById("right").addEventListener("mouseover", mouseOverR);
document.getElementById("right").addEventListener("mouseout", mouseOutR);
document.getElementById("left").addEventListener("click", clickR);
document.getElementById("right").addEventListener("click", clickL);
document.getElementById("plus").addEventListener("click", increase);
document.getElementById("minus").addEventListener("click", decrease);
document.getElementById("shoppingCartButtonID").addEventListener("click", addToCart);

});
/*
let imgArray = new Array();
imgArray [0] = new Image();
imgArray [0].src = "pexels-deena-1689577.jpg"

imgArray [1] = new Image();
imgArray [1].src = "pexels-pew-nguyen-279128.jpg"

imgArray [2] = new Image();
imgArray [2].src = "pexels-pixabay-237228.jpg"
*/
function increase() {
  let val = parseInt(document.getElementById("amount").innerHTML);
  let tmp = val += 1;
  document.getElementById("amount").innerHTML = tmp;
}
function decrease() {
  if (parseInt(document.getElementById("amount").innerHTML) != 0){
  let val = parseInt(document.getElementById("amount").innerHTML);
  let tmp = val -= 1;
  document.getElementById("amount").innerHTML = tmp;
}
}

function addToCart(){
  document.getElementById("shoppingCartValue").style.display = "block";

let valueToAdd = parseInt(document.getElementById("amount").innerHTML);
let oldCartValue = parseInt(document.getElementById("shoppingCartValue").innerHTML);
document.getElementById("shoppingCartValue").innerHTML = valueToAdd + oldCartValue;


}

function mouseOverL() {
  document.getElementById("left").style.borderRightColor = "#FF0000";
  document.getElementById("left").style.cursor= 'pointer';
}

function mouseOutL() {
  document.getElementById("left").style.borderRightColor = "#808080";
}

function mouseOverR() {
  document.getElementById("right").style.borderLeftColor = "#FF0000";
  document.getElementById("right").style.cursor= 'pointer';
}

function mouseOutR() {
  document.getElementById("right").style.borderLeftColor = "#808080";
}

let i=0; 

function clickR() {
 
  i += 1;
  

  for (let tmp = 0; tmp <= 2; tmp++) {
    document.getElementsByClassName("thumbnailgallery")[tmp].style.border = "0px";
  }

  if (i === 3) {
    i = 0;
  }

  for (let ij = 0; ij <= i; ij++) {
  
if (i === ij) {
      document.getElementsByClassName("thumbnailgallery")[ij].style.border = "2px solid black";
    } 
   
    

  }
  document.getElementById("imageid").src = imgArray[i].src;   
 
}
  

function clickL() {
  i -= 1;
  for (let tmp = 0; tmp <= 2; tmp++) {
    document.getElementsByClassName("thumbnailgallery")[tmp].style.border = "0px";
  }
 
  if (i === -1) {
     i = 2;
   }
   for (let ij = 0; ij <= i; ij++) {
  items.imgArray
    if (document.getElementById("imageid").src === imgArray[ij].src) {
 
        //  let listOfImages = document.getElementsByClassName("thumbnailgallery")[ij];
          document.getElementsByClassName("thumbnailgallery")[ij].style.border = "2px solid black";
        } 
       
        
    
      }
      document.getElementById("imageid").src = imgArray[i].src;   
    

 }