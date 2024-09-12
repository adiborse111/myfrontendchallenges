/* eslint-disable react/jsx-key */
import React from "react";
import { WebAppData } from "../assets";
import BoxModel from "../components/BoxModel";

const WebAppPage = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
      {WebAppData.map((easy) => (
        <BoxModel href={easy.href} image={easy.image} title={easy.title} />
      ))}
    </div>
  )
}

export default WebAppPage