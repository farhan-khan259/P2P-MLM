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
                    <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="none" style={{ marginRight: 6 }}>
                        <g>
                          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.646.844 5.09 2.297 7.09L4.063 29.25a1 1 0 0 0 1.25 1.25l7.16-2.234A12.93 12.93 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.25 0-2.469-.227-3.617-.672a1 1 0 0 0-.672-.031l-6.016 1.875 1.875-6.016a1 1 0 0 0-.031-.672A9.96 9.96 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.5 5a1 1 0 0 0-.969 1.25c.188.75.547 1.844 1.031 2.844.484 1 .984 1.844 1.25 2.188.266.344.422.5.75.781.328.281.547.25.844.219.297-.031.516-.031.797.25.281.281 1.094 1.344 1.344 1.625.25.281.5.25.797.219.297-.031 1.016-.406 1.844-1.031.828-.625 1.406-1.25 1.594-1.531.188-.281.188-.5.156-.781-.031-.281-.25-.406-.531-.531-.281-.125-1.672-.828-1.969-.969-.297-.141-.484-.188-.672.094-.188.281-.75.938-.938 1.125-.188.188-.344.188-.625.031-.281-.156-1.094-.844-1.75-1.781-.656-.938-.844-1.625-.938-1.906-.094-.281.031-.406.188-.531.156-.125.344-.344.469-.531.125-.188.094-.344.031-.531-.063-.188-.563-1.406-.75-1.844A1 1 0 0 0 11.5 10z" fill="#25D366"/>
                          <path d="M12.5 10a1 1 0 0 0-.969 1.25c.188.75.547 1.844 1.031 2.844.484 1 .984 1.844 1.25 2.188.266.344.422.5.75.781.328.281.547.25.844.219.297-.031.516-.031.797.25.281.281 1.094 1.344 1.344 1.625.25.281.5.25.797.219.297-.031 1.016-.406 1.844-1.031.828-.625 1.406-1.25 1.594-1.531.188-.281.188-.5.156-.781-.031-.281-.25-.406-.531-.531-.281-.125-1.672-.828-1.969-.969-.297-.141-.484-.188-.672.094-.188.281-.75.938-.938 1.125-.188.188-.344.188-.625.031-.281-.156-1.094-.844-1.75-1.781-.656-.938-.844-1.625-.938-1.906-.094-.281.031-.406.188-.531.156-.125.344-.344.469-.531.125-.188.094-.344.031-.531-.063-.188-.563-1.406-.75-1.844A1 1 0 0 0 11.5 10z" fill="#fff"/>
                        </g>
                      </svg>
                      Share Payment Screen Shot
                    </span>
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
