import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientList from './components/ClientList';
import CreateClient from './components/CreateClient';
import ClientDetails from './components/ClientDetails';
import UpdateClient from './components/UpdateClient';
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<ClientList/>} />
          <Route path="/clients" element={<ClientList/>} />
          <Route path="/clients/create" element={<CreateClient/>} />
          <Route path="/clients/:id" element={<ClientDetails/>} />
          <Route path="/clients/:id/update" element={<UpdateClient/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
