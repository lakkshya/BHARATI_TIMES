import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as pdfjs from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfCard = ({ title, date, pdfUrl }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFirstPage = async () => {
      try {
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;

        const image = new Image();
        image.src = canvas.toDataURL("image/png");

        image.onload = () => {
          setImageUrl(image.src);
          setIsLoading(false);
        };
      } catch (error) {
        console.error("Error loading PDF:", error);
        setIsLoading(false);
      }
    };

    loadFirstPage();
  }, [pdfUrl]);

  const handleClick = () => {
    navigate("/viewer", { state: { pdfUrl, title, date } });
  };

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border border-gray-300"
      onClick={handleClick}
    >
      {isLoading ? (
        <div className="w-full h-[300px] bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-300">{date}</p>
      </div>
    </div>
  );
};

PdfCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  pdfUrl: PropTypes.string.isRequired,
};

export default PdfCard;