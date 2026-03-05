import './GenerateEPin.css';

function GenerateEPin() {
  return (
    <div>
      <h1 className="page-title">Generate ePin</h1>

      <div className="panel">
        <div className="epin-header-row">
          <h2 className="epin-title">Generate ePin</h2>
        </div>

        <div className="epin-generate-grid">
          <label className="field-label">Type</label>
          <select className="select-input">
            <option>ePin Name</option>
            <option>Activation</option>
          </select>

          <label className="field-label">Client ID</label>
          <input className="text-input" placeholder="Client ID" />

          <label className="field-label">Required no.of ePin</label>
          <input className="text-input" type="number" min="1" placeholder="Required no.of ePin" />
        </div>

        <div className="epin-generate-actions">
          <button className="btn-danger">Reset</button>
          <button className="btn-success">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default GenerateEPin;
