import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomQuoteMachine() {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        getQuote();
    }, []);

    const getQuote = () => {
        axios
            .get("https://api.quotable.io/random")
            .then(res => {
                setQuote({
                    text: res.data.content,
                    author: res.data.author
                });
            })
            .catch(err => console.log(err));
    };

    const handleNewQuoteClick = () => {
        getQuote();
    };

    const handleTweetClick = () => {
        navigator.clipboard.writeText(`${quote.text} - ${quote.author}`);
        alert("Successfully copied to clipboard")
        // alert()
    };

    return (
        <div id="quote-box" style={{ textAlign: 'center' }}>
            <div id="text">{quote.text}</div>
            <div id="author">{quote.author}</div>
            <div className='quote-buttons'>
                <button id="new-quote" onClick={handleNewQuoteClick}>
                    New Quote
                </button>
                <button id="tweet-quote" onClick={handleTweetClick}>Copy</button>
            </div>
        </div>
    );
}

export default RandomQuoteMachine;
