import { useState, useEffect } from "react";

const themes = ["dark", "light", "retro"];

export default function Toggler() {
  const [themeIndex, setThemeIndex] = useState(0);
  
  // Apply initial theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themes[themeIndex]);
  }, []);
  
  const toggling = () => {
    // Cycle through themes: 0 -> 1 -> 2 -> 0
    const newIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(newIndex);
    
    // Set theme attribute at document level
    document.documentElement.setAttribute("data-theme", themes[newIndex]);
  };

  // Calculate transform position based on theme index
  const getTransformStyle = () => {
    // Maps theme indices to percentage values
    const positions = {
      0: "0%",    // first position (left)
      1: "150%",   // middle position
      2: "300%"   // right position
    };
    
    return {
      transform: `translateX(${positions[themeIndex]})`
    };
  };

  return (
    <div className="flex flex-row items-end gap-x-3">
      <p className="text-sm">THEME</p>
      <div className="flex flex-col w-22">
        <div className="flex flex-row justify-around text-sm">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <button 
          type="button" 
          onClick={toggling}
          className="cursor-pointer w-22 h-8 rounded-full px-1 bg-bg-toggle flex items-center relative"
        >
          <div id="keytoggle"
            className="w-5 h-5 rounded-full bg-key-accent absolute"
            style={getTransformStyle()}
          ></div>
        </button>
      </div>
    </div>
  );
}