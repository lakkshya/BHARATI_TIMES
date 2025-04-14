import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useLanguage from "../context/useLanguage";
import translations from "../utils/translation";
import PdfCard from "../components/PdfCard";

const CurrentIssue = () => {
  const { language } = useLanguage();
  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/archives/language/${language}`
  );

  // Format and get the most recent newspaper
  const recentNewspapers = data?.data
    ?.map((item) => ({
      id: item.id,
      title: item.title,
      date: item.createdAt.split("T")[0],
      pdfLink: item.pdfLink?.url
        ? `http://localhost:1337${item.pdfLink.url}`
        : "#",
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="text-center !p-8">
        <p className="!mt-4">Loading current issue...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center !p-8 text-red-500">
        {error.message}. Please try again later.
      </div>
    );
  }

  return (
    <div className="flex gap-4 !px-3 lg:!px-6 !py-10 bg-white">
      <main className="w-full flex flex-col items-center gap-8 md:gap-10">
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
          <h2 className="text-xl text-center font-medium inline tracking-widest">
            {translations[language].currentIssue}
          </h2>
        </div>
        {error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : (
          <section className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-10">
            {recentNewspapers.map((paper) => (
              <PdfCard
                key={paper.id}
                title={paper.title}
                date={paper.date}
                pdfUrl={paper.pdfLink}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default CurrentIssue;
