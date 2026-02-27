import '../../Common/UserLayout.css';
import './MyTree.css';

const downline = ['IHH192108', 'IHH5977055', 'IHH4500814', 'IHH1676126', 'IHH4164476'];

function MyTree() {
  return (
    <div>
      <h1 className="user-page-title">My Tree</h1>
      <div className="user-panel">
        <div className="tree-controls">
          <label>MEMBER ID</label>
          <input />
          <button className="user-btn-blue">Show Details</button>
        </div>
        <div className="tree-list">
          {downline.map((id) => (
            <p key={id}>{id}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTree;
