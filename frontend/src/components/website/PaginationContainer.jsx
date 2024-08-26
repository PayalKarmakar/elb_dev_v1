import React from "react";

const PaginationContainer = ({
  pageCount,
  currentPage,
  onPageChange,
  currentOffset,
}) => {
  // Calculate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const range = 5; // Number of page links to show
    const start = Math.max(1, currentPage - Math.floor(range / 2));
    const end = Math.min(pageCount, start + range - 1);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < pageCount) {
      if (end < pageCount - 1) pages.push("...");
      pages.push(pageCount);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-auto">
        <nav aria-label="Page navigation example">
          <ul className="custom-pagination pagination">
            {/* Previous Button */}
            {currentPage > 1 && (
              <li key="prev" className="custom-page-item page-item">
                <button
                  className="custom-page-link page-link"
                  onClick={() =>
                    onPageChange(currentPage - 1, currentOffset - 5)
                  }
                >
                  Previous
                </button>
              </li>
            )}

            {/* Page Numbers */}
            {pageNumbers.map((page, index) => (
              <li
                key={index}
                className={`custom-page-item page-item ${
                  page === currentPage ? "active" : ""
                }`}
              >
                {page === "..." ? (
                  <span className="custom-page-link page-link">...</span>
                ) : (
                  <button
                    className="custom-page-link page-link"
                    onClick={() => onPageChange(page, (page - 1) * 5)}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}

            {/* Next Button */}
            {currentPage < pageCount && (
              <li key="next" className="custom-page-item page-item">
                <button
                  className="custom-page-link page-link"
                  onClick={() =>
                    onPageChange(currentPage + 1, currentOffset + 5)
                  }
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationContainer;
