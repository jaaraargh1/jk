
/*
CSS shopping Cart sidan

*/
document.addEventListener("DOMContentLoaded", (event) => {
let i = 7;  
document.querySelectorAll(".categoryType").forEach(widget => {

widget.addEventListener("click", switchTab);
})

document.querySelectorAll(".imagePostMain").forEach(widget => {


widget.setAttribute("id", "tab-"+(i+1)+"");
widget.setAttribute("role", "tab");
widget.setAttribute("aria-selected", "false");
widget.setAttribute("aria-controls", "itemPage");  
widget.addEventListener("click", viewItem);

//widget.addEventListener("click", getItemID);

i++;
})

document.getElementById("left").addEventListener("mouseover", mouseOverL);
document.getElementById("left").addEventListener("mouseout", mouseOutL);
document.getElementById("right").addEventListener("mouseover", mouseOverR);
document.getElementById("right").addEventListener("mouseout", mouseOutR);
document.getElementById("left").addEventListener("click", clickR);
document.getElementById("right").addEventListener("click", clickL);
document.getElementById("plus").addEventListener("click", increase);
document.getElementById("minus").addEventListener("click", decrease);
document.getElementById("shoppingCartButtonID").addEventListener("click", addToCart);
document.getElementById("continueShopping").addEventListener("click", continueShopping);
document.getElementById("tab-1").addEventListener("mouseover", hooverHeader);
document.getElementById("tab-2").addEventListener("mouseover", hooverHeader);
document.getElementById("tab-3").addEventListener("mouseover", hooverHeader);
document.getElementById("tab-4").addEventListener("mouseover", hooverHeader);
document.getElementById("tab-1").addEventListener("mouseout", hooverHeaderLeave);
document.getElementById("tab-2").addEventListener("mouseout", hooverHeaderLeave);
document.getElementById("tab-3").addEventListener("mouseout", hooverHeaderLeave);
document.getElementById("tab-4").addEventListener("mouseout", hooverHeaderLeave);
});

/*
*/

