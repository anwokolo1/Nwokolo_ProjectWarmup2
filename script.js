const image = document.getElementById("image");
const caption = document.getElementById("caption");

function describeRoom(s) {
    switch (s) {
        case ("awesome"):
            console.log("You're awesome1!11!");
            break;
        case ("lame"):
            console.log("You suck!");
            break;
        default:
            console.log("How plain...");
            break;
    }
}

function displayNode(node) {
    image.src = node.image;
    caption.innerHTML = node.text;
    choices.
}

let room1 = {
    image : "images\\pexels-ekrulila-2810775.jpg",
    text : ";akdf;akdsjf",
    choices : ["ur moma", "ur dada"]
}

let room2 = {
    image : "images\\pexels-octoptimist-3150918.jpg",
    text : ";akdf;adsfefa",
    choices : ["ur sista", "ur bro"]
}

let room3 = {
    image : "images\\pexels-octoptimist-7042390.jpg",
    text : ";asdfaef3f",
    choices : ["your dawg", "your homie"]
}

let room4 = {
    image : "images\\pexels-orlovamaria-4947011.jpg",
    text : ";asdfaefddd",
    choices : ["ur auntie", "ur uncle"]
}

let storyNodes = [room1, room2, room3, room4];