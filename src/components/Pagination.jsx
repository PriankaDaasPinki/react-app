import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate, onPageNumber }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='bg-none'>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
              {onPageNumber(currentPage)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