const items = [
{ name: "Ekologisk Julkrans" ,id: "tab-8", price: 599, description: "Julkrans prydd med sn??ckor, nypon, kottar, ekollon,  kastanjer. Allt ??r plockat fr??n naturen och ??r avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-luna-lovegood-716738.jpg", lager: "lager: ja", dimensioner: "M??tt: 11x11 CM", varumarke: "Varum??rke: Machiavelli", material: "Material: Gr??n", farg: "F??rg: Gr??n",  imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name: "R??dglittrig Julgranskula", id: "tab-9", price: 32, description: "Extravagant r??d julgranskula som glittrar. Speciallim som g??r att julgranskulan inte sprider glitter i hela ditt hem. Gjord av okrossbart glas och passar d??rmed till hela familjen. Kulan har en diameter p?? 11 cm och en h??jd p?? 11 cm. tr??d att h??nga upp julkulan med tillkommer ej.", img:"pexels-deena-1689577.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 11x11cm", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "F??rg: r??d", imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Mjuk prydnadstomte",id: "tab-10", price: 100, description: "Kramgo tomte i r??tt och gr??nt. Mjuk och b??jbar, det perfekta julpyntet f??r ett hem fullt med liv. Tomten b??r paljetter och ??r sydd f??r hand. Storlek: 22 cm h??g.", img:"pexels-daniel-reche-1556679.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 10x22 cm", varumarke: "Varumarke: Elins tomtar", material: "Material: Tyg", farg: "F??rg: r??d/gr??n",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]} ,
{ name:"Julgransdekoration handm??lad h??st",id: "tab-11", price: 125, description: "Julgransdekoration med motiv av en gungh??st, handm??lad med ekologisk f??rg och t??ljd i gran. Storlek: 6 cm h??g.", img:"pexels-markus-spiske-212311.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 6x12 CM", varumarke: "Varumarke: Ikea", material: "Material: Tr??", farg: "F??rg: r??d",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Lysande Sn??gubbe",id: "tab-12", price: 29, description: "En solcellsdriven sn??gubbe som kan lysa upp din tr??dg??rd eller balkong i vinter. ??ven batteridriven men batterier tillkommer ej. Storlek: 35 cm h??g. Finns i flera former.", img:"pexels-adriaan-greyling-760110.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 25x35", varumarke: "Varumarke: China Electrics", material: "Material: plast", farg: "F??rg: Vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Tomtedr??kt",id: "tab-13", price: 420, description: "Tomtedr??kt i sammetsr??d med vita fluffiga detaljer till barn. Tomteluva ing??r - one size. Supermysig och fungerar b??de som pyjamas eller lekset. ??ven tomtedr??kten ??r one-size, passar alla.", img:"pexels-lascot-studio-1724173.jpg", lager: "lager: ja", dimensioner: "Storlek: strech slimfit", varumarke: "Varumarke: Ikea", material: "Material: Bomull", farg: "F??rg: r??d",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Ekologisk Julkrans",id: "tab-21", price: 599, description: "Julkrans prydd med sn??ckor, nypon, kottar, ekollon,  kastanjer. Allt ??r plockat fr??n naturen och ??r avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-jill-wellington-247972.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 48 CM3", varumarke: "Varumarke: Ikea", material: "Material: Tr??", farg: "F??rg: Gr??n",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Julkrans fr??n Skogen",id: "tab-15", price: 250, description: "Julkrans prydd med gran, eukalyptus, tall och en mycket fin r??d bj??llra. Ta med dig skogen hem och h??ng upp den p?? din ytterd??rr. Yvigt bunden med st??ltr??d. Storlek 54 cm i diameter.", img:"pexels-karolina-grabowska-5942618.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 54 CM3", varumarke: "Varumarke: Eukalyptus Design", material: "Material: Eukalyptus", farg: "F??rg: Gr??n",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Tradionell Julkrans",id: "tab-16", price: 200, description: "Denna traditionella julkransen ??r bunden av gran. Dekorerad med allt som h??r julen till, kanel, kottar, enb??r, sm?? rosetter i filt och en stor r??d/ gr??n rosett. Storlek: 51 cm i diameter. ", img:"pexels-daria-shevtsova-776935.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 51 CM3", varumarke: "Varumarke: Ikea", material: "Material: Naturliga Kvistar", farg: "F??rg: Gr??n",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Modern Julkrans",id: "tab-17", price: 625, description: "Julkrans till det moderna hush??llet. Vit och beige, yvigt bunden av gr??s, vass, blad som m??lats. Dekoreras med kottar. Storlek: 62 cm i diameter.", img:"pexels-element-digital-712319.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 62 CM3", varumarke: "Varumarke: Julkrans by Lucia", material: "Material: Naturliga kvistar", farg: "F??rg: Vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Julgransdekoration handm??lad h??st",id: "tab-18", price: 125, description: "Julgransdekoration med motiv av en gungh??st, handm??lad med ekologisk f??rg och t??ljd i gran. Storlek: 6 cm h??g.", img:"pexels-markus-spiske-212311.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 6x9 CM", varumarke: "Varumarke: Ikea", material: "Material: Tr??", farg: "F??rg: r??d",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Bl?? handm??lad julgranskula",id: "tab-19", price: 212, description: "Bl?? estetiskt tilltalande julgranskula med handm??lade vinterlandskap som motiv. Krossbart glas s?? placeras h??gt upp i julgranen. Kulans diameter ??r 8 cm. Tr??d tillkommer f??r upph??ngning.", img:"pexels-markus-spiske-243599.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 8 CM3", varumarke: "Varumarke: Custom Christmas decorations", material: "Material: plast", farg: "F??rg: Bl??",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Ekologisk Julkrans",id: "tab-14", price: 599, description: "Julkrans prydd med sn??ckor, nypon, kottar, ekollon,  kastanjer. Allt ??r plockat fr??n naturen och ??r avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-luna-lovegood-716738.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 48 CM3", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "F??rg: r??d",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"R??dglittrig Julgranskula",id: "tab-20", price: 66, description: "Extravagant r??d julgranskula som glittrar. Speciallim som g??r att julgranskulan inte sprider glitter i hela ditt hem. Gjord av okrossbart glas och passar d??rmed till hela familjen.  Kulan har en diameter p?? 11 cm och en h??jd p?? 11 cm. tr??d att h??nga upp julkulan med tillkommer ej. ", img:"pexels-deena-1689577.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 11x11 CM", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "F??rg: r??d",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Lysande Sn??gubbe",id: "tab-22", price: 29, description: "En solcellsdriven sn??gubbe som kan lysa upp din tr??dg??rd eller balkong i vinter. ??ven batteridriven men batterier tillkommer ej. Storlek: 35 cm h??g. Finns i flera former.", img:"pexels-adriaan-greyling-760110.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 25x35 CM", varumarke: "Varumarke: China Electrics", material: "Material: Plast", farg: "F??rg: Vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Julmugg",id: "tab-23", price: 99, description: "Perfekta julmuggen f??r varm choklad eller en stor kopp kaffe under ??rets m??rkare och kallare tid. Vit  med motiv som ??r text fr??n k??nda juls??nger  Storlek: 12 cm i diameter och 9 cm h??g.", img:"pexels-lilartsy-1721090.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 12x9 CM", varumarke: "Varumarke: The Christmas Shop", material: "Material: Porslin", farg: "F??rg: Vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Mjuk prydnadstomte",id: "tab-24", price: 38, description: "Kramgo tomte i r??tt och gr??nt. Mjuk och b??jbar, det perfekta julpyntet f??r ett hem fullt med liv. Tomten b??r paljetter och ??r sydd f??r hand. Storlek: 22 cm h??g.", img:"pexels-daniel-reche-1556679.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 10x22 CM", varumarke: "Varumarke: Elins tomtar", material: "Material: plast", farg: "F??rg: r??d/gr??n",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Sn??glob med tomte",id: "tab-25", price: 21, description: "Stilren sn??glob med en tomte inuti. Julpynt f??r den lekfulla tomtenissen, med konstgjord sn?? som aldrig sm??lter. Storlek: 14 cm h??g, 7 cm bred. ", img:"pexels-streetwindy-4058719.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 7x14 CM", varumarke: "Varumarke: Globethrotting by Lukas", material: "Material: Glas och Plast", farg: "F??rg: r??d/vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
{ name:"Tomtedr??kt",id: "tab-26", price: 420, description: "Tomtedr??kt i sammetsr??d med vita fluffiga detaljer till barn. Tomteluva ing??r - one size. Supermysig och fungerar b??de som pyjamas eller lekset. Finns i storlek 80 till 110.", img:"pexels-lascot-studio-1724173.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 80-110 cm", varumarke: "Varumarke: Ikea", material: "Material: bomull", farg: "F??rg: sammetsr??d, vit",imgA: ["pexels-luna-lovegood-716738.jpg","pexels-karolina-grabowska-5942618.jpg", "pexels-element-digital-712319.jpg"]},
];

let LastObjectVisisted;
let imgArray = new Array();
imgArray [0] = new Image();
imgArray [1] = new Image();
imgArray [2] = new Image();

function hooverHeader(event){
event.target.style.borderBottom = "solid 2px #000000"; 

}

function hooverHeaderLeave(event){
    event.target.style.borderBottom = "none"; 
    
    }
function updateCartWithNewItem (valueToAdd){
    let element = LastObjectVisisted;
}
// increase function for + at item page
function increase() {
  let val = parseInt(document.getElementById("amount").innerHTML);
  let tmp = val += 1;
  document.getElementById("amount").innerHTML = tmp;
}

// increase function for + - at item page
function decrease() {
  if (parseInt(document.getElementById("amount").innerHTML) != 0){
  let val = parseInt(document.getElementById("amount").innerHTML);
  let tmp = val -= 1;
  document.getElementById("amount").innerHTML = tmp;
}
}
// add items to cart.
function addToCart(){
let element = LastObjectVisisted;
let element2 = document.getElementById("itemTitle").innerHTML;
//tmpName = document.getElementsByClassName.integersText.innerHTML; 
console.log(document.getElementById("itemTitle").innerHTML);
var addedCartItems = document.getElementsByClassName("integersText");

for (let indexX = 0; indexX < addedCartItems.length; indexX++){

if (addedCartItems[indexX].innerHTML === element2){
let tmp = addedCartItems[indexX].parentElement.nextElementSibling.firstChild.nextSibling;
let tmp2 = parseInt(document.getElementById("amount").innerHTML) + parseInt(tmp.innerHTML);

// quantity 
addedCartItems[indexX].parentElement.nextElementSibling.firstChild.nextSibling.innerHTML = tmp2;
//price
//addedCartItems[indexX].parentElement.nextElementSibling.firstChild.innerHTML = tmp2;
//part sum
addedCartItems[indexX].parentElement.nextElementSibling.firstChild.nextSibling.nextSibling.innerHTML =
parseInt(addedCartItems[indexX].parentElement.nextElementSibling.firstChild.innerHTML) * 
parseInt(addedCartItems[indexX].parentElement.nextElementSibling.firstChild.nextSibling.innerHTML)

let tmpPartSum = document.getElementsByClassName("partSum");
let totalValue = 0;
let valueToAdd = parseInt(document.getElementById("amount").innerHTML);

let oldCartValue = parseInt(document.getElementById("shoppingCartValue").innerHTML);
document.getElementById("shoppingCartValue").innerHTML = valueToAdd + oldCartValue;

for (var i = 0; i < tmpPartSum.length; i++) {
    totalValue += Math.abs(parseInt(document.getElementsByClassName("partSum")[i].innerHTML));

document.getElementById("totalSum").innerHTML = totalValue;
}
return;

}}

document.getElementById("shoppingCartValue").style.display = "block";

let valueToAdd = parseInt(document.getElementById("amount").innerHTML);
let oldCartValue = parseInt(document.getElementById("shoppingCartValue").innerHTML);
document.getElementById("shoppingCartValue").innerHTML = valueToAdd + oldCartValue;
updateCartWithNewItem(valueToAdd);

let newDiv = document.createElement('div');
newDiv.setAttribute("class", "wrapperItemInfo");
let newImg = document.createElement('img');
newImg.src = items.find(x => x.id === element).img;
newImg.setAttribute("class", "shoppingCartPicture");
newDiv.appendChild(newImg);
document.getElementById("posts").appendChild(newDiv);
let newWrapperText = document.createElement('div');
newWrapperText.setAttribute("class", "wrapTabortIntText");
newDiv.appendChild(newWrapperText);

let integersText = document.createElement('div');
integersText.setAttribute("class","integersText");
integersText.innerHTML = items.find(x => x.id === element).name;
newWrapperText.appendChild(integersText);
let taBort = document.createElement('div');
taBort.setAttribute("class", "taBort");
taBort.innerHTML = "Ta bort";
taBort.addEventListener("click", removeItem);
newWrapperText.appendChild(taBort);

/*                       */
let itemInfoWrapper = document.createElement('div');
itemInfoWrapper.setAttribute("class","intWrapper");
newDiv.appendChild(itemInfoWrapper);

let pris = document.createElement('div');
pris.setAttribute("class", "integersText");
pris.innerHTML = items.find(x => x.id === element).price;
itemInfoWrapper.appendChild(pris);
    //document.getElementById("kvantitetID").innerHTML = valueToAdd;


let kvantitet = document.createElement('div');
kvantitet.setAttribute("class", "integersText kvant");
kvantitet.innerHTML =  valueToAdd;
itemInfoWrapper.appendChild(kvantitet);


let delsumma = document.createElement('div');
delsumma.setAttribute("class", "integersText partSum");
delsumma.innerHTML = (parseInt(document.getElementById("tmpPris").innerHTML) * parseInt(document.getElementById("amount").innerHTML));
itemInfoWrapper.appendChild(delsumma);

let line = document.createElement('div');
line.setAttribute("class","lineAfterItem");
document.getElementById("posts").appendChild(line);

/* totalSum */
/*partSum */
let totalValue = 0;
tmpPartSum = document.getElementsByClassName("partSum");
for (var ij = 0; i < tmpPartSum.length; i++) {
    totalValue += parseInt(document.getElementsByClassName("partSum")[i].innerHTML);
}
document.getElementById("totalSum").innerHTML = totalValue;
}

function removeItem(event){
let tmp = event.target.closest(".wrapperItemInfo");
let parent = event.target.parentNode;
console.log(parent);
let tmp2 = parent.nextElementSibling.querySelector('.kvant').innerHTML;
let tmp3 = document.getElementById("shoppingCartValue").innerHTML;
document.getElementById("shoppingCartValue").innerHTML = parseInt(tmp3) -parseInt(tmp2);
tmp.nextElementSibling.remove();

//kvant
tmp.remove();

if(document.getElementById("shoppingCartValue").innerHTML ==="0"){
document.getElementById("shoppingCartValue").style.display = "none";
}


let totalValue = 0;
let tmpPartSum = document.getElementsByClassName("partSum");
for (var i = 0; i < tmpPartSum.length; i++) {
    totalValue += Math.abs(parseInt(document.getElementsByClassName("partSum")[i].innerHTML));
}
document.getElementById("totalSum").innerHTML = totalValue;
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
      console.log("test");
  console.log(ij);
    //  let listOfImages = document.getElementsByClassName("thumbnailgallery")[ij];
      document.getElementsByClassName("thumbnailgallery")[ij].style.border = "2px solid black";
    } 
   
    

  }
  console.log(document.getElementById("imageid").price);
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
  
    if (i === ij) {
          console.log("test");
      console.log(ij);
        //  let listOfImages = document.getElementsByClassName("thumbnailgallery")[ij];
          document.getElementsByClassName("thumbnailgallery")[ij].style.border = "2px solid black";
        } 
       
        
    
      }
      document.getElementById("imageid").src = imgArray[i].src;   
    

 }

