import React, { useState } from 'react';
import MySvgComponent from './components/MySvgComponent'; // Update with your actual import path

const App = () => {
  // Initialize state variables with default values
  const [name, setName] = useState('DOE, JOHN');
  const [address, setAddress] = useState('12, FONT ST. PICKERING');
  const [gender, setGender] = useState('MALE');
  const [dob, setDob] = useState('2009/10/10');
  const [height, setHeight] = useState('1.78 cm');
  const [id, setId] = useState('J234D123019');
  const [categ, setCateg] = useState('G');
  const [exp, setExp] = useState('2028/10/02');

  // Function to update state variables to new values
  const updateValues = () => {
    setName('BAKER, JANE');
    setAddress('1665, PICKERING PARKWAY, L1V 6Y7, ON');
    setGender('F');
    setDob('2005/1/12');
    setHeight('1.66 cm');
    setId('B456D982123');
    setCateg('G1');
    setExp('2028/10/02');
  };

  // Function to reset state variables to default values
  const resetValues = () => {
    setName('DOE, JOHN');
    setAddress('12, FONT ST. PICKERING');
    setGender('MALE');
    setDob('2009/10/10');
    setHeight('1.78 cm');
    setId('J234D123019');
    setCateg('G1');
    setExp('2030/10/02');
  };

  return (
    <div>
      <h1><button onClick={updateValues}>Update Values</button>
      {/* Buttons to trigger the update and reset functions */}
      <button onClick={resetValues}>Reset to Default</button>
      </h1>

      {/* SVG component */}
      <MySvgComponent
        name={name}
        address={address}
        gender={gender}
        dob={dob}
        height={height}
        id={id}
        categ={categ}
        exp={exp}
      />

      
  
      

      {/* Form to update SVG text */}
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Date of Birth:
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <label>
          Height:
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          ID:
          <input type="text" value={categ} onChange={(e) => setCateg(e.target.value)} />
        </label>
        <label>
          ID:
          <input type="text" value={exp} onChange={(e) => setExp(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default App;
