"use client";
import Image from "next/image";
import highlight1 from "../assets/daniela-kokina-hOhlYhAiizc-unsplash.jpg";
import { motion } from "framer-motion";
const Picture = () => {
  return (
    <div className="group w-[26vw] bg-gray-100 h-[70vh] flex justify-center pt-[2vh] overflow-hidden">
      <div className="flex flex-col">
        <div className="w-[23vw] h-[60vh] relative ">
          <motion.div
            initial={{ opacity: 0, translateX: -200, rotateZ: -35, translateY: 200 }}
            whileInView={{ opacity: 1, translateX: 0, rotateZ: 0, translateY: 0 }}
            transition={{ duration: 1, delay: 0.1}}
            className="w-[23vw] h-[60vh] overflow-hidden"
          >
            <Image
              src={highlight1}
              alt="highlights"
              layout="fill" // This line replaces absolute positioning
              className="transition-all duration-1000 ease-in-out"
            />
          </motion.div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="text-black mt-[2.8vh] uppercase hover:text-gray-400 cursor-pointer transition-all duration-700 text-xs">Name</div>
          <div className="text-black mt-[2.8vh] uppercase hover:text-gray-400 cursor-pointer transition-all duration-700 text-xs">Place</div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
