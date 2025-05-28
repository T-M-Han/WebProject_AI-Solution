import { solutions } from "../constants";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Solutions
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          AI-Powered{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Solutions for Your Business
          </span>
        </h2>
        <p className="mt-5 text-lg text-neutral-500 max-w-3xl mx-auto">
          Unlock the power of AI to enhance efficiency, automate workflows, and drive innovation in your industry.
        </p>
      </div>
      
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {solutions.map((solution, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {solution.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{solution.title}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {solution.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mb-20">
        <Link
          to="/solutions"
          className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
        >
          Explore All Solutions
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default SolutionsSection;