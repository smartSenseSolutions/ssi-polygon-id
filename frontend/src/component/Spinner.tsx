export const Spinner = ({ status }: { status: string }) => {
  // used from : https:codepen.io/nikhil8krishnan/pen/rVoXJa
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#202323] opacity-75 flex flex-col items-center justify-center">
      <div className="h-[200px] w-[200px]">
        <svg
          version="1.1"
          id="L6"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <rect fill="none" stroke="#fff" x="25" y="25" width="50" height="50">
            <animateTransform
              attributeName="transform"
              dur="0.5s"
              from="0 50 50"
              to="180 50 50"
              type="rotate"
              id="strokeBox"
              attributeType="XML"
              begin="rectBox.end"
            />
          </rect>
          <rect x="27" y="27" fill="#fff" width="46" height="50">
            <animate
              attributeName="height"
              dur="1.3s"
              attributeType="XML"
              from="50"
              to="0"
              id="rectBox"
              fill="freeze"
              begin="0s;strokeBox.end"
            />
          </rect>
        </svg>
      </div>
      <h2 className="text-center text-white text-xl font-semibold">
        <p className="w-auto text-center text-white">{status}</p>
      </h2>
    </div>
  );
};
