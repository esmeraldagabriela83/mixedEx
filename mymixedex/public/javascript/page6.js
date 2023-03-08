console.log("hello from js6");

const mixedArr=["fgfg" , 67 , "ssd" , 90 , 56 , 34 , 23 , "weew" , "opp"];

const mixedArrParagraph=document.getElementById("mixedArrParagraph");
mixedArrParagraph.innerText=mixedArr.toString();

const mixedArrLengthParagraph=document.getElementById("mixedArrLengthParagraph");
mixedArrLengthParagraph.innerText="Nummber of elements is : " + mixedArr.length;

//--------------------------------------------------------for loop---------------------------------------------------------------------------------------------

const userInput=document.getElementById("userInput");
userInput.style.backgroundColor="BlanchedAlmond";

const pushBtn=document.getElementById("pushBtn");
pushBtn.style.color="Brown";
pushBtn.style.fontWeight="bold";

//---
const forSectionArr=document.getElementById("forSectionArr");
forSectionArr.style.padding="0.5em";
forSectionArr.style.margin="0.5em";

//---

pushBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the push string btn");

    this.style.color="forestgreen";

    mixedArr.push(userInput.value);

    mixedArrParagraph.innerText=mixedArr.toString();

    //----show list elements
let textMixed="<ul>";
for(let i=0 ; i<mixedArr.length ; i++){
    textMixed += "<li>" + mixedArr[i] + "</li>";
}
textMixed += "</ul>";

//----insert elements in the list
forSectionArr.innerHTML=textMixed;

});

//---------------------------------------------------------forEach------------------------------------------------------------------------------------------------------

const forSectionArrForEach=document.getElementById("forSectionArrForEach");
forSectionArrForEach.style.padding="0.5em";
forSectionArrForEach.style.margin="0.5em";

//---

const pushBtnForEach=document.getElementById("pushBtnForEach");
pushBtnForEach.style.backgroundColor="yellow";

pushBtnForEach.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the push btn to show forEach list");

    this.style.backgroundColor="pink";

    mixedArr.push(userInput.value);
    mixedArrParagraph.innerText=mixedArr.join(" / ");

    //-----show ellements arr on a list
let mixedText = "<ul>";

mixedArr.forEach(showFunction);

function showFunction(el){
    mixedText += "<li>" + el + "</li>";
}

mixedText += "</ul>";

//---

forSectionArrForEach.innerHTML=mixedText;
 
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------cata ex

const foodArr=[
    {
        index:1,
        photo:"url(./images/plate.jpg)",
        text:"lorem ipsum 1"
    },
    {
        index:2,
        photo:"url(./images/pizza.jpg)",
        text:"lorem ipsum 2"
    },
    {
        index:3,
        photo:"url(./images/tort-ciocolata.jpg)",
        text:"lorem ipsum 3"
    },
    {
        index:4,
        photo:"url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        text:"lorem ipsum 4"
    },
    {
        index:5,
        photo:"url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        text:"lorem ipsum 5"
    }
];

const foodDivs=foodArr.map((el , index) =>{
    //map are intotdeauna return

let divSingle=document.createElement("div");

divSingle.style.border="1px solid red";
divSingle.style.padding="0.5em";
divSingle.style.marginTop=`0.5em`;
divSingle.style.marginBottom=`0.5em`;
divSingle.style.marginLeft=`calc(50% - 250px)`;
divSingle.style.marginRight=`calc(50% - 250px)`;
divSingle.style.width="500px";
divSingle.style.height="400px";

divSingle.style.backgroundImage=el.photo;
divSingle.style.backgroundSize="cover";
divSingle.style.backgroundPosition="center";
divSingle.style.backgroundRepeat="no-repeat";

divSingle.innerText=`Index is ${el.index} and name of dish is : ${el.text}`;

return divSingle;

})

const articleFood=document.createElement("article");
articleFood.style.padding="0.5em";
articleFood.style.margin="0.5em";
articleFood.style.border="1px solid green";

foodDivs.forEach((el , index) =>{
    //el este fiecare divSingle
    articleFood.appendChild(el);
})

const foodCataExample=document.getElementById("foodCataExample");
foodCataExample.appendChild(articleFood);

//-------------