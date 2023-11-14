import "./SearchBar.css";
function SearchBar({ searchValue, onSearchValueChange }) {
    const handleTitleFilterChange = (e) => {
        onSearchValueChange(e.target.value);
    };
    return (
        <div className="search">
            <input
                type="text"
                placeholder="search"
                value={searchValue}
                onChange={handleTitleFilterChange}
            />
        </div>
    );
}
export default SearchBar;
