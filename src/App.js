import React, {useState, useEffect} from 'react'
import './App.css';
import Coin from './Coin';

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

  

  // const handleChange = event => {
  //   setSearch(event.target.value)
  // }

  function handleChange(event) {
    setSearch(event.target.value)

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
      <div className='coin-container'>
        {filteredCoins.map(coin => {
        return (
          <Coin 
              key={coin.id} 
              name={coin.name} 
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h} 
              image={coin.image}
              symbol={coin.symbol}
              market_cap={coin.market_cap}
              volume={coin.total_volume} 
            />
        )
      })}</div>
      
    </div>
  );
}

export default App;
