// const HelloWorld = require('./components/HelloWorld');
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>App.js</h1>
      <HelloWorld></HelloWorld>
      <Counter title="Omega" counter={10} />
      <Counter title="Gamma" />
    </div>
  );
}

export default App;
