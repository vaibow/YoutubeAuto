document.getElementById('startMovieSearch').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: initiateSearch
          },
          (results) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
            } else {
              console.log("Script executed successfully");
            }
          }
        );
      } else {
        console.error("No active tabs found");
      }
    });
});
  
function initiateSearch() {
    const movieTitles = 
    [
      "The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction",
    "The Lord of the Rings: The Return of the King", "Forrest Gump", "Inception",
    "Fight Club", "The Matrix", "The Empire Strikes Back", "The Lord of the Rings: The Fellowship of the Ring",
    "Interstellar", "City of God", "The Green Mile", "Se7en", "The Silence of the Lambs",
    "The Usual Suspects", "Saving Private Ryan", "Spirited Away", "The Lion King",
    "Cognizant", "Diligent", "Eloquent", "Frivolous", "Gregarious", "Harmonious",
    "The Pianist", "The Departed", "Terminator 2: Judgment Day", "Back to the Future",
    "Whiplash", "Gladiator", "Memento", "The Prestige", "The Intouchables",
    "Parasite", "The Lives of Others", "The Great Dictator", "Django Unchained",
    "Schindler's List", "The Wolf of Wall Street", "Mad Max: Fury Road", "The Shining",
    "WALL·E", "The Dark Knight Rises", "Jurassic Park", "Blade Runner 2049",
    "Guardians of the Galaxy", "Get Out", "Avengers: Endgame", "The Truman Show",
    "Toy Story", "Coco", "The Godfather: Part II", "Breaking Bad", "Game of Thrones",
    "Stranger Things", "The Sopranos", "The Wire", "Sherlock", "True Detective",
    "Friends", "The Office", "Black Mirror", "The Mandalorian", "Westworld",
    "Better Call Saul", "Fargo", "Mindhunter", "House of Cards", "Narcos",
    "The Crown", "The Witcher", "Ozark", "Chernobyl", "The Handmaid's Tale","Inception", "The Dark Knight", "Interstellar", 
    "Stranger Things", "Breaking Bad", "Game of Thrones", "Family Guy","Abberation",
    ];
   
    
    const randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    document.dispatchEvent(new CustomEvent('searchTitle', { detail: randomTitle }));
}
  