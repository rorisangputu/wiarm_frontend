import wheatbg from "../../assets/wheatbg.png";

const MissionValues = () => {
  return (
    <div className="w-full bg-green-900 py-20 md:py-24 relative overflow-hidden">
      {/* Background Image Positioned Behind Content */}
      <img
        src={wheatbg}
        alt="wheatbg"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Content Layer */}
      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col text-gray-100">
          <div className="flex items-center gap-4 justify-center mb-5">
            <hr className="w-12 border-t-2 border-[#cecece]" />
            <h1 className="uppercase font-medium tracking-[0.2em] md:text-xl md:py-10">
              Mission & Values
            </h1>
            <hr className="w-12 border-t-2 border-[#cecece]" />
          </div>

          <div className="flex flex-col gap-10 md:py-10 md:flex-row md:text-lg mx-auto">
            <div className="flex flex-col gap-5">
              <h1 className="text-gray-100 text-2xl font-medium">
                Our Mission
              </h1>
              <ul className="list-disc list-outside ml-5 space-y-2 font-light">
                <li>
                  To empower Black women in rural communities to own and work
                  the land
                </li>
                <li>
                  To challenge the systems that exclude us from agriculture
                </li>
                <li>
                  To cultivate a future where our communities are fed,
                  sustainable, and self-sufficient
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-medium">Our Values</h1>
              <ul className="list-disc list-outside ml-5 space-y-2 font-light">
                <li>
                  To empower Black women in rural communities to own and work
                  the land
                </li>
                <li>
                  To challenge the systems that exclude us from agriculture
                </li>
                <li>
                  To cultivate a future where our communities are fed,
                  sustainable, and self-sufficient
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionValues;
