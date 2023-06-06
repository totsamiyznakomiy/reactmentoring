const LoadingError = ({ message }) => {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <div className="text-4xl">Oh, console.error</div>
        <div>{message}</div>
      </div>
    );
  };
  
  export default LoadingError;