import '../../Common/UserLayout.css';
import { useMemo, useState } from 'react';
import { networkExplorerRows } from '../../Common/userMockData';
import './MyTree.css';

function MyTree() {
  const [memberIdQuery, setMemberIdQuery] = useState('');
  const [levelQuery, setLevelQuery] = useState('');
  const [appliedMemberId, setAppliedMemberId] = useState('');
  const [appliedLevel, setAppliedLevel] = useState('');
  const [expandedNodes, setExpandedNodes] = useState(() => new Set());

  const filteredRows = useMemo(() => {
    return networkExplorerRows.filter((row) => {
      const memberMatch =
        !appliedMemberId || row.memberId.toLowerCase().includes(appliedMemberId.toLowerCase());
      const levelMatch = !appliedLevel || String(row.level) === appliedLevel;
      return memberMatch && levelMatch;
    });
  }, [appliedLevel, appliedMemberId]);

  const rowById = useMemo(() => {
    const map = new Map();
    filteredRows.forEach((row) => map.set(row.memberId, row));
    return map;
  }, [filteredRows]);

  const childrenMap = useMemo(() => {
    const map = new Map();

    filteredRows.forEach((row) => {
      if (!map.has(row.memberId)) {
        map.set(row.memberId, []);
      }
    });

    filteredRows.forEach((row) => {
      if (rowById.has(row.parentId)) {
        map.get(row.parentId).push(row.memberId);
      }
    });

    return map;
  }, [filteredRows, rowById]);

  const rootIds = useMemo(() => {
    return filteredRows
      .filter((row) => !rowById.has(row.parentId))
      .map((row) => row.memberId);
  }, [filteredRows, rowById]);

  const expandableIds = useMemo(() => {
    return Array.from(childrenMap.entries())
      .filter(([, children]) => children.length > 0)
      .map(([memberId]) => memberId);
  }, [childrenMap]);

  const handleSearch = () => {
    setAppliedMemberId(memberIdQuery.trim());
    setAppliedLevel(levelQuery);
    setExpandedNodes(new Set());
  };

  const handleOpenAll = () => {
    setExpandedNodes(new Set(expandableIds));
  };

  const handleCloseAll = () => {
    setExpandedNodes(new Set());
  };

  const toggleNode = (memberId) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(memberId)) {
        next.delete(memberId);
      } else {
        next.add(memberId);
      }
      return next;
    });
  };

  const renderTree = (memberId, depth = 0) => {
    const item = rowById.get(memberId);
    const children = childrenMap.get(memberId) || [];
    const hasChildren = children.length > 0;
    const isExpanded = expandedNodes.has(memberId);

    return (
      <div key={memberId}>
        <div className="network-tree-row" style={{ paddingLeft: `${12 + depth * 24}px` }}>
          {hasChildren ? (
            <button
              type="button"
              className="network-node-toggle"
              onClick={() => toggleNode(memberId)}
              aria-label={isExpanded ? 'Collapse node' : 'Expand node'}
            >
              {isExpanded ? '-' : '+'}
            </button>
          ) : (
            <span className="network-node-spacer" />
          )}
          <span className="network-node-label">{item.memberId} - {item.memberName}</span>
        </div>

        {hasChildren && isExpanded && children.map((childId) => renderTree(childId, depth + 1))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="user-page-title">Network Explorer</h1>
      <div className="user-panel">
        <div className="network-filters">
          <input
            type="text"
            placeholder="MEMBER ID"
            aria-label="Member ID"
            value={memberIdQuery}
            onChange={(event) => setMemberIdQuery(event.target.value)}
          />
          <select
            aria-label="Level"
            value={levelQuery}
            onChange={(event) => setLevelQuery(event.target.value)}
          >
            <option value="">LEVEL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button className="user-btn-blue" type="button" onClick={handleSearch}>Search</button>
        </div>

        <div className="network-actions-row">
          <div className="network-tree-help">Click on + sign to expand tree</div>
          <div className="network-tree-toggle" role="group" aria-label="Tree Controls">
            <button type="button" className="user-btn-outline" onClick={handleOpenAll}>Open All</button>
            <button type="button" className="user-btn-outline" onClick={handleCloseAll}>Close All</button>
          </div>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-outline" type="button">Excel</button>
          <button className="user-btn-outline" type="button">PDF</button>
        </div>

        <div className="network-tree-card" role="tree" aria-label="Network Tree">
          {rootIds.length ? rootIds.map((rootId) => renderTree(rootId)) : <p>No records found.</p>}
        </div>
      </div>
    </div>
  );
}

export default MyTree;
