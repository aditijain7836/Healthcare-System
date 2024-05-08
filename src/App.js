import logo from './logo.svg';
import './App.css';
import AdminLoginSignup from './components/LoginSignup';
import { UserProvider } from './hooks/UserContext';

function App() {
  return (
    <UserProvider>
      <AdminLoginSignup/>
    </UserProvider>
  );
}

export default App;
