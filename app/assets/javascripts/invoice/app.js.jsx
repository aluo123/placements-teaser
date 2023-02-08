const { useEffect, useState } = React;

function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [filterColumn, setFilterColumn] = useState(CAMPAIGN_NAME_COLUMN);

  useEffect(() => {
    const params = new URLSearchParams({
      filter,
      filter_column: filterColumn.key,
      page,
      page_size: pageSize,
    });
    fetch("/invoice/index.json?" + params.toString())
      .then((res) => res.json())
      .then((json_data) => {
        setPage(json_data.page);
        setTotalPages(json_data.pages);
        setData(json_data.invoices);
        console.log(json_data);
        setIsLoading(false);
      });
  }, [filter, filterColumn, page, pageSize]);

  const handleSave = (item) => {
    updateAdjustments(item);
  };

  const handlePageSizeChange = (pageSize) => {
    setPage(1);
    setPageSize(pageSize);
  };

  return (
    <div>
      {isLoading ? (
        <h3 className="text-muted">
          <i className="fa fa-cog fa-spin" />
          Loading React.js Component&hellip;
        </h3>
      ) : (
        <TableContainer
          columns={COLUMN_CONFIGS}
          currentPage={data}
          currentPageNum={page}
          filter={filter}
          filterColumn={filterColumn}
          pageSize={pageSize}
          totalPages={totalPages}
          onFilterChange={setFilter}
          onFilterColumnChange={setFilterColumn}
          onSave={handleSave}
          onPageChange={setPage}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}
