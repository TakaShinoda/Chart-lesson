import React, { FC } from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['React', 'Vue', 'Angular', 'JavaScript', 'TypeScript', 'Redux', 'REST API'],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b',
      pointBoederColor: '#fff',
      data: [100, 50, 30, 90, 50, 70, 40],
    },
    {
        label: 'Person B',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: '#ff1493',
        pointBackgroundColor: '#ff1493',
        pointBoederColor: '#fff',
        data: [50, 30, 100, 10, 100, 70, 60],
      },
  ],
}

export const RadarPlot: FC = () => {
  return <div>
      <Radar data={data} />
  </div>
}
