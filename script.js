const image = document.getElementById("image");
const caption = document.getElementById("caption");

function describeRoom(s) {
    let string;
    switch (s) {
        case ("awesome"):
            string = "You're awesome1!11!";
            break;
        case ("lame"):
            string = "You suck!";
            break;
        default:
            string = "How plain...";
            break;
    }

    return string;
}

function displayNode(node) {
    image.src = storyNodes[node].image;
    caption.innerHTML = storyNodes[node].text;
}

let exampleNode = {
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

let storyNodes = [exampleNode, room2, room3, room4];

describeRoom("awesome");
displayNode(0);