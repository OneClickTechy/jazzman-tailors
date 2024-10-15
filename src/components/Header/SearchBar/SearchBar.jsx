const SearchBar = () => {
  return (
    <form >
        <label htmlFor="search-bar" className="absolute left-[-999999px]">Search</label>
        <input type="search" name="search-bar" id="search-bar" placeholder="Search here...."/>
    </form>
  )
}

export default SearchBar