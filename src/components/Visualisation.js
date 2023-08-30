import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';

const data = [
  { id: 0, value: 200, label: '2019',},
  { id: 1, value: 300, label: '2020' },
  { id: 2, value: 50, label: '2021' },
  { id: 3, value: 100, label: '2022' },
];

export default function Visualisation() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '80px' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Yearly Spend Distribution in AUD
        </Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <PieChart
            colors={['#383534','#86979c','#384a4f','#37323b']}
            series={[
                {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30 },
                
                },
            ]}
            sx={{
                [`& .${pieArcClasses.faded}`]: {
                fill: 'gray',
                },

            }}
            
            
            height={300}
            width={400}
            />
          
          
        </div>
        <Typography variant="body1" align="center" gutterBottom>
          This pie chart displays the distribution of yearly spends in AUD
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h6" align="center" gutterBottom>
          2022 Wallet Balance Analysis in AUD
        </Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <BarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
                scaleType: 'band',
              },
            ]}
            colors={['#383534']}
            series={[
              {
                data: [8000, 10000, 11500, 8083,5682,3802,6793,20322,5632,8322,9021,8210],
              },
            ]}
            
            width={500}
            height={400}
          />
        </div>
        <Typography variant="body1" align="center" gutterBottom>
          This bar chart provides an analysis of wallet balances in AUD for the year 2022
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h6" align="center" gutterBottom>
          August Transaction Trend in AUD
        </Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <LineChart
            colors={['#383534']}
          xAxis={[{ data: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}]}
          
          series={[
            {
              data: [40, 100, 604, 59, 932, 450,400,500,320,890,300,1203,783,405,120,78,203,654,463,234,537,600,430,453,789,364,90,323,854,983]
            },
          ]}
          width={500}
          height={400}
          />
        </div>
        <Typography variant="body1" align="center" gutterBottom>
          This line chart illustrates the transaction trend for the month of August in terms of AUD
        </Typography>
      </div>
    </div>
  );
}