import React from "react";
// — 07.05.2022 11:07 general discord
//curs 33 6 05 2022 theory

function User(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------------------

  const postAuthor={
    author:{
        avatar:"./images/cap.jpg",
        name:"Mihai",
        surname:"Popescu"
    },
    title:"The best book",
    bodyBook:"this is the best post:lorem ipsum"
  };



  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return(
    <>
<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
</article>

<article className="container" style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
<div className="card" style={{width:"18rem"}}>
            <img src={postAuthor.author.avatar} className="card-img-top" alt="bostani-alt-page1" style={{width:"100%"}}/>
            <div className="card-body">
              <h5 className="card-title">{postAuthor.title}</h5>
              <h5 className="card-title">Author : {postAuthor.author.name} {postAuthor.author.surname}</h5>
              <p className="card-text">{postAuthor.bodyBook}</p>
              <a href="https://www.pexels.com/ro-ro/cauta/person/" target="_blank" className="btn btn-primary">find out more about any person</a>
            </div>
</div>
</article>
    </>
  );

}

export default User;