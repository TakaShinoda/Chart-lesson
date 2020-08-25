import React, { FC } from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['React', 'React', 'React', 'React', 'React', 'React'],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b',
      pointBoederColor: '#fff',
      data: [100, 50, 30, 90, 50, 70, 40],
    },
  ],
}

export const RadarPlot: FC = () => {
  return <div>
      <Radar data={data} />
  </div>
}
