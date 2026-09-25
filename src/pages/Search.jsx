import { useMemo, useState } from "react";

import articles from "../data/articles.json";
import media from "../data/media.json";
import events from "../data/events.json";

import ContentCard from "../components/ContentCard";
import SearchBar from "../components/SearchBar";
import SortControl from "../components/SortControl";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("newest");

  // Combine all content
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

  // Search content
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const query = searchTerm.toLowerCase();

    let results = allContent.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const description =
        item.description?.toLowerCase() || "";
      const category =
        item.category?.toLowerCase() || "";
      const content =
        item.content?.toLowerCase() || "";
      const mediaType =
        item.mediaType?.toLowerCase() || "";
      const location =
        item.location?.toLowerCase() || "";

      const tags = Array.isArray(item.tags)
        ? item.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query) ||
        content.includes(query) ||
        tags.includes(query) ||
        mediaType.includes(query) ||
        location.includes(query)
      );
    });

    // Sorting
    if (sort === "newest") {
      results.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );
    }

    if (sort === "oldest") {
      results.sort(
        (a, b) =>
          new Date(a.date) - new Date(b.date)
      );
    }

    if (sort === "title") {
      results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "likes") {
      results.sort(
        (a, b) =>
          (b.likes || 0) - (a.likes || 0)
      );
    }

    return results;
  }, [searchTerm, sort, allContent]);

  return (
    <div className="search-page">

      <div className="search-header">
        <h1>Search MaxView</h1>

        <p>
          Search articles, media, events and more.
        </p>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {searchTerm && (
        <div className="search-results-header">
          <h2>
            Search results for "{searchTerm}"
          </h2>

          <p>
            {searchResults.length} result
            {searchResults.length !== 1
              ? "s"
              : ""}
          </p>
        </div>
      )}

      <SortControl
        value={sort}
        onChange={setSort}
      />

      <div className="content-grid">
        {!searchTerm ? (
          <p>Start typing to search MaxView.</p>
        ) : searchResults.length > 0 ? (
          searchResults.map((item) => (
            <ContentCard
              key={`${item.contentType}-${item.id}`}
              item={item}
            />
          ))
        ) : (
          <p>
            No results found for "{searchTerm}".
          </p>
        )}
      </div>

    </div>
  );
}

export default Search;