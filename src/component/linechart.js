import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['1st sem', '2nd sem', '3rd sem', '4th sem', '5th sem', '6th sem', '7th sem'],
        datasets: [
            {
                label: 'Academic Progress',
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [7.37,8.25,7.89,8.41,8.82,8.90,8.35],
            },
        ],
    };

    return <div style={{ width: '60%', height: '300px', margin: '40px auto'}}>
        <Line data={data} />

    </div>
};

export default LineChart;
