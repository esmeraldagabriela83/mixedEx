console.log("abordare functionala forEach page8 js");

//https://www.w3schools.com/jsref/jsref_foreach.asp

const fruits8page = ["apple", "orange", "cherry" , "zmeura" , "masline" , "struguri"];

let text = "";

fruits8page.forEach(showFunction);

function showFunction(item , index){
text += index + " is: " + item + "<br>";
}


document.getElementById("fruitsDemo").innerHTML=text;


//-----

const arrElements=["hhhggh" , "dfdfddf" , "kkk" , "ssdfd" , "jhhhj" , "hjjhhj" , "qsdd" , "azx"];

const elementsArrParagraph=document.getElementById("elementsArrParagraph");
elementsArrParagraph.innerText=arrElements.toString();
elementsArrParagraph.style.color="tomato";
elementsArrParagraph.style.fontWeight="bold";

const inputString=document.getElementById("inputString");
inputString.style.backgroundColor="PaleTurquoise";

const showByForEachBtn=document.getElementById("showByForEachBtn");
showByForEachBtn.style.color="olive";

showByForEachBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("show all elements");

    this.style.color="magenta";

//-----

arrElements.push(inputString.value);

//-----show elements array list

let textAll="";
arrElements.forEach(showFuncAll);

function showFuncAll(item , index){
    textAll += "index is : " + index + " and item is : " + item  + "<br>";
}

elementsArrParagraph.innerHTML=textAll;
    
})


//------------------------------------------------------------------------------------------------------------------------------------------------arr with objects

const arrObj=[
    {
        title:"bicycle",
        imgObj:"./images/bicycle.jpg",
        colorObj:"magenta"
    },
    {
        title:"cake",
        imgObj:"./images/cake.jpg",
        colorObj:"yellow"
    },
    {
        title:"bicycle",
        imgObj:"./images/cat.JPG",
        colorObj:"yellowgreen"
    },
    {
        title:"fence",
        imgObj:"https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colorObj:"orange"
    },
    {
        title:"tort",
        imgObj:"https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colorObj:"cornflowerblue"
    }
];


const showObjBtn=document.getElementById("showObjBtn");
showObjBtn.style.color="skyblue";
showObjBtn.style.backgroundColor="dimgray";


const articleObj=document.getElementById("articleObj");
articleObj.style.padding="0.5em";
articleObj.style.margin="0.5em";
articleObj.style.border="1px solid green";

//---

showObjBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show objects btn");

    this.style.color="Turquoise";

    let textObj=``;

    arrObj.forEach(showObjFunc);

    function showObjFunc(item , index){
        textObj += `
        <h3 style="color:${item.colorObj} ; border:1px solid ${item.colorObj}">${item.title}</h3>
        <h4 style="color:${item.colorObj}">${index}</h4>
        <img src=${item.imgObj} alt="obj_img" style="width:300px ; border:3px solid ${item.colorObj}" />
        `;

        articleObj.innerHTML=textObj;
    }
});


//-----------------------------------------------------------------------------------------------------------------------------------


//https://www.w3schools.com/jsref/jsref_foreach.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach2

//------forEach cu callback function myFunction

let sum = 0;

const numbersS = [65, 44, 12, 4];
numbersS.forEach(myFunctions);

const sumNrsParagraph=document.getElementById("sumNrsParagraph");
sumNrsParagraph.innerText=sum;

function myFunctions(item) {
  sum += item;
  ///is working
}




//------forEach cu callback function myFunction

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}


const multiplyNrsParagraph=document.getElementById("multiplyNrsParagraph");
multiplyNrsParagraph.innerText=numbers.toString();

///-------------------------------------------------------------------------------------------------------------------------------------my try


const myNrs=[5 , 10 , 20 , 30];
const myNrsParagraph=document.getElementById("myNrsParagraph");
myNrsParagraph.style.padding="0.5em";
myNrsParagraph.style.margin="0.5em";
myNrsParagraph.style.border="1px solid deeppink";
myNrsParagraph.innerText=myNrs.toString();

//---
const yourNr=document.getElementById("yourNr");
yourNr.style.backgroundColor="Beige";

//---

const pushNrBtn=document.getElementById("pushNrBtn");
pushNrBtn.style.color="darkmagenta";
pushNrBtn.style.fontWeight="bold";

//----

const sumParagraph=document.getElementById("sumParagraph");
sumParagraph.style.padding="0.5em";
sumParagraph.style.margin="0.5em";
sumParagraph.style.border="1px solid indigo";


//---event
let mySum=0;
sumParagraph.innerText=mySum;

pushNrBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the push sum btn");

    this.style.backgroundColor="MistyRose";
    myNrs.push(yourNr.value);
    myNrsParagraph.innerText=myNrs.join(" / ");

    //--modify sum //click only once //add only one nr
    myNrs.forEach(mySumFunction);

    function mySumFunction(item){
        return mySum += parseInt(item);
    }

    sumParagraph.innerText=mySum;
})

///--------------------------------------------------------------for loop click button only once

