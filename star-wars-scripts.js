let starWarsPeopleList = document.querySelector(".people");
let starWarsPlanetList = document.querySelector(".planets");
let starWarsFilmList = document.querySelector(".films");

// Films
fetch("https://swapi.dev/api/films")
    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        let films = json.results;

        for (const f of films) {
            console.log(f);
            let listItem = document.createElement('li');
            let openingCrawl = document.createElement('p');
            listItem.innerText = `${f.title} ep. ${f.episode_id}`;
            openingCrawl.innerText = `${f.opening_crawl}`;
            starWarsFilmList.appendChild(listItem);
            starWarsFilmList.appendChild(openingCrawl);
        }    
    })

// People
fetch("https://swapi.dev/api/people")
    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        let people = json.results;

        for (const p of people) {
            console.log(p);
            let listItem = document.createElement('li');
            listItem.innerText = p.name;
            starWarsPeopleList.appendChild(listItem);
        }
    })

// Planets
fetch("https://swapi.dev/api/planets")
    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        let planets = json.results;

        for (const p of planets) {
            console.log(p);
            let listItem = document.createElement('li');
            listItem.innerText = p.name;
            starWarsPlanetList.appendChild(listItem);
        }
    })