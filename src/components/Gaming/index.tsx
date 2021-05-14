import styles from "./styles.module.scss";
import ReactTooltip from "react-tooltip";
import { LinkToNewTab } from "../Primitives/Link";

const Gaming = () => {
  return (
    <section className={styles.infoContainer}>
      <h2>I'm also into Gaming 🎮</h2>
      <p>
        Add me on{" "}
        <span data-tip data-for='valorant-tooltip'>
          Valorant
        </span>
        ,{" "}
        <span data-tip data-for='steam-tooltip'>
          Steam
        </span>{" "}
        or{" "}
        <span data-tip data-for='discord-tooltip'>
          Discord
        </span>
      </p>
      <ReactTooltip
        id='valorant-tooltip'
        place='bottom'
        type='info'
        effect='solid'
        className='tooltip'
        delayHide={500}
        delayShow={500}
        arrowColor='var(--button-color)'
        delayUpdate={500}
      >
        <h4>CAPTAIN PRIVET #6969</h4>
      </ReactTooltip>

      <ReactTooltip
        id='steam-tooltip'
        place='bottom'
        type='info'
        effect='solid'
        className='tooltip'
        delayHide={500}
        delayShow={500}
        delayUpdate={500}
        arrowColor='var(--button-color)'
      >
        <LinkToNewTab href='https://steamcommunity.com/id/privet808/'>
          <h4>privet808</h4>
        </LinkToNewTab>
      </ReactTooltip>

      <ReactTooltip
        id='discord-tooltip'
        place='bottom'
        type='info'
        effect='solid'
        className='tooltip'
        delayHide={500}
        delayShow={500}
        arrowColor='var(--button-color)'
        delayUpdate={500}
      >
        <h4>privet #7852</h4>
      </ReactTooltip>
    </section>
  );
};

export default Gaming;
