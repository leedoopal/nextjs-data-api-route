import React from 'react';
import PropTypes from 'prop-types';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  const { feedbackItems } = props;
  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

FeedbackPage.propTypes = {
  feedbackItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackPage;
