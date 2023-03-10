import React from "react";
import { CardContent } from "./CardContent";
import { SideBar } from "./SideBar";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <SideBar />
        <CardContent />
      </div>
    </div>
  );
};

export { Card };