function setItemPage(event) {
//event.target.closest(".imagePostMain").id

//const tar = event.target;
//const mor = tar.parentNode;
//console.log(mor.getAttribute("id"));
var element = event.target.closest(".imagePostMain").id
LastObjectVisisted = event.target.closest(".imagePostMain").id
lastObjectName = document.getElementById.innerHTML;
console.log(LastObjectVisisted);
let oldText = document.getElementById("tmpPris");
let oldDescription =document.getElementById("descriptionID");
let oldImg =document.getElementById("imageid");

oldDescription.innerHTML = items.find(x => x.id === element).description;
oldText.innerHTML = items.find(x => x.id === element).price;
oldImg.src = items.find(x => x.id === element).img;
document.getElementById("measurements").innerHTML = items.find(x => x.id === element).dimensioner;
document.getElementById("itemTitle").innerHTML = items.find(x => x.id === element).name;
document.getElementById("brand").innerHTML = items.find(x => x.id === element).varumarke; 
document.getElementById("material").innerHTML = items.find(x => x.id === element).material; 
document.getElementById("itemColour").innerHTML = items.find(x => x.id === element).farg; 
document.getElementById("storage").innerHTML = items.find(x => x.id === element).lager; 

let tmpString = items.find(x => x.id === element).imgA[0];
imgArray[2].src = items.find(x => x.id === element).imgA[0];
document.getElementById("thumbnail1").style.backgroundImage = "url('"+ tmpString + "')"; 
tmpString = items.find(x => x.id === element).imgA[1];
imgArray[1].src = items.find(x => x.id === element).imgA[1];
document.getElementById("thumbnail2").style.backgroundImage = "url('"+ tmpString + "')"; 
tmpString = items.find(x => x.id === element).img;
imgArray[0].src = items.find(x => x.id === element).img;
document.getElementById("thumbnail3").style.backgroundImage = "url('"+ tmpString + "')"; 



}

