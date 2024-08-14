import { Handle, Position } from 'reactflow';
import { useState } from 'react';

const BaseNode = ({ id, data, type, label, handlePositions, renderFields }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace(`${type}-`, `${label.toLowerCase()}_`));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
console.log('base node handles list', handlePositions)
  return (
    <div style={{ width: 'auto', height: 'auto', border: '1px solid black', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <div>
        <span>{label}</span>
      </div>
      <div>
        {renderFields({ currName, handleNameChange, inputType, handleTypeChange })}
      </div>
      {handlePositions.map((pos, index) => (
        <Handle
          key={index}
          type={pos.type}
          position={pos.position}
          id={`${id}-${pos.id}`}
          style={pos.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
