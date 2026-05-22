import React from "react";
import { GrFavorite } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";

const getRandomGradient = () => {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
};

const GradientCard = () => (
  <div className="h-60 m-3 outline outline-gray-300 bg-gray-100 rounded-xl">
    <div
      className="w-80 h-40 rounded-lg m-5 shadow-md transition-transform transform 
                 hover:scale-105 hover:shadow-lg"
      style={{ backgroundImage: getRandomGradient() }}
    ></div>
    <div className="flex justify-end mr-5 gap-4">
    <GrFavorite/> 
    <CiMenuKebab/>
    </div>
  </div>
);

export default function GradientCards() {
  return (
    <div>
      <h2 className="mt-20 mb-10 text-center text-2xl font-bold hover:underline animate-zoom-in mt-20 text-center block">
        Example Gradients
      </h2>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: 9 }).map((_, index) => (
          <GradientCard key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <p className="text-xl text-center p-3 mt-20 mb-10 w-55 bg-blue-400 text-white outline outline-gray-400 rounded hover:bg-black hover:text-white">Browse all gradients</p>
      </div>
    </div>
  );
}
