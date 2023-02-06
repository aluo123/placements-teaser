function PageSizeSelector({ pageSize, setPageSize }) {
  const options = [5, 10, 25, 50];
  const handleSelect = (e) => {
    setPageSize(e.target.value);
  };
  return (
    <div>
      <select value={pageSize} className="form-control" onChange={handleSelect}>
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
