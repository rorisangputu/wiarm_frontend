import action_bg from "../assets/GetInvolved.png";

const Action = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[40vh] flex justify-center">
      <img
        src={action_bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-[90%] mx-auto py-10 relative z-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-5">
            <hr className="w-12 border-slate-300" />
            <h1 className="font-sans text-md text-green-900 font-medium tracking-[0.2em] uppercase">
              Join Us!
            </h1>
            <hr className="w-12 border-slate-300" />
          </div>
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-600 leading-10 md:leading-12 tracking-tight capitalize">
              Become a part of this life-changing journey.
            </h2>
            <p className="text-gray-600 font-sans px-5 md:text-lg">
              Join us as we embark on the road to reclaiming our land.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#232d25] text-[#dddddd] font-medium py-3 px-5 md:py-5 md:px-7 md:text-lg font-sans capitalize rounded-xl">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
