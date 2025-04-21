import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLanguage from "../context/useLanguage";
import * as pdfjs from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfCard = ({
  englishTitle,
  hindiTitle,
  date,
  englishPdfLink,
  hindiPdfLink,
}) => {
  const { language } = useLanguage();
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const selectedTitle = language === "Hindi" ? hindiTitle : englishTitle;
  const selectedPdfLink = language === "Hindi" ? hindiPdfLink : englishPdfLink;

  useEffect(() => {
    const loadFirstPage = async () => {
      try {
        const loadingTask = pdfjs.getDocument(selectedPdfLink);

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
  }, [selectedPdfLink]);

  const handleClick = () => {
    navigate("/viewer", {
      state: { englishTitle, hindiTitle, date, englishPdfLink, hindiPdfLink },
    });
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
          alt={selectedTitle}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{selectedTitle}</h3>
        <p className="text-gray-300">{date}</p>
      </div>
    </div>
  );
};

PdfCard.propTypes = {
  englishTitle: PropTypes.string,
  hindiTitle: PropTypes.string,
  date: PropTypes.string,
  englishPdfLink: PropTypes.string,
  hindiPdfLink: PropTypes.string,
};

export default PdfCard;
