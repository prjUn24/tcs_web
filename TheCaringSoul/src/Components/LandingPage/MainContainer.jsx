import About from "./About";
import Home from "./Home";

import Navbar from "./Navbar";
import Services from "./Services";


export default function MainContainer() {
  return (
    <div className="relative">
     
      <Home />
      <About />
      <Services />
      
    </div>
  );
}
