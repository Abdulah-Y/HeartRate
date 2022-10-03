import { useState } from 'react';
import './App.css';

function App() {
 const [age, setAge] = useState('')
 const[Heartratelimits, setHeartratelimits] = useState(0)

 const laske = (e) => {
  e.preventDefault()
  const tulos = ((220-age) * 0.85) 
  setHeartratelimits(tulos)
 }

  return (
    <div className='tausta'>
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{Heartratelimits.toFixed(0)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
 
  );
}

export default App;

