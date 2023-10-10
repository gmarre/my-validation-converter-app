// src/components/MainContent.js
import React, { useState } from 'react';
import './MainContent.css';
import ScenarioForm from './ScenarioForm';
import StepForm from './StepForm';

const MainContent = ({ currentTab }) => {
  const [showScenarioForm, setShowScenarioForm] = useState(false);
  const [showStepForm, setShowStepForm] = useState(false);
  const [scenarios, setScenarios] = useState([]);

  const handleAddStep = (scenarioName, steps) => {
    const existingScenarioIndex = scenarios.findIndex(scenario => scenario.name === scenarioName);

    if (existingScenarioIndex !== -1) {
      // Scenario already exists, update its steps
      const updatedScenarios = [...scenarios];
      updatedScenarios[existingScenarioIndex].steps = steps;
      setScenarios(updatedScenarios);
    } else {
      // Scenario is new, add it to the list
      const scenario = { name: scenarioName, steps: steps };
      setScenarios([...scenarios, scenario]);
    }

    setShowStepForm(false);
  };

  const handleAddStepClick = () => {
    setShowStepForm(true);
  };

  const handleGenerateStep = (step) => {
    // Add the generated step to the current scenario
    const currentScenario = scenarios[scenarios.length - 1];
    if (currentScenario) {
      currentScenario.steps.push(step);
      setScenarios([...scenarios]);
    }
    setShowStepForm(false);
  };

  return (
    <div>
      <div>Bienvenue sur la page "{currentTab}"</div>
      {currentTab === 'Create VTP' && (
        <div>
          <button onClick={() => setShowScenarioForm(true)}>Create a New Scenario</button>
          {showScenarioForm && (
            <ScenarioForm onAddStep={handleAddStep} />
          )}
          {showStepForm && (
            <StepForm onGenerateStep={handleGenerateStep} />
          )}
          <div>
            {scenarios.map((scenario, index) => (
              <div key={index}>
                <strong>Scenario: {scenario.name}</strong>
                {scenario.steps.map((step, stepIndex) => (
                  <div key={stepIndex}>
                    Step {stepIndex + 1}: {step.name}, A: {step.A}, B: {step.B}, C: {step.C}, D: {step.D}, E: {step.E}
                  </div>
                ))}
                {scenario.steps.length > 0 && (
                  <button onClick={handleAddStepClick}>Add a Step</button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
