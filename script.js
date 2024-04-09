const btnGenerate = document.getElementById("generate");
const btnCopy = document.getElementById("copy");
const author = document.getElementById("author");
const quoteElement = document.getElementById("quote");
const categories = document.querySelector(".quotes-categories");
let currentQuote = {
  author: "George Bernard Shaw",
  content: "Learn from yesterday, live for today, hope for tomorrow.",
  tags: ["Famous Quotes", "Inpirational"],
};


const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { author, content, tags } = data;
    currentQuote = { author, content, tags };
    showRandomQuote();
  } catch (error) {
    console.log(error.message);
  }
};


const showRandomQuote = () => {
  author.innerHTML = currentQuote.author;
  for (const tag of currentQuote.tags) {
    const tagQuote = document.createElement("span");
    tagQuote.innerHTML = tag;
    categories.appendChild(tagQuote);
  }
  quoteElement.innerHTML = `"${currentQuote.content}"`;
};

const copyRandomQuote = () => {
  navigator.clipboard.writeText(currentQuote.content);
  alert('Quote copied successfully!');
};

btnGenerate.addEventListener("click", () => {
  fetchQuote();
});


btnCopy.addEventListener('click',() => copyRandomQuote());
