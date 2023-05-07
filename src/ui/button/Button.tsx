import { MouseEvent } from "react";

type ButtonProps = {
  btnFunc: (e?: boolean | number | string) => void;
  btnTitle: string;
};

export const Button: React.FC<ButtonProps> = ({ btnFunc, btnTitle }) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => btnFunc()}
        className="text-[1rem] sm:text-lg min-w-[20vw] md:min-w-[8rem] cursor-pointer bg-primary-btn mx-1 
        py-1 px-2 rounded my-[5px] hover:bg-[#a77aaf] transition-all 
        duration-100 shadow-md"
      >
        {btnTitle}
      </button>
    </div>
  );
};
