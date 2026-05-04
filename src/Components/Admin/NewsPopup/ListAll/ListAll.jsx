import React from 'react';
import './ListAll.css';

const RowActions = () => (
  <div className="np-actions">
    <button className="np-btn np-edit">✎</button>
    <button className="np-btn np-delete">🗑</button>
  </div>
)

export default function ListAll(){
  return (
    <div className="np-page container">
      <h2 className="np-title">News & Popup List</h2>

      <div className="np-toolbar">
        <label>List</label>
        <select className="np-select"><option>All</option><option>News</option><option>Popup</option></select>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Display on</th>
              <th>Publish Date</th>
              <th>Upto Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Title">Welcome</td>
              <td data-label="Type">News/Event</td>
              <td data-label="Display on">Member</td>
              <td data-label="Publish Date">28-02-2025</td>
              <td data-label="Upto Date">28-02-2026</td>
              <td data-label="Status"><span className="np-badge np-published">Published</span></td>
              <td data-label="Action"><RowActions/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
