import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from 'components/formComponents';
import RaisedButton from 'material-ui/RaisedButton';

const FeedbackForm = (props) => (
  <form className="feedback-form" onSubmit={props.handleSubmit}>
    { /* TODO Get form fields from MW */ }
    <Field
      name="input"
      component={renderInput}
      className="feedback-form-input"
      type="text"
      autoComplete="off"
      floatingLabelText="Tuvaletleri nasıl buldunuz?"
      fullWidth
    />
    <RaisedButton
      type="submit"
      className="feedback-form-submit-button"
      label="Kaydet"
      primary
      fullWidth
    />
  </form>
);

export default reduxForm({
  form: 'FeedbackForm'
})(FeedbackForm);
