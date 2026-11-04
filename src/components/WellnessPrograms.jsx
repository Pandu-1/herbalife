
import React, { useEffect, useState } from "react";
import wellnessBanner from "../assets/wellnessBanner.png";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Weight Management",
    description:
      "Healthy and sustainable weight management with balanced nutrition and lifestyle support.",
    icon: "⚖",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800",
    whoFor:
      "Ideal for anyone looking to manage their weight and build healthier daily habits.",
    includes: [
      "Personalized nutrition guidance",
      "Herbalife product guidance, as needed",
      "Simple and practical lifestyle habits",
      "Regular progress tracking",
    ],
    support:
      "Get one-on-one guidance, meal and lifestyle tips, and ongoing motivation to stay on track towards your goals.",
    highlights: [
      "Healthy Habits",
      "Balanced Nutrition",
      "Lifestyle Support",
    ],
  },
  {
    title: "Fitness & Energy",
    description:
      "Stay active, build strength and feel more energetic through better nutrition.",
    icon: "🏋",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    whoFor:
      "Ideal for people who want to stay active, improve their fitness routine and maintain an energetic lifestyle.",
    includes: [
      "Nutrition guidance for an active lifestyle",
      "Daily activity and habit suggestions",
      "Practical fitness routine guidance",
      "Regular progress tracking",
    ],
    support:
      "Receive ongoing guidance and motivation to help you stay consistent with your fitness and lifestyle goals.",
    highlights: [
      "Active Lifestyle",
      "Daily Energy",
      "Fitness Support",
    ],
  },
  {
    title: "Better Nutrition",
    description:
      "Balanced nutrition with essential vitamins, minerals and high-quality protein.",
    icon: "🍎",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    whoFor:
      "Suitable for anyone who wants to understand balanced nutrition and develop better everyday food habits.",
    includes: [
      "Personalized nutrition guidance",
      "Balanced meal planning suggestions",
      "Understanding everyday food choices",
      "Healthy eating habit support",
    ],
    support:
      "Get simple nutrition guidance and practical suggestions to help you make informed food choices every day.",
    highlights: [
      "Balanced Meals",
      "Better Food Choices",
      "Nutrition Guidance",
    ],
  },
  {
    title: "Overall Wellness",
    description:
      "Support your long-term wellness and maintain an active, balanced lifestyle.",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800",
    whoFor:
      "For people who want to focus on their overall wellness and build a balanced daily routine.",
    includes: [
      "Personalized wellness guidance",
      "Daily nutrition and lifestyle tips",
      "Healthy routine suggestions",
      "Regular progress check-ins",
    ],
    support:
      "Get continuous guidance and encouragement to help you build and maintain healthier lifestyle habits.",
    highlights: [
      "Healthy Lifestyle",
      "Daily Wellness",
      "Ongoing Support",
    ],
  },
];

const benefits = [
  { icon: "♧", title: "Personalized", subtitle: "Guidance" },
  { icon: "▦", title: "Flexible", subtitle: "Programs" },
  { icon: "↗", title: "Ongoing", subtitle: "Support" },
  { icon: "♡", title: "Sustainable", subtitle: "Results" },
  { icon: "🌿", title: "Healthier", subtitle: "Lifestyle" },
];

const WellnessPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Close modal with Escape key and prevent background scrolling
  useEffect(() => {
    if (!selectedProgram) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProgram(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProgram]);

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="w-full overflow-hidden bg-[#f5fff1]">

      {/* ================= BANNER ================= */}

      {/* Desktop & Tablet Banner */}
      <div className="relative hidden min-h-[320px] w-full items-center md:flex lg:min-h-[353px]">

        <img
          src={wellnessBanner}
          alt="Wellness Coach"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
        />

        <div className="relative z-10 w-full px-8 py-10 md:px-10 lg:px-[9.2%]">
          <div className="max-w-[650px]">

            <h1 className="mb-3 text-4xl font-extrabold leading-tight text-[#075522] md:text-[48px] lg:text-[64px]">
              Wellness Programs
            </h1>

            <p className="max-w-[580px] text-base leading-relaxed text-[#102d20] md:text-[20px] lg:text-[26px]">
              Personalized wellness programs to help you
              achieve your health, fitness and lifestyle goals
              with the right nutrition, guidance and support.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href="#programs"
                className="journey-btn inline-flex items-center gap-3 rounded-full bg-[#00852b] px-7 py-3.5 text-lg font-bold text-white transition-all duration-300 hover:bg-[#006d22] hover:shadow-lg lg:px-8 lg:text-xl"
              >
                Start Your Program
                <span className="text-2xl">→</span>
              </a>

              <Link
                to="/contact"
                className="join-btn inline-flex items-center justify-center rounded-full border-[1.5px] border-[#00852b] bg-white/70 px-9 py-3.5 text-lg font-bold text-[#075522] transition-all duration-300 hover:bg-[#00852b] hover:text-white lg:px-10 lg:text-xl"
              >
                Talk to Me
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden">

        <div className="bg-gradient-to-br from-white via-[#f5fff0] to-[#e4f8d9] px-5 pb-8 pt-10 text-center">

          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[#075522]">
            Wellness Programs
          </h1>

          <p className="mx-auto max-w-[500px] text-base leading-relaxed text-[#183c29]">
            Personalized wellness programs to help you achieve
            your health, fitness and lifestyle goals with the
            right nutrition, guidance and support.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <a
              href="#programs"
              className="flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#00852b] px-6 py-3.5 font-bold text-white transition hover:bg-[#006d22]"
            >
              Start Your Program
              <span className="text-xl">→</span>
            </a>

            <Link
              to="/contact"
              className="flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#00852b] bg-white px-6 py-3.5 font-bold text-[#075522] transition hover:bg-[#00852b] hover:text-white"
            >
              Talk to Me
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px]">
          <img
            src={wellnessBanner}
            alt="Wellness Coach"
            className="h-full w-full object-cover object-[80%_center]"
          />
        </div>
      </div>

      {/* ================= PROGRAM CARDS ================= */}

      <div
        id="programs"
        className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-10"
      >

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {programs.map((program, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[26px] border border-white bg-white/80 p-3 shadow-[0_5px_15px_rgba(15,100,35,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(15,100,35,0.16)]"
            >

              {/* Card Image */}
              <div className="h-[175px] overflow-hidden rounded-[20px] bg-[#eff9e9] sm:h-[155px] lg:h-[175px]">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="px-2 pb-2 pt-3">

                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf9df] text-2xl">
                    {program.icon}
                  </div>

                  <h2 className="text-lg font-extrabold leading-tight text-[#073f1b] sm:text-[19px] lg:text-xl">
                    {program.title}
                  </h2>
                </div>

                <p className="min-h-[72px] pl-[60px] text-[15px] leading-[1.55] text-[#202820]">
                  {program.description}
                </p>

                <div className="mt-3 pl-[60px]">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className="join-btn inline-flex items-center gap-2 rounded-full border border-[#00852b] px-5 py-2 text-sm font-bold text-[#087522] transition-all duration-300 hover:bg-[#00852b] hover:text-white"
                  >
                    Learn More
                    <span className="text-lg">→</span>
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* ================= PROGRAM BENEFITS ================= */}

        <div className="mt-5 rounded-[26px] border border-white bg-gradient-to-r from-white via-[#f4fff0] to-white px-4 py-6 shadow-[0_5px_18px_rgba(15,100,35,0.10)] sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:items-center lg:gap-0">

            <div className="flex items-center justify-center border-b border-[#c6e5c8] pb-5 text-center sm:col-span-3 lg:col-span-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
              <h2 className="text-3xl font-extrabold leading-tight text-[#075522] lg:text-[36px]">
                Program
                <br />
                Benefits
              </h2>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${
                  index === 0
                    ? "border-r border-[#c6e5c8] sm:border-r-0 lg:border-r"
                    : index === 1
                    ? "lg:border-r lg:border-[#c6e5c8]"
                    : index === 2
                    ? "border-r border-[#c6e5c8] sm:border-r-0 lg:border-r"
                    : index === 3
                    ? "lg:border-r lg:border-[#c6e5c8]"
                    : index === 4
                    ? "border-r border-[#c6e5c8] sm:border-r-0"
                    : ""
                }`}
              >
                <span className="mb-2 text-[38px] font-bold leading-none text-[#00852b]">
                  {benefit.icon}
                </span>

                <h3 className="text-base font-extrabold leading-tight text-[#073f1b] sm:text-lg">
                  {benefit.title}
                </h3>

                <p className="text-base font-extrabold leading-tight text-[#073f1b] sm:text-lg">
                  {benefit.subtitle}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* ================= PROGRAM DETAILS MODAL ================= */}

      {selectedProgram && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[1050px] max-h-[92vh] overflow-y-auto rounded-[24px] bg-white shadow-2xl sm:rounded-[30px] lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:overflow-hidden"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close program details"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl font-bold text-gray-800 shadow-md transition hover:bg-[#eaf9df] sm:right-5 sm:top-5 sm:h-11 sm:w-11"
            >
              ×
            </button>

            {/* LEFT SIDE - IMAGE */}
            <div className="relative h-[190px] overflow-hidden bg-[#eaf9df] sm:h-[250px] lg:h-full lg:min-h-[620px]">

              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="h-full w-full object-cover"
              />

              {/* Desktop Image Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-[#064719] via-[#075522]/90 to-transparent px-7 pb-8 pt-24 lg:block">

                <div className="space-y-4">
                  {selectedProgram.highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-lg font-bold text-white"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9ff83] text-sm font-extrabold text-[#075522]">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7 lg:max-h-[92vh] lg:overflow-y-auto lg:px-9 lg:py-10">

              {/* Program Label */}
              <span className="inline-flex items-center gap-2 rounded-full bg-[#effbdc] px-4 py-2 text-sm font-bold text-[#27832b] sm:text-base">
                🌿 Wellness Program
              </span>

              {/* Title & Description */}
              <h2
                id="program-modal-title"
                className="mt-4 text-[28px] font-extrabold leading-tight text-[#073f1b] sm:text-4xl lg:mt-5 lg:text-[42px]"
              >
                {selectedProgram.title}
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-[#202820] sm:text-base lg:text-[17px]">
                {selectedProgram.description}
              </p>

              {/* Who Is It For */}
              <div className="mt-6 flex gap-3 rounded-[20px] bg-gradient-to-r from-[#f7fcf1] to-[#f0f9e9] p-4 sm:gap-4 sm:p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3f8c9] text-2xl">
                  👥
                </div>

                <div>
                  <h3 className="text-lg font-extrabold leading-tight text-[#075522] sm:text-xl">
                    Who is it for?
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[#202820] sm:text-base">
                    {selectedProgram.whoFor}
                  </p>
                </div>
              </div>

              {/* What Does It Include */}
              <div className="mt-4 flex gap-3 rounded-[20px] bg-gradient-to-r from-[#f7fcf1] to-[#f0f9e9] p-4 sm:gap-4 sm:p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3f8c9] text-2xl">
                  📋
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold leading-tight text-[#075522] sm:text-xl">
                    What does it include?
                  </h3>

                  <ul className="mt-2 space-y-1">
                    {selectedProgram.includes.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#202820] sm:text-base"
                      >
                        <span className="mt-1 text-[#00852b]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Support Details */}
              <div className="mt-4 flex gap-3 rounded-[20px] bg-gradient-to-r from-[#f7fcf1] to-[#f0f9e9] p-4 sm:gap-4 sm:p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3f8c9] text-2xl">
                  🎧
                </div>

                <div>
                  <h3 className="text-lg font-extrabold leading-tight text-[#075522] sm:text-xl">
                    How does the support work?
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[#202820] sm:text-base">
                    {selectedProgram.support}
                  </p>
                </div>
              </div>

              {/* Mobile Highlights */}
              <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
                {selectedProgram.highlights.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#effbdc] px-3 py-2 text-xs font-bold text-[#075522] sm:text-sm"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Talk to Me Button */}
              <a
                href="#contact"
                onClick={closeModal}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00852b] to-[#006d22] px-6 py-4 text-lg font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:py-4 sm:text-xl"
              >
                Talk to Me
                <span className="text-2xl">→</span>
              </a>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default WellnessPrograms;
