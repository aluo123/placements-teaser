const DEBOUNCE_TIME = 100;

function Filter({
  filter,
  filterColumn,
  onFilterChange,
  onFilterColumnChange,
}) {
  const [localFilter, setLocalFilter] = useState(filter);
  const debouncedFilter = _.debounce(
    (newFilter) => onFilterChange(newFilter),
    DEBOUNCE_TIME
  );

  const handleSearch = (e) => {
    const newFilter = e.target.value;
    setLocalFilter(newFilter);
    debouncedFilter(newFilter);
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
