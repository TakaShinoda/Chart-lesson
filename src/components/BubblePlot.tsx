import React, { FC } from 'react'
import { Bubble } from 'react-chartjs-2'

const data = {
  datasets: [
    {
      label: 'React',
      backgroundColor: '#4169e1',
      borderColor: 'trancparent',
      data: [{ x: 20, y: 866, r: 6350000 / 100000 }],
    },
    {
      label: 'Angular',
      backgroundColor: '#c71585',
      borderColor: 'trancparent',
      data: [{ x: 30, y: 389, r: 410000 / 100000 }],
    },
    {
      label: 'Vue',
      backgroundColor: '#008080',
      borderColor: 'trancparent',
      data: [{ x: 10, y: 749, r: 1320000 / 100000 }],
    },
  ],
}

const options = {
  title: {
    display: true,
    fontsize: 18,
    text: 'npm downloads comparison (global)',
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Number of job offer in LinkedLn (Japan)',
          fontSize: 18,
        },
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14,
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Learning Cost',
          fontSize: 18,
        },
        ticks: {
          min: 5,
          max: 35,
          fontSize: 14,
        },
      },
    ],
  },
}

export const BubblePlot: FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  )
}
