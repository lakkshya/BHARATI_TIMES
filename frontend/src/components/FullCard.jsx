import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const FullCard = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!articles || articles.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const article = articles[currentIndex];
  const { id, title, coverImage, author, createdAt, category, timeToRead } =
    article;

  const formattedcreatedAt = createdAt
    ? formatDistanceToNowStrict(new Date(createdAt), { addSuffix: true })
    : "Recently";

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  return (
    <Link to={`/article/${id}`} className="block">
      <div className="relative w-full">
        {/* Card */}
        <div className="relative rounded-lg overflow-hidden bg-white text-white h-80 lg:h-100 xl:h-80 group">
          {/* Background Image */}
          <img
            src={coverImageUrl}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt={title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* Content */}
          <div className="absolute bottom-0 flex flex-col justify-center gap-4 !py-6 !px-14">
            <div className="flex flex-col xs:inline text-sm md:text-base">
              <span>{author || "Unknown Author"}</span>
              <span className="hidden xs:inline"> | </span>
              <span>{formattedcreatedAt}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium">
              {title}
            </h3>
            <div className="flex flex-col xs:inline text-sm md:text-base">
              <span className="text-red-400 font-medium">
                {category || "General"}
              </span>
              <span className="hidden xs:inline"> | </span>
              <span>
                {timeToRead
                  ? `${timeToRead} min read`
                  : "Reading time unavailable"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full !px-4">
          <button
            className="absolute top-1/2 left-8 -translate-1/2 bg-gray-700 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10 hover:bg-gray-500"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-1 -translate-1/2 bg-gray-700 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10 hover:bg-gray-500"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

FullCard.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      coverImage: PropTypes.shape({ url: PropTypes.string }),
      author: PropTypes.string,
      createdAt: PropTypes.string,
      category: PropTypes.string,
      timeToRead: PropTypes.number,
    })
  ),
};

export default FullCard;
