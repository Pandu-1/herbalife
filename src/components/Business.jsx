
import React from "react";
import HeroBanner from "../assets/HeroBanner.png";
import MobileBanner from "../assets/MobileBanner.png";
import businessLaptop from "../assets/herbalife_laptop_mug.png";
import { Link } from "react-router-dom";

const benefits = [
  { icon: "₹", title: "Extra", subtitle: "Income" },
  { icon: "▦", title: "Flexible", subtitle: "Work Hours" },
  { icon: "♧", title: "Training &", subtitle: "Support" },
  { icon: "↗", title: "Personal", subtitle: "Growth" },
  { icon: "🏆", title: "Recognitions", subtitle: "& Rewards" },
];

const reasons = [
  {
    title: "Be Your Own Boss",
    description: "Work independently and at your own pace.",
  },
  {
    title: "Help People Live Healthier Lives",
    description:
      "Share trusted nutrition and wellness solutions.",
  },
  {
    title: "Learn & Grow",
    description:
      "Get product knowledge, business training and mentoring.",
  },
  {
    title: "Be Part of a Global Community",
    description:
      "Join a supportive network with recognition and growth opportunities.",
  },
];

const BusinessOpportunity = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f7fff5]">

      {/* ================= HERO SECTION ================= */}

      {/* Desktop & Tablet Banner */}
      <div className="relative hidden w-full md:block">

        {/* Full Image - No Cropping */}
        <img
          src={HeroBanner}
          alt="Herbalife Business Opportunity"
          className="block h-[380px] w-full object-cover object-top md:h-[400px] lg:h-[450px]"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">

          <div className="w-full px-8 md:px-[8%] lg:px-[8.8%]">
            <div className="max-w-[570px] ml-14">

              <h1 className="text-3xl font-extrabold leading-[1.12] text-[#073f1b] md:text-[38px] lg:text-[52px]">
                Build a Healthier
                <br />
                Future{" "}
                <span className="text-[#39a51c]">
                  with Herbalife
                </span>
              </h1>

              <p className="mt-4 max-w-[510px] text-sm leading-relaxed text-[#102d20] md:text-base lg:text-[21px]">
                Create an additional income, enjoy flexible
                work, and make a positive impact by helping
                others live healthier, happier lives.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-10 lg:mt-6">

                <Link
                  to="/contact"
                  className="journey-btn inline-flex items-center gap-3 rounded-full bg-[#00852b] px-6 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-[#006d22] hover:shadow-lg md:text-base lg:px-7 lg:py-3.5 lg:text-lg"
                >
                  Join the Opportunity
                  <span className="text-xl">→</span>
                </Link>

                <a
                  href="#why-herbalife"
                  className="join-btn inline-flex items-center justify-center rounded-full border-[1.5px] border-[#00852b] bg-white/80 px-7 py-3 text-sm font-bold text-[#075522] transition duration-300 hover:bg-[#00852b] hover:text-white md:text-base lg:px-8 lg:py-3.5 lg:text-lg"
                >
                  Learn More
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HERO ================= */}

      <div className="relative w-full md:hidden">

        <img
          src={MobileBanner}
          alt="Herbalife Business Opportunity"
          className="block h-auto w-full"
        />

        {/* Content in Green Empty Space */}
        <div className="absolute inset-x-0 top-[55%] z-10 px-4 text-center sm:px-8">

          <h1 className="text-[25px] font-extrabold leading-tight text-[#075522] sm:text-3xl">
            Build a Healthier
            <br />
            Future{" "}
            <span className="text-[#39a51c]">
              with Herbalife
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[440px] text-[13px] leading-relaxed text-[#183c29] sm:text-base">
            Create an additional income, enjoy flexible work,
            and make a positive impact by helping others
            live healthier, happier lives.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00852b] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#006d22] sm:px-6 sm:text-sm"
            >
              Join the Opportunity →
            </Link>

            <a
              href="#why-herbalife"
              className="inline-flex items-center justify-center rounded-full border border-[#00852b] bg-white/80 px-5 py-2.5 text-xs font-bold text-[#075522] transition hover:bg-[#00852b] hover:text-white sm:px-7 sm:text-sm"
            >
              Learn More
            </a>

          </div>
        </div>
      </div>

      {/* ================= BENEFITS SECTION ================= */}

      <div className="relative z-10 mx-auto mt-6 w-[94%] rounded-[22px] border border-white bg-white px-3 py-5 shadow-[0_5px_18px_rgba(15,100,35,0.12)] sm:mt-8 md:w-[92%] md:px-5 lg:mt-10 lg:py-5">

        <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center ${
                index % 2 === 0
                  ? "border-r border-[#c6e5c8] lg:border-r"
                  : "lg:border-r lg:border-[#c6e5c8]"
              } ${
                index === 4
                  ? "col-span-2 border-r-0 sm:col-span-1 lg:border-r-0"
                  : ""
              }`}
            >

              <span className="mb-2 text-3xl font-bold leading-none text-[#00852b] sm:text-4xl">
                {benefit.icon}
              </span>

              <h3 className="text-sm font-bold leading-tight text-[#102d20] sm:text-base lg:text-lg">
                {benefit.title}
              </h3>

              <p className="text-sm font-bold leading-tight text-[#102d20] sm:text-base lg:text-lg">
                {benefit.subtitle}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= WHY START WITH HERBALIFE ================= */}

      <div
        id="why-herbalife"
        className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-7 px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-[1fr_1.35fr_0.8fr] lg:gap-8 lg:px-10"
      >

        {/* Laptop Image */}
        <div className="overflow-hidden rounded-[25px] shadow-[0_5px_18px_rgba(15,100,35,0.12)]">

          <img
            src={businessLaptop}
            alt="Herbalife Business Opportunity"
            loading="lazy"
            className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[275px]"
          />

        </div>

        {/* Why Start Content */}
        <div>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#075522] sm:text-4xl">
            Why Start with Herbalife?
          </h2>

          <div className="space-y-4">

            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#39a51c] to-[#00852b] text-xl font-bold text-white shadow-sm">
                  ✓
                </span>

                <div>
                  <h3 className="text-base font-extrabold leading-tight text-[#073f1b] sm:text-lg">
                    {reason.title}
                  </h3>

                  <p className="mt-0.5 text-sm leading-relaxed text-[#202820] sm:text-base">
                    {reason.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Achievement Card */}
        <div className="rounded-[25px] border border-white bg-gradient-to-br from-[#f2fbea] to-[#e9f8e5] p-6 shadow-[0_5px_18px_rgba(15,100,35,0.10)] sm:p-8 lg:p-5 xl:p-7">

          <div className="flex items-center gap-4">

            <span className="text-5xl text-[#00852b]">
              ♧
            </span>

            <div>
              <h3 className="text-3xl font-extrabold leading-tight text-[#073f1b] sm:text-4xl">
                500+
              </h3>

              <p className="text-base font-semibold text-[#102d20] sm:text-lg">
                People Guided
              </p>
            </div>

          </div>

          <div className="my-6 border-t border-[#c6e5c8]" />

          <div className="flex items-center gap-4">

            <span className="text-5xl text-[#00852b]">
              🏆
            </span>

            <div>
              <h3 className="text-xl font-extrabold leading-tight text-[#073f1b] sm:text-2xl">
                World Team
              </h3>

              <p className="text-base font-semibold text-[#102d20] sm:text-lg">
                Member
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM CTA ================= */}

      <div className="mx-auto mb-8 w-[94%] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#075522] via-[#00852b] to-[#075522] px-5 py-7 shadow-lg sm:px-8 lg:mb-10 lg:px-12">

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

          <div className="flex items-center gap-4 sm:gap-6">

            <span className="hidden text-6xl text-white sm:block">
              🌿
            </span>

            <div>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Ready to Explore This Opportunity?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                Let's connect and discuss how you can start
                your Herbalife journey today.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-base font-extrabold text-[#087522] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:text-lg"
          >
            Join with Me
            <span className="text-xl">→</span>
          </a>

        </div>
      </div>

    </section>
  );
};

export default BusinessOpportunity;
