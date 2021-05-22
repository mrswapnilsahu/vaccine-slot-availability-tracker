import './App.css';
import 'spectre.css'
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container center">
        <Home />
      </div>
    </div>
  );
}

export default App;
