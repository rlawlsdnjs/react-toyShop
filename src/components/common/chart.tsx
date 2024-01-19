import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Market Value',
      },
    },
  },
  elements: {
    point: {
      radius: 5,
      hitRadius: 10,
      hoverRadius: 5,
      hoverBorderWidth: 2,
    },
  },
  tooltips: {
    enabled: true, // 툴팁 활성화
    mode: 'nearest', // 가장 가까운 아이템에 대한 툴팁 표시
    callbacks: {
      label: (tooltipItem, data) => {
        const value = `$${market[tooltipItem.index]}`;
        return `Market Value: ${value}`;
      },
    },
  },
};

const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const market = [107.3, 117.1, 123.1, 125.4, 128.5, 135.3, 142.5, 150.1];
export const data = {
  labels,
  datasets: [
    {
      label: '$ in billions',
      data: market.map((i) => {
        return i;
      }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 151 })),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
  ],
};
export const LineChart = () => {
  return <Line options={options} data={data} />;
};
