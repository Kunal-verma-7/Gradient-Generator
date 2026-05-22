import { div } from "framer-motion/client";
import React, { useState } from "react";

const GradientGenerator = () => {
  const [color1, setColor1] = useState("#75FFFF");
  const [color2, setColor2] = useState("#61B3FF");
  const [angle, setAngle] = useState(90);
  const [gradientType, setGradientType] = useState("linear");
  const [cssCode, setCssCode] = useState("");

  // Generate random color
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  // Handle random gradient
  const handleRandomGradient = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
    setAngle(Math.floor(Math.random() * 360));
    setRotation(Math.floor(Math.random() * 360));
  };

  // Generate CSS code
  const generateCssCode = () => {
    const gradient =
      gradientType === "linear"
        ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
        : `radial-gradient(${color1}, ${color2})`;
    setCssCode(`background: ${gradient};`);
  };

  // Copy CSS code to clipboard
  const copyCssCode = () => {
    navigator.clipboard.writeText(cssCode);
    alert("CSS code copied to clipboard!");
  };

  return (
    <div>
      <h1 className="animate-zoom-in mt-20 text-center block text-5xl">
        <b>Gradient Maker</b>
      </h1>
      <h2 className="animate-fade-in mt-5 mb-20 text-center block text-2xl opacity-60">
        Create and export beautiful gradients.
      </h2>
      <div className="flex flex-row items-start justify-center p-4 m-10">
        {/* left one */}
        <div className="w-120 h-115 rounded-lg p-5 outline outline-gray-300 bg-white text-black shadow-lg">
          {/* Color 1 Input */}
          <div className=" outline outline-gray-400 rounded-lg p-2 flex items-center gap-4 mb-4">
            <label className="font-medium ml-5">Color 1:</label>
            <span className="ml-5"> {color1}</span>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="ml-5 w-24 h-10"
            />
          </div>

          {/* Color 2 Input */}
          <div className=" outline outline-gray-400 rounded-lg p-2 flex items-center gap-4 mb-4">
            <label className="font-medium ml-5">Color 2:</label>
            <span className="ml-5">{color2}</span>
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-24 h-10 ml-5"
            />
          </div>

          {/* Angle Input */}
          <div className="outline outline-gray-400 rounded-lg p-4 flex items-center gap-4 mb-4">
            <label className="ml-4 font-medium">Angle:</label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(e.target.value)}
              className="w-48 ml-5"
            />
            <span>{angle}°</span>
          </div>

          {/* Gradient Type */}
          <div className="outline outline-gray-400 rounded-lg p-2 flex items-center gap-4 mb-4">
            <label className="ml-5 font-medium">Gradient Type:</label>
            <select
              value={gradientType}
              onChange={(e) => setGradientType(e.target.value)}
              className="p-2 outline outline-gray-400 rounded p-2"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>

          <div className="flex space-betweenflex justify-between">
            {/* Random Button */}
            <button
              onClick={handleRandomGradient}
              className="bg-blue-500 text-white py-3 px-4 rounded mb-4 hover:bg-blue-600"
            >
              Random Gradient
            </button>

            {/* Generate CSS Button */}
            <button
              onClick={generateCssCode}
              className="bg-green-500 text-white py-3 px-4 rounded mb-4 hover:bg-green-600"
            >
              Generate CSS
            </button>

            {/* Copy CSS Button */}
            {cssCode && (
              <button
                onClick={copyCssCode}
                className="bg-purple-500 text-white py-2 px-4 rounded mb-4 hover:bg-purple-600"
              >
                Copy CSS
              </button>
            )}
          </div>
          {/* Display CSS Code */}
          {cssCode && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <pre className="text-sm">{cssCode}</pre>
            </div>
          )}
        </div>

        {/* Right one */}
        <div
          className="w-120 h-115 ml-10 rounded-lg"
          style={{
            background:
              gradientType === "linear"
                ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
                : `radial-gradient(${color1}, ${color2})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientGenerator;
