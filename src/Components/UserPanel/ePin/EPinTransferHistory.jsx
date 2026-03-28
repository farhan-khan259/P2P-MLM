import React from "react";
import "./EPinTransferHistory.css";

const EPinTransferHistory = () => {
  return (
    <div className="buyepin-container">
      <h1 className="buyepin-title">ePin Transfer History</h1>
      <div className="buyepin-panel">
        <div className="buyepin-section buyepin-single-card">
          <div className="buyepin-single-flex">
            <div className="buyepin-single-left" style={{width: '100%'}}>
              <form className="buyepin-form-fields" style={{width: '100%'}}>
                <div className="buyepin-form-col" style={{width: '100%'}}>
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
                      <th>ePin No</th>
                      <th>Trans. From</th>
                      <th>Trans. To</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{background: '#ffeaea', color: '#c00', textAlign: 'center'}}>No Record Found</td>
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

export default EPinTransferHistory;
