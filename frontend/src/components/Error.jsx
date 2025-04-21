import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center flex-col !py-35 bg-gray-100">
      <div className="flex items-center justify-center !mb-4">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
          !
        </div>
      </div>
      <p className="text-xl font-semibold text-red-700">{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