function switchTab(event){
const tar = event.target;
const mor = tar.parentNode;
const gp = mor.parentNode;

mor.querySelectorAll('[aria-selected="true').forEach(t => t.setAttribute("aria-selected", false));
tar.setAttribute("aria-selected", true);
document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
gp.parentNode.querySelector(`#${tar.getAttribute("aria-controls")}`).removeAttribute("hidden");
document.querySelector("#itemPage").style.display = "none";
}

function viewItem(event){
const tar = event.target;
const mor = tar.parentNode;
const gp = mor.parentNode;
//console.log(event.target.closest(".imagePostMain"));
setItemPage(event);

mor.querySelectorAll('[aria-selected="true"]').forEach(t => t.setAttribute("aria-selected", false));
tar.setAttribute("aria-selected", true);
document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
document.querySelector("#itemPage").removeAttribute("hidden");
document.querySelector("#itemPage").style.display = "flex";
//console.log(getItemID(event));   
}

function continueShopping(event){
    const tar = event.target;
    const mor = tar.parentNode;
    const gp = mor.parentNode;
    //console.log(event.target.closest(".imagePostMain"));
    
    mor.querySelectorAll('[aria-selected="true"]').forEach(t => t.setAttribute("aria-selected", false));
    tar.setAttribute("aria-selected", true);
    document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
    document.querySelector("#frontPage").removeAttribute("hidden");
    //document.querySelector("#itemPage").style.display = "flex";
    //console.log(getItemID(event));   
    }


/*

---------------
---------------
---------------
---------------
---------------

*/