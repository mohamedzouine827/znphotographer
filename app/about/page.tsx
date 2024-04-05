"use client";
import Experience from "../components/About/Experience";
import HeroSection from "../components/About/HeroSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section>
      <div className="w-full">
        <Navbar />
      </div>
      <div>
        <div className="border-2 bg-white  h-[80vh] w-full px-[6vw] mt-[4vh] flex justify-center items-center">
          <HeroSection />
          {/* picture right text left*/}
        </div>
        <Experience />
      </div>
    </section>
  );
};

export default page;
