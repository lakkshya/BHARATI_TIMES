import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const SmallCard = ({ article }) => {
  if (!article) return null;

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
      <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4 group">
        {/* Article Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={coverImageUrl}
            className="w-full h-32 object-cover object-top rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            alt={title}
          />
        </div>

        {/* Article Details */}
        <div className="flex flex-col justify-center gap-1">
          <div className="inline lg:flex lg:flex-col text-sm text-gray-600">
            <span>{author || "Unknown Author"}</span>
            <span className="inline lg:hidden"> | </span>
            <span>{formattedcreatedAt}</span>
          </div>

          <h3 className="text-sm md:text-base font-medium smallcard-title">
            {title}
          </h3>

          <div className="inline lg:flex lg:flex-col xl:inline text-sm text-gray-600">
            <span className="text-red-700 font-medium ">
              {category || "General"}
            </span>
            <span className="inline lg:hidden xl:inline"> | </span>
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

SmallCard.propTypes = {
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

export default SmallCard;
