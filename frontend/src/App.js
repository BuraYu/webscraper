import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>AI WebScraper</h1>
      <div className="input-container">
        <label for="websiteInput"></label>
        <input
          className="input"
          type="text"
          id="websiteInput"
          placeholder="enter URL here"
        />

        <button className="button-scrape">Scrape</button>
      </div>
    </div>
  );
}

export default App;
