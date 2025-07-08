// src/components/Pagination.js
import React from 'react';
import './Dashboard.css';

const Pagination = ({ currentPage, totalPages, totalItems, pageSize, onPageChange, onPageSizeChange }) => {
  const pagesToShow = [];

  if (currentPage > 1) pagesToShow.push(currentPage - 1);
  pagesToShow.push(currentPage);
  if (currentPage < totalPages) pagesToShow.push(currentPage + 1);

  return (
    <div className="pagination-container pagination">
      <div className="pagination-info">
        {Math.min((currentPage - 1) * pageSize + 1, totalItems)}–
        {Math.min(currentPage * pageSize, totalItems)} of {totalItems} items
      </div>

      <div className="pagination-buttons">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          {'<'}
        </button>

        {pagesToShow.map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          {'>'}
        </button>
      </div>

      <select
        className="page-size-selector"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value={10}>10 / Page</option>
        <option value={50}>50 / Page</option>
        <option value={100}>100 / Page</option>
        <option value={150}>150 / Page</option>
        <option value={200}>200 / Page</option>
        <option value={300}>300 / Page</option>
      </select>
    </div>
  );
};


export default Pagination;
