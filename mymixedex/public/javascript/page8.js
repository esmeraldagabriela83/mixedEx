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
//parinte Cleopa
//https://www.youtube.com/watch?v=BiCLZ4OrxEE

//https://www.w3schools.com/jsref/jsref_foreach.asp






















