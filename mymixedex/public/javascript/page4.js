console.log("hello from page 4 js");

const arrEls=["el1" , "el2" , "el3" , "el4" , "el5" , "el6" , "el7"];

const elsArrParagraph=document.getElementById("elsArrParagraph");
elsArrParagraph.style.padding="0.5em";
elsArrParagraph.style.margin="0.5em";
elsArrParagraph.style.border="1px solid MediumOrchid";
elsArrParagraph.innerText=arrEls.toString();

//---

const userEl=document.getElementById("userEl");
userEl.style.padding="0.5em";
userEl.style.margin="0.5em";
userEl.style.border="3px dotted green";

//--------concat()

const concatElBtn=document.getElementById("concatElBtn");
concatElBtn.style.color="magenta";
concatElBtn.style.backgroundColor="Aquamarine";

///----

concatElBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the concat btn");

    this.style.backgroundColor="BlanchedAlmond";

    console.log(userEl.value);
    const newArrEls=arrEls.concat(userEl.value);
    elsArrParagraph.innerText=newArrEls.toString();
})

//------------------push()

const pushElBtn=document.getElementById("pushElBtn");
pushElBtn.style.padding="0.5em";
pushElBtn.style.margin="0.5em";
pushElBtn.style.color="dimgray";
pushElBtn.style.backgroundColor="pink";

pushElBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the push btn");

    this.style.backgroundColor="magenta";

    console.log(userEl.value);
    arrEls.push(userEl.value);
    elsArrParagraph.innerText=arrEls.join(" / ");
})

//----------------------pop()

const popElBtn=document.getElementById("popElBtn");
popElBtn.style.padding="0.5em";
popElBtn.style.margin="0.5em";
popElBtn.style.color="Chocolate";
popElBtn.style.backgroundColor="floralwhite";


popElBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the pop btn");

    this.style.backgroundColor="LightGoldenRodYellow";

    arrEls.pop();
    // console.log(arrEls.pop());
    elsArrParagraph.innerText=arrEls.join(" @ ");
})

//----------------------------------------------shift()

const shiftBtn=document.getElementById("shiftBtn");
shiftBtn.style.color="forestgreen";
shiftBtn.style.padding="0.5em";
shiftBtn.style.margin="o.5em";

shiftBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the shift btn");

    arrEls.shift();
    //console.log(arrEls.shift());
    elsArrParagraph.innerText=arrEls.join(" // ");
})

//----------------------------------------------unshift()

const unshiftBtn=document.getElementById("unshiftBtn");
unshiftBtn.style.padding="0.5em";
unshiftBtn.style.margin="0.5em";
unshiftBtn.style.border="1px solid blue";
unshiftBtn.style.color="blue";

unshiftBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the unshift btn");

    arrEls.unshift(userEl.value);
    //console.log(arrEls.unshift(userEl.value));
    elsArrParagraph.innerText=arrEls.join(" /// ");
})

//-----------------------------------------------------------------------------------------------------sort() arr elements

const mixedArr=["gffd" , "assasa" , "ff" , "bb" , "ccb" , "pp" , "wer" , "mmm" , "zxc"];

const mixedArrParagraph=document.getElementById("mixedArrParagraph");
mixedArrParagraph.innerText=mixedArr.toString();

const sortBtn=document.getElementById("sortBtn");

sortBtn.style.color="DarkCyan";
sortBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the sort btn");

    mixedArr.sort();
    mixedArrParagraph.innerText=mixedArr.join();
})


//---------------

const reverseBtn=document.getElementById("reverseBtn");
reverseBtn.style.color="FireBrick";

reverseBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the reverse btn");

    mixedArr.reverse();
    mixedArrParagraph.innerText=mixedArr.join();
})

//----------------------------------------------------------------------------------------------sort() arr numbers

const nrArr=[78 , 89 , 567 , 345 , 23, 900 , 789 , -789 , -50];

const nrsParagraph=document.getElementById("nrsParagraph");
nrsParagraph.innerHTML=nrArr.join(" , ");

const sortAscendentNtn=document.getElementById("sortAscendentNtn");
sortAscendentNtn.style.color="green";

sortAscendentNtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the sort numbers btn");

    nrArr.sort(function(a, b){return a - b});

    nrsParagraph.innerText=nrArr.toString();
})

//----


const sortDescendentBtn=document.getElementById("sortDescendentBtn");
sortDescendentBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the sort descendent btn");

    nrArr.sort(function(a, b){return b - a});
    nrsParagraph.innerText=nrArr.toString();
})

//typeof()
console.log(typeof(nrArr));

//afiseaza ultimul element din arr // Accessing the Last Array Element
console.log(nrArr.length);
console.log("ultimul nr din arr este : " , nrArr[nrArr.length-1]);
console.log("penultimul nr din arr este : " , nrArr[nrArr.length-2]);

//----------------


