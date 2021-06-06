import { Theme } from "../interfaces";

const SHADES = {
  LIGHT: {
    darkShade: "rgba(59, 59, 59, 0.1)",
    lightShade: "rgba(80, 80, 80, 0.2)",
  },
  DARK: {
    darkShade: "rgba(114, 114, 114, 0.2)",
    lightShade: "rgba(255, 255, 255, 0.1)",
  },
};

export const THEMES: Theme[] = [
  {
    background: "#0f0e17",
    headline: "#fffffe",
    button: "#ff8906",
    buttonText: "#fffffe",
    paragraph: "#a7a9be",
    text: "#fffffe",
    ...SHADES.DARK,
  },
  {
    background: "#fec7d7",
    headline: "#0e172c",
    paragraph: "#0e172c",
    button: "#f25042",
    buttonText: "#fffffe",
    text: "#0e172c",
    ...SHADES.LIGHT,
  },
  {
    background: "#16161a",
    headline: "#fffffe",
    paragraph: "#94a1b2",
    button: "#7f5af0",
    buttonText: "#fffffe",
    text: "#fffffe",
    ...SHADES.DARK,
  },
  {
    background: "#004643",
    headline: "#fffffe",
    paragraph: "#abd1c6",
    button: "#f9bc60",
    buttonText: "#001e1d",
    text: "#fffffe",
    ...SHADES.DARK,
  },
  {
    background: "#faeee7",
    headline: "#33272a",
    paragraph: "#594a4e",
    button: "#ff8ba7",
    buttonText: "#33272a",
    text: "#33272a",
    ...SHADES.LIGHT,
  },
];
