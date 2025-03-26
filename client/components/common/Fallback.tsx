import React from "react";
import { Icons } from "./Icons";

const Fallback = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Icons.refresh className="w-10 h-10 animate-spin" /> &nbsp; Loading...
    </div>
  );
};

export default Fallback;
