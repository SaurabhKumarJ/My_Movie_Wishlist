import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React from "react";

function Pagination({pageNo, handlePrev, handleNext}) {
  return (
    <div className="h-full w-full bg-green-500 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-30 backdrop-saturate-200 backdrop-contrast-200 rounded-md p-4 mt-8 flex justify-center">
        <div onClick={handlePrev} className="px-8 hover:cursor-pointer"><CircleArrowLeft/></div>
        <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="px-8 hover:cursor-pointer"><CircleArrowRight/></div>
    </div>
  );
}

export default Pagination;
