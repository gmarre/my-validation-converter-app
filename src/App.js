// App.js
import React, { useState } from 'react';
import ScenarioForm from './ScenarioForm';
import './App.css';

function App() {
  const [scenarios, setScenarios] = useState([]);

  const handleAddScenario = (scenario) => {
    setScenarios([...scenarios, scenario]);
  };

  return (
    <div className="App">
      <h1>Application de Scénarios</h1>
      <ScenarioForm onAddScenario={handleAddScenario} />
      {/* Afficher les scénarios */}
      <div>
        <h2>Scénarios</h2>
        <ul>
          {scenarios.map((scenario, index) => (
            <li key={index}>{scenario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
