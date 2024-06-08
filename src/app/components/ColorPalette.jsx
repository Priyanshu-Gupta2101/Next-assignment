"use client";
import React, { useState } from "react";
import ColorBlock from "./ColorBlock";

const ColorPalette = () => {
  const initialColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F3FF33",
    "#FF33A1",
    "#33FFF6",
    "#F633FF",
    "#FF8633",
  ];
  const [colors, setColors] = useState(initialColors);
  const [draggedColorIndex, setDraggedColorIndex] = useState(null);

  const startDrag = (index) => {
    setDraggedColorIndex(index);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dropColor = (index) => {
    if (draggedColorIndex === null) return;

    const newColors = [...colors];
    const [draggedColor] = newColors.splice(draggedColorIndex, 1);
    newColors.splice(index, 0, draggedColor);
    setColors(newColors);
    setDraggedColorIndex(null);
  };

  const changeColor = (index, newColor) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? newColor : color
    );
    setColors(updatedColors);
  };

  return (
    <div className="flex gap-10">
      {colors.map((color, index) => (
        <ColorBlock
          key={index}
          color={color}
          index={index}
          onDragStart={startDrag}
          onDragOver={dragOver}
          onDrop={dropColor}
          onColorChange={changeColor}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
