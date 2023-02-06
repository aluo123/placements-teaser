function Header({ filter, pageSize, setFilter, setPageSize }) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="col-sm-6">
        <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </div>
  );
}
