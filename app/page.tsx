"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import EasyPage from "@/app/pages/EasyPage";
import MediumPage from "@/app/pages/MediumPage";
import HardPage from "@/app/pages/HardPage";
import WebAppPage from "@/app/pages/WebAppPage";
import Footer from "@/app/pages/Footer";

export default function Home() {
  const [page, setPage] = useState("easy");


  return (
    <div className="flex flex-col bg-[#06062C] pt-10 lg:px-20 items-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-fit text-white font-serif text-4xl"
      >
        <h1>Frontend Challenges</h1>
      </motion.div>
      <motion.div
        className="text-white lg:flex lg:flex-row max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 lg:justify-between w-full mt-20 text-xl border-b-2 pb-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button className="p-[3px] relative" onClick={() => setPage("easy")}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Easy
          </div>
        </button>
        <button className="p-[3px] relative" onClick={() => setPage("medium")}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Medium
          </div>
        </button>
        <button className="p-[3px] relative" onClick={() => setPage("hard")}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Hard
          </div>
        </button>
        <button className="p-[3px] relative" onClick={() => setPage("webapp")}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            WebApp
          </div>
        </button>
      </motion.div>
      <motion.div className="w-full">
        {page === "easy" && <EasyPage />}
        {page === "medium" && <MediumPage />}
        {page === "hard" && <HardPage />}
        {page === "webapp" && <WebAppPage />}
      </motion.div>
      <div className="mt-40 border-t-2 w-full">
        <Footer />
      </div>
    </div>
  );
}
