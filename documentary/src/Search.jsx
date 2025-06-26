import { useState } from "react";
import cardData from "./CardData";
import Card from "./Card";

const Search = ({ query, setQuery }) => {
  const [isListening, setIsListening] = useState(false);


  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      const cleaned = spokenText.trim().replace(/\.$/, "");
      setQuery(cleaned);
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
      setIsListening(false);
    };
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
      </div>
                <button onClick={startListening} >
          <span className="material-symbols-outlined mic-icon">mic</span>
        </button>
      {isListening && (
        <p style={{ color: "red", marginLeft: "650px" }}>Listening...</p>
      )}

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
    </>
  );
};

export default Search;
