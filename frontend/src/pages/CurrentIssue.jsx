import { useState, useEffect } from "react";
import PdfCard from "../components/PdfCard";

const CurrentIssue = () => {
  const [recentNewspapers, setRecentNewspapers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchRecentNewspapers = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/archives?populate=*"
        );
        const data = await res.json();

        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          date: item.createdAt.split("T")[0], // or use publishedAt
          pdfLink: item.pdfLink?.url
            ? `http://localhost:1337${item.pdfLink.url}`
            : "#",
        }));

        // Sort by newest date and take only the most recent one
        const sorted = formatted.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setRecentNewspapers(sorted.slice(0, 1)); // only the most recent
      } catch (error) {
        console.error("Error fetching recent archives:", error);
      }
    };

    fetchRecentNewspapers();
  }, []);

  return (
    <div className="flex gap-4 !px-3 lg:!px-6 !py-10 bg-white">
      <main className="w-full flex flex-col items-center gap-8 md:gap-10">
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
          <h2 className="text-xl text-center font-medium inline tracking-widest">
            CURRENT ISSUE
          </h2>
        </div>

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
      </main>
    </div>
  );
};

export default CurrentIssue;
