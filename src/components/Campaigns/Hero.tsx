import african_woman from "../../assets/GetInvolved.png";

const Hero = () => {
  return (
    <div className="w-full h-[60vh] md:h-[40vh] py-10 relative flex bg-gray-900 text-white">
      <img
        src={african_woman}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col gap-2 pt-24">
          <div className="flex flex-row justify-center items-center gap-4">
            <hr className="w-12 border-slate-300" />
            <p className="tracking-[0.23em] uppercase text-md font-medium text-green-200">
              Our campaigns
            </p>
            <hr className="w-12 border-slate-300" />
          </div>
          <h1 className="capitalize font-sans text-4xl md:text-5xl font-semibold text-center">
            Some Of Our Recent Campaigns That Helped Touch Lives
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
