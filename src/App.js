import React, {useState, useEffect} from 'react'
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

// https://dog.ceo/api/breeds/list/all




function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  
  async function getCoins() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await response.json();
        setCoins(data);
    } catch (error) {
      console.log(error);
    }
      
  }

  useEffect(() => {
      getCoins();
    
  }, []);

  console.log(coins)

  function handleChange(event) {
    setSearch(event.target.value)
    console.log(search)

  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  

 
  



  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search for a cryptocurrency</h1>
        {/* form */}
        <form>
          <input type='text' className='coin-input' placeholder="Search" 
                  onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => (
          <div>{coin.name}</div>
      ))}
    </div>
  );
}

export default App;
