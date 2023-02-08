function FilterColumnSelector({ filterColumn, onFilterColumnChange }) {
  return (
    <div className="dropdown input-group-btn">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {filterColumn.header}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        {FILTER_COLUMNS.map((column) => {
          const handleClick = () => {
            onFilterColumnChange(column);
          };

          return (
            <li key={column.key}>
              <a onClick={handleClick}>{column.header}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
