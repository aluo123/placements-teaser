function Filter({ filter, filterColumn, setFilter, setFilterColumn }) {
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="input-group">
      <FilterColumnSelector
        filterColumn={filterColumn}
        setFilterColumn={setFilterColumn}
      />
      <span className="input-group-addon">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </span>
      <input
        onChange={handleSearch}
        className="form-control"
        name="search"
        type="search"
        value={filter}
      />
    </div>
  );
}
