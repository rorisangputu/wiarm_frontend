import action_bg from "../../assets/GetInvolved.png";

const Involved = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[40vh] flex justify-center">
      <img
        src={action_bg}
        alt="Get involved background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-[90%] mx-auto py-10 relative z-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-5">
            <hr className="w-12 border-slate-300" />
            <h1 className="font-sans text-md text-green-900 font-medium tracking-[0.2em] uppercase">
              Get Involved
            </h1>
            <hr className="w-12 border-slate-300" />
          </div>
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl font-medium text-gray-600 leading-10 tracking-tight capitalize">
              Be part of a movement that cultivates change
            </h2>
            <p className="text-gray-600 font-sans px-5 max-w-2xl">
              Whether you volunteer, donate, or help us spread the word—your
              support drives real transformation. Join hands with us to protect
              land, uplift communities, and grow a more just food system.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#232d25] text-[#dddddd] font-medium py-3 px-5 font-sans capitalize rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involved;
