function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search MaxView..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button onClick={() => onChange("")}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;