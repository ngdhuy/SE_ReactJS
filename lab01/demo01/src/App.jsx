import img from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header logo={img} />
    </div>
  );
}

export default App;
