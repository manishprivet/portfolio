import { useEffect, useState } from "react";
import { userDetails } from "../../../@types/interfaces";
import {
  AreaChart,
  Tooltip,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "./ToolTip";
import styles from "./styles.module.scss";

interface Props {
  userData: userDetails | undefined;
}

type ContributionData = {
  day: number;
  contributions: number;
}[];

const Graph = ({ userData }: Props) => {
  const [data, setData] = useState<ContributionData | undefined>(undefined);

  const getUpperLimit = () => {
    if (userData?.contributions)
      return 5 * ((Math.max.apply(Math, userData.contributions) % 5) + 1);
  };

  useEffect(() => {
    const returnData: ContributionData = [];
    if (userData)
      userData.contributions.map((total, i) =>
        returnData.push({ day: i + 1, contributions: total })
      );
    setData(returnData);
  }, [userData]);

  if (!data) return null;

  return (
    <>
      <ResponsiveContainer className={styles.graphContainer} height={350}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id='colorContributions' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='var(--button-color)'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='var(--button-color)'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            tickLine={false}
            axisLine={{ stroke: "var(--button-color)", strokeOpacity: 0.7 }}
            tick={{ stroke: "var(--button-color)" }}
            dataKey='day'
          />
          <YAxis
            tick={{ stroke: "var(--button-color)" }}
            tickLine={false}
            axisLine={{ stroke: "var(--button-color)", strokeOpacity: 0.7 }}
            domain={[0, getUpperLimit() || 30]}
          />
          <Tooltip content={<CustomToolTip />} cursor={false} />
          <Area
            type='monotone'
            dataKey='contributions'
            stroke='var(--button-color)'
            strokeWidth={1.5}
            fillOpacity={1}
            fill='url(#colorContributions)'
          />
        </AreaChart>
      </ResponsiveContainer>
      <p
        style={{
          padding: "0 60px",
          fontSize: "1.3em",
          color: "var(--button-color)",
        }}
      >
        My Contributions over the last 30 days
      </p>
    </>
  );
};

export default Graph;
