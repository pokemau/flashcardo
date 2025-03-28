type InvalidMessageProps = {
  msg: string;
};

const InvalidMessage: React.FC<InvalidMessageProps> = ({ msg }) => {
  return (
    <div className="my-1 text-red-600">
      <p>{msg}</p>
    </div>
  );
};

export default InvalidMessage;
