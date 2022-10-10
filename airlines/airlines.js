const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let username = prompt("Introduzca su nombre de usuario: ");
console.log("Bienvenid@! " + username);

flights.forEach(flight => {
    if (flight.scale === false){
        console.log("El vuelo con origen: " + flight.from + ", y destino: " + flight.to + " tiene un coste de: " + flight.cost + "€ y no realiza ninguna escala." )
    }
    else{
        console.log("El vuelo con origen: " + flight.from + ", y destino: " + flight.to + " tiene un coste de: " + flight.cost + "€ y realiza una escala." )
    }
})

console.log("**************************************************");
let sum=0;
let media;

// flights.forEach(flight => {
//      sum += flight.cost
// })

flights.map(item => {
    sum += item.cost
})

media = sum/flights.length 



console.log("El coste medio de los vuelos es: " + media);
console.log("**************************************************");
let totalscales=0;

flights.forEach(flight => {
    if (flight.scale === true){
        totalscales+=1
    }else{
        
    }


})
console.log("Hay " + totalscales + " vuelos con escalas.");
console.log("**************************************************");

cities=0;

flights.forEach(flight => {
    if (flight.id > 4){
        console.log(flight.to) 
    }else{
        
    }


})