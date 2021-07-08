import React, { useRef } from 'react';

function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch();
  }

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback" ref={feedbackInputRef}>
            Your Feedback
          </label>
          <textarea id="feedback" rows="5" />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default Home;
