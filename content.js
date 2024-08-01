document.addEventListener('searchTitle', (event) => {
  const searchTitle = event.detail;

  function findSearchInput() {
    return document.querySelector('input#search');
  }

  function findSearchButton() {
    return document.querySelector('button#search-icon-legacy');
    
  }

  function clickSearchButton(button) {
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    button.dispatchEvent(clickEvent);
    console.log("Search button clicked");
  }

  // function findFullscreenButton() {
  //   return document.querySelector('class#ytp-fullscreen-button ytp-button');
    
  // }
  // function clickFullScreenButton(fullscreenbutton){
  //   const clickEvent = new MouseEvent(`click`,{
  //     view: window,
  //     bubbles: true,
  //     cancelable: true
  //   });
  //   fullscreenbutton.dispatchEvent(clickEvent);
  // }

  const searchInput = findSearchInput();
  if (searchInput) {
    searchInput.value = searchTitle;
    
    // Simulate an input event to ensure the search button is activated
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));

    const searchButton = findSearchButton();
    
    if (searchButton) {
      clickSearchButton(searchButton);
      console.log("Search button clicked");
      // Wait for search results to load and play a random video
      setTimeout(() => {
        const videoLinks = document.querySelectorAll('a#video-title');
        if (videoLinks.length > 0) {
          const randomIndex = Math.floor(Math.random() * videoLinks.length);
          videoLinks[randomIndex].click();
        }
      }, 1000); // Adjust the timeout duration as needed
    } 
    else {
      console.error("Search button not found");
    }
  } else {
    console.error("Search input not found");
  }
});