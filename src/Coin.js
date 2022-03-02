import React from 'react'
import './Coin.css'

function Coin({image, name, symbol, price, volume, market_cap, priceChange}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>
                    {symbol.toUpperCase()}
                </p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price.toLocaleString()}</p>
                {priceChange < 0 ? 
                    <p className='coin-percent red'>-{priceChange.toFixed(2)}%</p> :
                    <p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>

                }
                <p className='coin-volume sm-hide'>Volume: ${volume.toLocaleString()}</p>
               <p className='coin-marketcap sm-hide'>
                   Market Cap: ${market_cap.toLocaleString()}
               </p>
            </div>
        </div>
    </div>
  )
}

export default Coin