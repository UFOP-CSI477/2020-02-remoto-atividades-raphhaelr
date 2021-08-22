import React from 'react';
import GlobalStyle from './styles'
import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';
import { CookiesProvider } from 'react-cookie';

export const App: React.FC = () => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </CookiesProvider>
  );
}

