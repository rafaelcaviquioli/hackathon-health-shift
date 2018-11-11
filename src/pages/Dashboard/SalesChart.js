import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

let dataSales = {
  labels: ['03/11', '04/11', '05/11', '06/11', '07/11', '08/11', '09/11', '10/11'],
  series: [
    [2, 0, 0, 1, 4, 3, 0, 3, 2, 0, 0, 1],
    [1, 1, 0, 0, 2, 1, 0, 2, 1, 0, 0, 2],
  ]
};

let optionsSales = {
  lineSmooth: true,
  low: 0,
  high: 5,
  showArea: true,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 5
  }),
  showLine: false,
  showPoint: false
};

let responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const SalesChart = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">Atrasos e hora extra</h4>
    </div>
    <div className="content">
      <ChartistGraph data={dataSales} options={optionsSales} responsiveOptions={responsiveSales} type="Line" className="ct-chart" />
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Atraso na chegada
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Hora extra na saída
        </div>
      </div>
    </div>
  </div>
);

export default SalesChart;