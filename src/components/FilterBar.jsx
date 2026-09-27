function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="filter-bar">

      <button
        className={
          selectedCategory === "all" ? "active" : ""
        }
        onClick={() => onCategoryChange("all")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          className={
            selectedCategory === category.id
              ? "active"
              : ""
          }
          onClick={() =>
            onCategoryChange(category.id)
          }
        >
          {category.name}
        </button>
      ))}

    </div>
  );
}

export default FilterBar;