const DEBOUNCE_TIME = 300;

function Filter({
  filter,
  filterColumn,
  onFilterChange,
  onFilterColumnChange,
}) {
  const [localFilter, setLocalFilter] = useState(filter);

  const handleSearch = (e) => {
    const newFilter = e.target.value;
    setLocalFilter(newFilter);
    onFilterChange(newFilter);
  };
  return (
    <div className="input-group">
      <FilterColumnSelector
        filterColumn={filterColumn}
        onFilterColumnChange={onFilterColumnChange}
      />
      <span className="input-group-addon">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </span>
      <input
        onChange={handleSearch}
        className="form-control"
        name="search"
        type="search"
        value={localFilter}
      />
    </div>
  );
}
