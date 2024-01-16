import HelloWorld from './components/HelloWorld';
import RandomDog from './components/RandomDog';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🧩 React: JSX and Props</h1>
        <HelloWorld />
        <RandomDog name="Alpha" testMessage="this is a test 🚗" />
        <RandomDog name="Gamma" hobbies={["eat", "smell things", "bite stuff"]} />
        <RandomDog name="Omega" hobbies={["taking walks"]} />
      </header>
    </div>
  );
}

export default App;
