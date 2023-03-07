console.log("hello page 5 js");

//https://www.w3schools.com/js/js_arrays.asp

const myBrothers=["Elena" , "Apolonia" , "Vasile" , "Costache" , "Mircea" , "Dumitru"];

const myBrothersParagraph=document.getElementById("myBrothersParagraph");
myBrothersParagraph.innerText=myBrothers.join(" , ");

const brotherInpuName=document.getElementById("brotherInpuName");
brotherInpuName.style.backgroundColor="floralwhite";

const pushBrotherBtn=document.getElementById("pushBrotherBtn");
pushBrotherBtn.style.color="OliveDrab";

//---

pushBrotherBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the push brother btn");

    //---push()
    myBrothers.push(brotherInpuName.value);
    myBrothersParagraph.innerText=myBrothers.toString();
})

//---------

//create ul li from arr

let textBrothers = "<ul>";

for(let i=0 ; i < myBrothers.length ; i++){
    textBrothers += "<li>" + myBrothers[i] + "</li>";
}

textBrothers += "</ul>";

const brothersSection=document.getElementById("brothersSection");
brothersSection.innerHTML=textBrothers;


//------------------------------------------------------------------------------------------forEach()

let textBr = "<ul>";

myBrothers.forEach(mySunction);

function mySunction(el){
    textBr += "<li>" + el + "</li>";
}

textBr += "</ul>";

//--

const brothersSectionForEach=document.getElementById("brothersSectionForEach");

brothersSectionForEach.innerHTML=textBr;