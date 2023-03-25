import User from "./js/User.js";
import './App.css';

function App2() {
  return (

    <>

<div className="container">
<ul style={{padding:"0.5em" , margin:"0.5em" , border:"1px solid cyan"}}>
<li><a href="page3.html">page3.html</a></li>
<li><a href="page4.html">page4.html</a></li>
<li><a href="page5.html">page5.html</a></li>
<li><a href="page6.html">page6.html</a></li>
<li><a href="page7.html">page7.html</a></li>
<li><a href="page8.html">page8.html</a></li>
<li><a href="page9.html">page9.html</a></li>
<li><a href="page10.html">page10.html</a></li>
</ul>
</div>



<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="page11.html">11</a></li>
    <li className="page-item"><a className="page-link" href="page12.html">12</a></li>
    <li className="page-item"><a className="page-link" href="page13.html">13</a></li>
    <li className="page-item"><a className="page-link" href="page14.html">14</a></li>
    <li className="page-item"><a className="page-link" href="page15.html">15</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


        <section className="App">
 <User propColor={"deeppink"} propNr={63} propText={"User"}/>
    </section>
    </>

  );
}

export default App2;



