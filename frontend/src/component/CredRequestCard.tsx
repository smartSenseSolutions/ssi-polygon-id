type CredInfoProps = {
  title: string;
  logo: any;
  content: string;
};
export const CredReqCard = ({ title, logo, content }: CredInfoProps) => {
  return (
    <div className="bg-[#202223] m-2 px-4 py-2 w-96 rounded-lg shadow border border-1 border-[#333]">
      <div className="mt-[2px]">
        <h1 className="font-semibold text-white">{title}</h1>
        <hr className="text-[#333] mt-[2px]" />
      </div>
      <div className="flex items-center justify-between mt-[10px]">
        <div className="flex items-center content-center justify-center">
          <div className="h-[50px] mx-[10px] my-[3px] bg-[#333] rounded-lg flex items-center justify-center">
            <img className="h-[80%] w-[40px] m-[5px]" src={logo} alt="icon" />
          </div>

          <div className="text text-white ml-2">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
