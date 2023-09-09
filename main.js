const zoneOne = document.querySelector(".zone-1")
const zoneTwo = document.querySelector(".zone-2")
const elem = document.querySelector("#elem")

zoneOne.ondragover = allowDrop;
// soni
zoneTwo.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

elem.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id)
}

zoneOne.ondrop = drop;

// soni
zoneTwo.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id')
    console.log(itemId);
    event.target.append(document.getElementById(itemId))
}