import React, { useState } from 'react';
import Nike from '../assets/nike.png';
import Sec from '../assets/mahansec.png';
import Piz from '../assets/3.png';
import Watch from '../assets/2.png';
import Sof from '../assets/sofa.png';
import Mus from '../assets/music.png';
import App from '../assets/App.png';
import Samsung from '../assets/Sam.png';

const categories = [
  { label: "All", value: "", isActive: true },
  { label: "Branding", value: "Branding", isActive: false },
  { label: "Code", value: "Code", isActive: false },
  { label: "Marketing", value: "Marketing", isActive: false },
  { label: "Photography", value: "Photography", isActive: false },
  { label: "Development", value: "Development", isActive: false },
];

const portfolioList = [
  {
    image: Nike,
    title: "Nike Website",
    categories: ["Branding"],
  },
  {
    image: Sec,
    title: "Cyber Security",
    categories: ["Code"],
  },
  {
    image: Piz,
    title: "Pizza",
    categories: ["Online Food Delivery"],
  },
  {
    image: Watch,
    title: "Watch Shop",
    categories: ["UI/UX Design"],
  },
  {
    image: Sof,
    title: "Sofa Shop",
    categories: ["Specialist"],
  },
  {
    image: Mus,
    title: "Music App",
    categories: ["Specialist"],
  },
  {
    image: App,
    title: "Nike Application",
    categories: ["Specialist"],
  },
  {
    image: Samsung,
    title: "Samsung Mobile",
    categories: ["Specialist"],
  },
];

const Work = () => {
  const [filterCategories, setFilterCategories] = useState(categories);
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    setFilterCategories(
      filterCategories.map((cat) => ({
        ...cat,
        isActive: cat.value === value,
      }))
    );
  };

  const filteredPortfolio = activeCategory
    ? portfolioList.filter((item) =>
        item.categories.some((cat) =>
          cat.toLowerCase().includes(activeCategory.toLowerCase())
        )
      )
    : portfolioList;

  return (
    <div id="work" className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
        <div>
          <p className="inline-block px-3 py-px mb-3 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">My Works</span>
          </span>
        </h2>
      </div>

      <div className="ezy__portfolio1 light py-1 md:py-8 bg-white text-[#373572] dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 justify-center mb-4 md:mb-8">
            <div className="col-span-12 text-center mt-4">
              {filterCategories.map((category, i) => (
                <button
                  onClick={() => handleCategoryClick(category.value)}
                  className={`btn m-1 py-2 px-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md ${
                    category.isActive ? "bg-blue-600 text-white" : ""
                  }`}
                  key={i}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {filteredPortfolio.map((portfolio, i) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                <div className="group relative text-center">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="max-w-full w-full h-auto rounded-xl"
                  />
                  <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-40 bg-blur-sm bg-saturate-200 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center p-6">
                    <h5 className="text-xl font-medium mb-2">
                      {portfolio.title}
                    </h5>
                    <p className="mb-0">{portfolio.categories.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

