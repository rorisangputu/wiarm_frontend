import { Link } from "react-router-dom";
import blogImage from "../../assets/land.webp"; // Replace with your image path
import Button from "../Button";

const BlogCTA = () => {
  return (
    <div className="w-full bg-[#f4f4f4] py-10 md:py-16 ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={blogImage}
            alt="WiARM Blog Teaser"
            className="w-full h-[350px] md:h-[400px] object-cover rounded-3xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
          <p className="text-sm uppercase text-green-800 font-normal tracking-[0.3em]">
            Behind the Scene
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How We Mobilize: Building Power from the Ground Up
          </h2>
          {/* Author and Date */}
          <div className="text-sm text-gray-600 mb-1">
            By <span className="font-medium text-green-900">Zanele Mkhize</span>{" "}
            · March 30, 2025
          </div>
          <p className="text-gray-700 font-sans text-sm md:text-base">
            Get an inside look at how WiARM organizes on the ground—from early
            morning farm work to late-night strategy circles. This blog post
            shares the spirit, sweat, and sisterhood that fuels our movement and
            the small victories that keep us going.
          </p>
          <Link to="/blogs">
            <Button text={"View All Blogs"} styles="mt-4 md:justify-end" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCTA;
