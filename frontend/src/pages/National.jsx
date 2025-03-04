import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

import AdSlider from "../components/AdSlider";
import LatestNews from "../components/LatestNews";
import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";

const National = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles/category/National"
  );

  const {
    loading: allLoading,
    error: allError,
    data: allArticles,
  } = useFetch("http://localhost:1337/api/articles");

  let shuffledArticles = [];
  if (allArticles) {
    const filteredArticles = allArticles.filter(
      (article) => article.category !== "National"
    );
    shuffledArticles = [...filteredArticles].sort(() => 0.5 - Math.random());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || allLoading) {
    return (
      <div className="text-center !p-8">
        <p className="!mt-4">Loading articles...</p>
      </div>
    );
  }

  if (error || allError) {
    return (
      <div className="text-center !p-8 text-red-500">
        Error loading articles: {error || allError}
      </div>
    );
  }

  return (
    <div className="flex gap-4 !px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            NATIONAL NEWS
          </h2>
        </div>

        <section className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-3/5">
            <AdSlider />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <LatestNews articles={data} />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-3/5">
            {data[0] && <BigCard article={data[0]} />}
          </div>
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {data.slice(1, 3).map((article) => (
                <SideCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.slice(3, 7).map((article) => (
                <MidCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-5">
            {data.slice(7, 8).length > 0 && (
              <FullCard articles={data.slice(7, 8)} />
            )}
          </div>
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {data.slice(8, 10).map((article) => (
                <SideCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium">You may also like</h2>

            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-5">
              {shuffledArticles.slice(0, 6).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:hidden gap-5">
              {shuffledArticles.slice(0, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default National;
