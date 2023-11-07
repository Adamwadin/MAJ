const kanyeQuoteDiv = document.getElementById("textContainer");

fetch("https://api.kanye.rest")
  .then((response) => response.json())
  .then((data) => {
    const kanyeQuote = data.quote;

    const quoteDiv = document.createElement("div");
    quoteDiv.textContent = kanyeQuote;

    kanyeQuoteDiv.appendChild(quoteDiv);
  })
  .catch((error) => {
    console.error("du får inge kanye quote :()", error);
  });
