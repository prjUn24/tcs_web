import About from "./About";
import FAQ from "./FAQ";
import Home from "./Home";
import Navbar from "./Navbar";

export default function MainContainer() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <FAQ />
     
    </div>
  );
}
