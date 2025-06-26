import { useRef, useState, useEffect } from "react";
import cardData from "./CardData";
import Card from "./Card";

const Search = ({ query, setQuery }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-IN";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      const cleaned = spokenText.trim().replace(/\.$/, "");
      setQuery(cleaned);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  }, [setQuery]);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const filteredData = cardData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="input"
          placeholder="Search Documentaries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="material-symbols-outlined search-icon">search</span>
        
        
  <div className="mic-container">
        <span
          onClick={startListening}
          className={`material-symbols-outlined mic-icon ${
            isListening ? "listening" : ""
          }`}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          mic
        </span>
      </div>

      {isListening && (
        <div className="listening-bubble">
          <span className="dot"></span>
          Listening...
        </div>
      )}
      
</div>
      <div className="card-container">
        {filteredData.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              category={item.category}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))
        )}
      </div>
<footer className="footer">
  <p>&copy; 2025 DeepFrame</p>

  <div className="footer-links">
    <a href="https://github.com/Seril12" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/seril-evanjaline-s-9811b6328" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="mailto:serilevanjalines.it2024@citchennai.net">Email</a>
  </div>
</footer>
    </>
  );
};

export default Search;
