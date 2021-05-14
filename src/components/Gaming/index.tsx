import { LinkToNewTab } from "../Primitives/Link";
import { SubSectionContainer } from "../Primitives/Containers";
import ToolTip from "../Primitives/ToolTip";

const Gaming = () => (
  <SubSectionContainer>
    <h2>I'm also into Gaming 🎮</h2>
    <section>
      Add me on{" "}
      <ToolTip
        id='valorant-tooltip'
        tooltipContent={<h4>CAPTAIN PRIVET #6969</h4>}
      >
        <span data-tip data-for='valorant-tooltip'>
          Valorant
        </span>
      </ToolTip>
      ,{" "}
      <ToolTip
        id='steam-tooltip'
        tooltipContent={
          <LinkToNewTab
            className='original'
            href='https://steamcommunity.com/id/privet808/'
          >
            <h4>privet808</h4>
          </LinkToNewTab>
        }
      >
        <span data-tip data-for='steam-tooltip'>
          Steam
        </span>
      </ToolTip>{" "}
      or{" "}
      <ToolTip id='discord-tooltip' tooltipContent={<h4>privet #7852</h4>}>
        <span data-tip data-for='discord-tooltip'>
          Discord
        </span>
      </ToolTip>
    </section>
  </SubSectionContainer>
);

export default Gaming;
