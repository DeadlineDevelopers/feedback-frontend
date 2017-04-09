import React from 'react';
import FeedbackForm from 'modules/feedback/form/FeedbackForm';

const onFeedbackFormSubmit = (values) => {
  // TODO Send values to MW
  console.log(values);
};

const Feedback = () => (
  <div className="feedback-page">
    <FeedbackForm onSubmit={onFeedbackFormSubmit} />
  </div>
);

export default Feedback;
