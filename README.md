# Basic React app using the Coin Gecko API

- API call with useEffect


        function App() {

            const [search, setSearch] = useState('');
            const [coins, setCoins] = useState([]);

            
            async function getCoins() {
                try {
                    const response = await fetch('api-url-end-point')
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

            return(...)
            ...
        }

- filtering the API call's results based on user input in search bar

        App.js
        ...
        ...

         function handleChange(event) {
                setSearch(event.target.value)
        }

        const filteredCoins = coins.filter(
            coin => coin.name.toLowerCase().includes(search.toLowerCase()));

        return (
            <div className="coin-app">
                <div className='coin-search'>
                    <h1 className='coin-text'>Search for a cryptocurrency</h1>
                    {/* searchbar */}
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
                            )}
                        }
                    }
                </div>
            ...