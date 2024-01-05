type CredContainerProps = {
  children: React.ReactNode;
  logo: string;
};
const CredContainer = ({ children, logo }: CredContainerProps) => {
  return (
    <div className="flex flex-row h-full justify-between bg-[#3A3B3B] rounded-lg p-2 w-full shadow">
      <div className="w-4/5 flex items-center px-10 h-full">{children}</div>
      <div className="bg-[#202223] hidden lg:flex max-w-[20%] rounded-r-lg flex-col justify-center h-full select-none">
        <img className="p-4 h-[450px]" src={logo} style={{ opacity: 1 }} />
      </div>
    </div>
  );
};

export default CredContainer;
