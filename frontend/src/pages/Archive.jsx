import { useState, useEffect } from "react";
import PdfCard from "../components/PdfCard";

const Archive = () => {
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNewspapers = async () => {
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

        setNewspapers(formatted);
      } catch (error) {
        console.error("Error fetching archives:", error);
      }
    };

    fetchNewspapers();
  }, []);

  return (
    <div className="flex gap-4 !px-3 lg:!px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            ARCHIVE
          </h2>
        </div>

        <section className="flex flex-col gap-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {newspapers.map((paper) => (
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
