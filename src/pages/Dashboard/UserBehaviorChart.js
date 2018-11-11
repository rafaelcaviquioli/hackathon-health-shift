import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: ['03/11', '04/11', '05/11', '06/11', '07/11', '08/11', '09/11', '10/11'],
  series: [
    [5, 4, 3, 5, 3, 3, 4, 4],
    [1, 0, 2, 2, 1, 0, 0, 1]
  ]
};

let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

let responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const UserBehaviorChart = () => (
  <div className="card ">
    <div className="header">
      <h4 className="title">Avaliações em troca de plantão</h4>
    </div>
    <div className="content">
      <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />

    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Positiva
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Negativa
        </div>
      </div>
    </div>
  </div>
);

export default UserBehaviorChart;