import React from 'react';
import SpeechRecognition from 'react-speech-recognition'

const StackedForm = ({
  submitting,
  handleSubmit,
  transcript,
  startListening,
  stopListening,
  listening
}) => (
    <div className="card">
      <div className="header">
        <h4>Plantão de Karina</h4>
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

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(StackedForm);
