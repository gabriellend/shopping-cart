import './Error.css';

const Error = () => {
  return (
    <div className="error-message">
      <h1>Oops! Something Went Wrong</h1>
      <div className="divider"></div>
      <p>We were unable to load the inventory. Please try again.</p>
      <button className="btn-retry" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
};

export default Error;
