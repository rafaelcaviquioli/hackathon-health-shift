import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  return errors;
};

const StackedForm = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
    <div className="card">
      <div className="header">
        <h4>Plantão de Karina</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="control-label">Registrar histórico</label>
            <Field
              name="email"
              type="email"
              component={renderField} />
          </div>

          <button type="submit" className="btn btn-fill btn-info" disabled={submitting}
            style={{
              backgroundColor: '#f03a37',
              color: 'white',
              border: 'none',
              fontSize: '20px',
              marginRight: '5px',

            }}>
            <i className="pe-7s-micro"></i>
          </button>
 
          <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Salvar</button>
        </form>
      </div>
    </div>
  );

export default reduxForm({
  form: 'stackedForm',
  validate
})(StackedForm)