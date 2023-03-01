import { Pet } from "./modules/pet.js";

const w = document.querySelector('#submit');
const form = document.querySelector('form');
const name = document.querySelector('#name');
const breed = document.querySelector('#breed');


// onclick add Pet
form.addEventListener('submit', e => {
    e.preventDefault();

    new Pet(name.value, breed.value)

})






