const { useState } = React;

function TableContainer({
  currentPage,
  totalPages,
  currentPageNum,
  pageSize,
  columns,
  onPageSizeChange,
  onSave,
  onPageChange,
}) {
  const [filter, setFilter] = useState("");
  const [filterColumn, setFilterColumn] = useState(CAMPAIGN_NAME_COLUMN);

  currentPage = currentPage.filter((item) =>
    item[filterColumn.key].toString().includes(filter)
  );

  return (
    <div className="container-fluid">
      <Header
        filter={filter}
        filterColumn={filterColumn}
        pageSize={pageSize}
        setFilter={setFilter}
        onPageSizeChange={onPageSizeChange}
        setFilterColumn={setFilterColumn}
      />
      {totalPages == 0 ? (
        <EmptyTable />
      ) : (
        <div>
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
