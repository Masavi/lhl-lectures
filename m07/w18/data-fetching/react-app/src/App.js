import DocumentTitle from './Components/DocumentTitle';
import IntervalTimer from './Components/IntervalTimer';
import RandomCatImage from './Components/RandomCatImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Side Effects</h1>
      <DocumentTitle />
      <IntervalTimer />
      <RandomCatImage />
    </div>
  );
}

export default App;
