import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [response, setResponse] = useState(null);

  const handleButtonClick = async () => {
    try {
      const res = await axios.post('http://localhost:5000/create-docx', {
        content: 'Hello from React!',
      });

      setResponse(res.data);
    } catch (error) {
      console.error('Error creating docx:', error);
    }
  };

  return (
    <div>
      <h1>React + Flask Docx Example</h1>
      <button onClick={handleButtonClick}>Create Docx</button>
      {response && (
        <p>
          Document created successfully!{' '}
        </p>
      )}
    </div>
  );
}

export default App;
