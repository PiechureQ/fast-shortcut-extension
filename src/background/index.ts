browser.omnibox.setDefaultSuggestion({
  description: "Use your fast shortcuts by typing them, little dog"
});

browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  console.log(text);
});

browser.omnibox.onInputEntered.addListener((text, disposition) => {
  console.log(text);
  const url = "https://reddit.com";
  if (text === 'r') {
    switch (disposition) {
      case "currentTab":
        browser.tabs.update({url});
        break;
      case "newForegroundTab":
        browser.tabs.create({url});
        break;
      case "newBackgroundTab":
        browser.tabs.create({url, active: false});
        break;
    }
  }
});

