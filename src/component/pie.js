import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, ArcElement, LineElement, Title, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['English','Kannada','Hindi'],
        datasets: [
            {
                label: 'Academic Progress',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                hoverOffset: 4,
                borderColor: 'white',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [35,45,20],
            },
        ],
    };

    return <div style={{ width: '60%', height: '300px', margin: '40px auto'}}>
        <Pie data={data} />

    </div>
};

export default PieChart;
