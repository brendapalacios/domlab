let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changingTitleText(){
    document.querySelector('#main-title').textContent = 'Welcome to my homepage';
  
  }
changingTitleText();

// Part 2
function changeBodyBkgColor() {
  document.querySelector('body').style.backgroundColor = 'orange'
}
changeBodyBkgColor();

  // Part 3
const favoriteThingsList = () => {
  const favThingsList = document.getElementById('favorite-things')
  favThingsList.removeChild(favThingsList.lastElementChild)
}
favoriteThingsList()
  // Part 4

const changeFontSize = () => {
  const specialTitleEls = document.querySelectorAll('.special-title')
  for(let i = 0; i < specialTitleEls.length; i++) {
    specialTitleEls[i].style.fontSize = '2rem';
  }
}
  // Part 5
const removeChicago = function() {
  let pastRacesList = document.querySelector('#past-races')
  pastRacesList.removeChild(pastRacesList.children[3])

}
removeChicago();

  // Part 6
const addNewLi = function(list) {
let pastRacesList = document.getElementById('past-races');
//create a new element
const newLi = document.createElement('li');
newLi.textContent = 'New York City';
pastRacesList.appendChild(newLi);

return newLi;
}
addNewLi();

  // Part 7
function newBlogPost (city) {

const newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');

const newH1 = document.createElement('h1')
newH1.innerText = `New York City`;
newDiv.appendChild(newH1)

const para = document.createElement('p');
para.innerText = 'I loved the skycrapers';
newDiv.appendChild(para);

document.querySelector('.main').appendChild(newDiv)
}
newBlogPost()
}