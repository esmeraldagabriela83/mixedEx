console.log("hello 10 js");
//discord grupa 1 — 13.04.2022 19:22

//"DESFASURARE" filter

function myFilter(arr, callback){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        //callback TREBUIE sa intoarca true sau fals
        if(callback(arr[i],i) === true) {
          result.push(arr[i])
        }
    }
  
    return result;
  }
  
  var arrf = [1,2,3,7,8,7,9,9,0,0,4];
  
  var rezf = myFilter(arrf,function(el,i){
    return (el % 2 === 0);
  })
  
  console.log("RezF", rezf);

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  //IMPERATIV

var arr3 = [1,2,4,6,3,5,7,8,9]
//out: [2,4,6,8]

var parr = [];

for(var i = 0; i < arr3.length; i++){
  if(arr3[i] % 2 === 0) {
    parr.push(arr3[i]);
  }
}

console.log("parr:",parr);

//----

var imparArr=[];

for(let i=0 ; i<arr3.length ; i++){
   if(arr3[i] % 2 !== 0){
      imparArr.push(arr3[i]);
   }
}

console.log("imparArr is : " , imparArr);

//FUNCTIONAL (metoda filter)
//contine return
//AUXILIAR
var sample = [];
var parr2 = arr3.filter(function(el,i) {
    //return conditie
    //cand conditia e ADEVARATA se pastreaza valoarea
    sample.push(el % 2 === 0);
    return el % 2 === 0;
})

console.log("parr2:",parr2);
console.log("sample:", sample);

//--------------------------------------------------------------------------------------------------------------------

const manyNrs=[34 , 70 , 23, 600, 670, 900 , 40 , 400];

const manyNrsParagraph=document.getElementById("manyNrsParagraph");
manyNrsParagraph.innerText=manyNrs.toString();

//---
let less100Arr=[];

const filterMore100btn=document.getElementById("filterMore100btn");
filterMore100btn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the filter more 100 btn");

    this.style.color="Cyan";
    this.style.backgroundColor="DarkBlue";
    //----
    for(let i=0 ; i<manyNrs.length ; i++){
       if(manyNrs[i] >= 100){
        less100Arr.push(manyNrs[i]);
       }
    }
    //----
    manyNrsParagraph.innerText=less100Arr.toString();

});

//-----------
let more100Arr=[];

const filterLess100btn=document.getElementById("filterLess100btn");
filterLess100btn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the less filter btn");

    this.style.color="LightGoldenRodYellow";
    this.style.backgroundColor="teal";

//--------------
var newManyNrs=manyNrs.filter(callbackFuncFilter);

function callbackFuncFilter(item , index){
    //filter are intotdeauna return
    more100Arr.push(item > 100);
    console.log("more100Arr is : " , more100Arr);
    return item < 100;
}
//--------------
    manyNrsParagraph.innerText=newManyNrs.toString();
});


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let contentFood10=``;

const foodArticle10=document.getElementById("foodArticle10");
foodArticle10.innerHTML=contentFood10;
foodArticle10.style.padding="0.5em";
foodArticle10.style.margin="0.5em";


const foods10=[
    {
      index:1,
      title:"icecream",
      imgFood:"https://images.pexels.com/photos/675439/pexels-photo-675439.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum icecream",
      color:"cornflowerblue",
      content:"water"
    },
    {
      index:2,
      title:"cake",
      imgFood:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum cake",
      color:"gold",
      content:"flour"
    },
    {
      index:3,
      title:"pizza",
      imgFood:"https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pizza",
      color:"magenta",
      content:"flour"
    },
    {
      index:4,
      title:"soup",
      imgFood:"https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum soup",
      color:"green",
      content:"water"
    },
    {
      index:5,
      title:"burger",
      imgFood:"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum burger",
      color:"cyan",
      content:"flour"
    },
    {
        index:6,
        title:"juice",
        imgFood:"https://images.pexels.com/photos/8679370/pexels-photo-8679370.jpeg?auto=compress&cs=tinysrgb&w=1600",
        textFood:"lorem ipsum juice",
        color:"yellow",
        content:"water"
      },
  ];



//--------------------------------------------------------------------------------
let waterFoodsArr=[];

const filterWaterProductsBtn=document.getElementById("filterWaterProductsBtn");
filterWaterProductsBtn.style.color="blue";
filterWaterProductsBtn.style.fontWeight="bold";

