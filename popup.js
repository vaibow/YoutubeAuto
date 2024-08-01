document.getElementById('startSearch').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: initiateMusicSearch
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

function initiateMusicSearch() {
  const musicTitles = [
    "Vevo", "Official Music Videos", "T-Series", "Sony Music India", "Warner Music Group", "Universal Music Group", "Columbia Records", "Atlantic Records", "Interscope Records", "RCA Records", "Capitol Music Group", "Def Jam Recordings", "Epic Records", "Polydor Records", "Republic Records", "Island Records", "Parlophone", "EMI Records", "BMG", "Island Records", "Nashville Records", "Spinnin' Records", "Monstercat", "Stereosonic", "Ultra Music", "Music Choice", "Apple Music", "Spotify", "SoundCloud", "iHeartRadio", "Billboard", "MTV", "BET", "FUSE TV", "Bravo", "SiriusXM", "KCRW", "The FADER", "Pitchfork", "NPR Music", "Tiny Desk Concerts", "Rolling Stone", "Classic FM", "KEXP", "DJ Mag", "A State of Trance", "Armada Music", "Beatport", "Mixmag", "Electronic Beats", "Trap Nation", "Proximity", "NoCopyrightSounds", "Chill Nation", "Majestic Casual", "MrSuicideSheep", "Future Bass", "Odesza", "Flume", "Kygo", "The Chainsmokers", "Marshmello", "Alan Walker", "Zedd", "Avicii", "David Guetta", "Calvin Harris", "Steve Aoki", "Martin Garrix", "Dillon Francis", "Diplo", "Skrillex", "Deadmau5", "Porter Robinson", "Madeon", "RL Grime", "What So Not", "Fetty Wap", "Post Malone", "Ariana Grande", "Billie Eilish", "Dua Lipa", "Ed Sheeran", "Taylor Swift", "Katy Perry", "Beyoncé", "Rihanna", "Lady Gaga", "Bruno Mars", "Justin Bieber", "Drake", "Kanye West", "Kendrick Lamar", "Travis Scott", "Cardi B", "Lil Nas X", "Megan Thee Stallion"
  ];
 
  const randomTitle = musicTitles[Math.floor(Math.random() * musicTitles.length)];
  document.dispatchEvent(new CustomEvent('searchTitle', { detail: randomTitle }));

}