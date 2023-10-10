// src/components/ScenarioForm.js
import React, { useState } from 'react';

const ScenarioForm = ({ onAddStep }) => {
  const [scenarioName, setScenarioName] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [steps, setSteps] = useState([]);

  const handleAddStep = () => {
    if (currentStep) {
      setSteps([...steps, currentStep]);
      setCurrentStep('');
    }
    onAddStep(scenarioName, steps);
  };

  const handleStepChange = (e) => {
    setCurrentStep(e.target.value);
  };

  const handleRemoveStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  return (
    <div className="scenario-form">
      <label>Scenario Name</label>
      <input
        type="text"
        placeholder="Enter scenario name"
        value={scenarioName}
        onChange={(e) => setScenarioName(e.target.value)}
      />
      <label>Current Step</label>
      <input
        type="text"
        placeholder="Enter step name"
        value={currentStep}
        onChange={handleStepChange}
      />
      <button onClick={handleAddStep}>Add a Step</button>
      <div>
        <strong>Scenario: {scenarioName}</strong>
        {steps.map((step, index) => (
          <div key={index}>
            Step {index + 1}: {step}
            <button onClick={() => handleRemoveStep(index)}>Remove Step</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioForm;
