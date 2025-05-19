import farmingWomen from "../../assets/woman_farming.webp";
import Button from "../Button";

const AboutSection = () => {
  return (
    <div className="w-full  py-16 md:py-20">
      <div className="w-[90%] mx-auto md:h-[60vh] lg:h-[70vh] flex flex-col justify-center">
        {/* Flex container with responsive direction */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 xl:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={farmingWomen}
              alt="Farming Women"
              className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover rounded-lg"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex items-center gap-4">
              <h1 className="uppercase font-medium tracking-[0.2em] text-green-800">
                About Us
              </h1>
              <hr className="w-12 border-t-2 border-gray-200" />
            </div>
            <div className="font-sans xl:max-w-2xl">
              <p className="font-extralight leading-7 text-3xl mb-3">
                <span className="font-medium">WiARM</span> is a collective of
                Black women dedicated to reclaiming our place in agriculture.
              </p>
              <p className="text-lg font-light leading-7">
                We believe that land is liberation and that food sovereignty is
                essential to self-determination.
              </p>
            </div>
            <div className="flex justify-start">
              <Button text={"Learn More"} styles="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
