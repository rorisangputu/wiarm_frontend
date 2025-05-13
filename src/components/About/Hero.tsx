import african_woman from "../../assets/african-women.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[55vh] md:h-[35vh] py-10 relative flex bg-gray-900 text-white">
      <img
        src={african_woman}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col gap-2 pt-24">
          <p className="uppercase text-xs md:text-sm font-medium text-green-500 tracking-[0.1em]">
            Rooted in Resistance, Growing in Power.
          </p>
          <h1 className="capitalize text-3xl md:text-4xl font-bold font-sans">
            Reclaiming Land. Reshaping Futures. Restoring Dignity.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
