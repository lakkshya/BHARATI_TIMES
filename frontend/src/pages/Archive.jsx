import { useEffect } from "react";
import PdfCard from "../components/PdfCard";

const Archive = () => {

  const newspapers = [
    {
      id: 1,
      title: "Newspaper 1",
      date: "2025-02-07",
      pdfLink: "/Volume-1-Issue-63.pdf",
    },
    {
      id: 2,
      title: "Newspaper 2",
      date: "2025-02-06",
      pdfLink: "/Volume-1-Issue-64.pdf",
    },
    {
      id: 3,
      title: "Newspaper 3",
      date: "2025-02-05",
      pdfLink: "/Volume-1-Issue-65.pdf",
    },
    {
      id: 4,
      title: "Newspaper 4",
      date: "2025-02-04",
      pdfLink: "/Volume-1-Issue-66.pdf",
    },
    {
      id: 5,
      title: "Newspaper 5",
      date: "2025-02-03",
      pdfLink: "/Volume-1-Issue-67.pdf",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex gap-4 !px-10 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">ARCHIVE</h2>
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
