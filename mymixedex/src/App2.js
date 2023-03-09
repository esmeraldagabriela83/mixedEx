import User from "./js/User.js";
import './App.css';

function App2() {
  return (

    <>

<ul className="container" style={{padding:"0.5em" , margin:"0.5em" , border:"1px solid cyan"}}>
<li><a href="page3.html">page3.html</a></li>
<li><a href="page4.html">page4.html</a></li>
<li><a href="page5.html">page5.html</a></li>
<li><a href="page6.html">page6.html</a></li>
<li><a href="page7.html">page7.html</a></li>
<li><a href="page8.html">page8.html</a></li>
<li><a href="page9.html">page9.html</a></li>
<li><a href="page10.html">page10.html</a></li>
</ul>

        <section className="App">
 <User propColor={"deeppink"} propNr={63} propText={"User"}/>
    </section>
    </>

  );
}

export default App2;



