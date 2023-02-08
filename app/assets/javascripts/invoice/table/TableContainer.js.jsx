const { useState } = React;

function TableContainer({ data, columns, onSave }) {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filter, setFilter] = useState("");
  const [filterColumn, setFilterColumn] = useState(CAMPAIGN_NAME_COLUMN);

  data = data.filter((item) =>
    item[filterColumn.key].toString().includes(filter)
  );

  const pages = _.chunk(data, pageSize);
  const currentPage = pages[currentPageNum - 1];
  const totalPages = pages.length;

  return (
    <div className="container-fluid">
      <Header
        filter={filter}
        filterColumn={filterColumn}
        pageSize={pageSize}
        setFilter={setFilter}
        setPageSize={setPageSize}
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
            setCurrentPageNum={setCurrentPageNum}
          />
        </div>
      )}
    </div>
  );
}
