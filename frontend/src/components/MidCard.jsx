import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const MidCard = ({ article }) => {
  if (!article) return null;

  const {
    id,
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
    <Link to={`/article/${id}`} className="block">
      <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4 group">
        {/* Article Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={coverImageUrl}
            className="w-full h-40 object-cover object-top rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            alt={title}
          />
        </div>

        {/* Article Details */}
        <div className="flex flex-col justify-center gap-1">
          <div className="inline text-sm text-gray-600">
            <span>{author || "Unknown Author"}</span>
            <span className="inline"> | </span>
            <span>{formattedcreatedAt}</span>
          </div>

          <h3 className="text-base font-medium midcard-title">{title}</h3>

          <p className="text-sm text-gray-600 midcard-para">
            {body}
          </p>

          <div className="inline text-sm text-gray-600">
            <span className="text-red-700 font-medium">
              {category || "General"}
            </span>
            <span className="inline"> | </span>
            <span className="">
              {timeToRead
                ? `${timeToRead} min read`
                : "Reading time unavailable"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

MidCard.propTypes = {
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

export default MidCard;
