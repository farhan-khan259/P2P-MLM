import '../../Common/UserLayout.css';
import './CreateTicket.css';

function CreateTicket() {
  return (
    <div>
      <h1 className="user-page-title">Create Ticket</h1>
      <div className="user-panel">
        <div className="form-grid create-ticket-grid">
          <label>Topic :</label><textarea rows="5" />
          <label>Message</label><textarea rows="6" />
        </div>
        <div className="btn-row">
          <button className="user-btn-muted">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
