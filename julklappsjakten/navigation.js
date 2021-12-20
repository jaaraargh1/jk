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

i++;
})

});

/*
*/

const items = [
{ name: "Ekologisk Julkrans" ,id: "tab-8", price: 599, description: "Julkrans prydd med snäckor, nypon, kottar, ekollon,  kastanjer. Allt är plockat från naturen och är avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-luna-lovegood-716738.jpg", lager: "lager: ja", dimensioner: "Mått: 11x11 CM", varumarke: "Varumärke: Machiavelli", material: "Material: Grön", farg: "Färg: Grön"},
{ name: "Rödglittrig Julgranskula", id: "tab-9", price: 32, description: "Extravagant röd julgranskula som glittrar. Speciallim som gör att julgranskulan inte sprider glitter i hela ditt hem. Gjord av okrossbart glas och passar därmed till hela familjen. Kulan har en diameter på 11 cm och en höjd på 11 cm. tråd att hänga upp julkulan med tillkommer ej.", img:"pexels-deena-1689577.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 11x11cm", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "Färg: röd"},
{ name:"Mjuk prydnadstomte",id: "tab-10", price: 100, description: "Kramgo tomte i rött och grönt. Mjuk och böjbar, det perfekta julpyntet för ett hem fullt med liv. Tomten bär paljetter och är sydd för hand. Storlek: 22 cm hög.", img:"pexels-daniel-reche-1556679.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 10x22 cm", varumarke: "Varumarke: Elins tomtar", material: "Material: Tyg", farg: "Färg: röd/grön"},
{ name:"Julgransdekoration handmålad häst",id: "tab-11", price: 125, description: "Julgransdekoration med motiv av en gunghäst, handmålad med ekologisk färg och täljd i gran. Storlek: 6 cm hög.", img:"pexels-markus-spiske-212311.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 6x12 CM", varumarke: "Varumarke: Ikea", material: "Material: Trä", farg: "Färg: röd"},
{ name:"Lysande Snögubbe",id: "tab-12", price: 29, description: "En solcellsdriven snögubbe som kan lysa upp din trädgård eller balkong i vinter. Även batteridriven men batterier tillkommer ej. Storlek: 35 cm hög. Finns i flera former.", img:"pexels-adriaan-greyling-760110.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 25x35", varumarke: "Varumarke: China Electrics", material: "Material: plast", farg: "Färg: Vit"},
{ name:"Tomtedräkt",id: "tab-13", price: 420, description: "Tomtedräkt i sammetsröd med vita fluffiga detaljer till barn. Tomteluva ingår - one size. Supermysig och fungerar både som pyjamas eller lekset. Finns i storlek 80 till 110.", img:"pexels-lascot-studio-1724173.jpg", lager: "lager: Nej", dimensioner: "Dimensioner: 80-110 CM", varumarke: "Varumarke: Ikea", material: "Material: Bomull", farg: "Färg: röd"},
{ name:"Ekologisk Julkrans",id: "tab-21", price: 599, description: "Julkrans prydd med snäckor, nypon, kottar, ekollon,  kastanjer. Allt är plockat från naturen och är avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-jill-wellington-247972.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 48 CM3", varumarke: "Varumarke: Ikea", material: "Material: Trä", farg: "Färg: Grön"},
{ name:"Julkrans från Skogen",id: "tab-15", price: 250, description: "Julkrans prydd med gran, eukalyptus, tall och en mycket fin röd bjällra. Ta med dig skogen hem och häng upp den på din ytterdörr. Yvigt bunden med ståltråd. Storlek 54 cm i diameter.", img:"pexels-karolina-grabowska-5942618.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 54 CM3", varumarke: "Varumarke: Eukalyptus Design", material: "Material: Eukalyptus", farg: "Färg: Grön"},
{ name:"Tradionell Julkrans",id: "tab-16", price: 200, description: "Denna traditionella julkransen är bunden av gran. Dekorerad med allt som hör julen till, kanel, kottar, enbär, små rosetter i filt och en stor röd/ grön rosett. Storlek: 51 cm i diameter. ", img:"pexels-daria-shevtsova-776935.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 51 CM3", varumarke: "Varumarke: Ikea", material: "Material: Naturliga Kvistar", farg: "Färg: Grön"},
{ name:"Modern Julkrans",id: "tab-17", price: 625, description: "Julkrans till det moderna hushållet. Vit och beige, yvigt bunden av gräs, vass, blad som målats. Dekoreras med kottar. Storlek: 62 cm i diameter.", img:"pexels-element-digital-712319.jpg  ", lager: "lager: ja", dimensioner: "Dimensioner: 62 CM3", varumarke: "Varumarke: Julkrans by Lucia", material: "Material: Naturliga kvistar", farg: "Färg: Vit"},
{ name:"Julgransdekoration handmålad häst",id: "tab-18", price: 125, description: "Julgransdekoration med motiv av en gunghäst, handmålad med ekologisk färg och täljd i gran. Storlek: 6 cm hög.", img:"pexels-markus-spiske-212311.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 6x9 CM", varumarke: "Varumarke: Ikea", material: "Material: Trä", farg: "Färg: röd"},
{ name:"Blå handmålad julgranskula",id: "tab-19", price: 212, description: "Blå estetiskt tilltalande julgranskula med handmålade vinterlandskap som motiv. Krossbart glas så placeras högt upp i julgranen. Kulans diameter är 8 cm. Tråd tillkommer för upphängning.", img:"pexels-markus-spiske-243599.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 8 CM3", varumarke: "Varumarke: Custom Christmas decorations", material: "Material: plast", farg: "Färg: Blå"},
{ name:"Ekologisk Julkrans",id: "tab-14", price: 599, description: "Julkrans prydd med snäckor, nypon, kottar, ekollon,  kastanjer. Allt är plockat från naturen och är avramlad frukt. Storlek: 48 cm i diameter.", img:"pexels-luna-lovegood-716738.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 48 CM3", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "Färg: röd"},
{ name:"Rödglittrig Julgranskula",id: "tab-20", price: 66, description: "Extravagant röd julgranskula som glittrar. Speciallim som gör att julgranskulan inte sprider glitter i hela ditt hem. Gjord av okrossbart glas och passar därmed till hela familjen.  Kulan har en diameter på 11 cm och en höjd på 11 cm. tråd att hänga upp julkulan med tillkommer ej. ", img:"pexels-deena-1689577.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 11x11 CM", varumarke: "Varumarke: Ikea", material: "Material: plast", farg: "Färg: röd"},
{ name:"Lysande Snögubbe",id: "tab-22", price: 29, description: "En solcellsdriven snögubbe som kan lysa upp din trädgård eller balkong i vinter. Även batteridriven men batterier tillkommer ej. Storlek: 35 cm hög. Finns i flera former.", img:"pexels-adriaan-greyling-760110.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 25x35 CM", varumarke: "Varumarke: China Electrics", material: "Material: Plast", farg: "Färg: Vit"},
{ name:"Julmugg",id: "tab-23", price: 99, description: "Perfekta julmuggen för varm choklad eller en stor kopp kaffe under årets mörkare och kallare tid. Vit  med motiv som är text från kända julsånger  Storlek: 12 cm i diameter och 9 cm hög.", img:"pexels-lilartsy-1721090.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 12x9 CM", varumarke: "Varumarke: The Christmas Shop", material: "Material: Porslin", farg: "Färg: Vit"},
{ name:"Mjuk prydnadstomte",id: "tab-24", price: 38, description: "Kramgo tomte i rött och grönt. Mjuk och böjbar, det perfekta julpyntet för ett hem fullt med liv. Tomten bär paljetter och är sydd för hand. Storlek: 22 cm hög.", img:"pexels-daniel-reche-1556679.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 10x22 CM", varumarke: "Varumarke: Elins tomtar", material: "Material: plast", farg: "Färg: röd/grön"},
{ name:"Snöglob med tomte",id: "tab-25", price: 21, description: "Stilren snöglob med en tomte inuti. Julpynt för den lekfulla tomtenissen, med konstgjord snö som aldrig smälter. Storlek: 14 cm hög, 7 cm bred. ", img:"pexels-streetwindy-4058719.jpg", lager: "lager: ja", dimensioner: "Dimensioner: 7x14 CM", varumarke: "Varumarke: Globethrotting by Lukas", material: "Material: Glas och Plast", farg: "Färg: röd/vit"},
{ name:"Tomtedräkt",id: "tab-26", price: 420, description: "Tomtedräkt i sammetsröd med vita fluffiga detaljer till barn. Tomteluva ingår - one size. Supermysig och fungerar både som pyjamas eller lekset. Finns i storlek 80 till 110.", img:"pexels-lascot-studio-1724173.jpg", lager: "lager: nej", dimensioner: "Dimensioner: 80-110 cm", varumarke: "Varumarke: Ikea", material: "Material: bomull", farg: "Färg: sammetsröd, vit"},
];

