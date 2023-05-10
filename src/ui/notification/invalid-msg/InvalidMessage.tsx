type InvalidMessageProps = {
  msg: string;
};

const InvalidMessage: React.FC<InvalidMessageProps> = ({ msg }) => {
  return (
    <div className="mt-2 text-red-600">
      <p>{msg}</p>
    </div>
  );
};

export default InvalidMessage;