//event
filterWaterProductsBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the water filter btn");

  this.style.color="green";

  //---
  for(let i=0 ; i<foods10.length ; i++){
    if(foods10[i].content === "water"){
      waterFoodsArr.push(foods10[i]);
      console.log("waterFoodsArr is : " , waterFoodsArr);
    }
  }

    //----
  for(let j=0 ; j<waterFoodsArr.length ; j++){
    //---
    contentFood10 += `
    <div class="card" style="width: 18rem; margin:0.5em">

    <img src="${waterFoodsArr[j].imgFood}" class="card-img-top" alt="water_alt">
    <div class="card-body">
      <h5 class="card-title" style="${waterFoodsArr[j].color}">${waterFoodsArr[j].title}</h5>
      <p class="card-text" style="color:${waterFoodsArr[j].color}">${waterFoodsArr[j].textFood}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    //---
  }

  foodArticle10.innerHTML=contentFood10;
})



//--------------------------------

let flourFoodsArrSample=[];

const filterFlourProductsBtn=document.getElementById("filterFlourProductsBtn");
filterFlourProductsBtn.style.fontWeight="bold";
filterFlourProductsBtn.style.color="SlateBlue";

//event
filterFlourProductsBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the show filter flour items");

  this.style.color="yellowgreen";

  //----------------------------
  const newFlourFoods10=foods10.filter(callbackFuncFilterFlour);

  function callbackFuncFilterFlour(item , index){
     //return conditie
    //can conditia e ADEVARATA se pastreaza valoarea
    flourFoodsArrSample.push(item.content === "flour");
    console.log("flourFoodsArrSample is : " , flourFoodsArrSample);
    return item.content === "flour";
  }

  console.log("newFlourFoods10 is : " , newFlourFoods10);

  //-----------------------------afisare in pagina a produselor flour

  for(let i=0 ; i<newFlourFoods10.length ; i++){
    contentFood10 +=`
    <div class="card" style="width: 18rem ; margin:0.5em">
  <img src="${newFlourFoods10[i].imgFood}" class="card-img-top" alt="flour_alt_img_item">
  <div class="card-body">
    <h5 class="card-title" style="color:${newFlourFoods10[i].color}">${newFlourFoods10[i].title}</h5>
    <p class="card-text">${newFlourFoods10[i].textFood}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  }

  foodArticle10.innerHTML=contentFood10;

})


//-----------------------------------------------------------------------------------------------------------------------

  //https://www.w3schools.com/jsref/jsref_filter.asp
  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter

  const agesJS10 = [32, 33, 16, 40];

  const demo10Age=document.getElementById("demo10Age");

  demo10Age.innerHTML=agesJS10.filter(checkAfultCallBackFunction);

  function checkAfultCallBackFunction(item , index){
    return item >= 18;
  }

  //----------------------------------------------------------------------------------------------------------------------------

  let myAges=[67 , 90 , 34 , 20 , 12 , 8 , 100 , 7];

  const paragraphAges=document.getElementById("paragraphAges");
  paragraphAges.innerText=myAges.join(" / ");


const userAge=document.getElementById("userAge");
userAge.style.backgroundColor="Wheat";

const paragraphPermission=document.getElementById("paragraphPermission");
paragraphPermission.style.border="1px solid green";
paragraphPermission.style.padding="0.5em";
paragraphPermission.style.margin="0.5em";

const showPermisionBtn=document.getElementById("showPermisionBtn");
showPermisionBtn.style.color="Teal";
showPermisionBtn.style.fontWeight="bold";

let booleanArr=[];

showPermisionBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the show permission btn");

  this.style.color="SaddleBrown";
//---adaug nr varsta introdus de user in array-ul myAges
  myAges.push(userAge.value);

  paragraphAges.innerText=myAges.join(" // ");
  //---------------

const newMyAges=myAges.filter(callbackFuncFilter);
function callbackFuncFilter(item , index){

  booleanArr.push(item >= 18)
  return item >= 18;
}

paragraphPermission.innerText="you can vote " + newMyAges.toString();

})

//https://www.w3schools.com/jsref/jsref_filter.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter2


const someRandomNrs=[80 , 5, 60 , 900, 200, 45 , 3 , 9];

const randomNrsParagraph=document.getElementById("randomNrsParagraph");
randomNrsParagraph.innerText=someRandomNrs.join(" , ");

const userNr=document.getElementById("userNr");
userNr.style.backgroundColor="PapayaWhip";

//over 100
const showBtnOver100=document.getElementById("showBtnOver100");
showBtnOver100.style.color="Peru";

//under 100
const showBtnUnder100=document.getElementById("showBtnUnder100");
showBtnUnder100.style.color="SpringGreen";

const nrChoice=document.getElementById("nrChoice");
nrChoice.style.padding="0.5em";
nrChoice.style.margin="0.5em";
nrChoice.style.border="1px solid indigo";

//---show nrs over 100

showBtnOver100.addEventListener("click" , function(event){
  event.preventDefault()
  console.log("you clicked the more than 100 btn");

  this.style.color="brown";
  //---------
  someRandomNrs.push(userNr.value);

  randomNrsParagraph.innerText=someRandomNrs.join(" # ");

  nrChoice.innerText=someRandomNrs.toString();

  //----------filter
  const newOver100someRandomNrs=someRandomNrs.filter(function(item , index){
    return item >= 100;
  })

  nrChoice.innerText=newOver100someRandomNrs.toString();

});

//---show nrs under 100

showBtnUnder100.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the less than 100 btn");

  this.style.color="forestgreen";

  //add input value to original string
  someRandomNrs.push(userNr.value);
  randomNrsParagraph.innerText=someRandomNrs.join(" @ ");

  //----
  nrChoice.innerText=someRandomNrs.toString();

  //-------filter
  const newLess100someRandomNrs=someRandomNrs.filter(function(item , index){
    return item < 100;
  })

  nrChoice.innerText=newLess100someRandomNrs.toString();

});













