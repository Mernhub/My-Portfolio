import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero.JSX";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import ScrollToTopButton from "./components/Scroll"; // Import the button

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <div id="Home">
            <NavBar />
            <Hero />
          </div>
          <div>
            <Technologies />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <div id="Services">
            <Services />
          </div>
          <div id="Contact">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <ScrollToTopButton /> {/* Include the scroll button */}
      </div>
    </>
  );
}

export default App;
