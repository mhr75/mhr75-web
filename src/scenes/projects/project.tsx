// import LineGradient from "@/components/LineGradient";
import { motion } from "framer-motion";
import YouTube from 'react-youtube';
// import project1 from "@/assets/project-1.jpeg";
// import project2 from "@/assets/project-2.jpeg";
// import project3 from "@/assets/project-3.jpeg";
// import project4 from "@/assets/project-4.jpeg";
// import project5 from "@/assets/project-5.jpeg";
// import project6 from "@/assets/project-6.jpeg";
// import project7 from "@/assets/project-7.jpeg";
// import React, { MutableRefObject } from "react";




const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// const projectImages  = [project1,project2,project3,project4,project5,project6,project7];


type Props ={
  videoId: string;
}





const Project = ({videoId}: Props) => {
  // const projectTitle = title.split(" ").join("-").toLowerCase();
  // const projectNo = title.split(" ");
  // const abc = projectImages[Number(projectNo[1])];

  return (
    // <motion.div variants={projectVariant} className="relative">
    //   <div className={overlayStyles}>
    //     <p className="text-2xl font-playfair">{title}</p>
    //     <p className="mt-7">
    //       Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
    //       porttitor accumsan tincidunt.
    //     </p>
    //   </div>
    //   <img src={abc} alt={projectTitle} />
    // </motion.div>
<motion.div 
variants={projectVariant}>
	<div className="flex justify-center text-center items-center">
      <YouTube 
      opts={
{
	height:"400",
	width:"400"
}
      }
      videoId={videoId}/>
      </div>
      </motion.div>
);

};

export default Project;