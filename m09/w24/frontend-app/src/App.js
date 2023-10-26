import { useState, useEffect } from 'react';
import axios from 'axios';
import { useJwt } from 'react-jwt';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const { decodedToken } = useJwt(token);
  console.log('decoded token:', decodedToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { email, password })
      .then((response) => {
        console.log(response)
        const jwt = response.data.token;
        setToken(jwt);
      })
      .catch((error) => console.log(error))
  }


  const fetchDogs = () => {
    axios.get('http://localhost:8080/dogs', {
      headers: {
        Authorization: `Bearer`,
      }
    })
      .then((response) => {
        console.log('Dogs response:', response)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Auth with JWT 🪐</h1>

        { !decodedToken && (
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text" />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              type="password" />
            <button type='submit'>Submit!</button>
          </form>
        ) }

        { decodedToken && (<>
          <h1>Dogs should appear here 🐶</h1>
          <button onClick={fetchDogs}>Fetch dogs!</button>
        </>) }
      </header>
    </div>
  );
}

export default App;
