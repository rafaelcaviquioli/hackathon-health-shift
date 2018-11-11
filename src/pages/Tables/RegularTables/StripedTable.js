import React from "react";
import moment from "moment";

const StripedTable = ({ data }) => {
  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Historico</h4>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Observacoes</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StripedTable;
