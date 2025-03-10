import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './components/ui/provider';
import { AuthProvider } from './components/Auth';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Provider>
    <App />
    </Provider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);