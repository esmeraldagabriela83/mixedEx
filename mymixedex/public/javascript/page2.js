console.log("hello from page 2 js");

const fruitsJSpage2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("fruitsJSpage2 is : " , fruitsJSpage2);

const demoFuitsPage2=document.getElementById("demoFuitsPage2");
demoFuitsPage2.style.padding="0.5em";
demoFuitsPage2.style.margin="0.5em";
demoFuitsPage2.style.border="1px solid CornflowerBlue";
demoFuitsPage2.innerText=fruitsJSpage2.toString();

const citrus = fruitsJSpage2.slice(1);
console.log("citrus is : " , citrus);

const demoFuitsPage2afterSlice=document.getElementById("demoFuitsPage2afterSlice");
demoFuitsPage2afterSlice.style.padding="0.5em";
demoFuitsPage2afterSlice.style.margin="0.5em";
demoFuitsPage2afterSlice.style.border="1px solid olive";
demoFuitsPage2afterSlice.style.fontWeight="bold";
demoFuitsPage2afterSlice.innerText=citrus.toString();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const arrElements=["el1" , "el2" , "el3" , "el4" , "el5" , "el6" , "el7" , "el8"];

const arrEllementsParagraph=document.getElementById("arrEllementsParagraph");
arrEllementsParagraph.style.padding="0.5em";
arrEllementsParagraph.style.margin="0.5em";
arrEllementsParagraph.style.border="1px solid magenta";
arrEllementsParagraph.innerText=arrElements.toString();

const sliceEl3Btn=document.getElementById("sliceEl3Btn");
sliceEl3Btn.style.color="olive";
sliceEl3Btn.style.fontWeight="bold";

const arrEllementsParagraphAfterSlice=document.getElementById("arrEllementsParagraphAfterSlice");
arrEllementsParagraphAfterSlice.style.padding="0.5em";
arrEllementsParagraphAfterSlice.style.margin="0.5em";
arrEllementsParagraphAfterSlice.style.border="1px solid DodgerBlue";

//----
sliceEl3Btn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the slice btn");

const newSliceArrElements=arrElements.slice(3);

arrEllementsParagraphAfterSlice.innerText=newSliceArrElements.toString();

})