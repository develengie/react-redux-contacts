interface ErrorMessageProps {
    error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return <h2 className="text-danger">{error}</h2>;
};

export default ErrorMessage;
