import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

import AdSlider from "../components/AdSlider";
import LatestNews from "../components/LatestNews";
import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import SideCard from "../components/SideCard";
import ArticlesList from "../components/ArticlesList";

const Technology = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles/category/Technology"
  );

  const {
    loading: allLoading,
    error: allError,
    data: allArticles,
  } = useFetch("http://localhost:1337/api/articles");

  let shuffledArticles = [];
  if (allArticles) {
    const filteredArticles = allArticles.filter(
      (article) => article.category !== "Technology"
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
    <div className="flex gap-4 !px-3 lg:!px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            TECHNOLOGY NEWS
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

        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.slice(0, 4).map((article) => (
                <MidCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {data.slice(4, 10).map((article) => (
              <SmallCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <ArticlesList articles={data} />
          </div>

          <div className="flex flex-col gap-5 md:w-1/3">
            <h2 className="text-xl font-medium">You may also like</h2>

            <div className="grid grid-cols-1 gap-5">
              {shuffledArticles.slice(0, 6).map((article) => (
                <SideCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
