import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';
import WalletProvider from './containers/WalletProvider';
import App from './App.tsx';
import { store } from './app/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <WalletProvider>
        <App />
      </WalletProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
