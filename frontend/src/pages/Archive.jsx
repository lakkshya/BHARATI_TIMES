import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useLanguage from "../context/useLanguage";
import translations from "../utils/translation";

import PdfCard from "../components/PdfCard";

const Archive = () => {
  const { language } = useLanguage();

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/archives/language/${language}`
  );

  // Format and get the most recent newspaper
  const allNewspapers = data?.data
    ?.map((item) => ({
      id: item.id,
      title: item.title,
      date: item.createdAt.split("T")[0],
      pdfLink: item.pdfLink?.url
        ? `http://localhost:1337${item.pdfLink.url}`
        : "#",
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="text-center !p-8">
        <p className="!mt-4">Loading archives...</p>
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
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            {translations[language].archive}
          </h2>
        </div>

        <section className="flex flex-col gap-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {allNewspapers.map((paper) => (
              <PdfCard
                key={paper.id}
                title={paper.title}
                date={paper.date}
                pdfUrl={paper.pdfLink}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Archive;
