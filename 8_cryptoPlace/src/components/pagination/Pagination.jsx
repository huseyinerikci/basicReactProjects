import "./Pagination.css";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`pagination-page ${
              currentPage === pageNumber ? "active" : ""
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
