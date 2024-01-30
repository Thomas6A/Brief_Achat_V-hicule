import React from "react";
import "./App.css";
import Connexion from "./Pages/Connexion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>

      <Routes>
        <Route element={
          <Connexion />
        } path={"/"} />
      </Routes>


    </BrowserRouter>
  </>
}

export default App;
