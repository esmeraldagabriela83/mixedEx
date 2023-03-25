console.log("hello page 13 js");

const pills=[
    {
      index:1,
      title:"pill1",
      imgPill:"https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pills 1",
      color:"cornflowerblue",
      price:50,
      activeSubstance:"aspirina"
    },
    {
      index:2,
      title:"pill2",
      imgPill:"https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pills 2",
      color:"gold",
      price:150,
      activeSubstance:"paracetamol"
    },
    {
      index:3,
      title:"pill3",
      imgPill:"https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pills 3",
      color:"magenta",
      price:90,
      activeSubstance:"paracetamol"
    },
    {
      index:4,
      title:"pill4",
      imgPill:"https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pills 4",
      color:"green",
      price:600,
      activeSubstance:"aspirina"
    },
    {
      index:5,
      title:"pill5",
      imgPill:"https://images.pexels.com/photos/1375811/pexels-photo-1375811.jpeg?auto=compress&cs=tinysrgb&w=1600",
      textFood:"lorem ipsum pills 5",
      color:"cyan",
      price:25,
      activeSubstance:"aspirina"
    },
    {
        index:6,
        title:"pill6",
        imgPill:"https://images.pexels.com/photos/1809341/pexels-photo-1809341.jpeg?auto=compress&cs=tinysrgb&w=1600",
        textFood:"lorem ipsum pills 6",
        color:"yellow",
        price:70,
        activeSubstance:"paracetamol"
      },
  ];

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //parcurgere afisare array

  let parcurgereAfisare=``;

  const pillsAllShow=document.getElementById("pillsAllShow");
  pillsAllShow.style.backgroundColor="PapayaWhip";
  pillsAllShow.style.padding="0.5em";
  pillsAllShow.style.margin="0.5em";
  pillsAllShow.style.color="red";
  pillsAllShow.innerHTML=parcurgereAfisare;


const showAllPillsBtn=document.getElementById("showAllPillsBtn");
showAllPillsBtn.style.color="green";

showAllPillsBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show all pills btn");

    this.style.color="MediumPurple";

    ///----

for(let i=0 ; i<pills.length ; i++){
    parcurgereAfisare +=`
    <div class="card" style="width: 18rem ; margin:0.5em">
  <img src="${pills[i].imgPill}" class="card-img-top" alt="pill_img">
  <div class="card-body">
    <h5 class="card-title" style="color:${pills[i].color}">title : ${pills[i].title}</h5>
    <h3 class="card-title" style="color:${pills[i].color}">title : ${pills[i].activeSubstance}</h3>
    <p class="card-text">${pills[i].textFood}</p>
    <a href="https://www.pexels.com/ro-ro/cauta/pills/" target="_blank" class="btn btn-primary">Go pexels</a>
  </div>
</div>
    `;
}

//---
pillsAllShow.innerHTML=parcurgereAfisare;
//---
    ///----
})


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let choiceContentPils=``;
let choicePillsArr=[];


const pillsActiveSubstancePrice=document.getElementById("pillsActiveSubstancePrice");
pillsActiveSubstancePrice.style.padding="0.5em";
pillsActiveSubstancePrice.style.margin="0.5em";
pillsActiveSubstancePrice.style.border="1px solid dimgray";
pillsActiveSubstancePrice.innerHTML=choiceContentPils;

//paracetamol
const paracetamolShowBtn=document.getElementById("paracetamolShowBtn");
paracetamolShowBtn.style.color='green';

paracetamolShowBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show paracetamol btn");

    this.style.color="cornflowerblue";
    //---
        for(let i=0 ; i<pills.length ; i++){

            if(pills[i].activeSubstance === "paracetamol"){
                choicePillsArr.push(pills[i]);
                console.log("choicePillsArr is : " , choicePillsArr);
            } 
            
        }

        //-----------------------------------------
        for(let i=0 ; i<choicePillsArr.length ; i++){
            choiceContentPils += `
            <div class="card" style="width: 18rem; margin:0.5em">
            <img src="${choicePillsArr[i].imgPill}" class="card-img-top" alt="paracetamol_img">
            <div class="card-body">
                <h5 class="card-title" style="color:${choicePillsArr[i].color}">${choicePillsArr[i].title}</h5>
                <h3 class="card-title">Active substance is ${choicePillsArr[i].activeSubstance}</h3>
                <p class="card-text">${choicePillsArr[i].textFood}</p>
                <a  href="https://www.pexels.com/ro-ro/cauta/pills/" target="_blank" class="btn btn-primary">Go pill source</a>
            </div>
            </div>
            `;
            pillsActiveSubstancePrice.innerHTML=choiceContentPils;
        }
    //---
});

//aspirina
const aspirinaShowBtn=document.getElementById("aspirinaShowBtn");
aspirinaShowBtn.style.color="magenta";

aspirinaShowBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show aspirina btn");

    this.style.color="cornflowerblue";
    //---
    const aspirinaArr=pills.filter(checkCallBackFunc);
    function checkCallBackFunc(itemPill){
      return itemPill.activeSubstance === "aspirina";
    }
    console.log("aspirinaArr is : " , aspirinaArr);
    //--------------
    for(let i=0 ; i<aspirinaArr.length ; i++){
      choiceContentPils += `
        <div class="card" style="width: 18rem; margin:0.5em">
    <img src="${aspirinaArr[i].imgPill}" class="card-img-top" alt="aspirina_img_pill">
    <div class="card-body">
      <h5 class="card-title" style="color:${aspirinaArr[i].color}">${aspirinaArr[i].title}</h5>
      <h3 class="card-title" style="color:${aspirinaArr[i].color}">${aspirinaArr[i].activeSubstance}</h3>
      <p class="card-text">${aspirinaArr[i].textFood}</p>
      <a  href="https://www.pexels.com/ro-ro/cauta/pills/" target="_blank" class="btn btn-primary">Go pill source</a>
    </div>
  </div>
      `;

      pillsActiveSubstancePrice.innerHTML=choiceContentPils;
    }

    //---
})





