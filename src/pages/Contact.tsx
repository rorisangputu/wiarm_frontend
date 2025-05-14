import contact_bg from "../assets/GetInvolved.png";

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[40vh] flex justify-center items-center text-white">
        <img
          src={contact_bg}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="relative z-10 text-center text-green-800">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-md">We’d love to hear from you!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-[90%] max-w-6xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-900">
            Send us a message
          </h2>
          <form className="flex flex-col gap-5 md:max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900">
              <option value="">Select a topic</option>
              <option value="volunteering">Volunteering</option>
              <option value="donations">Donations</option>
              <option value="media">Media</option>
              <option value="partnerships">Partnerships</option>
              <option value="general">General Inquiry</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            ></textarea>
            <button
              type="submit"
              className="bg-green-900 text-white py-3 px-6 rounded-md hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info / Map */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-green-900">Our Office</h2>
          <p className="text-gray-700">
            123 Community Lane
            <br />
            Johannesburg, South Africa
            <br />
            2001
          </p>
          <p className="text-gray-700">Phone: +27 11 123 4567</p>
          <p className="text-gray-700">Email: info@ourcampaign.org</p>
          <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
            {/* Embed a real map if available */}
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22881.58033242824!2d28.0337!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b0e574c4317%3A0xa6a12f70a728b57b!2sJohannesburg!5e0!3m2!1sen!2sza!4v1714486998863"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
