function PageSizeSelector({ pageSize, onPageSizeChange }) {
  const options = [5, 10, 25, 50];
  const handleSelect = (e) => {
    onPageSizeChange(e.target.value);
  };
  return (
    <div className="input-group">
      <span className="input-group-addon">Items Per Page</span>
      <select
        value={pageSize}
        className="form-control"
        name="page-size-selector"
        onChange={handleSelect}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
