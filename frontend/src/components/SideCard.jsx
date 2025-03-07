import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const SideCard = ({ article }) => {
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
      <div className="rounded-lg flex gap-3 overflow-hidden bg-white group">
        {/* Article Details */}
        <div className="flex flex-col justify-center gap-1 w-1/2">
          <div className="flex flex-col xs:inline md:flex text-sm text-gray-600">
            <span>{author || "Unknown Author"}</span>
            <span className="hidden xs:inline md:hidden"> | </span>
            <span>{formattedcreatedAt}</span>
          </div>

          <h3 className="text-base font-medium sidecard-title">
            {title}
          </h3>

          <div className="flex flex-col xs:inline md:flex xl:inline text-sm text-gray-600">
            <span className="text-red-700 font-medium ">
              {category || "General"}
            </span>
            <span className="hidden xs:inline md:hidden xl:inline"> | </span>
            <span className="">
              {timeToRead
                ? `${timeToRead} min read`
                : "Reading time unavailable"}
            </span>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-1/2 relative overflow-hidden rounded-lg">
          <img
            src={coverImageUrl}
            className="w-full object-cover h-full rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

SideCard.propTypes = {
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

export default SideCard;
