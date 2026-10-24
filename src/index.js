import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

createRoot(document.getElementById('root')).render(<App />);
// Retain cleanup for anyone returning from an older cached version of the site.
serviceWorker.unregister();
