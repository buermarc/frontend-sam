"use strict"

class NeedOne {

    constructor(main, URL, urls) {
        this.main = main;
        this.URL = URL;
        this.urls = urls;
    }

    async showLiga(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        console.log(json);

        let div = document.createElement("div");
        div.innerHTML += json.name;

        let self = document.createElement("div");
        self.innerHTML = json._links.self.href;
        self.addEventListener("click", () => 
            { this.showLiga(json._links.self.href) });

        let liga = document.createElement("div");
        liga.innerHTML = json._links.liga.href;
        liga.addEventListener("click", () => 
            { this.showLiga(json._links.liga.href) });

        let divisions = document.createElement("div");
        divisions.innerHTML = json._links.divisions.href;
        divisions.addEventListener("click", () => 
            { this.showDivisions(json._links.divisions.href) });

        div.appendChild(self);
        div.appendChild(liga);
        div.appendChild(divisions);

        this.main.appendChild(div);
    }

    async showLigas(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        let div = document.createElement("div");
        
        console.log(json);

        let i = 0;
        let ligaDiv;
        let targetUrls = [];
        let eleArr = json._embedded.liga.map(x=> {
            let innerDiv = document.createElement("div");
            let a = document.createElement("a");

            a.innerHTML += x.name+i;
            innerDiv.appendChild(a);
            div.appendChild(innerDiv);
            targetUrls[i] = x._links.self.href;
            i++;

            return innerDiv;
        });

        for (let j = 0; j < eleArr.length; j++) {
            eleArr[j].addEventListener("click", () =>
                { this.showLiga(targetUrls[j]) });   
        }

        this.main.appendChild(div);
        this.showAddLiga();
    }


    async  showDivisions(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        let div = document.createElement("div");
        
        console.log(json);

        let i = 0;
        let ligaDiv;
        let targetUrls = [];
        let eleArr = json._embedded.division.map(x=> {
            let innerDiv = document.createElement("div");
            let a = document.createElement("a");

            a.innerHTML += x.name;
            innerDiv.appendChild(a);
            div.appendChild(innerDiv);
            targetUrls[i] = x._links.self.href;
            i++;

            return innerDiv;
        });

        for (let j = 0; j < eleArr.length; j++) {
            eleArr[j].addEventListener("click", () =>
                { this.showDivision(targetUrls[j]) });   
        }

        this.main.appendChild(div);

        this.showAddDivision();

    }

    async  showDivision(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        console.log(json);

        let div = document.createElement("div");
        div.innerHTML += json.name;

        let self = document.createElement("div");
        self.innerHTML = json._links.self.href;
        self.addEventListener("click", () =>
            { this.showDivision(json._links.self.href) });

        let liga = document.createElement("div");
        liga.innerHTML = json._links.liga.href;
        liga.addEventListener("click", () =>
            { this.showLiga(json._links.liga.href) });

        let teams = document.createElement("div");
        teams.innerHTML = json._links.teams.href;
        teams.addEventListener("click", () =>
            { this.showTeams(json._links.teams.href) });

        let games = document.createElement("div");
        games.innerHTML = json._links.games.href;
        games.addEventListener("click", () =>
            { this.showGames(json._links.games.href) });

        div.appendChild(self);
        div.appendChild(liga);
        div.appendChild(teams);
        div.appendChild(games);

        this.main.appendChild(div);

    }

    async showTeams(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        let div = document.createElement("div");
        
        console.log(json);

        let i = 0;
        let ligaDiv;
        let targetUrls = [];
        let eleArr = json._embedded.team.map(x=> {
            let innerDiv = document.createElement("div");
            let a = document.createElement("a");

            a.innerHTML += x.name;
            innerDiv.appendChild(a);
            div.appendChild(innerDiv);
            targetUrls[i] = x._links.self.href;
            i++;

            return innerDiv;
        });

        for (let j = 0; j < eleArr.length; j++) {
            eleArr[j].addEventListener("click", () =>
                { this.showTeam(targetUrls[j]) });   
        }

        this.main.appendChild(div);

        this.showAddTeam();
    }

    async showTeam(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        console.log(json);

        let div = document.createElement("div");
        div.innerHTML += json.name;

        let self = document.createElement("div");
        self.innerHTML = json._links.self.href;
        self.addEventListener("click", () =>
            { this.showTeam(json._links.self.href) });

        let division = document.createElement("div");
        division.innerHTML = json._links.division.href;
        division.addEventListener("click", () =>
            { this.showDivision(json._links.division.href) });

        let games = document.createElement("div");
        games.innerHTML = json._links.games.href;
        games.addEventListener("click", () =>
            { this.showGames(json._links.games.href) });

        let wonGames = document.createElement("div");
        wonGames.innerHTML = json._links.wonGames.href;
        wonGames.addEventListener("click", () =>
            { this.showGames(json._links.wonGames.href) });

        div.appendChild(self);
        div.appendChild(division);
        div.appendChild(games);
        div.appendChild(wonGames);

        this.main.appendChild(div);

    }

