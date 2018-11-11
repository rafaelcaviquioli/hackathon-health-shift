import React from 'react';
import ChartistGraph from 'react-chartist';


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const EmailStatistic = () => {

  let dataPreferences = {
    labels: ['10%', '35%', '31%', '14%'],
    series: [20, 35, 31, 14]
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Plantões por colaboradores </h4>
      </div>
      <div className="content">

        <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />
      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Ronaldo
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Luis
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning"></i> Maria
          </div>
          <div className="item">
            <i className="fa fa-circle text-success"></i> Joana
          </div>
        </div>
      </div>
    </div>

  );
};

export default EmailStatistic;