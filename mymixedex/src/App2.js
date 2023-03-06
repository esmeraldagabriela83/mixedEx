import User from "./js/User.js";
import './App.css';

function App2() {
  return (

    <>

<ul className="container" style={{padding:"0.5em" , margin:"0.5em" , border:"1px solid cyan"}}>
<li><a href="page3.html">page3.html</a></li>
<li><a href="page4.html">page4.html</a></li>
<li><a href="page5.html">page5.html</a></li>
</ul>

        <section className="App">
 <User propColor={"deeppink"} propNr={63} propText={"User"}/>
    </section>
    </>

  );
}

export default App2;



