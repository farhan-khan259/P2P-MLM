import { useMemo, useState } from 'react';
import qrCode from '../../../../Assets/Pictures/QR-Code.png';
import './EpinFranchiseList.css';

const CopyIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00aaff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ cursor: 'pointer', marginLeft: 8, verticalAlign: 'middle' }}
    className="copy-icon"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const franchiseItems = [
  {
    id: 'EI45451278',
    name: 'AMRUTA RAJKIRAN ',
    upi: 'amrutas020187@oksbi',
    city: 'PUNE',
    stock: 150,
    status: 'IN STOCK'
  },
  {
    id: 'EI45451279',
    name: 'PUREX WATERTECH',
    upi: 'shirkenshikhant@oksbi',
    city: 'SATARA',
    stock: 0,
    status: 'OUT OF STOCK'
  },
  {
    id: 'EI45451274',
    name: 'SILVER LIFE MULTITRADE',
    upi: 'amrutasalunke@oksbi',
    city: 'THANE',
    stock: 150,
    status: 'IN STOCK'
  },
  {
    id: 'EI45451272',
    name: 'SONALI N SHIRKE',
    upi: 'amrutasalunke@oksbi',
    city: 'PUNE',
    stock: 150,
    status: 'IN STOCK'
  },
  {
    id: 'EI45451273',
    name: 'PUNE WATER TECHNOLOGY',
    upi: 'purexwater@oksbi',
    city: 'PATANA',
    stock: 150,
    status: 'IN STOCK'
  },
  {
    id: 'EI45451275',
    name: 'DNYANDEV DONGARE',
    upi: 'dynandongaret@oksbi',
    city: 'SATARA',
    stock: 0,
    status: 'OUT OF STOCK'
  }
];

function EpinFranchiseList() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1400);
    });
  };

  const filteredList = useMemo(() => {
    return franchiseItems.filter((item) => {
      const term = search.toLowerCase().trim();
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.upi.toLowerCase().includes(term) ||
        item.city.toLowerCase().includes(term) ||
        item.id.toLowerCase().includes(term);
      const matchesCity = city === 'All' || item.city === city;
      return matchesSearch && matchesCity;
    });
  }, [search, city]);

  return (
    <div className="franchise-list-page">
      <section className="panel franchise-list-panel">
        <h2 className="section-title franchise-list-title">E-PIN FRANCHISE LIST</h2>

        <div className="franchise-list-tools">
          <div className="franchise-search-group">
            <input
              type="text"
              className="text-input franchise-search-input"
              placeholder="Search by name, UPI ID, city or franchise ID"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select
              className="select-input franchise-city-select"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="All">ALL CITIES</option>
              <option value="PUNE">PUNE</option>
              <option value="SATARA">SATARA</option>
              <option value="THANE">THANE</option>
              <option value="PATANA">PATANA</option>
            </select>
          </div>
          <button type="button" className="btn-primary franchise-refresh-btn" onClick={() => setSearch('')}>
            RESET
          </button>
        </div>

        <div className="franchise-card-grid">
          {filteredList.length ? (
            filteredList.map((item) => (
              <article key={item.id} className="franchise-card">
                <div className="franchise-card-image">
                  <div className="qr-frame">
                    <img src={qrCode} alt="Franchise QR code" className="franchise-qr-image" />
                  </div>
                </div>
                <div className="franchise-card-details">
                  <h3 className="franchise-name">{item.name}</h3>
                  <div className="franchise-status-row">
                    <span className={`franchise-stock-chip ${item.stock ? 'stock-available' : 'stock-out'}`}>
                      E-PIN: {item.stock} {item.stock ? 'IN STOCK' : 'OUT OF STOCK'}
                    </span>
                    <span className="franchise-city">CITY : {item.city}</span>
                  </div>
                  <div className="franchise-upi-row">
                    <span className="franchise-upi">{item.upi}</span>
                    <div className="franchise-copy-group">
                      <CopyIcon onClick={() => handleCopy(item.upi, item.id)} />
                      {copiedId === item.id && <span className="copy-notice">Copied</span>}
                    </div>
                  </div>
                  <button type="button" className="franchise-share-btn">
                    Share Payment Screen Shot
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="franchise-empty-state">No franchise matches your filter.</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default EpinFranchiseList;
