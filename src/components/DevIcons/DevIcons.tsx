import { stackTypes, Technology } from "../../interfaces";
import { Technologies } from "../../data/TechnologyInfo";
import ReactTooltip from "react-tooltip";
import { LinkToNewTab } from "../Primitives/Link";

interface Props {
  stacks: stackTypes[];
  className: string;
}

const DevIcons = ({ stacks, className }: Props) => {
  const rest = {
    className,
    style: { stroke: "var(--text-color)", strokeWidth: 0.3 },
  };

  const icons = stacks.map((s) => {
    const Component = Technologies.find((t) => t.name === s) as Technology;
    return (
      <>
        <Component.Icon
          data-tip
          data-for={`icon-${s}`}
          fill={Component.primaryColor}
          title={s}
          {...rest}
        />

        <ReactTooltip
          id={`icon-${s}`}
          place='bottom'
          type='info'
          effect='solid'
          className='tooltip'
          delayHide={500}
          delayShow={500}
          delayUpdate={500}
          arrowColor='var(--button-color)'
        >
          <h4>{Component.name}</h4>
          <p>{Component.description}</p>
          <LinkToNewTab href={Component.url}>Learn More</LinkToNewTab>
        </ReactTooltip>
      </>
    );
  });

  return <div style={{ margin: "0 10px" }}>{icons}</div>;
};

export default DevIcons;
