// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          cursor: 'grab',
          minWidth: '80px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'blueviolet',
          padding: '5px'
        }}
      
        draggable
      >
        <span style={{ color: '#fff' }} title={`This is a ${label} node.Drag and Drop on the dotted plain to use.`}
 >{label}</span>
      </div>
    );
  };
  