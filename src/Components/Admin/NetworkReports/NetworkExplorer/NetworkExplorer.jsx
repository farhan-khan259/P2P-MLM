import { useState } from 'react';
import './NetworkExplorer.css';

const networkTreeData = [
  {
    id: 'DT944734',
    name: 'Rajesh',
    level: 1,
    children: [
      {
        id: 'DT352936',
        name: 'max',
        level: 2,
        children: [
          { id: 'DT911142', name: 'seema', level: 3, children: [
            { id: 'DT966226', name: 'rahul', level: 4, children: [
              { id: 'DT673726', name: 'sachin', level: 5, children: [] },
              { id: 'DT341228', name: 'nimrit', level: 5, children: [] }
            ]},
            { id: 'DT412165', name: 'Ajay', level: 4, children: [
              { id: 'DT261872', name: 'Amit', level: 5, children: [] },
              { id: 'DT782187', name: 'lokesh', level: 5, children: [] }
            ]}
          ]}
        ]
      },
      {
        id: 'DT821537',
        name: 'ramawati',
        level: 2,
        children: [
          { id: 'DT369358', name: 'Ankit', level: 3, children: [
            { id: 'DT825197', name: 'raj', level: 4, children: [
              { id: 'DT377838', name: 'ramesh', level: 5, children: [] }
            ]}
          ]},
          { id: 'DT535273', name: 'Ravna', level: 3, children: [
            { id: 'DT653732', name: 'veena', level: 4, children: [] },
            { id: 'DT744424', name: 'ram', level: 4, children: [] }
          ]}
        ]
      },
      {
        id: 'DT841232',
        name: 'jack',
        level: 2,
        children: []
      },
      {
        id: 'DT271442',
        name: 'Rajendra',
        level: 2,
        children: [
          { id: 'DT261429', name: 'Ravi', level: 3, children: [
            { id: 'DT951834', name: 'Sandeep', level: 4, children: [] },
            { id: 'DT294358', name: 'komal', level: 4, children: [] }
          ]}
        ]
      }
    ]
  },
  {
    id: 'DT659875',
    name: 'Amit',
    level: 1,
    children: []
  },
  {
    id: 'DT623254',
    name: 'sumil',
    level: 1,
    children: []
  },
  {
    id: 'DT781347',
    name: 'Sumit',
    level: 1,
    children: [
      { id: 'DT441623', name: 'Pankaj', level: 2, children: [
        { id: 'DT349598', name: 'om', level: 3, children: [
          { id: 'DT497839', name: 'adityaprakash', level: 4, children: [] }
        ]}
      ]}
    ]
  }
];

function NetworkTreeNode({ node, expandedNodes, toggleNode, searchTerm, searchLevel }) {
  const isExpanded = expandedNodes[node.id] || false;
  const hasChildren = node.children && node.children.length > 0;
  const matches = (!searchTerm || node.id.toUpperCase().includes(searchTerm.toUpperCase())) &&
                  (!searchLevel || node.level === parseInt(searchLevel));

  if (!matches && searchTerm) return null;

  return (
    <div style={{ marginLeft: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
        {hasChildren ? (
          <span
            onClick={() => toggleNode(node.id)}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '12px',
              fontWeight: 'bold',
              width: '16px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '4px'
            }}
          >
            {isExpanded ? '⊟' : '⊕'}
          </span>
        ) : (
          <span style={{ width: '16px', marginRight: '4px' }}></span>
        )}
        <span style={{ fontSize: '12px', color: '#333', fontWeight: matches ? '600' : '400' }}>
          {hasChildren && <span style={{ marginRight: '4px' }}>📁</span>}
          <strong>{node.id}</strong> - {node.name}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child) => (
            <NetworkTreeNode
              key={child.id}
              node={child}
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
              searchTerm={searchTerm}
              searchLevel={searchLevel}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NetworkExplorer() {
  const [searchMemberId, setSearchMemberId] = useState('');
  const [searchLevel, setSearchLevel] = useState('');
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleNode = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const expandAll = () => {
    const newExpandedNodes = {};
    const traverse = (node) => {
      if (node.children && node.children.length > 0) {
        newExpandedNodes[node.id] = true;
        node.children.forEach(traverse);
      }
    };
    networkTreeData.forEach(traverse);
    setExpandedNodes(newExpandedNodes);
  };

  const collapseAll = () => {
    setExpandedNodes({});
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '12px' }}>
      <h1 className="page-title" style={{ fontSize: '42px', marginBottom: '14px' }}>
        Network Explorer
      </h1>

      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        {/* Filter Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Member ID"
              value={searchMemberId}
              onChange={(e) => setSearchMemberId(e.target.value)}
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '150px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <select
            value={searchLevel}
            onChange={(e) => setSearchLevel(e.target.value)}
            style={{
              padding: '8px 12px',
              fontSize: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '120px',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            <option value="">Level</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
          <button
            style={{
              padding: '8px 20px',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: '#4a7ba7',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#355a7e')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4a7ba7')}
          >
            SEARCH
          </button>
        </div>

        {/* Instructions and Expand/Collapse Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ fontSize: '12px', color: '#666' }}>
            Click on + Sign to Expand Tree{' '}
            <span
              onClick={expandAll}
              style={{ color: '#4a7ba7', cursor: 'pointer', fontWeight: '600', marginLeft: '8px' }}
            >
              Open All
            </span>
            {' | '}
            <span
              onClick={collapseAll}
              style={{ color: '#4a7ba7', cursor: 'pointer', fontWeight: '600', marginLeft: '4px' }}
            >
              Close All
            </span>
          </span>
        </div>

        {/* Tree Container */}
        <div
          className="network-tree-container"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '12px',
            maxHeight: '600px',
            overflowY: 'auto',
            fontSize: '12px',
            lineHeight: '1.8'
          }}
        >
          {networkTreeData.map((node) => (
            <NetworkTreeNode
              key={node.id}
              node={node}
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
              searchTerm={searchMemberId}
              searchLevel={searchLevel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NetworkExplorer;
