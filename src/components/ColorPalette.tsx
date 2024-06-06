import {
  COLOR_PALETTE,
  ColorName,
  colorPaletteStore,
} from "@/store/colorPalette.store";

const ColorPalette = () => {
  const colors = Object.keys(COLOR_PALETTE) as ColorName[];
  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className="color-option"
          style={{ backgroundColor: COLOR_PALETTE[color] }}
          onClick={() => {
            colorPaletteStore.setColor(color);
          }}
        ></div>
      ))}
    </div>
  );
};

export { ColorPalette };
