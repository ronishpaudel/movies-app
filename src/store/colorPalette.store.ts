import { proxy } from "valtio";

export const COLOR_PALETTE = {
  reddish: "#770000",
  green: "#007700",
  purple: "#770077",
  yellow: "#f5c518",
  white: "#FFFFFF",
};

export type ColorName = keyof typeof COLOR_PALETTE;

interface ColorPalette {
  color: ColorName;
  setColor: (color: ColorName) => void;
}

export const colorPaletteStore = proxy<ColorPalette>({
  color: "yellow",
  setColor(color) {
    colorPaletteStore.color = color;
  },
});
