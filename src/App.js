import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data); 
      if (Array.isArray(data) && data.length > 0) {
        setQuote({ q: data[0]?.quote, a: data[0]?.character });
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
        <p className="quote-text">"{quote?.q || 'Loading...'}"</p>
        <p className="quote-author">- {quote?.a || 'Loading...'}</p>
      </div>
      <button className="new-quote-btn" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
