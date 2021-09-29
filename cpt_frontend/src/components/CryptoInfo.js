import React from "react";

export default function CryptoInfo(props) {
  return (
    <div>
      <p>Name: {props.data.name}</p>
      <p>Ticker: {props.data.symbol}</p>
      <p>Price: {props.data.priceUsd}</p>
    </div>
  );
}
