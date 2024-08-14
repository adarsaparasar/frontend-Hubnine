import { useState, useEffect, useCallback } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { memo } from 'react';
import {  NodeResizer } from 'reactflow';



function TextNode({ data, selected, id }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currText, setCurrText] = useState(data.text || ''); // Initialize currText with the data prop

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handleShowMoreClick = () => {
    setIsPopupOpen(true); // Open the popup when the button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={10}
      />

      <BaseNode
        id={id}
        data={{ text: currText }}
        type="customText"
        label="Text"
        handlePositions={[
          { type: 'source', position: Position.Right, id: 'output' },
          { type: 'target', position: Position.Left, id: 'input1', style: { top: '50%' } },
        ]}
        renderFields={() => (
          <>
            <div style={{ width: '100%', height: '100%', boxSizing: 'content-box' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veniam id nobis aperiam eius consequuntur non...
              </p>
              <button onClick={handleShowMoreClick} style={{backgroundColor: 'grey', borderRadius:'5px', padding:'5px'}}>Show More</button>
            </div>
          </>
        )}
      />

      {isPopupOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <h3>Detailed Text</h3>
          <p>{currText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."}</p>
          <button onClick={handleClosePopup} style={{backgroundColor: 'grey', borderRadius:'5px', padding:'5px'}}>Close</button>
        </div>
      )}
    </>
  );
}

export default memo(TextNode);
