function Filter({ filter, setFilter }) {
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="input-group">
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
