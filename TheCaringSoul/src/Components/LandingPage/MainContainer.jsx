import About from "./About";
import Home from "./Home";

import Navbar from "./Navbar";
import Services from "./Services";
import FAQ from "./FAQ";


export default function MainContainer() {
  return (
    <div className="relative">
       <Navbar/>
      <Home />
      <About />
      <Services />
      <FAQ/>
      
      
    </div>
  );
}
