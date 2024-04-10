const qoutes =[
  "Life is what happens when you're busy making other plans." ,
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." ,
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "Life is really simple, but we insist on making it complicated.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "Life is either a daring adventure or nothing at all.",
  "The purpose of our lives is to be happy.",
  "Life is short, and it's up to you to make it sweet.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving."

]

const usedIndexes = new Set()
const quoteTag = document.getElementById('quote')

  function generateQuote () {
    if (usedIndexes.size >= qoutes.length) {
      usedIndexes.clear()
    }

    while (true) {
   const randomIdx = Math.floor(Math.random() * qoutes.length);

if (usedIndexes.has(randomIdx)) continue

   const quote = qoutes[randomIdx]
   quoteTag.innerHTML = quote;
   usedIndexes.add(randomIdx)
   break
   }
  }
