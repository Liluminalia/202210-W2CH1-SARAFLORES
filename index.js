import (calculadoraPRO) from './calculadora/calculadoraPRO.js';
import (pasapalabra) from './pasapalabra/pasapalabra.js';
import (bingo) from './bingo/bingo.js';
import (airlines) from './airlines/airlines.js';

const calculadoraPRO = async () =>{

}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('calculadoraPRO').addEventListener('clic', calculadoraPRO);
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('pasapalabra').addEventListener('clic', pasapalabra);
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('bingo').addEventListener('clic', bingo);
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('airlines').addEventListener('clic', airlines);
});