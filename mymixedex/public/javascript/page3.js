console.log("hello from page3 js");

//https://www.w3schools.com/js/js_array_methods.asp

const myBoys = ["Emil", "Tobias", "Linus"];


const boysParagraph=document.getElementById("boysParagraph");
boysParagraph.style.padding="0.5em";
boysParagraph.style.margin="0.5em";
boysParagraph.style.border="1px solid HotPink";
boysParagraph.innerText=myBoys.toString();

//-----------

const myGirls = ["Cecilie", "Lone"];

const girlsParagraph=document.getElementById("girlsParagraph");
girlsParagraph.style.padding="0.5em";
girlsParagraph.style.margin="0.5em";
girlsParagraph.style.border="1px solid indigo";
girlsParagraph.innerText=myGirls.toString();

//-------------

const concatBtn=document.getElementById("concatBtn");


const childrenParagraph=document.getElementById("childrenParagraph");
childrenParagraph.padding="0.5em";
childrenParagraph.margin="0.5em";
childrenParagraph.border="1px solid tomato";


//---

concatBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the concat btn");

    childrenParagraph.innerText=myBoys.concat(myGirls);
    childrenParagraph.style.fontWeight="bold";
})

//----------------------------------------------------------------------------------------------------------------------------------------------------

const arr1 = ["Cecilie", "Lone"];
console.log("arr1 is : " , arr1);

const arr2 = ["Emil", "Tobias", "Linus"];
console.log("arr2 is : " , arr2);

const arr3 = ["Robin", "Morgan"];
console.log("arr3 is : " , arr3);

const myChildren = arr1.concat(arr2, arr3);
console.log("myChildren is : " , myChildren);


//---------------------------------------------------------------------

const myChildrenParagraph=document.getElementById("myChildrenParagraph");
myChildrenParagraph.innerText=arr3.concat(arr2 , arr1);

//----------------------------------------------------------------------

const userNameString=document.getElementById("userNameString");

//----------

const namesArr=["name1" , "name2" , "name3"];
console.log("namesArr is : " , namesArr);

const namesParagraph=document.getElementById("namesParagraph");
namesParagraph.style.padding="0.5em";
namesParagraph.style.margin="0.5em";
namesParagraph.style.border="1px solid green";
//namesParagraph.innerText=namesArr.toString();

//-----

const concatInputValueBtn=document.getElementById("concatInputValueBtn");
concatInputValueBtn.style.color="gold";
concatInputValueBtn.style.backgroundColor="indigo";

concatInputValueBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the concat name btn");
    this.style.backgroundColor="ForestGreen";

    console.log(userNameString.value);

    const newNamesArr=namesArr.concat(userNameString.value);
    console.log("newNamesArr is : " , newNamesArr);
    namesParagraph.innerText=newNamesArr.join(" / ");
})