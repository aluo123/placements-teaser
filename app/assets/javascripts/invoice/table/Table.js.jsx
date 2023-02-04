const { useState } = React;

function Table({ data, columns }) {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const pages = _.chunk(data, pageSize);
  const currentPage = pages[currentPageNum - 1];
  const totalPages = pages.length;

  console.log(pages);
  return (
    <div className="container-fluid">
      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((col) => {
              return <th key={col.key}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentPage.map((item) => {
            return <DataRow key={item.id} item={item} columns={columns} />;
          })}
        </tbody>
      </table>
      <Pagination
        currentPageNum={currentPageNum}
        totalPages={totalPages}
        setCurrentPageNum={setCurrentPageNum}
      />
    </div>
  );
}
