//This file is your entry point for the dev server.  It renders App.jsx which can be anything you want for your first React component.
//This file stays relatively untouched.



import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App.jsx"
import './styles.scss';



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);