import React from "react"
import "./CryptoInfo.css"

export default function CryptoInfo(props) {
  // props.data contains {id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr, explorer}
  const { symbol, name, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr } = props.data

  return (
    <div className="App-CryptoInfo">
      {symbol && (
        <img
          id="App-CryptoInfo-logo"
          src={require(`../cryptoIcons/${symbol.toLowerCase()}.png`).default}
          alt={`${symbol} logo`}
        />
      )}
      {name && (
        <p>
          {name} ({symbol})
        </p>
      )}
      {priceUsd && <p>${twoDecimalPlaces(priceUsd)}</p>}
      {changePercent24Hr && (
        <p
          style={{
            color: twoDecimalPlaces(changePercent24Hr) >= 0 ? "#25f716" : "#ff1717",
          }}
        >
          {twoDecimalPlaces(changePercent24Hr)}%
        </p>
      )}
      {volumeUsd24Hr && <p>${numAsMillion(volumeUsd24Hr)}m</p>}
      {marketCapUsd && <p>${numAsMillion(marketCapUsd)}m</p>}
    </div>
  )
}

function twoDecimalPlaces(number) {
  return parseFloat(number).toFixed(2)
}

function numAsMillion(number) {
  return (parseFloat(number) / 1000000).toFixed(2)
}
