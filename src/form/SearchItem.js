

const SearchItem = ({ searchItem, setSearchItem, searchArticle }) => {

    return (
        <form className="searchForm" onSubmit={(e)=>{searchArticle(e)}}>
            <input type="text"
                placeholder="search item"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                role="searchbox"
                required
            />

        </form>
    )


}

export default SearchItem;