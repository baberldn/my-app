import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState({ q: "", a: "" });
  const url = 'https://zenquotes.io/api/random';

  
  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data); 
      if (Array.isArray(data) && data.length > 0) {
        setQuote({ q: data[0].q, a: data[0].a });
      }
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Quote Generator</h1>
      <div>
        <p className="quote-text">"{quote.q}"</p>
        <p className="quote-author">- {quote.a}</p>
      </div>
      <button className="new-quote-btn" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
