import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const MainCard = ({ article }) => {
  if (!article) return null;

  const {
    title,
    coverImage,
    author,
    createdAt,
    category,
    timeToRead,
    body,
  } = article;

  const formattedcreatedAt = createdAt
    ? formatDistanceToNowStrict(new Date(createdAt), { addSuffix: true })
    : "Recently";

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  return (
    <div className="rounded-lg flex flex-col overflow-hidden bg-white">
      <div className="flex flex-col justify-center !gap-4">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base text-gray-600">
            {author || "Unknown Author"} | {formattedcreatedAt}
          </p>
          <p className="text-sm md:text-md text-gray-600">
            <span className="text-red-700 font-medium">
              {category || "General"}
            </span>{" "}
            <span className="text-gray-600 hidden lg:inline">
              {" "}
              |{" "}
            </span>
            <span className="text-gray-600">
              {timeToRead
                ? `${timeToRead} min read`
                : "Reading time unavailable"}
            </span>
          </p>
        </div>
        <div className="">
          <img
            src={coverImageUrl}
            className="w-full h-80 lg:h-128 object-cover object-center rounded-lg"
            alt={title}
          />
        </div>
        <p className="text-base text-gray-600">{body}</p>
      </div>
    </div>
  );
};

MainCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    coverImage: PropTypes.shape({
      url: PropTypes.string,
    }),
    author: PropTypes.string,
    createdAt: PropTypes.string,
    category: PropTypes.string,
    timeToRead: PropTypes.number,
    body: PropTypes.string,
  }),
};

export default MainCard;
