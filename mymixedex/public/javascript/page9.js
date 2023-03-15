console.log("hello js 9");

//13 04 2022 gr 1 discord

///"DESFASURARE" map (ca functie);
//void myMap(Array gigi, function callback)

const arr=[4 , 5 , 7 , 10 , 12 , 70];
console.log("arr is : " , arr);

function myMap(arr,callback){
    var result = [];
    for(var i = 0; i < arr.length; i++){
      var callBackResult = callback(arr[i],i);
      result.push(callBackResult);
    }
  
    return result;
  }
  
  var arrY = [1,2,3,4,5,6,7];
  
  var resultMyMap = myMap(arr,function(el,i){
    return el % 2 === 0 ? el - 1 : el + 1;
  })
  
  console.log("resultMyMap",resultMyMap);

  //-------------------------------------------------------------------------------------------------------------------------------------------------not working

const myNumbersIn=[70 , 7 , 35 , 80 , 10 , 20 , 65];
console.log("myNumbersIn is : " , myNumbersIn);

const myNumbersParag=document.getElementById("myNumbersParag");
myNumbersParag.innerText=myNumbersIn.toString();
myNumbersParag.style.color="tomato";

const mapNrsBtn=document.getElementById("mapNrsBtn");
mapNrsBtn.style.color="magenta";

mapNrsBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the map btn");

    this.style.color="forestgreen";
//-------------------------------------------------------
    const newmyNumbersIn=myNumbersIn.map(myFuncAdd);

    function myFuncAdd(item){
      return item + 100;
    }

    console.log("newmyNumbersIn is : " , newmyNumbersIn);
    myNumbersParag.innerText=newmyNumbersIn.toString();
    myNumbersParag.style.color="green";
})

//https://www.w3schools.com/jsref/jsref_map.asp
//-------------------------------------------------------https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map2

const myNrs=[10 , 20 , 80 , 5];
const myNrsParagraph=document.getElementById("myNrsParagraph");
myNrsParagraph.innerText=myNrs.toString();

const newmyNrs = myNrs.map(myFuncMultiplyCallback);

function myFuncMultiplyCallback(item){
  return item * 1000;
}

myNrsParagraph.innerText=newmyNrs.toString();

//--------------------------------------------------------------------------------------------------------------------------
const allKindNrs=[6 , 8 , 9, 3 , 7];

const nrIfParagraph=document.getElementById("nrIfParagraph");
nrIfParagraph.innerText=allKindNrs.toString();
nrIfParagraph.style.color="orange";

const mapIfBtn=document.getElementById("mapIfBtn");
mapIfBtn.style.color="tomato";
mapIfBtn.style.fontWeight="bold";

mapIfBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the ifMap btn");

  this.style.color="green";
//---------------------
const newallKindNrs=allKindNrs.map(myIfCallbackFunc);

function myIfCallbackFunc(item){
  return item % 2 === 0 ? item + 1000 : item - 1000;
}

nrIfParagraph.innerText=newallKindNrs.toString();
nrIfParagraph.style.color="green";
})

//--------------------------------------------------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

console.log("persons is : " , persons);

const demoObjs=document.getElementById("demoObjs");
demoObjs.style.padding="0.5em";
demoObjs.style.margin="0.5em";
demoObjs.style.border="1px solid green";

demoObjs.innerHTML=persons.map(getFullNameCallbackFunction);

function getFullNameCallbackFunction(item){
  return [item.firstname,item.lastname].join(" ");
}

//----------------------------------------------------------------------------------------

const catsMy=[
  {
    index:1,
    title:"Firu",
    imgCat:"https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textCat:"lorem ipsum 1",
    color:"magenta"
  },
  {
    index:2,
    title:"Micu",
    imgCat:"https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textCat:"lorem ipsum 2",
    color:"red"
  },
  {
    index:3,
    title:"Coffee",
    imgCat:"https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textCat:"lorem ipsum 3",
    color:"green"
  },
  {
    index:4,
    title:"cute cat",
    imgCat:"https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textCat:"lorem ipsum 4",
    color:"yellowgreen"
  },
  {
    index:5,
    title:"basket cat",
    imgCat:"https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textCat:"lorem ipsum 5",
    color:"cornflowerblue"
  },
];

let contentCats=``;

catsMy.map(showCatsCallbackFunc);

function showCatsCallbackFunc(item){
  contentCats += `
  <div class="card" style="width: 18rem; margin:0.5em">
  <img src="${item.imgCat}" class="card-img-top" alt="my_cat_obj">
  <div class="card-body">
    <h5 class="card-title" style="color:${item.color}">${item.title}</h5>
    <p class="card-text">${item.textCat}</p>
    <a href="https://www.pexels.com/ro-ro/cauta/cats/"  target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;

  return contentCats;
}

//-----------------

const catSec=document.getElementById("catSec");
catSec.style.backgroundColor='Khaki';
catSec.innerHTML=contentCats;

//-----------------------------------------------------------------------------------------------------

let contentFood=``;

const foodArticle=document.getElementById("foodArticle");
foodArticle.innerHTML=contentFood;

const foods=[
  {
    index:1,
    title:"icecream",
    imgFood:"https://images.pexels.com/photos/675439/pexels-photo-675439.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textFood:"lorem ipsum icecream",
    color:"cornflowerblue"
  },
  {
    index:2,
    title:"cake",
    imgFood:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textFood:"lorem ipsum cake",
    color:"gold"
  },
  {
    index:3,
    title:"pizza",
    imgFood:"https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textFood:"lorem ipsum pizza",
    color:"magenta"
  },
  {
    index:4,
    title:"soup",
    imgFood:"https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textFood:"lorem ipsum soup",
    color:"green"
  },
  {
    index:5,
    title:"burger",
    imgFood:"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600",
    textFood:"lorem ipsum burger",
    color:"cyan"
  },
];

const showMapFoodBtn=document.getElementById("showMapFoodBtn");
console.log("showMapFoodBtn is : " , showMapFoodBtn);
showMapFoodBtn.style.color="magenta";
showMapFoodBtn.style.fontWeight="bold";

showMapFoodBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the show food map btn");

  this.style.color="DodgerBlue";

  //-------------

  foods.map(callbackFuncFood)

  function callbackFuncFood(item){

    contentFood +=`
    <div class="card" style="width: 18rem;margin:0.5em">
  <img src="${item.imgFood}" class="card-img-top" alt="food_item_alt">
  <div class="card-body">
    <h5 class="card-title" style="color:${item.color}">${item.title}</h5>
    <p class="card-text">${item.textFood}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    foodArticle.innerHTML=contentFood;
  }

  //--------------
})














