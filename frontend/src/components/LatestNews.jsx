import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LatestNews = ({ articles }) => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollNews = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollTop = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollNews, 50);

    return () => clearInterval(interval);
  }, []);

  if (!articles || articles.length === 0) return null;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ).slice(0, 5);

  return (
    <div className="relative w-full h-80 overflow-hidden bg-gray-100 rounded-lg border">
      <div className="!px-4 !py-2 bg-white border-b">
        <h2 className="text-lg font-medium">Latest News</h2>
      </div>
      <div ref={scrollRef} className="h-full overflow-hidden">
        <div className="flex flex-col !space-y-4 animate-scroll">
          {sortedArticles.concat(sortedArticles).map((item, i) => (
            <div key={i} className="flex flex-col !px-4">
              <Link to={`/article/${item.id}`} className="text-sm lg:text-base text-blue-900 hover:text-blue-500 font-medium">
                {item.title}
              </Link>
              <span className="text-sm text-gray-600">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

LatestNews.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
    })
  ).isRequired,
};

export default LatestNews;
