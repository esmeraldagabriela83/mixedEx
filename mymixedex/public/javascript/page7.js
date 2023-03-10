console.log("hello from page 7 js");

//https://www.w3schools.com/jsref/jsref_length_array.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_length_array1

const fruits = ["Banana", "Orange", "Apple", "Mango" , "zmeura" , "portocale" , "linte" , "masline"];
console.log(fruits.length);

const demoFruitsInitial=document.getElementById("demoFruitsInitial");
demoFruitsInitial.innerText=fruits.toString();

fruits.length = 4;

const demoLengthFruits=document.getElementById("demoLengthFruits");
demoLengthFruits.innerText=fruits.toString();

//-----------------------------------------------------------------------------------------------------------------------------------------------

const multipleArr=["el1" , "el2" , "el3" , "el4" , "el5" , "el6" , "el7" , "el8" , "el9" , "el10"];

const multipleArrExample=document.getElementById("multipleArrExample");
multipleArrExample.innerText=multipleArr.toString();

//---

const lengthNrInput=document.getElementById("lengthNrInput");

const showNewArrAfterLength=document.getElementById("showNewArrAfterLength");
showNewArrAfterLength.style.padding="0.5em";
showNewArrAfterLength.style.margin="0.5em";
showNewArrAfterLength.style.color="orange";

const arrAfterLength=document.getElementById("arrAfterLength");

//---
showNewArrAfterLength.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the length btn");

    this.style.color="tomato";

    multipleArr.length=lengthNrInput.value;

    arrAfterLength.innerText=multipleArr.toString();
})


//------------------------------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/jsref/jsref_reverse.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reverse

const cats=["firu" , "sofy" , "puchiu" , "micuPisicu" , "coffee"];

const catsParagraph=document.getElementById("catsParagraph");
catsParagraph.innerText=cats.toString();

//-----

const reverseCatsArrBtn=document.getElementById("reverseCatsArrBtn");
reverseCatsArrBtn.style.fontWeight="bold";
reverseCatsArrBtn.style.color="indigo";


reverseCatsArrBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the reverse cats btn");

    this.style.color="orange";

    cats.reverse();
    catsParagraph.innerText=cats.toString();
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Array.from()
let text = "ABCDEFG";
const myArr = Array.from(text);

const demoFrom=document.getElementById("demoFrom");
demoFrom.innerText=myArr.join(" / ");


//-------------------------------------------------------------------------------------

const stringUser=document.getElementById("stringUser");
stringUser.style.backgroundColor="MistyRose";

const fromArrBtn=document.getElementById("fromArrBtn");
fromArrBtn.style.color="forestgreen";
fromArrBtn.style.fontWeight="bold";

const nameLettersAndLength=document.getElementById("nameLettersAndLength");
nameLettersAndLength.style.padding="0.5em";
nameLettersAndLength.style.margin="0.5em";
nameLettersAndLength.style.border="1px solid red";
//----

fromArrBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the arr from btn");

    this.style.color="lime";
    this.style.backgroundColor="SlateGray";

    console.log("btn stringUser.value is : " , stringUser.value);
    nameLettersAndLength.innerText=Array.from(stringUser.value);
})

//----//---

const userInput7page=document.getElementById("userInput7page");
userInput7page.style.backgroundColor="Beige";

const showInputValue=document.getElementById("showInputValue");
showInputValue.style.color="green";

const inputValueParagraph=document.getElementById("inputValueParagraph");

showInputValue.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show user value btn");

    this.style.backgroundColor="pink";
    console.log(userInput7page.value);
    inputValueParagraph.innerText=(Array.from(userInput7page.value)).join(" / ") + " length: " + (userInput7page.value).length;
})