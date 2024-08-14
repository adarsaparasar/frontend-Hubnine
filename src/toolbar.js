// toolbar.js

import { DraggableNode } from './draggableNode';

import 'react-resizable/css/styles.css';
export const PipelineToolbar = () => {

    return (
        
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                
                <DraggableNode type='text' label='Drag and Drop Card' />
            </div>
        </div>
    );
};
