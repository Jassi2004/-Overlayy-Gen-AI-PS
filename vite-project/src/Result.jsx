import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Result = () => {
  const [topLinks, setTopLinks] = useState(null);
  const [topQuestions, setTopQuestions] = useState(null);

  useEffect(() => {
    // Fetch top links
    fetch('/home/ishika/jaskiratTempFolder/nodeFolder/top_links.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTopLinks(data.top_links); // Store top links in state
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation for top links:', error);
      });

    // Fetch top questions
    fetch('./../../nodeFolder/top_questions.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTopQuestions(data.top_questions); // Store top questions in state
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation for top questions:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Results</h2>
        {topLinks && topQuestions ? (
          <div>
            <h3>Top Links</h3>
            {topLinks.length > 1 && topLinks[1].length > 0 ? (
              <ul>
                {topLinks[1].map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No top links available.</p>
            )}

            <h3>Top Questions</h3>
            {topQuestions.length > 1 && topQuestions[1].length > 0 ? (
              <ol>
                {topQuestions[1].map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ol>
            ) : (
              <p>No top questions available.</p>
            )}
          </div>
        ) : (
          <p>Loading results...</p>
        )}
      </div>
    </div>
  );
};

export default Result;
