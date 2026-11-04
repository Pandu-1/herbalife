
import { useState } from "react";
import ProductBanner from "../assets/ProductBanner.png";
import multivitamin  from "../assets/multivitamin.png";
import ProteinDrinkMix from "../assets/ProteinDrinkMix.png"
import MultivitaminComplex from "../assets/MultivitaminComplex.png"
import AloeConcentrate from "../assets/AloeConcentrate.png"

import {
  Leaf,
  Dumbbell,
  Heart,
  ShieldCheck,
  FlaskConical,
  Users,
  Zap,
  Apple,
  ShoppingBasket,
  Image as ImageIcon,
} from "lucide-react";

// ---------------- PRODUCT DATA ----------------

const products = [
  {
    id: 1,
    name: "Formula 1 Nutritional Shake",
    description:
      "A balanced meal with protein, fiber and essential nutrients to support your weight goals.",

    // Add image path later
    image: multivitamin,

    categories: ["Weight Management"],
    tags: [
      { icon: ShoppingBasket, label: "Meal Replacement" },
      { icon: ShoppingBasket, label: "Weight Management" },
    ],
  },
  {
    id: 2,
    name: "Protein Drink Mix",
    description:
      "High-quality protein to support lean muscle, strength and overall fitness.",

    image: ProteinDrinkMix,

    categories: ["Nutrition", "Energy & Fitness"],
    tags: [
      { icon: Dumbbell, label: "Muscle Support" },
      { icon: Zap, label: "Daily Protein" },
    ],
  },
  {
    id: 3,
    name: "Aloe Concentrate",
    description:
      "Supports healthy digestion and maintains overall wellness.",

    image: AloeConcentrate,

    categories: ["Daily Wellness"],
    tags: [
      { icon: Leaf, label: "Digestive Health" },
      { icon: Leaf, label: "Daily Wellness" },
    ],
  },
  {
    id: 4,
    name: "Multivitamin Complex",
    description:
      "Essential vitamins and minerals to fill nutritional gaps and support daily health.",

    image: MultivitaminComplex,

    categories: ["Nutrition", "Daily Wellness"],
    tags: [
      { icon: ShieldCheck, label: "Immunity Support" },
      { icon: Heart, label: "Overall Wellness" },
    ],
  },
];

// ---------------- CATEGORIES ----------------

const categories = [
  "All Products",
  "Weight Management",
  "Nutrition",
  "Energy & Fitness",
  "Daily Wellness",
];

// ---------------- FEATURES ----------------

const features = [
  {
    icon: Leaf,
    title: "High-Quality Nutrition",
    subtitle: "Scientifically formulated products",
  },
  {
    icon: FlaskConical,
    title: "Trusted & Safe",
    subtitle: "Quality you can rely on",
  },
  {
    icon: Dumbbell,
    title: "Supports Your Goals",
    subtitle: "Weight, fitness & overall wellness",
  },
  {
    icon: Users,
    title: "Backed by Research",
    subtitle: "Nutrition for a healthier life",
  },
];

// ---------------- PRODUCT CARD ----------------

const ProductCard = ({ product }) => {
  return (
    <article
      className="group  flex h-full flex-col overflow-hidden
      rounded-[22px] border border-green-50
      bg-white p-5 shadow-md shadow-green-900/10
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Product Image */}

      <div className="flex h-[210px] w-full 
        items-center justify-center overflow-hidden">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain
            transition-transform duration-500
            group-hover:scale-105 "
          />
        ) : (
          <div className="flex h-full w-full flex-col
            items-center justify-center gap-3
            rounded-xl bg-gradient-to-b
            from-green-50 to-white text-green-700">

            <ImageIcon size={48} strokeWidth={1.2} />

            <span className="text-sm font-medium">
              Product Image
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}

      <div className="mt-3 flex flex-1 flex-col">

        <h2 className="min-h-[56px] text-xl
          font-extrabold leading-tight
          text-green-950 lg:text-2xl">
          {product.name}
        </h2>

        <p className="mt-3 min-h-[76px]
          text-sm leading-relaxed
          text-gray-800 lg:text-base">
          {product.description}
        </p>

        {/* Benefits */}

        <div className="mt-auto flex flex-wrap gap-2 pt-4">

          {product.tags.map((tag) => {
            const Icon = tag.icon;

            return (
              <div
                key={tag.label}
                className="flex items-center gap-2
                rounded-full border border-green-200
                bg-green-50/40 px-3 py-2
                text-xs font-semibold text-green-950
                lg:text-sm"
              >
                <Icon
                  size={19}
                  className="shrink-0 text-green-700"
                />

                {tag.label}
              </div>
            );
          })}

        </div>
      </div>
    </article>
  );
};

// ---------------- MAIN COMPONENT ----------------

const Products = () => {
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  // Filter products

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) =>
          product.categories.includes(activeCategory)
        );

  return (
    <section className="min-h-screen w-full
      bg-gradient-to-b from-green-50 to-white">

      {/* ============ BANNER ============ */}

      <div className="w-full overflow-hidden">
        <img
          src={ProductBanner}
          alt="Our Products"
          className="block h-auto w-full p-10"
        />
      </div>

      {/* ============ CATEGORY FILTERS ============ */}

      <div className="mx-auto max-w-[1500px]
        px-4 pt-6 md:px-8 lg:px-12 lg:pt-7">

        <div className="flex gap-3 overflow-x-auto
          pb-3 scrollbar-hide
          md:justify-center md:gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border
                px-5 py-2.5 text-sm font-bold
                transition-all duration-300
                sm:px-7 sm:text-base lg:px-8 lg:text-lg
                ${
                  activeCategory === category
                    ? "border-green-700 bg-green-700 text-white shadow-md"
                    : "border-green-200 bg-white text-green-950 hover:border-green-700 hover:bg-green-50"
                }`}
            >
              {category}
            </button>
          ))}

        </div>
      </div>

      {/* ============ PRODUCTS GRID ============ */}

      <div className="mx-auto max-w-[1500px]
        px-4 py-5 md:px-8 lg:px-12 lg:py-7">

        <div className="grid grid-cols-1
          gap-5 sm:grid-cols-2
          lg:grid-cols-4 lg:gap-5 xl:gap-6">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold text-green-900">
              Products coming soon!
            </p>
          </div>
        )}

      </div>

      {/* ============ BOTTOM FEATURES ============ */}

      <div className="mx-auto max-w-[1500px]
        px-4 pb-8 md:px-8 lg:px-12 lg:pb-10">

        <div className="grid grid-cols-2 gap-4
          rounded-[22px] border border-white
          bg-green-50/70 p-4 shadow-sm
          md:grid-cols-4 md:gap-2 md:p-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center
                  justify-center gap-2 p-3
                  text-center md:flex-row
                  md:gap-3 md:text-left bg-primary/20 rounded-lg
                  ${
                    index !== 3
                      ? "md:border-r md:border-green-200"
                      : ""
                  }`}
              >
                <Icon
                  size={34}
                  strokeWidth={1.8}
                  className="shrink-0 text-green-800"
                />

                <div>
                  <h3 className="text-sm font-extrabold
                    text-green-950 md:text-base lg:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs
                    text-gray-800 md:text-sm">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default Products;
