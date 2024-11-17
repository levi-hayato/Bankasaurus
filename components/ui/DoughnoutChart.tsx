'use client'
import React from 'react'
import { Chart as ChartJS , ArcElement , Tooltip , Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement , Tooltip , Legend);

const DoughnoutChart = ({accounts}: DoughnutChartProps) => {

const data = {
    datasets: [
        {
            label : 'Banks',
            data : [1250 , 2500 , 3000],
            backgroundColor: ['#0747b6' , '#2265d8' , '#2f91fa']
        }
    ],
    labels: ['Bank1' , 'Bank2' , 'Bank3']
}

  return <Doughnut 
  options={{
    cutout: '60%',
    plugins: {
        legend : {
            display:false
        }
    }
  }}
  data={data} />
}

export default DoughnoutChart
