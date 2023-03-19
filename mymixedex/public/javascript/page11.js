console.log("hello page 11 js");

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort

const fruits = ["cirese" , "zmeura" , "capsuni" , "smochine" , "Banana", "Orange", "Apple", "Mango"];

const demo1sort=document.getElementById("demo1sort");
demo1sort.innerText=fruits.toString();

fruits.sort();

const demo2sort=document.getElementById("demo2sort");
demo2sort.innerText=fruits.toString();

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_reverse

fruits.reverse();

const demoReverse=document.getElementById("demoReverse");
demoReverse.innerText=fruits.toString();


//--------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_alpha


const points = [40, 100, 1, 5, 25, 10];
const demoPoints=document.getElementById("demoPoints");
demoPoints.innerText=points.toString();


function myFunction1(){
    points.sort();
    demoPoints.innerText=points.toString();
}


//------------

function myFunction2(){
        points.sort(function(a , b){
            return a - b;
        })

        demoPoints.innerText=points.toString();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/js/js_array_sort.asp

const pointsAsc = [40, 100, 1, 5, 25, 10];

const pointsAscParagraph=document.getElementById("pointsAscParagraph");
pointsAscParagraph.innerText=pointsAsc.toString();

const sortAscBtn=document.getElementById("sortAscBtn");
sortAscBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the sort asc btn");
    //---
    this.style.color="darkmagenta";
    //---
    pointsAsc.sort(function(a , b){
        return a - b;
    });
    //---
    pointsAscParagraph.innerText=pointsAsc.toString();
});


const sortDescBtn=document.getElementById("sortDescBtn");
sortDescBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the desc btn");
//---
this.style.color="olive";

//---
pointsAsc.sort(function(a , b){
    return b - a;
})
//---
pointsAscParagraph.innerText=pointsAsc.toString();
});

//grupa 1 // — 15.04.2022 19:51 discord


const arr = [2,7,1,3,9,0,12];
console.log("arr before sort is : " , arr);

/**
  Ia elementele 2 cate 2
  calculeaza ce vrem noi
  daca intorc valoare mai mare decat 0
  inseamna ca elementele trebuie interschimbate
*/
//METODA SORT MODIFICA ARRAY-ul PE CARE E APLICATA

arr.sort(function(a , b){
    return b -a;
})

console.log("arr after sort is : " , arr);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

const strs = ["abc","a","bc","accc","bc"];
console.log("strs before sort is : " , strs);
//ordonare dupa lungime
strs.sort((a,b) => a.length - b.length);
console.log("strs after sort is : " , strs);




















