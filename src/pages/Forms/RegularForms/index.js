import React from "react";
import moment from "moment";
import SpeechRecognition from "react-speech-recognition";
import StripedTable from "../../Tables/RegularTables/StripedTable";

class StackedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [{ desc: "Dr Rey Atrasou" }]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var { dados } = this.state;
    dados.push({ desc: this.input.value });
    this.setState({ dados: dados });
  }

  render() {
    const {
      submitting,
      startListening,
      stopListening,
      listening,
      transcript,
      match
    } = this.props;

    var dados = JSON.parse(match.params.dados);
    return (
      <div className="card">
        <div className="header">
          <h2>{dados.title}</h2>
          <br />
          <h4>{dados.desc}</h4>
          <h6>
            De {moment(dados.start).format("DD/MM/YYYY")} até{" "}
            {moment(dados.end).format("DD/MM/YYYY")}
          </h6>
        </div>

        <div className="content">
          <div className="form-group">
            <label className="control-label">Registrar histórico</label>
            <input
              className="form-control"
              name="historico"
              type="text"
              ref={(ref) => {this.input = ref}}
              value={transcript}
            />
          </div>

          <button
            type="button"
            className="btn btn-fill btn-info"
            onClick={() => {
              listening ? stopListening() : startListening();
            }}
            style={
              !listening
                ? {
                    backgroundColor: "#f03a37",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                    marginRight: "5px"
                  }
                : {
                    backgroundColor: "#f03a37",
                    color: "white",
                    border: "none",
                    marginRight: "5px"
                  }
            }
          >
            {listening ? "Ouvindo..." : <i className="pe-7s-micro" />}
          </button>

          <button
            type="submit"
            disable={listening}
            className="btn btn-fill btn-info"
            disabled={submitting}
            onClick={this.handleClick}
          >
            Salvar
          </button>
          <StripedTable data={this.state.dados || []} filter={dados} />
        </div>
      </div>
    );
  }
}

const options = {
  autoStart: false
};

export default SpeechRecognition(options)(StackedForm);
