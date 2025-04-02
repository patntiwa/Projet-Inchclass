    //ClientList.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/clients');
        setClients(response.data); //Chargement du résulat de la requête dans le state
    };

    useEffect(() => {
        fetchData();
    }, []); //Lancer la requête une seule fois

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/clients/${id}`);
        fetchData();
    }; //Suppression d'un client identifié par id

    return (
        <div>
            <center>
                <h1>Liste des clients</h1>
                <Link to={'/clients/create'}><button>Ajouter</button></Link><br/><br/>
                <table style={{border: '1px solid black'}}>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Adresse</th>
                    <th>Téléphone</th>
                    <th>Opérations</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client => ( //pour chaque client
                <tr key={client.id}>
                    <td><Link to={`/clients/${client.id}`}>{client.nom}</Link></td>
                    <td>{client.adresse}</td>
                    <td>{client.tel}</td>
                    <td>{/*colonne opérations (modifier, supprimer)*/}
                    <Link to={`/clients/${client.id}/update`}>
                    <button>Modifier</button></Link>
                    <button onClick={()=>handleDelete(client.id)}>Supprimer</button>
                    </td>
                </tr>
                ))}
                </tbody>
                </table>   
            </center>
        </div>
    )
}

export default ClientList;
