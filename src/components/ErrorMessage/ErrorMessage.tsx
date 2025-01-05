import css from './ErrorMessage.module.css';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  console.log(error);
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
