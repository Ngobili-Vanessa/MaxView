import { useMemo, useState } from "react";

import articles from "../data/articles.json";
import media from "../data/media.json";
import events from "../data/events.json";
import categories from "../data/categories.json";

import ContentCard from "../components/ContentCard";
import FilterBar from "../components/FilterBar";
import SortControl from "../components/SortControl";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("newest");

  // Combine articles, media and events
  const allContent = useMemo(() => {
    const articleItems = articles.map((item) => ({
      ...item,
      contentType: "article",
    }));

    const mediaItems = media.map((item) => ({
      ...item,
      image: item.thumbnail,
      contentType: "media",
    }));

    const eventItems = events.map((item) => ({
      ...item,
      contentType: "event",
    }));

    return [
      ...articleItems,
      ...mediaItems,
      ...eventItems,
    ];
  }, []);

  // Filter and sort content
  const filteredContent = useMemo(() => {
    let result = [...allContent];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Sorting
    if (sort === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );
    }

    if (sort === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.date) - new Date(b.date)
      );
    }

    if (sort === "title") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "likes") {
      result.sort(
        (a, b) =>
          (b.likes || 0) - (a.likes || 0)
      );
    }

    return result;
  }, [allContent, selectedCategory, sort]);

  // Find selected category information
  const currentCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  return (
    <div className="category-page">

      {/* Category heading */}
      <div className="category-header">
        <h1>
          {currentCategory
            ? currentCategory.name
            : "Explore MaxView"}
        </h1>

        <p>
          {currentCategory
            ? currentCategory.description
            : "Explore articles, media and events."}
        </p>
      </div>

      {/* Category filters */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Sort control */}
      <SortControl
        value={sort}
        onChange={setSort}
      />

      {/* Content */}
      <div className="content-grid">
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <ContentCard
              key={`${item.contentType}-${item.id}`}
              item={item}
            />
          ))
        ) : (
          <p>No content found.</p>
        )}
      </div>

    </div>
  );
}

export default Category;