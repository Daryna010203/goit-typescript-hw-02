import css from './ErrorMessage.module.css';

const ErrorMessage = ({ error }: any) => {
  return (
    <div>
      <p>
        Oops, some error occured &quot;{error}&quot;. Please, try again later
        🤷‍♂️.
      </p>
    </div>
  );
};

export default ErrorMessage;
