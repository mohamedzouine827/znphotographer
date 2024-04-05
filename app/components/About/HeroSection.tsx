"use client";
import { motion } from "framer-motion";
import picture from "@/app/assets/eberhard-grossgasteiger-BXasVMRGsuo-unsplash.jpg"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="flex flex-row justify-between w-full items-center">
        <motion.div  className="text-7xl font-semibold  w-[40vw] text-black h-[20vw]">
            I&apos;m 21 Years Old Based On Morocco
        </motion.div>
        <div className="text-7xl font-semibold  w-[30vw] h-[30vw]">
            <div className="group relative w-full h-full">
            <Image src={picture} alt="picture" className=" w-full h-full blur group-hover:blur-none ease-in group-hover:ease-out duration-500 transition-all" width={1250} height={1250}/>
            <div className=" absolute text-2xl text-white group-hover:opacity-0 duration-500 transition-all ease-in  flex top-[50%] right-[10vw]  ">
                HOVER ME
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection