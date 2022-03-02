import React, {useState, useEffect} from 'react'
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

// https://dog.ceo/api/breeds/list/all




function App() {

  
  const [coins, setCoins] = useState([]);

  async function getCoins() {
  
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const data = await response.json();
      setCoins(data);
  
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getCoins();
  }, [])
  
  console.log(coins)



  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
