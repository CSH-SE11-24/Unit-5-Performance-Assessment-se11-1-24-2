
//Add dom maniputlation to mouseover img

let img=
  document.querySelector("#dumsor")
console.log(img)

img.addEventListener("mouseover",
  function(event) {
    img.style.width = "600px";
    img.style.height = "300px"
  });

//Add a DOM manipulation to the h3 tag where when you click it changes to a different color

let h3Tag = document.querySelector("h3")

h3Tag.addEventListener("mouseover", function(event){
 h3Tag.textContent = "LETS STOP THIS"          })

h3Tag.addEventListener("mouseout",
  function(event) {
    h3Tag.textContent = "Power outages in Ghana have been a longstanding issue, causing significant challenges for families and communities across the country. These outages, often referred to as dumsor have various impacts on households"
  })

let cards = document.querySelectorAll(".card")

for(let i = 0; i < cards. length; i++){
 cards[i].addEventListener("mouseover",function(event) {
  cards[i].style.backgroundColor =
    "black"; 
 })
}