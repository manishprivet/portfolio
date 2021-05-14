import styles from "./App.module.scss";
import Profile from "../components/Profile/Profile";
import tsParticlesConfig from "../data/tsParticles.json";
import ContactMe from "../components/ContactMe/ContactMe";
import ContactForm from "../components/Form/ContactForm";
import { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";
import { IOptions, RecursivePartial } from "tsparticles";
import Github from "../components/Github";

const Technologies = lazy(
  () => import("../components/Technologies/Technologies")
);

const Projects = lazy(() => import("../components/Projects/Projects"));
const Particles = lazy(() => import("react-tsparticles"));

const App = () => (
  <div className='App'>
    <Suspense fallback={null}>
      <Particles
        className={styles.particles}
        options={tsParticlesConfig as unknown as RecursivePartial<IOptions>}
      />
    </Suspense>
    <Profile />
    <Github />
    <Suspense fallback={<Spinner />}>
      <Technologies />
      <Projects />
    </Suspense>
    <ContactForm />
    <ContactMe />
  </div>
);

export default App;
