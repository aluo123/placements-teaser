function PageSizeSelector({ pageSize, setPageSize }) {
  const options = [1, 5, 10, 25, 50];
  const handleSelect = (e) => {
    console.log(e);
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