const myNrs2=[5 , 10 , 20 , 30];
const myNrsParagraph2=document.getElementById("myNrsParagraph2");
myNrsParagraph2.style.padding="0.5em";
myNrsParagraph2.style.margin="0.5em";
myNrsParagraph2.style.border="1px solid blue";
myNrsParagraph2.innerText=myNrs2.toString();

//---

const yourNrUser=document.getElementById("yourNrUser");
yourNrUser.style.backgroundColor="Plum";

//----

const pushAddForLoop=document.getElementById("pushAddForLoop");
pushAddForLoop.style.color="PaleVioletRed";

//---
const sumNrsPara=document.getElementById("sumNrsPara");
let mySum2=0;
sumNrsPara.innerText=mySum2;

pushAddForLoop.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the add push btn");

    this.style.color="SeaGreen";

    //-----
    myNrs2.push(yourNrUser.value);
    myNrsParagraph2.innerText=myNrs2.join(" / ");
    //-----

    for(let i=0 ; i<myNrs2.length ; i++){
        mySum2 += parseInt(myNrs2[i]);
        console.log("mySum2" , mySum2);
    }

    //----
    sumNrsPara.innerText=mySum2;
})

//----------------------------------------------------------------------------------for loop----------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_foreach.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach3

const listArrNr=[8 , 6 , 12 , 7 , 5];

const allelNrList=document.querySelectorAll(".elNrList");

for(let i = 0 ; i < allelNrList.length ; i++){
    allelNrList[i].style.border="1px solid red";
    allelNrList[i].style.padding="0.5em";
    allelNrList[i].style.margin="0.5em";
    allelNrList[i].style.fontWeight="bold";
    allelNrList[i].style.color="red";
    allelNrList[i].innerText=listArrNr[i];
}


const  multiplyBtnElLIST=document.getElementById("multiplyBtnElLIST");
multiplyBtnElLIST.style.color="tomato";

multiplyBtnElLIST.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the multiply btn");

    this.style.color="yellowgreen";

    //apel functie
    listArrNr.forEach(myMultiplyFunc);

    function myMultiplyFunc(item , index , array){
        array[index] = item * 100 ;
    }

    console.log("listArrNr" , listArrNr);

    //show modification on page html
    for(let i = 0 ; i < allelNrList.length ; i++){
        allelNrList[i].style.border="1px solid green";
        allelNrList[i].style.padding="0.5em";
        allelNrList[i].style.margin="0.5em";
        allelNrList[i].style.fontWeight="bold";
        allelNrList[i].style.color="green";
        allelNrList[i].innerText=listArrNr[i];
    }

});

//-------------------------------------forEach-------------------------------------------------------------------------------------------------------

const listNunbers=[60 , 70 , 900 , 4000 , 3];

const allliNr=document.querySelectorAll(".liNr");

//apel functie
allliNr.forEach(styleListFunc);

function styleListFunc(item , index , array){
   array[index].style.color="tomato";
   array[index].style.border="1px solid forestgreen";
   array[index].innerText=listNunbers[index];
}


const divisionBtn=document.getElementById("divisionBtn");
divisionBtn.style.color="forestgreen";
divisionBtn.style.fontWeight="bold";

divisionBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the division btn");

    this.style.color="blue";

    //----

    //-----divide nrs arr cu functia callback myDivideFunc
    allliNr.forEach(myDivideFunc);
    function myDivideFunc(item , index , array){
        array[index].innerText=listNunbers[index] / 10;
        array[index].style.color="yellowgreen";
    }

    console.log("listNunbers is : " , listNunbers);

});


//-----------------------------------------------------------------------------------------------------------------------------------grupa 13 04 2022

///"DESFASURARE" forEach (ca functie);
//void myForeach(Array gigi, function callback)
function myForeach(arr,callback) {
    for(var i = 0; i < arr.length; i++){
      callback(arr[i],i);
    }
}

var arrX = [2,3,1,6,7,8,9];
myForeach(arrX,function(el,idx){
  console.log("EL : ",el, " idx: ",idx);
})


//---------------------------------------------------------------------------------------------------------------------------------------

const arrObj2=[
    {
        title:"capsuni",
        imgObj:"./images/capsuni.jpg",
        colorObj:"red"
    },
    {
        title:"spring",
        imgObj:"./images/myPhoto.JPG",
        colorObj:"yellow"
    },
    {
        title:"bicycle",
        imgObj:"./images/cat.JPG",
        colorObj:"yellowgreen"
    },
    {
        title:"FLOWER",
        imgObj:"https://images.pexels.com/photos/9374423/pexels-photo-9374423.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        colorObj:"orange"
    },
    {
        title:"COFFEE",
        imgObj:"https://images.pexels.com/photos/13610934/pexels-photo-13610934.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        colorObj:"cornflowerblue"
    }
];

const objSec=document.getElementById("objSec");
objSec.style.backgroundColor="PapayaWhip";

let textObjContent=``;

arrObj2.forEach(showContectObjs);

function showContectObjs(item , index){
    textObjContent += `
    <div class="card" style="width: 18rem; margin:0.5em">
        <img src="${item.imgObj}" class="card-img-top" alt="obj_img_fromArr">
        <div class="card-body">
            <h5 class="card-title" style="color:${item.colorObj}">${item.title}</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
     </div>
    `;
}

objSec.innerHTML=textObjContent;

