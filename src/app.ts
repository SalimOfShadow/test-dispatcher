(async () => {
  const response = await fetch("http://salimkof.pro:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Explicitly set Content-Type
    },
    body: JSON.stringify({
      url: "https://www.tappedout.net/mtg-decks/legend-of-the-twisted-and-writhing/",
    }),
  });
  const data = await response.json();
  console.log(data);
})();
