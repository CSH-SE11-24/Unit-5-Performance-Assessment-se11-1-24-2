//Add a for loop where when you click the cards it changes color
console.log("Script running...");

let cards = document.querySelectorAll("#jujuj")

for(let i = 0; i < cards.length; i++){
 cards[i].addEventListener("mouseover",function(event) {
  cards[i].style.backgroundColor =
    "lightyellow"; 
 })
}
console.log(cards) 