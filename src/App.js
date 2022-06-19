import logo from './logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
