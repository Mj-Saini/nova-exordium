/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const defaultSeries = [
  {
    id: "1",
    data: [200, 180, 150, 180, 250, 300, 280, 320, 400, 380, 450, 130],
    area: true,
    zeroBaseline: true,
  },
  {
    id: "2",
    data: [500, 120, 100, 140, 180, 200, 220, 280, 300, 250, 380, 440],
    area: true,
    zeroBaseline: true,
  },
];

const CsatGraph = () => {
  const [series, setSeries] = React.useState(defaultSeries);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  return (
    <div
      style={{
        width: "400",
        height: "300",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <svg width="0" height="0">
        <defs>
          {/* First Gradient */}
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(44, 76, 75, 0.54)" />
            <stop offset="100%" stopColor="rgba(44, 76, 75, 0)" />
          </linearGradient>

          {/* Second Gradient */}
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(76, 44, 75, 0.54)" />
            <stop offset="100%" stopColor="rgba(76, 44, 75, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        <LineChart
          xAxis={[{ scaleType: "point", data: months }]}
          yAxis={[
            {
              scaleType: "linear",
              min: 0,
              max:
                Math.ceil(
                  Math.max(...defaultSeries.flatMap((s) => s.data)) / 100
                ) * 100,
            },
          ]}
          series={series.map((s) => ({ ...s, zeroBaseline: true }))}
          skipAnimation={skipAnimation}
          height={400}
          sx={{
            "& .MuiAreaElement-root:nth-of-type(1)": {
              fill: "url(#gradient1)",
            },
            "& .MuiAreaElement-root:nth-of-type(2)": {
              fill: "url(#gradient2)",
            },
            "& .MuiLineElement-root": { stroke: "#000", strokeWidth: 2 },
            "& .MuiMarkElement-root": { display: "none" },
            "& .MuiAxis-tickLabel": {
              fill: "#9A9999",
              fontSize: "10px",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </div>
  );
};

export default CsatGraph;
