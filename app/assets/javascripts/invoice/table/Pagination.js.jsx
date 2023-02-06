const MAX_PAGES = 3;

function Pagination({ currentPageNum, totalPages, setCurrentPageNum }) {
  let pagesShown;

  const min = 1;
  const minRange = Math.max(2, currentPageNum - MAX_PAGES);
  const maxRange = Math.min(totalPages, currentPageNum + MAX_PAGES);
  const max = totalPages;

  if (totalPages == 1) {
    pagesShown = [1];
  } else {
    pagesShown = [1, ..._.range(minRange, maxRange), max];
  }

  pagesShown = pagesShown.map((page) => {
    const handleClick = () => {
      setCurrentPageNum(page);
    };
    return (
      <li
        key={page}
        className={`page-item ${page == currentPageNum ? "active" : ""}`}
      >
        <a onClick={handleClick} className="page-link">
          {page}
        </a>
      </li>
    );
  });

  if (minRange > 2) {
    pagesShown.splice(
      1,
      0,
      <li
        key="min-elipsis"
        role="separator"
        className="divider disabled page-item"
      >
        <a>&hellip;</a>
      </li>
    );
  }

  if (maxRange < totalPages) {
    pagesShown.splice(
      pagesShown.length - 1,
      0,
      <li
        key="max-elipsis"
        role="separator"
        className="divider disabled page-item"
      >
        <a>&hellip;</a>
      </li>
    );
  }

  const handlePrevious = () =>
    setCurrentPageNum((page) => Math.max(1, page - 1));
  const handleNext = () =>
    setCurrentPageNum((page) => Math.min(totalPages, page + 1));

  return (
    <nav aria-label="Page navigation" className="center-block">
      <ul className="pagination pagination-lg">
        <li className={`page-item ${currentPageNum == 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            aria-label="Previous"
            onClick={handlePrevious}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {pagesShown}
        <li
          className={`page-item ${
            currentPageNum == totalPages ? "disabled" : ""
          }`}
        >
          <a className="page-link" aria-label="Next" onClick={handleNext}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
