import LineGradient from "@/components/LineGradient";
import { motion } from "framer-motion";
// import project1 from "@/assets/project-1.jpeg";
// import project2 from "@/assets/project-2.jpeg";
// import project3 from "@/assets/project-3.jpeg";
// import project4 from "@/assets/project-4.jpeg";
// import project5 from "@/assets/project-5.jpeg";
// import project6 from "@/assets/project-6.jpeg";
// import project7 from "@/assets/project-7.jpeg";
import Project from "./project";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const projectImages  = [project1,project2,project3,project4,project5,project6,project7];



const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Embark on a Visual Voyage: Explore My Portfolio of Diverse Projects Below
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project videoId="VJR-zlBFFAQ" />
          <Project videoId="mZHZMk-mdUA" />

          {/* ROW 2 */}
          <Project videoId="GFpdrx3WGhQ" />
          <Project videoId="tcxzD_QOnvA"/>
          <Project videoId="sMcfiNHIhWQ"/>

          {/* ROW 3 */}
          <Project videoId="TeDDDTJWtq0"/>
          <Project videoId="FFn5953rw7w"/>
                    <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
