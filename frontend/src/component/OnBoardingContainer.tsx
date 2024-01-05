type OnboardingContainerProps = {
  children: React.ReactNode;
  logo: string;
};
export const OnBoardingContainer = ({
  children,
  logo,
}: OnboardingContainerProps) => {
  return (
    <div
      className="flex flex-row h-full justify-between bg-[#3A3B3B] rounded-lg p-2 w-full  shadow"
      style={{ minHeight: "620px", height: "65vh", maxHeight: "940px" }}
    >
      <div className="w-full lg:w-2/3 flex items-center px-10 h-full">
        {children}
      </div>
      <div className="bg-[#202223] hidden lg:flex lg:w-1/3 rounded-r-lg flex-col justify-center h-full select-none">
        <img className="p-4" src={logo} style={{ opacity: 1 }} />
      </div>
    </div>
  );
};
