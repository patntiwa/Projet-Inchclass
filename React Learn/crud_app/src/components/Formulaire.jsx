import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";
import PaysSelector from "./PaysSelector";

const Formulaire = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [savedData, setSavedData] = useLocalStorage("formData", {});
  const [pays, setPays] = useState(["France", "USA", "Canada"]);

  const onSubmit = (data) => {
    if (data.noPostal !== "3000" && data.noPostal !== "4000") {
      alert("Le No Postal doit être 3000 ou 4000 !");
      return;
    }

    setSavedData(data);
    alert("Données enregistrées !");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Formulaire d'inscription</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Nom et Prénom</label>
          <input 
            {...register("nom", { required: true, minLength: 8, maxLength: 20 })}
            className="border p-2 w-full"
          />
          {errors.nom && <p className="text-red-500">Entre 8 et 20 caractères.</p>}
        </div>

        <div>
          <label>Adresse</label>
          <input 
            {...register("adresse", { required: true, minLength: 20 })}
            className="border p-2 w-full"
          />
          {errors.adresse && <p className="text-red-500">Min. 20 caractères.</p>}
        </div>

        <div>
          <label>No Postal</label>
          <input 
            {...register("noPostal", { required: true })}
            className="border p-2 w-full"
          />
        </div>

        <PaysSelector pays={pays} setPays={setPays} />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Soumettre
        </button>
      </form>

      {savedData.nom && (
        <div className="mt-4 p-4 bg-gray-100">
          <h3>Données Enregistrées :</h3>
          <p>Nom: {savedData.nom}</p>
          <p>Adresse: {savedData.adresse}</p>
          <p>No Postal: {savedData.noPostal}</p>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
