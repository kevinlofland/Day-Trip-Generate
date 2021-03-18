"use strict";

let destination = ["Miami", "Los Angelas", "Atlanta", "New York",]; 
let restaurant = ["Applebees", "Golden Corral", "Pizza Hut", "Ihop"];
let transportation = ["Car", "Plane", "Bus", "Train"];
let entertainment = ["Concert", "Fair", "Arcade", "Bar"];


let randDestination = myRandom(destination);
let randRestaurant = myRandom(restaurant);
let randTransportation = myRandom(transportation);
let randEntertainment = myRandom(entertainment);


function myRandom (array){
    let randNum = Math.floor(Math.random()* array.length);
    return array[randNum];
}



console.log('Our Trip:' (randDestination), (randRestaurant), (randTransportation), (randEntertainment));

