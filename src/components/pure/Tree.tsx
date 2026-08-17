import React, { useState } from 'react';
import { ChevronRight, Folder, File } from 'lucide-react';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
}

export interface TreeProps {
  data: TreeNode[];
  onSelect?: (node: TreeNode) => void;
}

const TreeItem: React.FC<{ node: TreeNode; onSelect?: (node: TreeNode) => void; level?: number }> = ({
  node,
  onSelect,
  level = 0,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', userSelect: 'none' }}>
      <div
        onClick={() => {
          if (hasChildren) setOpen(!open);
          onSelect?.(node);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 8px',
          paddingLeft: 8 + level * 14,
          borderRadius: 'var(--p-r-sm)',
          cursor: 'pointer',
          fontSize: 12.5,
          color: 'var(--p-t-800)',
          transition: 'background-color 0.1s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--p-soft)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        {hasChildren ? (
          <ChevronRight
            size={12}
            color="var(--p-t-400)"
            style={{
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.14s ease-out',
            }}
          />
        ) : (
          <span style={{ width: 12 }} />
        )}

        <span style={{ color: 'var(--p-t-500)', display: 'flex', alignItems: 'center' }}>
          {node.icon || (hasChildren ? <Folder size={13} /> : <File size={13} />)}
        </span>

        <span style={{ fontWeight: 450 }}>{node.label}</span>
      </div>

      {open && hasChildren && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} onSelect={onSelect} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Tree: React.FC<TreeProps> = ({ data, onSelect }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
      {data.map((node) => (
        <TreeItem key={node.id} node={node} onSelect={onSelect} />
      ))}
    </div>
  );
};
