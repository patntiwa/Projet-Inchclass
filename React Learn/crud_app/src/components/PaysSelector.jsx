import React, { useState } from "react";

const PaysSelector = ({ pays, setPays }) => {
  const [newPays, setNewPays] = useState("");

  const ajouterPays = () => {
    if (!newPays || pays.includes(newPays)) return;
    setPays([...pays, newPays]);
    setNewPays("");
  };

  return (
    <div>
      <label>Choisir un pays</label>
      <select className="border p-2 w-full">
        {pays.map((p, index) => (
          <option key={index}>{p}</option>
        ))}
      </select>

      <input 
        value={newPays} 
        onChange={(e) => setNewPays(e.target.value)}
        placeholder="Ajouter un pays"
        className="border p-2 w-full mt-2"
      />
      <button 
        type="button" 
        onClick={ajouterPays}
        className="bg-green-500 text-white p-2 rounded mt-2"
      >
        Ajouter
      </button>
    </div>
  );
};

export default PaysSelector;
