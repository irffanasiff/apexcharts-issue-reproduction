import dynamic from 'next/dynamic';
import React from 'react';
import styles from '../styles/Home.module.css';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
export enum curveEnum {
  SMOOTH = 'smooth',
  STRAIGHT = 'straight',
  STEPLINE = 'stepline',
}

export enum xaxisType {
  CATEGORY = 'category',
  DATETIME = 'datetime',
  NUMERIC = 'numeric',
}

export default function Home() {
  const graphColor = ['#00A67E'];
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: 'series1',
        data: [20, 50, 91, 40, 55, 30],
      },
    ],
    options: {
      chart: {
        height: 70,
        width: 130,
        toolbar: {
          show: false,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      stroke: {
        colors: graphColor,
        curve: curveEnum.SMOOTH,
        width: 1,
      },
      fill: {
        colors: graphColor,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 1,
          gradientToColors: graphColor,
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 100],
          colorStops: [],
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        show: false,
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        crosshairs: {
          show: false,
        },
        labels: {
          show: false,
        },
        type: xaxisType.DATETIME,
        categories: [
          '2018-09-19T06:30:00.000Z',
          '2018-09-19T07:00:00.000Z',
          '2018-09-19T08:30:00.000Z',
          '2018-09-19T09:30:00.000Z',
          '2018-09-19T10:30:00.000Z',
          '2018-09-19T11:30:00.000Z',
        ],
      },
      grid: { show: false },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        theme: 'dark',
        custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
          return (
            '<div class="arrow_box">' +
            '<span style="background-color: white; color: black; padding: 10px;">' +
            series[seriesIndex][dataPointIndex] +
            '</span>' +
            '</div>'
          );
        },
        style: {
          fontSize: '12px',
          shadow: '0px',
        },
        x: {
          show: false,
          format: 'dd/MM/yy HH:mm',
        },
        y: {
          show: true,
          formatter: function (
            value: any,
            { series, seriesIndex, dataPointIndex, w }: any
          ) {
            return value;
          },
        },
        marker: {
          show: false,
        },
      },
    },
  });
  return (
    <div className={styles.container}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={70}
        width={130}
      />
    </div>
  );
}
