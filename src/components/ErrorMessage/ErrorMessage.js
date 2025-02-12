import "./ErrorMessage.css";
const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-text">
        {message || "Something went wrong. Please try again!"}
      </p>
    </div>
  );
};

export default ErrorMessage;
