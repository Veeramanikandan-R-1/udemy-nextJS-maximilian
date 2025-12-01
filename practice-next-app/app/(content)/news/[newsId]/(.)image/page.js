import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

export default function ImagePage({ params }) {
  params = React.use(params);
  const newsSlug = params.newsId;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <h2>Intercepted Image</h2>
      <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
    </div>
  );
}
