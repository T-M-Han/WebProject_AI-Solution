import { ArrowRight } from "lucide-react";
import { articles } from "../constants";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Articles
      </h2>
      <div className="flex flex-wrap">
        {articles.map((article, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="bg-blue-500 p-10 border border-blue-700 rounded-xl h-full flex flex-col">
              <p className="text-3xl mb-4 font-semibold">{article.title}</p>
              <p className="mb-8 text-black flex-grow">{article.excerpt}</p>
              <Link
                to="/articles"  // Direct to general articles page
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200 mt-auto"
              >
                <ArrowRight className="mr-2" />
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;