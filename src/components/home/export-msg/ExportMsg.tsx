import { RefObject } from "react";

type ExportMsgProps = {
  exportMsgRef: RefObject<HTMLDivElement>;
};

const ExportMsg: React.FC<ExportMsgProps> = ({ exportMsgRef }) => {
  return (
    <div
      ref={exportMsgRef}
      className="bg-[#e7e7e7] inline-block p-2 rounded absolute top-0 
      scale-[0.1] invisible transition-all duration-[75ms] origin-top shadow-md 
      shadow-[#cfcfcf]"
    >
      <p>Export Success</p>
    </div>
  );
};

export default ExportMsg;
