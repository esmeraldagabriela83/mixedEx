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

//https://www.youtube.com/watch?v=YMSDsCOiW0M