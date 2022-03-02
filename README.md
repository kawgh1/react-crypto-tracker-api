# Basic React app using the Coin Gecko API


        function App() {

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