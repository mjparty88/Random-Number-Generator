/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    source: 'Nelson Mandela, Conficious, and others',
    citation: undefined,
    year: undefined,
    tag: ['Motivational']
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    citation: undefined,
    year: undefined,
    tag: ['Motivational']
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: 'Steve Jobs',
    citation: undefined,
    year: undefined,
    tag: ['Motivational']
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: undefined,
    year: undefined,
    tag: ['Motivational']
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: 'Oprah Winfrey',
    citation: undefined,
    year: undefined,
    tag: ['Motivational']
  },
  {
    quote: "When you play the game of thrones, you win or you die",
    source: 'Cersei Lannister',
    citation: 'A Game of Thrones by George R. R. Martin',
    year: 1996,
    tag: ['Entertainment']
  },
  {
    quote: "Frankly my dear, I don't give a damn",
    source: 'Rhett Butler',
    citation: 'Gone with the Wind',
    year: 1940,
    tag: ['Entertainment', 'Humour']
  }
];



/***
 * `getRandomQuote` function created with propArray parameters, intended for calling with quotes args.
***/

function getRandomQuote(propArray) {
  let randQuoteIndex = Math.floor(Math.random()*propArray.length);
  return propArray[randQuoteIndex];
}

/***
 * `printQuote` function
***/

function printQuote() {
  //call getRandomQuote passing it the quote arguement
  let randomQuote = getRandomQuote(quotes)
  //use the returned quote to build a string of HTML and quote properties
  let randomQuoteString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if(randomQuote.citation !== undefined){
      randomQuoteString += `<span class="citation">${randomQuote.citation}</span>`
    }
  if(randomQuote.year !== undefined){
    randomQuoteString += `<span class="citation">${randomQuote.year}</span>`
  }
  randomQuoteString += `</p>`;
  if(randomQuote.tag !== undefined) {
    randomQuoteString += `<p class="source">Tags: `+randomQuote.tag.join(', ') +`</p>`
  }
  //use the string to display a random quote in the browser
  document.getElementById('quote-box').innerHTML = randomQuoteString;
  randomBackgroundColor();
}

/***
 * create a function that returns a random color to the background
***/

function randomBackgroundColor() {
// create random numbers for each RGB Value
  let randRedValue = Math.floor(Math.random()*255)+1;
  let randGreenValue = Math.floor(Math.random()*255)+1;
  let randBlueValue = Math.floor(Math.random()*255)+1;
  let newrandomColour = `rgb(${randRedValue},${randGreenValue},${randBlueValue})`
//target the backgroundColor style property on the body tag, and change it to an RGB value based on the random numbers
  document.body.style.backgroundColor = newrandomColour;
}

//create an intervaltimer to reset the quote every 10 second
let myInterval = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
