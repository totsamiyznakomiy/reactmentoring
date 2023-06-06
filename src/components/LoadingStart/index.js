const LoadingStart = ({ message }) => {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-4xl">Lading in progress!</div>
        <div>{message}</div>
        <img src="/public/gif/giphy.gif" alt="loading..." />
      </div>
    );
  };
  
  export default LoadingStart;

