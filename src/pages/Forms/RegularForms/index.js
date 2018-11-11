import React from 'react';
import SpeechRecognition from 'react-speech-recognition'
import moment from 'moment';

class StackedForm extends React.Component {
  render() {
    const {
      submitting,
      handleSubmit,
      transcript,
      startListening,
      stopListening,
      listening,
      match
    } = this.props;

    var dados = JSON.parse(match.params.dados);
    console.log(dados);

    return (
      <div className="card">
        <div className="header">
          <h2>{dados.title}</h2>
          <br />
          <h4>{dados.desc}</h4>
          <h6>De {moment(dados.start).format('DD/MM/YYYY')} até {moment(dados.end).format('DD/MM/YYYY')}</h6>
        </div>

        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="control-label">Registrar histórico</label>
              <input
                className="form-control"
                name="historico"
                type="text"
                value={transcript}
              />
            </div>

            <button
              type="button"
              className="btn btn-fill btn-info"
              onClick={() => { listening ? stopListening() : startListening() }}
              style={!listening ? {
                backgroundColor: '#f03a37',
                color: 'white',
                border: 'none',
                fontSize: '20px',
                marginRight: '5px',
              } :
                {
                  backgroundColor: '#f03a37',
                  color: 'white',
                  border: 'none',
                  marginRight: '5px',
                }}>
              {listening ? 'Ouvindo...' : <i className="pe-7s-micro"></i>}
            </button>

            <button type="submit" disable={listening} className="btn btn-fill btn-info" disabled={submitting}>Salvar</button>
          </form>
        </div>
      </div>
    );
  }
}

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(StackedForm)