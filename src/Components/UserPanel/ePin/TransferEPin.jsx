import React from "react";
import "./TransferEPin.css";

const TransferEPin = () => {
  return (
    <div className="buyepin-container">
      <h1 className="buyepin-title">Transfer ePin</h1>
      <div className="buyepin-panel">
        <div className="buyepin-section buyepin-single-card">
          <div className="buyepin-single-flex">
            <div className="buyepin-single-left" style={{width: '100%'}}>
              <form className="buyepin-form-fields" style={{width: '100%'}}>
                <div className="buyepin-form-col" style={{width: '100%'}}>
                  <div className="buyepin-input-group">
                    <label>ePin</label>
                    <input type="text" placeholder="ePin" />
                  </div>
                  <div className="buyepin-input-group">
                    <label>Date From</label>
                    <input type="date" />
                  </div>
                  <div className="buyepin-input-group">
                    <label>Date To</label>
                    <input type="date" />
                  </div>
                  <div className="buyepin-btn-row">
                    <button className="buyepin-btn-blue" type="submit">SEARCH</button>
                  </div>
                </div>
              </form>
              <div className="buyepin-tables-wrapper" style={{marginTop: 24}}>
                <table className="buyepin-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Type/Name</th>
                      <th>ePin No</th>
                      <th>Cost</th>
                      <th>Gen. By</th>
                      <th>Gen. Date</th>
                      <th>Current Owner</th>
                      <th>Status</th>
                      <th>Use By</th>
                      <th>Use Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="10" style={{background: '#ffeaea', color: '#c00', textAlign: 'center'}}>No Record Found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferEPin;