function getItemID(event) {


const tar = event.target;
const mor = tar.parentNode;
//console.log(mor.getAttribute("id"));
var element = mor.getAttribute("id")
let oldText = document.getElementById("tmpPris");
let oldDescription =document.getElementById("descriptionID");
let oldImg =document.getElementById("imageid");

oldDescription.innerHTML = items.find(x => x.id === element).description

//let tmp = items.find(x => x.id === element).price;
oldText.innerHTML = items.find(x => x.id === element).price
oldImg.src = items.find(x => x.id === element).img;
document.getElementById("measurements").innerHTML = items.find(x => x.id === element).dimensioner;
document.getElementById("itemTitle").innerHTML = items.find(x => x.id === element).name;

document.getElementById("brand").innerHTML = items.find(x => x.id === element).varumarke; 
document.getElementById("material").innerHTML = items.find(x => x.id === element).material; 
document.getElementById("itemColour").innerHTML = items.find(x => x.id === element).farg; 
document.getElementById("storage").innerHTML = items.find(x => x.id === element).lager; 
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


mor.querySelectorAll('[aria-selected="true"]').forEach(t => t.setAttribute("aria-selected", false));
tar.setAttribute("aria-selected", true);
document.querySelectorAll('[role="tabpanel"]').forEach(p => p.setAttribute("hidden",true));
document.querySelector("#itemPage").removeAttribute("hidden");
document.querySelector("#itemPage").style.display = "flex";
console.log(getItemID(event));   
}




