import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import Login from './containers/login';
import './index.css';
import { AuthProvider } from './providers/auth.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </React.StrictMode>
);
