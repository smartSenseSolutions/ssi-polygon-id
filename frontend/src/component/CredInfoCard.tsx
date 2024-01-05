type ShareableItem = {
  icon: string;
  text: string;
};

type CredProps = {
  title: string;
  icon: any;
  content: string;
  shareableItems: ShareableItem[];
  nav: () => void;
};

export const CredCard = ({
  title,
  icon,
  content,
  shareableItems,
  nav,
}: CredProps) => {
  return (
    <div className="flex flex-col bg-[#141414] rounded-lg my-2 p-4 lg:p-4 lg:px-8 mt-2 h-auto shadow-sm">
      <h1 className="flex-none font-bold text-lg mb-2 h-6">{title}</h1>
      <div className="flex h-[130px] mt-[10px] gap-[20px]">
        <img className="w-[240px]" src={icon} alt={title} />
        <p className="block  text-base py-2 px-4 w-[620px]">{content}</p>
        <div className="flex flex-col">
          <h2 className="text-base font-semibold mb-2">
            You'll be asked to share
          </h2>
          {shareableItems.map(({ icon, text }, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-row items-center mb-[10px]"
            >
              <img
                className="w-7 h-7 mr-4"
                src={icon}
                alt={`credential-icon-${itemIndex}`}
              />
              <p className="text-sm">{text}&nbsp;</p>
            </div>
          ))}
          <div className="flex flex-1 items-end justify-end">
            <div className="has-tooltip" onClick={() => nav()}>
              <button className="text-sm bg-white text-black px-3 py-1 rounded font-semibold shadow-sm opacity-100">
                GET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
