import DocumentTitle from './components/DocumentTitle';
import IntervalTimer from './components/IntervalTimer';
import RandomCatImg from './components/RandomCatImg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Fetching & Other Side Effects</h1>
        <DocumentTitle />
        <IntervalTimer />
        <RandomCatImg />
      </header>
    </div>
  );
}

export default App;
