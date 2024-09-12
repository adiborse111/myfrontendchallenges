/* eslint-disable react/jsx-key */
import React from "react";
import { EasyData } from "../assets";
import BoxModel from "../components/BoxModel";
import { motion } from "framer-motion";

const EasyPage = () => {
  return (
    <motion.div className="grid lg:grid-cols-3 md:grid-cols-2">
      {EasyData.map((easy) => (
        <BoxModel href={easy.href} image={easy.image} title={easy.title} />
      ))}
    </motion.div>
  );
};

export default EasyPage;
