// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchComments } from '../api/api';
import { saveSettings, loadSettings } from '../utils/storage';
import Pagination from './Pagination';
import './Dashboard.css';

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchComments().then(setComments);
  }, []);


  useEffect(() => {
    const settings = loadSettings();
    if (settings) {
      setSearchTerm(settings.searchTerm);
      setSortField(settings.sortField);
      setSortOrder(settings.sortOrder);
      setPageSize(settings.pageSize);
      setCurrentPage(settings.currentPage);
    }
  }, []);

  useEffect(() => {
    saveSettings({ searchTerm, sortField, sortOrder, pageSize, currentPage });
  }, [searchTerm, sortField, sortOrder, pageSize, currentPage]);

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1);
  };

  const filtered = comments.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sorted = [...filtered];
  if (sortField) {
    sorted.sort((a, b) => {
      const valA = a[sortField].toString().toLowerCase();
      const valB = b[sortField].toString().toLowerCase();
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const totalPages = Math.ceil(sorted.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = sorted.slice(startIndex, startIndex + pageSize);

  return (
    <div className="dashboard-container">
      <div className="dashboard-controls">
        <div className="sort-controls">
          <select onChange={(e) => handleSort('postId', e.target.value)}>
            <option value="">Sort Post ID</option>
            <option value="asc">Post ID ↑</option>
            <option value="desc">Post ID ↓</option>
          </select>
          <select onChange={(e) => handleSort('name', e.target.value)}>
            <option value="">Sort Name</option>
            <option value="asc">Name ↑</option>
            <option value="desc">Name ↓</option>
          </select>
          <select onChange={(e) => handleSort('email', e.target.value)}>
            <option value="">Sort Email</option>
            <option value="asc">Email ↑</option>
            <option value="desc">Email ↓</option>
          </select>
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search name, email, comment"
           aria-label="Search name, email, comment"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table className="dashboard-table custom-table">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(c => (
            <tr key={c.id}>
              <td>{c.postId}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={sorted.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default Dashboard;
