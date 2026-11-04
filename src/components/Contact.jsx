
import React, { useState } from "react";
import HeroBanner from "../assets/HeroBanner.png";
import MobileBanner from "../assets/MobileBanner.png";

const contactPhone = "919848089466"; // Mee WhatsApp number tho replace cheyyi
const contactEmail = "mallidialekhya@gmail.com"; // Mee email tho replace cheyyi

const contactDetails = [
  {
    icon: "☎",
    title: "Call / WhatsApp",
    value: "+91 9848089466",
    link: `https://wa.me/${919848089466}`,
  },
  {
    icon: "✉",
    title: "Email",
    value: "mallidialekhya@gmail.com",
    link: `mailto:${contactEmail}`,
  },
  {
    icon: "⌖",
    title: "Location",
    value: "Aswapuram, Telangana, India",
    link: "https://maps.app.goo.gl/3gUyeqYbmVTggafF9",
  },
  {
    icon: "◷",
    title: "Working Hours",
    value: "Mon – Sat, 9:00 AM – 7:00 PM",
    link: null,
  },
];

const services = [
  {
    icon: "🌿",
    title: "Personalized Guidance",
    subtitle: "For your wellness goals",
  },
  {
    icon: "♧",
    title: "Nutrition & Fitness Support",
    subtitle: "As per your lifestyle",
  },
  {
    icon: "🤝",
    title: "Business Opportunity",
    subtitle: "If you want to build with us",
  },
  {
    icon: "▦",
    title: "Schedule a Consultation",
    subtitle: "Let's plan your wellness journey",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello! I would like to know more.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

Message: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${contactPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full overflow-hidden bg-[#f8fff6]">

      {/* ================= HERO SECTION ================= */}

      {/* Desktop & Tablet Hero */}
      <div className="relative hidden h-[300px] w-full overflow-hidden sm:h-[340px] md:block lg:h-[380px]">

        <img
          src={HeroBanner}
          alt="Get in Touch"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="relative z-10 flex h-full items-center px-8 md:px-[7%] lg:px-[8.8%]">

          <div className="max-w-[570px]">

            <h1 className="text-4xl font-extrabold leading-tight text-[#073f1b] md:text-5xl lg:text-[60px]">
              Get in Touch
            </h1>

            <p className="mt-3 max-w-[550px] text-base leading-relaxed text-[#102d20] md:text-lg lg:text-[23px]">
              Have questions about nutrition, wellness programs
              or the Herbalife opportunity? I'm here to help you.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">

              <a
                href={`https://wa.me/${contactPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#00852b] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#006d22] hover:shadow-lg md:text-base lg:px-7 lg:py-3.5"
              >
                <span className="text-2xl">☏</span>
                Contact Me on WhatsApp
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#00852b] bg-white/80 px-8 py-3 text-sm font-bold text-[#075522] transition duration-300 hover:bg-[#00852b] hover:text-white md:text-base lg:py-3.5"
              >
                Join with Me
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HERO ================= */}

      <div className="relative w-full md:hidden">

        <img
          src={MobileBanner}
          alt="Get in Touch"
          className="block h-auto w-full"
        />

        {/* Text in Mobile Banner Empty Space */}
        <div className="absolute inset-x-0 top-[53%] z-10 px-4 text-center sm:px-8">

          <h1 className="text-3xl font-extrabold leading-tight text-[#075522] sm:text-4xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-2 max-w-[420px] text-sm leading-relaxed text-[#183c29] sm:text-base">
            Have questions about nutrition, wellness programs
            or the Herbalife opportunity? I'm here to help you.
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href={`https://wa.me/${contactPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[260px] items-center justify-center gap-2 rounded-full bg-[#00852b] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#006d22]"
            >
              <span className="text-xl">☏</span>
              Contact Me on WhatsApp
            </a>

            <a
              href="#contact-form"
              className="flex w-full max-w-[260px] items-center justify-center rounded-full border border-[#00852b] bg-white/80 px-6 py-3 text-sm font-bold text-[#075522] transition hover:bg-[#00852b] hover:text-white"
            >
              Join with Me
            </a>

          </div>
        </div>
      </div>

      {/* ================= CONTACT DETAILS & FORM ================= */}

      <div
        id="contact-form"
        className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-5 py-8 sm:px-8 md:gap-7 lg:grid-cols-[0.85fr_1.5fr] lg:gap-8 lg:px-10 lg:py-6"
      >

        {/* LEFT CONTACT DETAILS */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {contactDetails.map((item, index) => {
            const content = (
              <div className="flex min-h-[90px] items-center gap-5 rounded-[22px] border border-white bg-gradient-to-r from-[#f0faed] to-[#e9f7e6] px-5 py-4 shadow-sm transition duration-300 hover:shadow-md sm:min-h-[95px] sm:px-7">

                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#43b51c] to-[#00852b] text-3xl text-white shadow-sm sm:h-16 sm:w-16">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold leading-tight text-[#073f1b] sm:text-xl">
                    {item.title}
                  </h2>

                  <p className="mt-1 break-words text-sm leading-relaxed text-[#102d20] sm:text-base lg:text-lg">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={index === 2 ? "_blank" : undefined}
                rel={index === 2 ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}

        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="rounded-[24px] border border-[#e6f3e3] bg-white p-5 shadow-[0_5px_18px_rgba(15,100,35,0.10)] sm:p-7 lg:px-8 lg:py-5">

          <h2 className="mb-5 text-2xl font-extrabold text-[#075522] sm:text-3xl">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name and Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-[#111827]"
                >
                  Your Name <span className="text-red-600">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#c9d0cc] bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#00852b] focus:ring-2 focus:ring-[#00852b]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold text-[#111827]"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+\-\s()]{7,20}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#c9d0cc] bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#00852b] focus:ring-2 focus:ring-[#00852b]/10"
                />
              </div>

            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-[#111827]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#c9d0cc] bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#00852b] focus:ring-2 focus:ring-[#00852b]/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-[#111827]"
              >
                Your Message <span className="text-red-600">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me how I can help you..."
                className="w-full resize-y rounded-xl border border-[#c9d0cc] bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#00852b] focus:ring-2 focus:ring-[#00852b]/10"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-1">

              <button
                type="submit"
                className="flex w-full max-w-[335px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00852b] to-[#00751f] px-7 py-3 text-base font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-xl">➤</span>
                Send Message
              </button>

            </div>

          </form>
        </div>

      </div>

      {/* ================= BOTTOM SERVICES STRIP ================= */}

      <div className="mx-auto mb-8 w-[94%] rounded-[24px] border border-white bg-gradient-to-r from-[#f0faed] via-white to-[#eaf8e6] px-3 py-6 shadow-[0_5px_18px_rgba(15,100,35,0.10)] sm:px-5 lg:mb-10 lg:px-6">

        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-2 text-center ${
                index % 2 === 0
                  ? "border-r border-[#b9d9bd] lg:border-r"
                  : "lg:border-r lg:border-[#b9d9bd]"
              } ${
                index === 3
                  ? "lg:border-r-0"
                  : ""
              }`}
            >

              <span className="mb-2 text-4xl text-[#00852b] sm:text-[42px]">
                {service.icon}
              </span>

              <h3 className="text-sm font-extrabold leading-tight text-[#073f1b] sm:text-base lg:text-lg">
                {service.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#102d20] sm:text-sm lg:text-base">
                {service.subtitle}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Contact;
