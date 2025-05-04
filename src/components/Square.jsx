import { useState } from "react";
import "../App.css"; 

const Square = ({ size = 400 }) => {
  const [split, setSplit] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); 
    if (!split) setSplit(true);
  };

  if (!split) {
    return (
      <div
        onClick={handleClick}
        className="square"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className="square"
      style={{ width: size, height: size }}
    >
      {[
        { top: 0, left: 0 },
        { top: 0, left: '50%' },
        { top: '50%', left: 0 },
        { top: '50%', left: '50%' },
      ].map((pos, i) => (
        <div
          key={i}
          className="square-inner"
          style={{ top: pos.top, left: pos.left }}
        >
          <Square size={size / 2} />
        </div>
      ))}
    </div>
  );
};

export default Square;
