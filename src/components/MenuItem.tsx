import React from "react";
import { useState } from "react";

function MenuItem({ name }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`h-fit w-full border border-gray-800 rounded-sm p-1 text-left ${isActive ? `bg-blue-800` : `bg-gray-300`}`}
      >
        {name}
      </button>
    </div>
  );
}

export default MenuItem;
