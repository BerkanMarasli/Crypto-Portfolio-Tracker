import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [isClickedViewAllCrypto, setIsClickedViewAllCrypto] = useState(false);
  const [isClickedViewBitcoin, setIsClickedViewBitcoin] = useState(false);

  return (
    <div className="App">
      <p>APPLICATION</p>
      <p>HELLO</p>
      <Button
        nameOfButton="View Bitcoin"
        handleClick={handleViewBitcoinClick}
        setIsClickedState={setIsClickedViewBitcoin}
      />
      <Button
        nameOfButton="View all CRYPTOCURRENCIES"
        handleClick={handleViewAllCryptoClick}
        setIsClickedState={setIsClickedViewAllCrypto}
      />
      {isClickedViewBitcoin === true ? (
        <h1>View Bitcoin Button Clicked</h1>
      ) : null}
      {isClickedViewAllCrypto === true ? (
        <h1>View All Button Clicked</h1>
      ) : null}
    </div>
  );
}

function handleViewBitcoinClick(setIsClickedViewBitcoin) {
  setIsClickedViewBitcoin(true);
}

function handleViewAllCryptoClick(setIsClickedViewAllCrypto) {
  setIsClickedViewAllCrypto(true);
}
