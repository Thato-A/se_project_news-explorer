import "./SearchForm.css";
function SearchForm({ handleSearch }) {
  return (
    <>
      <div className="search">
        <div className="search__container">
          <h1 className="search__title">Whats going on in the world ?</h1>
          <p className="search__paragraph">
            Find the latest news on any topic and save them in your personal
            account
          </p>
          <div className="search__content">
            <form className="search__form" onSubmit={handleSearch}>
              <input
                className="search__input"
                type="text"
                placeholder="Enter topic"
              />
              <button className="search__btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
