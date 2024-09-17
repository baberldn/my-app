import React, { useEffect, useState } from 'react';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(""); 

  const url = "https://type.fit/api/quotes";

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url); 
        const data = await response.json();
        setQuotes(data);
        getRandomQuote(data);  
      } catch (error) {
        console.error('Error fetching the quotes: ', error);
      }
    };

    fetchQuotes();
  }, [url]);

  const getRandomQuote = (quotesArray) => {
    if (quotesArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      const randomQuote = quotesArray[randomIndex];
      setQuote(randomQuote);
    }
  };

  const handleNewQuote = () => {
    getRandomQuote(quotes);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Quote Generator</h1>
        <div>
          <p className="quote-text">{quote?.text}</p>
          <p className="quote-author"> {quote?.author}</p>
        </div>
        <button className="new-quote-btn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
