import Navbar from "@/scenes/navbar";
// import Landing from "./scenes/Landing";
// import DotGroup from "./scenes/DotGroup";
// import MySkills from "./scenes/MySkills";
// import LineGradient from "./components/LineGradient";
// import Projects from "./scenes/Projects";
// import Contact from "./scenes/Contact";
// import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
// import Testimonials from "./scenes/Testimonials";
// import { motion } from "framer-motion";
// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "./shared/types";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/dotGroup";
import { motion } from "framer-motion";
import Landing from "./scenes/landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/myskils";
import Projects from "./scenes/projects";
import Testimonials from "./scenes/testimonials";
import Contact from "./scenes/contact";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage,setSelectedPage] =useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(()=>
  {
  const handleScroll = ()=>
  {
    if (window.scrollY ===0)
    {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY !==0)
    {
      setIsTopOfPage(false);
    }
  }
  window.addEventListener("scroll",handleScroll);
  return ()=> window.removeEventListener("scroll",handleScroll);
  }, []
  );

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        
        <motion.div
          className="m-0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          className="m-0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          className="m-0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          <Projects 
          />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          className="m-0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          className="m-0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
