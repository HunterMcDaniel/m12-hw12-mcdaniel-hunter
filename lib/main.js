"use strict";

var myList = ["Hey", "Bonjour", "Hola", "Welcome", "Greetings", "Hiya!", "Hey, bud", "Sup?", "Hello", "Hey party people"];

var randomItem = myList[Math.floor(Math.random() * myList.length)];

document.getElementById('mybutton').addEventListener('click', function () {
            console.log('random');
            document.getElementById('fill').innerHTML = randomItem;
});