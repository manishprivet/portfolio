import styles from "./styles.module.scss";

interface Theme {
  background: string;
  headline: string;
  text: string;
  button: string;
  paragraph: string;
  buttonText: string;
  subHeadline?: string;
  darkShade: string;
  lightShade: string;
}

const THEMES: Theme[] = [
  {
    background: "#0f0e17",
    headline: "#fffffe",
    button: "#ff8906",
    buttonText: "#fffffe",
    paragraph: "#a7a9be",
    text: "#fffffe",
    darkShade: "rgba(114, 114, 114, 0.2)",
    lightShade: "rgba(255, 255, 255, 0.1)",
  },
  {
    background: "#fec7d7",
    headline: "#0e172c",
    paragraph: "#0e172c",
    button: "#f25042",
    buttonText: "#fffffe",
    text: "#0e172c",
    darkShade: "rgba(59, 59, 59, 0.1)",
    lightShade: "rgba(80, 80, 80, 0.2)",
  },
  {
    background: "#16161a",
    headline: "#fffffe",
    paragraph: "#94a1b2",
    button: "#7f5af0",
    buttonText: "#fffffe",
    text: "#fffffe",
    darkShade: "rgba(114, 114, 114, 0.2)",
    lightShade: "rgba(255, 255, 255, 0.1)",
  },
  {
    background: "#004643",
    headline: "#fffffe",
    paragraph: "#abd1c6",
    button: "#f9bc60",
    buttonText: "#001e1d",
    text: "#fffffe",
    darkShade: "rgba(114, 114, 114, 0.2)",
    lightShade: "rgba(255, 255, 255, 0.1)",
  },
  {
    background: "#faeee7",
    headline: "#33272a",
    paragraph: "#594a4e",
    button: "#ff8ba7",
    buttonText: "#33272a",
    text: "#33272a",
    darkShade: "rgba(59, 59, 59, 0.1)",
    lightShade: "rgba(80, 80, 80, 0.2)",
  },
];

interface Props {
  changeParticlesColor: (s: string) => void;
}

const ThemeSwitcher = ({ changeParticlesColor }: Props) => {
  const changeTheme = (index: number) => {
    const {
      background,
      headline,
      paragraph,
      button,
      buttonText,
      text,
      darkShade,
      lightShade,
    } = THEMES[index];
    if (typeof window !== undefined) {
      const html = document.querySelector("html") as HTMLElement;
      const style = html.style;

      style.setProperty("--text-color", text);
      style.setProperty("--background-color", background);
      style.setProperty("--headline-color", headline);
      style.setProperty("--paragraph-color", paragraph);
      style.setProperty("--button-color", button);
      style.setProperty("--button-text-color", buttonText);
      style.setProperty("--dark-shade", darkShade);
      style.setProperty("--light-shade", lightShade);
      if (typeof changeParticlesColor === typeof (() => null))
        changeParticlesColor(text);
    }
  };

  return (
    <div className={styles.container}>
      {THEMES.map((theme, index) => (
        <div
          key={theme.background}
          onClick={() => changeTheme(index)}
          className={styles.button}
          style={{
            backgroundColor: theme.background,
            border: `2px solid ${theme.button}`,
          }}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
