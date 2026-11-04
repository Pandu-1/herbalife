
import AboutBanner from "../assets/AboutBanner.png";
import AboutMobile from "../assets/AboutMobile.png";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Leaf,
  Star,
  Users,
  Target,
  Scale,
  Dumbbell,
  Apple,
  Heart,
  CalendarDays,
  Trophy,
} from "lucide-react";

// ---------------- DATA ----------------

const journeyItems = [
  {
    icon: Leaf,
    title: "Became a Herbalife Independent Associate",
    description: "Started my wellness journey to help others.",
  },
  {
    icon: Star,
    title: "Achieved World Team",
    description: "Recognized for my consistent effort and team growth.",
  },
  {
    icon: Users,
    title: "Helping 500+ People",
    description:
      "Supported many in weight management, fitness and better nutrition.",
  },
  {
    icon: Target,
    title: "Continuing the Mission",
    description: "To create a healthier and happier community.",
  },
];

const expertiseItems = [
  { icon: Scale, title: "Weight", subtitle: "Management" },
  { icon: Dumbbell, title: "Energy", subtitle: "& Fitness" },
  { icon: Apple, title: "Better", subtitle: "Nutrition" },
  { icon: Heart, title: "Overall", subtitle: "Wellness" },
];

const statistics = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: CalendarDays, value: "5+ Years", label: "Experience" },
  { icon: Trophy, value: "World Team", label: "Member" },
  { icon: Leaf, value: "Healthier", label: "Communities" },
];

// ---------------- JOURNEY ----------------

const Journey = () => (
  <div
    id="journey"
    className="h-full rounded-3xl border border-green-100
    bg-white p-5 shadow-md md:p-5 lg:p-7"
  >
    <h2 className="mb-6 text-2xl font-extrabold text-green-950 lg:text-4xl">
      My Journey
    </h2>

    <div className="relative space-y-5">
      <div className="absolute bottom-5 left-[19px] top-5 w-1 bg-green-200" />

      {journeyItems.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="relative flex gap-4">
            <div
              className="relative z-10 flex h-10 w-10 shrink-0
              items-center justify-center rounded-full
              bg-green-700 text-white shadow-sm"
            >
              <Icon size={21} />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-bold text-green-950 lg:text-lg">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-gray-700 lg:text-base">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// ---------------- EXPERTISE ----------------

const Expertise = () => (
  <div
    className="h-full rounded-3xl border border-green-100
    bg-white p-5 shadow-md lg:p-7"
  >
    <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
      <Leaf size={34} className="text-green-600" />

      <h2 className="text-2xl font-extrabold text-green-950 lg:text-3xl">
        My Expertise
      </h2>
    </div>

    <div className="grid grid-cols-2">
      {expertiseItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`flex flex-col items-center justify-center
            gap-2 py-6 text-center
            ${index % 2 === 0 ? "border-r border-green-100" : ""}
            ${index < 2 ? "border-b border-green-100" : ""}`}
          >
            <Icon size={36} className="text-green-700" />

            <h3 className="text-sm font-bold leading-tight text-green-950 lg:text-lg">
              {item.title}
              <br />
              {item.subtitle}
            </h3>
          </div>
        );
      })}
    </div>
  </div>
);

// ---------------- STATISTICS ----------------

const Statistics = () => (
  <div
    className="grid grid-cols-2 rounded-3xl
    bg-gradient-to-r from-green-950 to-green-800
    px-3 py-5 text-white shadow-md md:grid-cols-2 lg:grid-cols-4"
  >
    {statistics.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.value}
          className={`flex flex-col items-center justify-center
          gap-1 px-2 py-4 text-center
          ${index % 2 === 0 ? "border-r border-white/30" : ""}
          ${index < 2 ? "border-b border-white/30 lg:border-b-0" : ""}
          lg:border-r lg:border-white/40
          ${index === 3 ? "lg:border-r-0" : ""}`}
        >
          <Icon size={34} strokeWidth={1.8} />

          <h3 className="text-lg font-extrabold lg:text-2xl">
            {item.value}
          </h3>

          <p className="text-xs lg:text-lg">{item.label}</p>
        </div>
      );
    })}
  </div>
);

// ---------------- MOBILE ABOUT ----------------

