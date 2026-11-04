
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Weight,
  Leaf,
  ShieldCheck,
  Heart,
} from "lucide-react";

import heroBg from "../assets/HeroBanner.png";
import MobileBanner from "../assets/MobileBanner.png";

const wellnessBenefits = [
  {
    title: "Weight",
    subtitle: "Management",
    Icon: Weight,
  },
  {
    title: "Energy",
    subtitle: "& Fitness",
    Icon: Leaf,
  },
  {
    title: "Better",
    subtitle: "Nutrition",
    Icon: ShieldCheck,
  },
  {
    title: "Overall",
    subtitle: "Wellness",
    Icon: Heart,
  },
];

const HeroBanner = () => {
  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VERSION */}
      {/* ========================================= */}

      <section className="bg-white px-3 py-3 sm:hidden">

        {/* Mobile Banner Image */}
        <div className="relative w-full overflow-hidden rounded-2xl">

          <img
            src={MobileBanner}
            alt="Herbalife Wellness Coach"
            className="block h-auto w-full"
          />

          {/* Content in the blank green area */}
          <div className="absolute inset-x-0 bottom-[2%] flex flex-col px-5">

            <h1 className="text-[clamp(21px,6vw,27px)] font-extrabold leading-[1.08] text-heading">
              Healthy Nutrition
              <br />
              Better Fitness
              <br />
              <span className="text-highlight">
                Happier You.
              </span>
            </h1>

            <p className="mt-2 text-[12px] leading-[1.5] text-body">
              Personalized nutrition, weight management and
              wellness solutions with Herbalife.
            </p>

            {/* Buttons */}
            <div className="mt-3 flex flex-col gap-2">

              <Link
                to="/wellness-programs"
                className="wellness-link flex w-full items-center justify-center gap-2 rounded-full bg-primary px-3 py-2.5 text-xs font-bold text-white shadow-md"
              >
                Start Your Wellness Journey
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/products"
                className="explore-link flex w-full items-center justify-center rounded-full border-2 border-dark-green bg-white/70 px-3 py-2.5 text-xs font-bold text-dark-green"
              >
                Explore Products
              </Link>

            </div>
          </div>
        </div>

        {/* Benefits - Outside the image */}
        <div className="mt-3 grid grid-cols-4 rounded-2xl bg-[#f2faed] px-1 py-4 shadow-sm">

          {wellnessBenefits.map(({ title, subtitle, Icon }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center px-1 text-center ${
                index !== 0 ? "border-l border-primary/20" : ""
              }`}
            >
              <Icon
                size={25}
                strokeWidth={1.8}
                className="text-primary"
              />

              <p className="mt-1 text-[10px] font-semibold leading-4 text-body">
                {title}
                <br />
                {subtitle}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ========================================= */}
      {/* TABLET VERSION */}
      {/* ========================================= */}

      <section className="hidden bg-white px-5 py-5 md:block lg:hidden">

        <div className="relative flex min-h-[500px] items-center overflow-hidden rounded-2xl bg-primary-dull">

          <img
            src={heroBg}
            alt="Herbalife Wellness Coach"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Tablet Content */}
          <div className="relative z-10 w-[58%] px-7 py-10">

            <h1 className="text-4xl font-extrabold leading-[1.1] text-heading">
              Healthy Nutrition
              <br />
              Better Fitness
              <br />
              <span className="text-highlight">
                Happier You.
              </span>
            </h1>

            <p className="mt-4 max-w-[390px] text-base leading-relaxed text-body">
              Personalized nutrition, weight management and
              wellness solutions with Herbalife.
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">

              <Link
                to="/wellness-programs"
                className="wellness-link inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md"
              >
                Start Your Wellness Journey
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="explore-link inline-flex items-center justify-center rounded-full border-2 border-dark-green bg-white/70 px-7 py-3 text-sm font-bold text-dark-green"
              >
                Explore Products
              </Link>

            </div>

          </div>
        </div>

        {/* Tablet Benefits */}
        <div className="mt-4 grid grid-cols-4 rounded-2xl bg-[#f2faed] px-3 py-5 shadow-sm">

          {wellnessBenefits.map(({ title, subtitle, Icon }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center px-2 text-center ${
                index !== 0 ? "border-l border-primary/20" : ""
              }`}
            >
              <Icon
                size={32}
                strokeWidth={1.7}
                className="text-primary"
              />

              <p className="mt-2 text-sm font-semibold leading-5 text-body">
                {title}
                <br />
                {subtitle}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ========================================= */}
      {/* DESKTOP VERSION */}
      {/* ========================================= */}

      <div className="hidden bg-white px-5 py-5 lg:block lg:px-10 lg:py-8">

        <section className="relative isolate min-h-[600px] overflow-hidden rounded-2xl bg-primary-dull">

          <img
            src={heroBg}
            alt="Herbalife Wellness Coach"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />

          <div className="mx-auto flex min-h-[600px] max-w-[1400px] items-center px-10">

            <div className="w-full max-w-[590px] py-10">

              <h1 className="ml-12 pt-3 text-4xl font-bold leading-[1.08] tracking-tight text-heading lg:text-[58px]">
                Healthy Nutrition
                <br />
                Better Fitness
                <br />
                <span className="text-highlight">
                  Happier You.
                </span>
              </h1>

              <p className="ml-12 mt-5 max-w-[500px] text-lg leading-relaxed text-body">
                Personalized nutrition, weight management and
                wellness solutions with Herbalife.
              </p>

              {/* Desktop Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">

                <Link
                  to="/wellness-programs"
                  className="wellness-link ml-11 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-sm"
                >
                  Start Your Wellness Journey
                  <ArrowRight size={20} className="wellness-arrow" />
                </Link>

                <Link
                  to="/products"
                  className="explore-link inline-flex items-center rounded-full border-2 border-dark-green bg-white/40 px-6 py-3 font-semibold text-dark-green"
                >
                  Explore Products
                </Link>

              </div>

              {/* Desktop Benefits */}
              <div className="mt-9 grid max-w-[550px] grid-cols-4">

                {wellnessBenefits.map(({ title, subtitle, Icon }, index) => (
                  <div
                    key={title}
                    className={`ml-9 flex flex-col items-center px-2 text-center ${
                      index !== 0
                        ? "border-l border-primary/20"
                        : ""
                    }`}
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.7}
                      className="text-primary"
                    />

                    <p className="mt-2 text-sm font-semibold leading-5 text-body sm:text-base">
                      {title}
                      <br />
                      {subtitle}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroBanner;
