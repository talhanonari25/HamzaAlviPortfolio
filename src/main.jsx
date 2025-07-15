import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Element } from "react-scroll";
import './index.css'
import App from './App.jsx'
import Resume from './components/MyResume.jsx';
import Portfolio from './components/Portfolio.jsx';
import CredentialAndForm from './components/CredentialAndForm.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