    async showGames(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        let div = document.createElement("div");
        
        console.log(json);

        let i = 0;
        let ligaDiv;
        let targetUrls = [];
        let eleArr = json._embedded.game.map(x=> {
            let innerDiv = document.createElement("div");
            let a = document.createElement("a");

            a.innerHTML += x.name;
            innerDiv.appendChild(a);
            div.appendChild(innerDiv);
            targetUrls[i] = x._links.self.href;
            i++;

            return innerDiv;
        });

        for (let j = 0; j < eleArr.length; j++) {
            eleArr[j].addEventListener("click", () =>
                { this.showGame(targetUrls[j]) });   
        }

        this.main.appendChild(div);

    }

    async showGame(url) 
    {
        console.log(url);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        
        console.log(response);
        let json = await response.json();

        this.main.innerHTML = "";
        console.log(json);

        let div = document.createElement("div");
        div.innerHTML += json.name;

        let self = document.createElement("div");
        self.innerHTML = json._links.self.href;
        self.addEventListener("click", () =>
            { this.showGame(json._links.self.href) });

        let division = document.createElement("div");
        division.innerHTML = json._links.division.href;
        division.addEventListener("click", () =>
            { this.showDivision(json._links.division.href) });

        let teams = document.createElement("div");
        teams.innerHTML = json._links.teams.href;
        teams.addEventListener("click", () =>
            { this.showTeams(json._links.teams.href) });

        let wonGames = document.createElement("div");
        wonGames.innerHTML = json._links.winnerTeam.href;
        wonGames.addEventListener("click", () =>
            { this.showTeam(json._links.winnerTeam.href) });

        div.appendChild(self);
        div.appendChild(division);
        div.appendChild(teams);
        div.appendChild(wonGames);

        this.main.appendChild(div);

    }

    async showAddLiga() 
    {
        console.log("showAddLiga()");
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="addliga" id="name" placeholder="Name" name="Name" type="text"></input>\
        <input class="addliga" id="divisions" placehoder="Division" name="Name" type="text"></input>\
        <button class="addliga" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        let button = document.querySelector(".addliga#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".addliga#name");
            let divisionsField = document.querySelector(".addliga#divisions");
            
            let url = this.URL+this.urls.liga;

            let request = {
                name: nameField.value,
                divisions: divisionsField.value,
            }

            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            });
            
            console.log(response);
            let json = await response.json();
            console.log(json);

