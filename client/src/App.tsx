import "./libs/blockchain/patch.js"
import { useAccount } from 'wagmi'
import './App.css'
import { LoginPage } from './containers/LoginPage';
import { DashBoard } from './containers/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isConnected } = useAccount();
  return (
    !isConnected ? <LoginPage /> : 
    <>
      <DashBoard />
      <Toaster />
    </>
  )
}

export default App
