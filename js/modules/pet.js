export class Pet {
    #hunger;
    #happiness;
    #happinessDisplay;
    #hungerDisplay;
    #pb;
    #fb;
    #container;
    #dead;
    #intervalID;
    
    constructor(name, breed) {
        
        this.name = name;
        this.breed = breed;
        this.#hunger = 10;
        this.#happiness = 10;
        this.#dead = false;
        this.#decreaseHunger();
        this.#decreaseHappiness();
        this.#pet()
        

    }
    #pet() {
        const container = document.getElementById('tamagachi');

        this.#container = document.createElement('div');
        this.#container.classList.add('container')
        container.append(this.#container);

        const petName = document.createElement('h2');
        petName.innerText = this.name;
        this.#container.append(petName);

        const petBreed = document.createElement('div');
        petBreed.innerText = this.breed;
        this.#container.append(petBreed);



 

        this.#happinessDisplay = document.createElement('div');
        this.#happinessDisplay.innerText = `HAPPINESS: ${this.#happiness}`;
        this.#container.append(this.#happinessDisplay);

        this.#hungerDisplay = document.createElement('div');
        this.#hungerDisplay.innerText = `HUNGER: ${this.#hunger}`;
        this.#container.append(this.#hungerDisplay);




        this.#pb = document.createElement('button');
        this.#pb.classList.add('btn');
        this.#pb.innerText = 'Play';
        this.#container.append(this.#pb);
        this.#pb.addEventListener('click', () => {
            this.#play();
        });

        this.#fb = document.createElement('button');
        this.#fb.classList.add('btn');
        this.#fb.innerText = 'Feed';
        this.#container.append(this.#fb);
        this.#fb.addEventListener('click', () => {
            this.#feed();

        });
    }

    #play() {
        if (this.#happiness < 10 && !this.#dead) {
            this.#happiness++;
            this.#updateStats();
        }
    }
    #feed() {
        if (this.#hunger < 10 && !this.#dead) {
            this.#hunger++;
            this.#updateStats();
        }
    }


    #decreaseHappiness() {
        this.#intervalID = setInterval(e => {
         if (this.#happiness > 0 && !this.#dead) {
             this.#happiness--;
             this.#updateStats();
         } else {
            this.#dead = true;
            clearInterval(e)
         }
         
        }, 3000);
     }
     #decreaseHunger() {
        this.#intervalID = setInterval(e => {
         if (this.#hunger > 0 && !this.#dead) {
             this.#hunger--;
             this.#updateStats();
         } else {
            this.#dead = true;
            clearInterval(e)
         }
        }, 2300);
     }
 

    
    #updateStats() {
        this.#happinessDisplay.textContent = `HAPPINESS: ${this.#happiness}`;
        this.#hungerDisplay.textContent = `HUNGER: ${this.#hunger}`;

        if (this.#happiness === 0 || this.#hunger === 0) {
            this.#container.classList.add('dead')
        }
 
    }
}
    
