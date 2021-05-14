import { FC, ReactNode } from "react";
import ReactTooltip from "react-tooltip";

interface Props {
  id?: string;
  tooltipContent: ReactNode;
}

const ToolTip: FC<Props> = ({ id, tooltipContent, children }) => (
  <>
    {children}
    <ReactTooltip
      id={id}
      place='bottom'
      type='info'
      effect='solid'
      className='tooltip'
      delayHide={500}
      delayShow={500}
      arrowColor='var(--button-color)'
      delayUpdate={500}
    >
      {tooltipContent}
    </ReactTooltip>
  </>
);

export default ToolTip;
