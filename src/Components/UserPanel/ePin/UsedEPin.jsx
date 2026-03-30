import React from "react";
import "./UsedEPin.css";

const UsedEPin = () => {
  return (
    <div className="buyepin-container">
      <h1 className="buyepin-title">Used ePin</h1>
      <div className="buyepin-panel">
        <div className="buyepin-section buyepin-single-card">
          <div className="buyepin-single-flex">
            <div className="buyepin-single-left" style={{width: '100%'}}>
              <form className="buyepin-form-fields" style={{width: '100%'}}>
                <div className="buyepin-form-col" style={{width: '100%'}}>
                  <div className="buyepin-input-group" style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <label style={{marginBottom: 0, whiteSpace: 'nowrap'}}>ePin No</label>
                    <input type="text" placeholder="ePin No" style={{flex: 1, minWidth: 0}} />
                  </div>
                  <div className="buyepin-input-group">
                    <label>USED MEMBER ID</label>
                    <input type="text" placeholder="Used Member ID" />
                  </div>
                  <div className="buyepin-input-group">
                    <label>Status</label>
                    <select>
                      <option value="used">Used</option>
                    </select>
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
                <div className="buyepin-responsive-table">
                  <table className="buyepin-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Type/Name</th>
                        <th>ePin.No</th>
                        <th>Cost</th>
                        <th>Gen.By</th>
                        <th>Gen.Date</th>
                        <th>Current.Owner</th>
                        <th>Status</th>
                        <th>Use.By</th>
                        <th>Use.Date</th>
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
    </div>
  );
};

export default UsedEPin;
