"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";

const BoxModel = ({
  href,
  image,
  title,
}: {
  href: string;
  image: ImageData;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="h-80 mt-10"
    >
      <CardContainer className="shadow-2xl">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem translateZ="100" className="mt-4">
            <a href={href} className="">
              <Image src={image} alt="img" className="object-contain h-60" />
            </a>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default BoxModel;
