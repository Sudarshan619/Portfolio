
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = (props) => {
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQl','ReactJs', 'NodeJs', 'ExpressJs','MongoDB','Docker'],
    datasets: [
      {
        label: 'Skills',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'orange',
            'purple',
            'cyan',
            'lime',
            'blue',
            'violet',
            'teal'
          ],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [4, 3.5, 3, 3, 3.5, 3, 3,3,2.5,2],
      },
    ],
  };

  return <div style={{ width: '60%', height: '300px',margin: 'auto' }}>
       <Bar data={data} />
       
    </div>
};

export default BarChart ;

