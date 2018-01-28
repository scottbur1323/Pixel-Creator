var bodyOfHTML = document.querySelector("body")
var palatteColors = ["red", "blue", "green", "white", "black", "yellow", "purple"]
var colorMaster = "black"

function createCanvas() {
  for (let i = 0; i < 30; i++) {
    let section = document.createElement("section")
    bodyOfHTML.appendChild(section)
    for (let j = 0; j < 50; j++) {
      let sectionsOfHTML = document.querySelectorAll("section")
      let div = document.createElement("div")
      div.className = "canvasDivs"
      div.addEventListener("click", eventHandler)
      div.addEventListener("mouseover", eventHandler)
      div.addEventListener("dragover", eventHandler)
      sectionsOfHTML[i].appendChild(div)

    }
  }
}

function createPalette() {
  var footer = document.createElement("footer")
  bodyOfHTML.appendChild(footer)
  for (let i = 0; i < palatteColors.length; i++) {
    let palatteSection = document.querySelector("footer")
    let div = document.createElement("div")
    div.style.backgroundColor = palatteColors[i]
    div.className = "eachPalatte"
    div.addEventListener("click", eventHandler)
    palatteSection.appendChild(div)
  }
}
createCanvas()
createPalette()

function eventHandler(event) {
  let buttonClicked = event.target.className
  if (buttonClicked == "canvasDivs") {
    if (event.type === "mouseover" && event.buttons === 0) return
    event.target.style.backgroundColor = colorMaster
  }
  if (buttonClicked == "eachPalatte") {
    colorMaster = event.target.style.backgroundColor
  }
}
