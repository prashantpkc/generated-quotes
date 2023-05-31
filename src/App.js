import React, { useState } from 'react';
import './style.css';

// You will build a random quote generator app in React where the user can see randomly generated quotes through an array . on every click of the button ..
// Create an array of 10 quotes .
// Hint -/> can use math.random() to generate random number between 1 - 10 .

let quotes = [
  'quote1',
  'quote2',
  'quote3',
  'quote4',
  'quote5',
  'quote6',
  'quote7',
  'quote8',
  'quote9',
  'quote10'
];

export default function App() {
  const [randomQuote, setRandomQuote] = useState();

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setRandomQuote(quote)
  };
  return (
    <div>
      <h1>Random Quote!</h1>
      <button onClick={handleClick}>Quote</button>
      <h3>My quote is: {randomQuote}</h3>
    </div>
  );
}
