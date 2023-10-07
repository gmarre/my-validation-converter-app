// ScenarioForm.js
import React, { useState } from 'react';

function ScenarioForm({ onAddScenario }) {
  const [scenario, setScenario] = useState('');
  const [step, setStep] = useState('');

  const handleAddStep = () => {
    onAddScenario(`${scenario} - ${step}`);
    setStep('');
  };

  return (
    <div>
      <h2>Ajouter un Scénario</h2>
      <label>
        Scénario:
        <input
          type="text"
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
        />
      </label>
      <label>
        Étape:
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </label>
      <button onClick={handleAddStep}>Ajouter Étape</button>
    </div>
  );
}

export default ScenarioForm;
