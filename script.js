console.log("Script running...");
//Add a DOM manipulation where when you click the light button or dark button it changes the background color
let light = 
  document.querySelector("#Lightmode")
console.log(light)

let dark = 
  document.querySelector("#Darkmode")
console.log(dark)


let body = 
  document.querySelector("body")


light.addEventListener("click",
function(event){
 body.style.backgroundColor = 
    "white"
  
})

dark.addEventListener("click",
function(event){
  body.style.backgroundColor = 
    "black"
})

let jtslim2 = document.querySelector("#political")

jtslim2.addEventListener("click", function(event){
  jtslim2.src = "https://www.codeforghana.org/img/blog/dumsor-th.png"
})
//Console lof jslim2
console.log(jtslim2)