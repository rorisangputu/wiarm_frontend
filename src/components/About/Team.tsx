const Team = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex flex-row items-center gap-5">
            <hr className="w-12 border-slate-400" />
            <h1 className="font-medium tracking-[0.2em] text-md text-green-900 uppercase">
              Our team
            </h1>
            <hr className="w-12 border-slate-400" />
          </div>
          <div className="flex flex-col text-center gap-3">
            <h2 className="capitalize text-3xl py-3 md:max-w-lg md:text-4xl md:py-5 font-sans font-semibold">
              Our team of generous philanthropists who make it possible
            </h2>
            <p className="text-slate-600 text-lg font-sans">
              Meet our team of heroes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-sans">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-50 h-50 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-md text-green-800">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const teamMembers = [
  {
    name: "Thandiswa Mokoena",
    role: "Founder & Director",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Naledi Khumalo",
    role: "Head of Community Development",
    image:
      "https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Zanele Dlamini",
    role: "Food Security Coordinator",
    image:
      "https://images.pexels.com/photos/31848879/pexels-photo-31848879/free-photo-of-elegant-portrait-of-a-woman-in-pink-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Buhle Ngubane",
    role: "Policy & Advocacy Lead",
    image:
      "https://images.pexels.com/photos/3746226/pexels-photo-3746226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Lerato Sebe",
    role: "Education & Outreach Officer",
    image:
      "https://images.pexels.com/photos/31841448/pexels-photo-31841448/free-photo-of-elegant-portrait-of-a-young-woman-in-blue-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ayanda Radebe",
    role: "Youth Programs Coordinator",
    image:
      "https://images.pexels.com/photos/3785991/pexels-photo-3785991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
