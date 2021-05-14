import { stackTypes, Technology } from "../../interfaces";
import { Technologies } from "../../data/TechnologyInfo";
import { LinkToNewTab } from "../Primitives/Link";
import ToolTip from "../Primitives/ToolTip";

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
      <ToolTip
        key={Component.name}
        id={`icon-${s}`}
        tooltipContent={
          <>
            <h4>{Component.name}</h4>
            <p>{Component.description}</p>
            <LinkToNewTab href={Component.url}>Learn More</LinkToNewTab>
          </>
        }
      >
        <Component.Icon
          data-tip
          data-for={`icon-${s}`}
          fill={Component.primaryColor}
          {...rest}
        />
      </ToolTip>
    );
  });

  return <div style={{ margin: "0 10px" }}>{icons}</div>;
};

export default DevIcons;
