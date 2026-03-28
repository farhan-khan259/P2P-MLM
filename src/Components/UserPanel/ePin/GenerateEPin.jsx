import React from "react";
import "./GenerateEPin.css";

const GenerateEPin = () => {
  return (
    <div className="buyepin-container">
      <h1 className="buyepin-title">Generate ePin</h1>
      <div className="buyepin-panel">
        <form className="buyepin-form-grid">
          <div className="buyepin-section buyepin-single-card">
            <div className="buyepin-single-flex">
              <div className="buyepin-single-left" style={{width: '100%'}}>
                <div className="buyepin-form-fields" style={{width: '100%'}}>
                  <div className="buyepin-form-col" style={{width: '100%'}}>
                    <div className="buyepin-input-group">
                      <label>Requested From Upline</label>
                      <input type="text" value="No cash wallet" disabled />
                    </div>
                    <div className="buyepin-input-group">
                      <label>Package</label>
                      <select>
                        <option value="">Select</option>
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>
                    <div className="buyepin-input-group">
                      <label>Generation Date</label>
                      <input type="text" value="23-03-2026" disabled />
                    </div>
                    <div className="buyepin-input-group">
                      <label>Generated For ID</label>
                      <input type="text" value="DT101010" disabled />
                    </div>
                  </div>
                </div>
                <div className="buyepin-btn-row">
                  <button className="buyepin-btn-blue" type="submit">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateEPin;
