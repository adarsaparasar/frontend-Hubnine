import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

import { useState } from 'react';

function App() {


  return (
    <div>
      
     
      <div>                    
        <PipelineToolbar />
        <hr />
        <PipelineUI />
        <hr />
      
      </div>
      
    </div>
  );
}

export default App;
