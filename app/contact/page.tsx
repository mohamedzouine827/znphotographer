"use client";
import Experience from "../components/About/Experience";
import Agenda from "../components/Contact/Agenda";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="py-[14vh]">
        <Agenda />
      </div>
    </section>
  );
};

export default page;
