import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: clicked ? 30 : 20,
    height: clicked ? 30 : 20,
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "2px solid white",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
    mixBlendMode: "difference",
    opacity: hidden ? 0 : 1,
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
