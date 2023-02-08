function Header({
  filter,
  filterColumn,
  pageSize,
  setFilter,
  setFilterColumn,
  onPageSizeChange,
}) {
  return (
    <div className="row table-header">
      <div className="col-sm-8">
        <Filter
          filter={filter}
          filterColumn={filterColumn}
          setFilter={setFilter}
          setFilterColumn={setFilterColumn}
        />
      </div>
      <div className="col-sm-4">
        <PageSizeSelector
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
        />
      </div>
    </div>
  );
}
