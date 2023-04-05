import { THEMES } from "../../data/Themes";
import styles from "./styles.module.scss";
interface Props {
  changeParticlesColor?: (s: string) => void;
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
    if (typeof window !== 'undefined') {
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
      if (changeParticlesColor) changeParticlesColor(text);
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
