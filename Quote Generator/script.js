// script.js
document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.querySelector(".qoutation");
  const authorElement = document.querySelector(".name");
  const newQuoteButton = document.querySelector(".quote");
  const tweetButton = document.querySelector(".tweet");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      quoteElement.textContent = `"${data.content}"`;
      authorElement.textContent = data.author || "Unknown";
    } catch (error) {
      console.error("Error fetching quote:", error);
      quoteElement.textContent =
        "Could not fetch a quote. Please try again later.";
      authorElement.textContent = "";
    }
  };

  const tweetQuote = () => {
    const quote = quoteElement.textContent;
    const author = authorElement.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${quote} - ${author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  // Event Listeners
  newQuoteButton.addEventListener("click", fetchQuote);
  tweetButton.addEventListener("click", tweetQuote);

  // Fetch the first quote on page load
  fetchQuote();
});
