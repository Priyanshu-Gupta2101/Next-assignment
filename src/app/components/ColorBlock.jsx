import React from "react";

const ColorBlock = ({
  color,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  onColorChange,
}) => {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={onDragOver}
      onDrop={() => onDrop(index)}
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <input
        type="color"
        value={color}
        onChange={(e) => onColorChange(index, e.target.value)}
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      />
      <span
        style={{ marginTop: "5px", fontWeight: "bold", marginRight: "15px" }}
      >
        {color}
      </span>
    </div>
  );
};

export default ColorBlock;
