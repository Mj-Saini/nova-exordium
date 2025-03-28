import * as React from 'react';
import Box from '@mui/material/Box';

import { BarChart } from '@mui/x-charts/BarChart';

export default function Barcharts() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(9);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={skipAnimation}
      />
      
      
    </Box>
  );
}

const highlightScope = {
  // highlight: 'series',
  // fade: 'global',
} as const;

const series = [
  {
    
    data: [
      100, 340, 280, 490, 250,140, 460,240,120
    ],
  }
  
].map((s) => ({ ...s, highlightScope }));
