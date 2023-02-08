function Header({
  filter,
  filterColumn,
  pageSize,
  onFilterChange,
  onFilterColumnChange,
  onPageSizeChange,
}) {
  return (
    <div className="row table-header">
      <div className="col-sm-8">
        <Filter
          filter={filter}
          filterColumn={filterColumn}
          onFilterChange={onFilterChange}
          onFilterColumnChange={onFilterColumnChange}
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
