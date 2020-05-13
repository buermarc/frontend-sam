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

        let divisions = document.createElement("div");
        divisions.innerHTML = json._links.divisions.href;
        divisions.addEventListener("click", () => 
            { this.showDivisions(json._links.divisions.href) });

        div.appendChild(self);
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

            a.innerHTML += x.name;
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
        this.showAddLiga(url);
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

        this.showAddDivision(url);

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

        this.showAddTeam(url);
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
        this.showAddGame(url);
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

    async showAddLiga(orgUrl) 
    {
        console.log("showAddLiga()");
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="addliga" id="name" placeholder="Name" name="Name" type="text"></input>\
        <button class="addliga" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        let button = document.querySelector(".addliga#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".addliga#name");
            
            let url = this.URL+this.urls.liga;

            let request = {
                name: nameField.value,
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

            this.showLigas(orgUrl);
        });

    }
    
    async showAddDivision(orgUrl) 
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

            this.showDivisions(orgUrl);
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
        targetField.addEventListener("focus", () => {this.openModal(modal)});
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

    async showAddTeam(orgUrl) 
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

            this.showTeams(orgUrl);
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
        let targetField = document.querySelector(".addteam#division");
        let closeField = document.querySelector("#closeModal");

        document.querySelector("#app .h2").innerHTML="Chose Division"

        targetField.addEventListener("click", () => {this.openModal(modal)});
        targetField.addEventListener("focus", () => {this.openModal(modal)});
        closeField.addEventListener("click", () => {this.closeModal(modal)});
        
        this.fillModal(jsonArray, targetField, modal);

    }

    async showAddGame(orgUrl) 
    {
        let div = document.createElement("div");
        div.classList.add("add");
        div.innerHTML += '\
        <input class="addgame" id="name" placeholder="Name" name="Name" type="text"></input>\
        <input class="addgame" id="team" placeholder="Winner Team" name="Name" type="text"></input>\
        <input class="addgame" id="division" placeholder="Division" name="Name" type="text"></input>\
        <button class="addgame" id="button" type="button">Create</button>\
        '
        this.main.appendChild(div); 

        let button = document.querySelector(".addgame#button");
        button.addEventListener('click', async () =>
            {
            let nameField = document.querySelector(".addgame#name");
            let websiteField = document.querySelector(".addgame#team");
            let divisonField = document.querySelector(".addgame#division");
            
            let url = this.URL+this.urls.game;

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

            this.showGame(orgUrl);
        });
		/* Create Modal Logic */

        let divisionModal = document.querySelector("#myModal");
        let teamModal = document.querySelector("#myModal2");


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
        let divisionJsonArray = divisionJson._embedded.division;
        let teamJsonArray = teamJson._embedded.team;
        let divisionTargetField = document.querySelector(".addgame#division");
        let teamTargetField = document.querySelector(".addgame#team");
        let divisionCloseField = divisionModal.querySelector("#closeModal");
        let teamCloseField = teamModal.querySelector("#closeModal");

        divisionModal.querySelector(".h2").innerHTML="Chose Division"
        teamModal.querySelector(".h2").innerHTML="Chose Team"

        teamTargetField.addEventListener("click", () => {this.openModal(teamModal)});
        teamTargetField.addEventListener("focus", () => {this.openModal(teamModal)});
        divisionTargetField.addEventListener("click", () => {this.openModal(divisionModal)});
        divisionTargetField.addEventListener("focus", () => {this.openModal(divisionModal)});
        divisionCloseField.addEventListener("click", () => { this.closeModal(divisionModal) });
        teamCloseField.addEventListener("click", () => { this.closeModal(teamModal) });
       
        this.fillModal(divisionJsonArray, divisionTargetField, divisionModal);
        this.fillModal(teamJsonArray, teamTargetField, teamModal);

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
            <li class="listElement" id="element`+jsonArray[i].name.replace(' ','')+`">`+jsonArray[i].name+`</li>`
            ;
        }

        for (let i = 0; i < jsonArray.length; i++) 
        {
            let li = modalEleList
                .querySelector(".listElement#element"+jsonArray[i].name.replace(' ',''));
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
        game: "api/game/",
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

