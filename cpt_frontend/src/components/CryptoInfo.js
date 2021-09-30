import React from "react"
import "./CryptoInfo.css"
// import { useState, useEffect } from "react"

export default function CryptoInfo(props) {
  // const {
  //   id,
  //   rank,
  //   ticker,
  //   name,
  //   supply,
  //   maxSupply,
  //   marketCapUsd,
  //   volumeUsd24Hr,
  //   priceUsd,
  //   changePercent24Hr,
  //   vwap24Hr,
  //   explorer,
  // } = props.data

  return (
    <div className="App-CryptoInfo">
      <img id="App-CryptoInfo-logo" src={props.logo} alt={`${props.data.symbol} logo`} />
      <p>
        {props.data.name} ({props.data.symbol})
      </p>
      <p>${twoDecimalPlaces(props.data.priceUsd)}</p>
      <p
        style={{
          color: twoDecimalPlaces(props.data.changePercent24Hr) >= 0 ? "#25f716" : "#ff1717",
        }}
      >
        {twoDecimalPlaces(props.data.changePercent24Hr)}
      </p>
      <p>${numAsMillion(props.data.volumeUsd24Hr)}m</p>
      <p>${numAsMillion(props.data.marketCapUsd)}m</p>
    </div>
  )
}

function twoDecimalPlaces(number) {
  return parseFloat(number).toFixed(2)
}

function numAsMillion(number) {
  return (parseFloat(number) / 1000000).toFixed(2)
}
