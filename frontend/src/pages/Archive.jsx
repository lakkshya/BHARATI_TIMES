import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useLanguage from "../context/useLanguage";
import translations from "../utils/translation";

import Loading from "../components/Loading";
import Error from "../components/Error";
import PdfCard from "../components/PdfCard";

const Archive = () => {
  const { language } = useLanguage();

  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/archives`
  );

  const allNewspapers = Array.isArray(data)
    ? data
        .map((item) => {
          const title =
            language === "Hindi" ? item.hindiTitle : item.englishTitle;
          const pdfLink =
            language === "Hindi"
              ? item.hindiPdfLink?.url
              : item.englishPdfLink?.url;

          return {
            id: item.id,
            englishTitle: item.englishTitle,
            hindiTitle: item.hindiTitle,
            englishPdfLink: item.englishPdfLink,
            hindiPdfLink: item.hindiPdfLink,
            createdAt: item.createdAt,
            title,
            date: item.createdAt?.split("T")[0],
            pdfLink: pdfLink ? `${import.meta.env.VITE_API_URL}${pdfLink}` : "#",
          };
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading message={translations[language].pleaseWait} />;
  }

  if (error) {
    return <Error message={translations[language].errorMessage} />;
  }

  return (
    <div className="flex gap-4 !px-3 lg:!px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            {translations[language].archive}
          </h2>
        </div>

        <section className="flex flex-col gap-10">
          {allNewspapers.length === 0 ? (
            <p>No archives available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {allNewspapers.map((item) => (
                <PdfCard
                  key={item.id}
                  englishTitle={item.englishTitle}
                  hindiTitle={item.hindiTitle}
                  date={item.date}
                  englishPdfLink={
                    item.englishPdfLink?.url
                      ? `http://localhost:1337${item.englishPdfLink.url}`
                      : null
                  }
                  hindiPdfLink={
                    item.hindiPdfLink?.url
                      ? `http://localhost:1337${item.hindiPdfLink.url}`
                      : null
                  }
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Archive;
