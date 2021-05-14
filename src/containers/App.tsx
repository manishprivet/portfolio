import styles from "./App.module.scss";
import Profile from "../components/Profile/Profile";
import tsParticlesConfig from "../data/tsParticles.json";
import ContactMe from "../components/ContactMe/ContactMe";
import ContactForm from "../components/Form/ContactForm";
import { Suspense, lazy, useRef, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { IOptions, RecursivePartial } from "tsparticles";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Container } from "tsparticles/dist/Core/Container";

const Technologies = lazy(
  () => import("../components/Technologies/Technologies")
);

const Projects = lazy(() => import("../components/Projects/Projects"));
const Particles = lazy(() => import("react-tsparticles"));
const ThingsAboutMe = lazy(() => import("../components/ThingsAboutMe"));

const App = () => {
  const ref = useRef<Container>(null);
  const [particles] = useState(
    tsParticlesConfig as unknown as RecursivePartial<IOptions>
  );

  const changeParticleColor = (color: string) => {
    const container = ref.current;
    container?.options.particles.color.load({ value: color });
    container?.refresh();
  };

  useEffect(() => {
    const particlesColor = getComputedStyle(document.body);
    ref.current?.options.particles.color.load({
      value: particlesColor.getPropertyValue("--text-color").trim(),
    });
    ref.current?.refresh();
  }, []);

  return (
    <div className='App'>
      <Suspense fallback={null}>
        <Particles
          container={ref}
          className={styles.particles}
          options={particles}
        />
      </Suspense>
      <Profile />
      <Suspense fallback={<Spinner text='Loading my Stacks' />}>
        <Technologies />
      </Suspense>
      <Suspense fallback={<Spinner text='Finding more information about me' />}>
        <ThingsAboutMe />
      </Suspense>
      <Suspense fallback={<Spinner text='Curating my awesome projects' />}>
        <Projects />
      </Suspense>
      <ContactForm />
      <ContactMe />
      <ThemeSwitcher changeParticlesColor={changeParticleColor} />
    </div>
  );
};

export default App;
