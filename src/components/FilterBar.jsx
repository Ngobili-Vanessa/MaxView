function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  contentType,
  onContentTypeChange,
}) {
  return (
    <div className="filter-bar">

      {/* Category filters */}
      <div className="filter-group">
        <span className="filter-label">Category:</span>

        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => onCategoryChange("all")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={
              selectedCategory === category.id ? "active" : ""
            }
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content type filters */}
      <div className="filter-group">
        <span className="filter-label">Type:</span>

        <button
          className={contentType === "all" ? "active" : ""}
          onClick={() => onContentTypeChange("all")}
        >
          All
        </button>

        <button
          className={contentType === "article" ? "active" : ""}
          onClick={() => onContentTypeChange("article")}
        >
          Articles
        </button>

        <button
          className={contentType === "media" ? "active" : ""}
          onClick={() => onContentTypeChange("media")}
        >
          Media
        </button>

        <button
          className={contentType === "event" ? "active" : ""}
          onClick={() => onContentTypeChange("event")}
        >
          Events
        </button>
      </div>

    </div>
  );
}

export default FilterBar;