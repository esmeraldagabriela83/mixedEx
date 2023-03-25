console.log("hello page 12 js");
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif

const demoTime=document.getElementById("demoTime");

const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  demoTime.innerText=greeting;

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const userNr1=document.getElementById("userNr1");
  console.log("userNr1 is " , userNr1);


//paragraph nr 
const userNrChoice=document.getElementById("userNrChoice");

//btn

const compareNr100btn=document.getElementById("compareNr100btn");
compareNr100btn.addEventListener("click" , function(event){
event.preventDefault();
console.log("you clicked the compare btn 100");

this.style.color="green";
//----
console.log("user value nr is : " , userNr1.value);
//----
if(parseInt(userNr1.value) > 100){
    return userNrChoice.innerText="your nr is more than 100";
}else if(parseInt(userNr1.value) === 100){
    return userNrChoice.innerText=parseInt(userNr1.value);
}else{
    return userNrChoice.innerText="your nr is less than 100";
}
//----
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const nr1=document.getElementById("nr1");
nr1.style.backgroundColor="Beige";
nr1.style.width="100%";

//---

const nr2=document.getElementById("nr2");
nr2.style.backgroundColor="Cyan";
nr2.style.width="50%";

//---

const executeOperationBtn=document.getElementById("executeOperationBtn");
executeOperationBtn.style.color="blue";

const userOperationChoice=document.getElementById("userOperationChoice");
userOperationChoice.style.padding="0.5em";
userOperationChoice.style.margin="0.5em";
userOperationChoice.style.border="1px solid deeppink";


executeOperationBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked operations btn");

  this.style.color="MediumAquaMarine";
  this.style.fontWeight="bold";

//---

if(nr1.value > nr2.value){
  userOperationChoice.innerText=`sum is + ${parseInt(nr1.value) + parseInt(nr2.value)}` ;
}else if(nr1.value < nr2.value){
  userOperationChoice.innerText=`rest is + ${parseInt(nr1.value) - parseInt(nr2.value)}` ;
}else{
  userOperationChoice.innerText=`same nr is  : ${nr1.value}`;
}

//---
});













