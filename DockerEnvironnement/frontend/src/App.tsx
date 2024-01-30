import React from "react";
import "./App.css";
import Connexion from "./Pages/Connexion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inscription from "./Pages/Inscription";

function App() {
  return <>
    <BrowserRouter>

      <Routes>
        <Route element={
          <Connexion />
        } path={"/"} />
        <Route element={<Inscription />} path="/inscription" />
      </Routes>


    </BrowserRouter>
  </>
}

export default App;
