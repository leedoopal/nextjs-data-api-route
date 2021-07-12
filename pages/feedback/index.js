import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  const { feedbackItems } = props;
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button
              type="button"
              onClick={loadFeedbackHandler.bind(null, item.id)}
            >
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
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
