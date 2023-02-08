const { useState } = React;

function TableContainer({
  currentPage,
  totalPages,
  currentPageNum,
  pageSize,
  columns,
  filter,
  filterColumn,
  onFilterChange,
  onFilterColumnChange,
  onSave,
  onPageChange,
  onPageSizeChange,
}) {
  return (
    <div className="container-fluid">
      <Header
        filter={filter}
        filterColumn={filterColumn}
        pageSize={pageSize}
        onFilterChange={onFilterChange}
        onPageSizeChange={onPageSizeChange}
        onFilterColumnChange={onFilterColumnChange}
      />
      {currentPage.length == 0 ? (
        <EmptyTable />
      ) : (
        <div>
          <Pagination
            currentPageNum={currentPageNum}
            totalPages={totalPages}
            setCurrentPageNum={onPageChange}
          />
          <Table data={currentPage} columns={columns} onSave={onSave} />
          <Pagination
            currentPageNum={currentPageNum}
            totalPages={totalPages}
            setCurrentPageNum={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
