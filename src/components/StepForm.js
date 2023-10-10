// src/components/StepForm.js
import React, { useState } from 'react';

const StepForm = ({ onGenerateStep }) => {
  const [stepName, setStepName] = useState('');
  const [characteristicA, setCharacteristicA] = useState('');
  const [characteristicB, setCharacteristicB] = useState('');
  const [characteristicC, setCharacteristicC] = useState('');
  const [characteristicD, setCharacteristicD] = useState('');
  const [characteristicE, setCharacteristicE] = useState('');

  const handleGenerateStep = () => {
    const step = {
      name: stepName,
      A: characteristicA,
      B: characteristicB,
      C: characteristicC,
      D: characteristicD,
      E: characteristicE,
    };

    onGenerateStep(step);
  };

  return (
    <div>
      <label>Step Name</label>
      <input
        type="text"
        placeholder="Enter step name"
        value={stepName}
        onChange={(e) => setStepName(e.target.value)}
      />
      <label>A</label>
      <input
        type="text"
        placeholder="Characteristic A"
        value={characteristicA}
        onChange={(e) => setCharacteristicA(e.target.value)}
      />
      <label>B</label>
      <input
        type="text"
        placeholder="Characteristic B"
        value={characteristicB}
        onChange={(e) => setCharacteristicB(e.target.value)}
      />
      <label>C</label>
      <input
        type="text"
        placeholder="Characteristic C"
        value={characteristicC}
        onChange={(e) => setCharacteristicC(e.target.value)}
      />
      <label>D</label>
      <input
        type="text"
        placeholder="Characteristic D"
        value={characteristicD}
        onChange={(e) => setCharacteristicD(e.target.value)}
      />
      <label>E</label>
      <input
        type="text"
        placeholder="Characteristic E"
        value={characteristicE}
        onChange={(e) => setCharacteristicE(e.target.value)}
      />
      <button onClick={handleGenerateStep}>Generate Step</button>
    </div>
  );
};

export default StepForm;
