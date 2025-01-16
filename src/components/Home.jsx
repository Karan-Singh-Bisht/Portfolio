import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import { Contact } from "./Contact";
import BlobCursor from "./Animations/BlobCursor";

const Home = () => {
  return (
    <>
      <div>
        <BlobCursor />
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            {/* <Experience /> For Future use */}
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