            this.showLigas(url);
        });

    }
    
    async showAddDivision() 
    {
        console.log("showAddDivision()");

        /* Create Textfield elements for DOM*/
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="adddivision" id="name" placeholder="Name" name="Name" type="text"></input>\
        <input class="adddivision" id="liga" placeholder="Liga" name="Name" type="text"></input>\
        <button class="adddivision" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        /* Create Textfield logic*/
        let button = document.querySelector(".adddivision#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".adddivision#name");
            let ligaField = document.querySelector(".adddivision#liga");
            
            let url = this.URL+this.urls.division;

            let request = {
                name: nameField.value,
                liga: ligaField.value,
            }

            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            });
            
            console.log(response);
            let json = await response.json();
            console.log(json);

            this.showDivisions(url);
        });

		/* Create Modal Logic */

        let modal = document.querySelector("#myModal");
        console.log(modal);	

        let url = this.URL + this.urls.liga;

        /* Fetch Data to Display */
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });

        let json = await response.json();
        console.log(json);
        let jsonArray = json._embedded.liga;
        let targetField = document.querySelector(".adddivision#liga");
        let closeField = document.querySelector("#closeModal");

        document.querySelector("#app .h2").innerHTML="Chose Liga"

        targetField.addEventListener("click", () => {this.openModal(modal)});
        closeField.addEventListener("click", () => {this.closeModal(modal)});
        
        this.fillModal(jsonArray, targetField, modal);
    }

    async openModal(modal) 
    {
        modal.style.display = "block";
    }

    async closeModal(modal) 
    {
        modal.style.display = "none";
    }

    async showAddTeam() 
    {
        console.log("showAddDivision()");
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="addteam" id="name" placeholder="Name" name="Name" type="text"></input>\
        <input class="addteam" id="website" placeholder="Website" name="Name" type="text"></input>\
        <input class="addteam" id="division" placeholder="Division" name="Name" type="text"></input>\
        <button class="addteam" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        let button = document.querySelector(".addteam#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".addteam#name");
            let websiteField = document.querySelector(".addteam#website");
            let divisonField = document.querySelector(".addteam#division");
            
            let url = this.URL+this.urls.team;

            let request = {
                name: nameField.value,
                website: websiteField.value,
                division: division.value,
            }

            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            });
            
            console.log(response);
            let json = await response.json();
            console.log(json);

            this.showTeams(url);
        });
		/* Create Modal Logic */

        let modal = document.querySelector("#myModal");
        console.log(modal);	

        let url = this.URL + this.urls.division;

        /* Fetch Data to Display */
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });

        let json = await response.json();
        console.log(json);
        let jsonArray = json._embedded.division;
        let targetField = document.querySelector(".addgame#division");
        let closeField = document.querySelector("#closeModal");

        document.querySelector("#app .h2").innerHTML="Chose Division"

        targetField.addEventListener("click", () => {this.openModal(modal)});
        closeField.addEventListener("click", () => {this.closeModal(modal)});
        
        this.fillModal(jsonArray, targetField, modal);

    }

    async showAddGame() 
    {
        console.log("showAddDivision()");
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="addgame" id="name" placeholder="Name" name="Name" type="text"></input>\
        <input class="addgame" id="website" placeholder="Website" name="Name" type="text"></input>\
        <input class="addgame" id="division" placeholder="Division" name="Name" type="text"></input>\
        <button class="addgame" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        let button = document.querySelector(".addgame#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".addgame#name");
            let websiteField = document.querySelector(".addgame#website");
            let divisonField = document.querySelector(".addgame#division");
            
            let url = this.URL+this.urls.team;

            let request = {
                name: nameField.value,
                website: websiteField.value,
                division: division.value,
            }

            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            });
            
            console.log(response);
            let json = await response.json();
            console.log(json);

            this.showTeam(url);
        });
		/* Create Modal Logic */

        let modal = document.querySelector("#myModal");
        console.log(modal);	

        let url = this.URL + this.urls.division;

        /* Fetch Data to Display */
        let divisionResponse = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });
        url = this.URL + this.urls.team;

        /* Fetch Data to Display */
        let teamResponse = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Content-Type": "application/json"
            },
        });

        let divisionJson = await divisionResponse.json();
        let teamJson = await teamResponse.json();
        console.log(json);
        let divisionJsonArray = divisionJson._embedded.division;
        let teamJsonArray = teamJson._embedded.team;
        let targetField = document.querySelector(".addgame#division");
        let closeField = document.querySelector("#closeModal");

        document.querySelector("#app .h2").innerHTML="Chose Division"

        targetField.addEventListener("click", () => {this.openModal(modal)});
        closeField.addEventListener("click", () => {this.closeModal(modal)});
        
        this.fillModal(jsonArray, targetField, modal);

    }

    async showLeaderboard(url) 
    {

    }

    async fillModal(jsonArray, targetField, modal)
    {
        /* Get Modal stuff */
        let modalEle = modal.querySelector(".modal-body");
        let modalEleList = modal.querySelector(".modal-body > ul");


        
        console.log(jsonArray);
        /* TODO use forEach instead for loop */
        modalEleList.innerHTML = "";
        for (let i = 0; i < jsonArray.length; i++) 
        {
            modalEleList.innerHTML+=`
            <li class="listElement" id="element`+jsonArray[i].name+`">`+jsonArray[i].name+`</li>`
            ;
        }

        for (let i = 0; i < jsonArray.length; i++) 
        {
            let li = modalEleList
                .querySelector(".listElement#element"+jsonArray[i].name);
            li.addEventListener("click", () => 
                {
                    targetField.value = jsonArray[i]._links.self.href.replace(this.URL,"");
                });

        }
    }
}

window.addEventListener("load", async () =>
    {
    const PORT = "9999";
    const URL = "http://127.0.0.1:"+PORT+"/";
    //const fetch = require("node-fetch");

    let urls = {
        liga: "api/liga/",
        division: "api/division/",
        team: "api/team/",
    };


    const main = document.querySelector("#app > main");

    let makeOne = new NeedOne(main, URL, urls);

    let left  = document.querySelector(".top#left");
    let mid  = document.querySelector(".top#mid");
    let right  = document.querySelector(".top#right");

    left.addEventListener("click", () =>
        { makeOne.showLigas(URL+urls.liga) }); 
    mid.addEventListener("click", () =>
        { makeOne.showDivisions(URL+urls.division) }); 
    right.addEventListener("click", () =>
        { makeOne.showTeams(URL+urls.team) }); 

    let modal = document.querySelector(".modal#myModal");
    modal.hidden=false;

    makeOne.showLigas(URL+urls.liga);
});

