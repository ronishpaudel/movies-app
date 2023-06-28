interface ColorPaletteProps {
  onClick: (color: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ onClick }) => {
  const colors = ["#FF0000", "#f5c518", "#00FF00", "#0000FF"];

  const handleColorChange = (color: string) => {
    onClick(color);
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        ></div>
      ))}
    </div>
  );
};

export { ColorPalette };
