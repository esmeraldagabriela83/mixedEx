console.log("hello from page 1 js");

//https://www.w3schools.com/js/js_array_methods.asp


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

const demo1fruits=document.getElementById("demo1fruits");
demo1fruits.style.padding="0.5em";
demo1fruits.style.margin="0.5em";
demo1fruits.style.border="1px solid cyan";
demo1fruits.innerText=fruits1.join(" , ");

fruits1.splice(2 , 0 , "cat" , "dog");

const demo1AfterSplice=document.getElementById("demo1AfterSplice");
demo1AfterSplice.style.padding="0.5em";
demo1AfterSplice.style.margin="0.5em";
demo1AfterSplice.style.border="1px solid DeepSkyBlue";
demo1AfterSplice.innerText=fruits1.join(" / ");

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

const demo2fruits=document.getElementById("demo2fruits");
demo2fruits.style.padding="0.5em";
demo2fruits.style.margin="0.5em";
demo2fruits.style.border="1px solid orange";

demo2fruits.innerHTML="original array : " + fruits2;

let removed = fruits2.splice(2, 2, "Lemon", "Kiwi"); 

const demo2AfterSplice=document.getElementById("demo2AfterSplice");
demo2AfterSplice.style.padding="0.5em";
demo2AfterSplice.style.margin="0.5em";
demo2AfterSplice.style.border="1px solid yellowgreen";

demo2AfterSplice.innerHTML="new array is : " + fruits2;

const demo2Removed=document.getElementById("demo2Removed");
demo2Removed.style.padding="0.5em";
demo2Removed.style.margin="0.5em";
demo2Removed.style.border="1px solid green";

demo2Removed.innerHTML="removed elements are : " + removed;

//---------------------------------------------------------------------------------------------------------------------------------------

const myArr=["zmeura" , "alune" , "nectarine" , "capsuni" , "cirese" , "banane"];

const userFruit=document.getElementById("userFruit");
userFruit.style.padding="0.5em";
userFruit.style.margin="0.5em";
userFruit.style.border="1px dashed olive";

//--------

const spliceBtn=document.getElementById("spliceBtn");
spliceBtn.style.color="tomato";
spliceBtn.style.fontWeight="bold";

//---------

const fruits3Paragraph=document.getElementById("fruits3Paragraph");
fruits3Paragraph.style.padding="0.5em";
fruits3Paragraph.style.margin="0.5em";
fruits3Paragraph.style.border="1px solid Sienna";
fruits3Paragraph.style.fontWeight="bold";

fruits3Paragraph.innerText=myArr.toString();

//------------

const fruits3ParagraphSplice=document.getElementById("fruits3ParagraphSplice");
fruits3ParagraphSplice.style.padding="0.5em";
fruits3ParagraphSplice.style.margin="0.5em";
fruits3ParagraphSplice.style.border="1px solid Salmon";

//----------

spliceBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the splice btn");
    console.log("userFruit.value is : " , userFruit.value);

    myArr.splice(3 , 0, userFruit.value);

    fruits3ParagraphSplice.innerText=myArr;
})





