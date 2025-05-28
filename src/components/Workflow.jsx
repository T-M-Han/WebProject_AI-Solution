import { CheckCircle2 } from "lucide-react";
import aiImg from "../assets/ai-solution.jpg"; // Use an AI-related image
import { aiSolutionChecklist } from "../constants"; // New constant for AI-related items

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Supercharge your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          business with AI.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-12">
        {/* Image Section */}
        <div className="p-2 w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img src={aiImg} alt="AI Solutions" className="max-w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          {aiSolutionChecklist.map((item, index) => (
            <div key={index} className="flex items-start mb-12">
              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;