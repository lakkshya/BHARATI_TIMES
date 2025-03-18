import { useEffect } from "react";
import {
  Microscope,
  Newspaper,
  Binoculars,
  KeyRound,
  Landmark,
  Cpu,
  Briefcase,
  HeartPulse,
  Clapperboard,
  Trophy,
  Globe,
  FileCheck,
  Fan,
  AlarmClockCheck,
  Users,
} from "lucide-react";

const AboutUs = () => {
  const topics = [
    {
      icon: <Newspaper className="w-8 h-8 text-red-600" />,
      title: "Breaking News",
      desc: "Stay updated with real-time news coverage.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: "Politics & Governance",
      desc: "Insights into national and international policies.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: "Technology & Innovation",
      desc: "Latest advancements in science, AI, and digital trends.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-600" />,
      title: "Business & Economy",
      desc: "Market trends, startups, and financial insights.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-pink-600" />,
      title: "Health & Wellness",
      desc: "Medical advancements, fitness, and lifestyle tips.",
    },
    {
      icon: <Clapperboard className="w-8 h-8 text-purple-600" />,
      title: "Entertainment & Culture",
      desc: "Film, music, literature, and celebrity news.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: "Sports Updates",
      desc: "Highlights from the world of athletics and competitions.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Global Affairs",
      desc: "Explore international developments and insights.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <section
        className="relative h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('../../aboutus.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center text-white !px-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest w-2/3">
            ABOUT US
          </h1>
          <p className="text-white text-base md:text-xl !mt-4 leading-relaxed md:w-2/3">
            Welcome to <strong>BharatiTimes</strong>, your trusted source for
            accurate and timely news from around the world. Our team of
            professional journalists is committed to delivering{" "}
            <span className="font-semibold">unbiased, in-depth coverage</span>
            on the latest trends, global events, technology, business, and more.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 !px-6 md:!px-20 !py-16">
        {/* Heading first on small screens */}
        <div className="lg:hidden flex items-center">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
        </div>

        <div className="lg:w-3/4">
          <ul className="!space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Microscope className="w-6 h-6 text-red-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Provide factual, well-researched, and reliable news content.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-blue-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Keep our readers informed about current events, trends, and
                developments across industries.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Binoculars className="w-6 h-6 text-green-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Offer in-depth analysis to help you understand complex global
                issues.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <KeyRound className="w-6 h-6 text-pink-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Uphold the principles of journalistic integrity, transparency,
                and objectivity.
              </span>
            </li>
          </ul>
        </div>

        {/* Heading on larger screens */}
        <div className="hidden lg:flex items-center lg:justify-end lg:w-1/4 lg:border-l-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-right">
            Our Mission
          </h2>
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-red-700 !px-6 md:!px-20 !py-16 text-white">
        <h2 className="text-xl md:text-3xl font-semibold text-center">
          What We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-gray-100 text-gray-800 rounded-xl shadow-lg !px-4 !py-6 text-center"
            >
              {item.icon}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm xs:text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 !px-6 md:!px-20 !py-16">
        <div className="flex items-center lg:w-1/4 lg:border-r-4">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
            Why Choose BharatiTimes?
          </h2>
        </div>

        <div className="lg:w-3/4 lg:!pl-8">
          <ul className="!space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-red-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Accuracy & Credibility – We fact-check all information before
                publishing.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Fan className="w-6 h-6 text-blue-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Unbiased Reporting – Our news is free from political and
                corporate influence.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <AlarmClockCheck className="w-6 h-6 text-green-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Timely Updates – We bring you breaking news as it happens.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-6 h-6 text-pink-600" />
              <span className="text-sm xs:text-base md:text-lg font-medium">
                Reader-Centric Approach – We value your opinions and strive to
                serve content that matters.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8 md:gap-16 bg-blue-950 text-white !px-6 md:!px-20 !py-10">
        <h2 className="text-xl md:text-3xl font-semibold text-center">
          Join Our Community
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-3/5">
            <p className="text-sm xs:text-base text-center md:text-xl md:text-left text-gray-300">
              We believe news should be a conversation, not a monologue.
              Subscribe to our newsletters, and become part of our growing
              community. Your feedback, opinions, and participation help us
              shape a better, more informed world.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full md:w-2/5">
            <form className="flex flex-col items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full !px-4 !py-2 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium !py-2 !px-6 rounded-lg shadow-md w-full"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center text-sm xs:text-base md:text-lg">
          <p className="">
            Thank You for Choosing BharatiTimes! We are honored to be your go-to
            source for news and information.
          </p>
          <p className="">💡 Stay informed, stay empowered! 🚀</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
