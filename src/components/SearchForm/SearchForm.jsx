function SearchForm() {
  return (
    <>
      <div className="search">
        <h1 className="search__title">Whats going on in the world ?</h1>
        <p className="search__paragraph">
          Find the latest news on any topic and save them in your personal
          account
        </p>
      </div>

      <div className="search__container">
        <form className="search__form">
          <input type="text" placeholder="Enter topic" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