const MobileAbout = () => (
  <section
    className="w-full overflow-hidden
    bg-gradient-to-b from-green-50 to-white md:hidden"
  >
    {/* Mobile Banner */}

    <div className="relative w-full">
      <img
        src={AboutMobile}
        alt="Herbalife Wellness Coach"
        className="block h-auto w-full"
      />

      {/* Content inside green empty space */}

      <div
        className="absolute inset-x-0 bottom-0
        flex flex-col items-center px-4 pb-[5%] text-center"
      >
        <h1
          className="text-2xl font-extrabold leading-tight
          text-green-950 sm:text-3xl"
        >
          About Me
        </h1>

        <p
          className="mx-auto mt-1.5 max-w-[340px]
          text-xs leading-relaxed text-gray-900
          sm:mt-2 sm:text-sm"
        >
          Hello This is Alekhya... A Wellness Coach, Mentor and Herbalife
          Independent Associate committed to helping people live healthier,
          happier lives.
        </p>

        {/* Buttons */}

        <div
          className="mt-3 flex w-full flex-wrap
          items-center justify-center gap-2 sm:mt-4 sm:gap-3"
        >
          <button
            onClick={() =>
              document.getElementById("journey")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="journey-btn inline-flex items-center
            justify-center gap-2 rounded-full
            px-4 py-2.5 text-xs font-bold sm:px-5 sm:py-3 sm:text-sm"
          >
            My Journey
            <ArrowRight size={17} className="arrow-icon" />
          </button>

          <Link
            to="/contact"
            className="join-btn inline-flex items-center
            justify-center whitespace-nowrap rounded-full
            px-4 py-2.5 text-xs font-bold sm:px-5 sm:py-3 sm:text-sm"
          >
            Join with Me
          </Link>
        </div>
      </div>
    </div>

    {/* Mobile Content */}

    <div className="space-y-5 px-4 py-6">
      <Journey />

      <Expertise />

      {/* Achievements */}

      <div>
        <h2
          className="mb-4 text-center text-2xl
          font-extrabold text-green-950"
        >
          My Achievements
        </h2>

        <Statistics />
      </div>
    </div>
  </section>
);

// ---------------- TABLET + DESKTOP ABOUT ----------------

const DesktopAbout = () => (
  <section
    className="hidden w-full
    bg-gradient-to-b from-green-50 to-white md:block"
  >
    {/* HERO SECTION */}

    <div className="w-full px-4 py-3 md:px-5 lg:px-8">
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src={AboutBanner}
          alt="Herbalife Wellness Coach"
          className="block h-auto w-full"
        />

        {/* HERO CONTENT */}

        <div className="absolute inset-0 flex items-center">
          <div className="w-[48%] px-4 md:px-6 lg:px-12 xl:px-16">
            <h1
              className="text-2xl font-extrabold leading-tight
              text-green-950 md:text-3xl lg:text-5xl xl:text-6xl"
            >
              About Me
            </h1>

            <p
              className="mt-2 text-xs leading-normal
              tracking-normal text-gray-900
              md:mt-3 md:text-sm lg:mt-4 lg:text-xl"
            >
              Hello This is Alekhya... A Wellness Coach, Mentor and Herbalife
              Independent Associate committed to helping people live healthier,
              happier lives.
            </p>

            {/* BUTTONS */}

            <div
              className="mt-3 flex flex-nowrap items-center gap-2
              md:mt-4 md:gap-2 lg:mt-6 lg:gap-5"
            >
              <button
                onClick={() =>
                  document.getElementById("journey")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="journey-btn flex items-center
                justify-center gap-1 whitespace-nowrap
                rounded-full px-3 py-2 text-xs font-bold
                md:gap-2 md:px-3 md:py-2.5
                lg:px-8 lg:py-4 lg:text-lg"
              >
                My Journey
                <ArrowRight size={18} className="arrow-icon" />
              </button>

              <Link
                to="/contact"
                className="join-btn whitespace-nowrap rounded-full
                px-3 py-2 text-xs font-bold transition-all duration-300
                hover:bg-[#00852b] hover:text-white
                md:px-3 md:py-2.5 md:text-xs
                lg:px-8 lg:py-4 lg:text-lg"
              >
                Join with Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* JOURNEY + EXPERTISE + STATISTICS */}

    <div
      className="mx-auto max-w-[1500px]
      space-y-6 px-4 py-5 md:px-6 lg:px-10 lg:py-7"
    >
      <div
        className="grid grid-cols-[1.5fr_1fr]
        items-stretch gap-4 lg:gap-6"
      >
        <Journey />

        <Expertise />
      </div>

      <Statistics />
    </div>
  </section>
);

// ---------------- MAIN COMPONENT ----------------

const About = () => (
  <>
    <MobileAbout />
    <DesktopAbout />
  </>
);

export default About;
