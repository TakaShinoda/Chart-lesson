import React, { FC } from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Windows', 'Mac', 'Linux'],
  datasets: [
    {
      data: [90, 7, 3],
      backgroundColor: ['#4169e1', '#ff1493', '#FFCE56'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      boederColor: ['transparent', 'transparent', 'transparent'],
    },
  ],
}

export const PiePlot: FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  )
}
