function SortControl({ value, onChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort">Sort by:</label>

      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="title">Title A-Z</option>
        <option value="likes">Most Liked</option>
      </select>
    </div>
  );
}

export default SortControl;