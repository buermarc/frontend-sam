"use strict"

window.addEventListener("load", async () => {
    
    class NeedOne {

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

            main.innerHTML = "";
            console.log(json);

            let div = document.createElement("div");
            div.innerHTML += json.name;

            let self = document.createElement("div");
            self.innerHTML = json._links.self.href;
            self.addEventListener("click", () => { this.showLiga(json._links.self.href) });

            let liga = document.createElement("div");
            liga.innerHTML = json._links.liga.href;
            liga.addEventListener("click", () => { this.showLiga(json._links.liga.href) });

            let divisions = document.createElement("div");
            divisions.innerHTML = json._links.divisions.href;
            divisions.addEventListener("click", () => { this.showDivisions(json._links.divisions.href) });

            div.appendChild(self);
            div.appendChild(liga);
            div.appendChild(divisions);

            main.appendChild(div);
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

            main.innerHTML = "";
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
                eleArr[j].addEventListener("click", () => { this.showLiga(targetUrls[j]) });   
            }

            main.appendChild(div);
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

            main.innerHTML = "";
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
                eleArr[j].addEventListener("click", () => { this.showDivision(targetUrls[j]) });   
            }

            main.appendChild(div);

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

            main.innerHTML = "";
            console.log(json);

            let div = document.createElement("div");
            div.innerHTML += json.name;

            let self = document.createElement("div");
            self.innerHTML = json._links.self.href;
            self.addEventListener("click", () => { this.showDivision(json._links.self.href) });

            let liga = document.createElement("div");
            liga.innerHTML = json._links.liga.href;
            liga.addEventListener("click", () => { this.showLiga(json._links.liga.href) });

            let teams = document.createElement("div");
            teams.innerHTML = json._links.teams.href;
            teams.addEventListener("click", () => { this.showTeams(json._links.teams.href) });

            let games = document.createElement("div");
            games.innerHTML = json._links.games.href;
            games.addEventListener("click", () => { this.showGames(json._links.games.href) });

            div.appendChild(self);
            div.appendChild(liga);
            div.appendChild(teams);
            div.appendChild(games);

            main.appendChild(div);

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

            main.innerHTML = "";
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
                eleArr[j].addEventListener("click", () => { this.showTeam(targetUrls[j]) });   
            }

            main.appendChild(div);

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

            main.innerHTML = "";
            console.log(json);

            let div = document.createElement("div");
            div.innerHTML += json.name;

            let self = document.createElement("div");
            self.innerHTML = json._links.self.href;
            self.addEventListener("click", () => { this.showTeam(json._links.self.href) });

            let division = document.createElement("div");
            division.innerHTML = json._links.division.href;
            division.addEventListener("click", () => { this.showDivision(json._links.division.href) });

            let games = document.createElement("div");
            games.innerHTML = json._links.games.href;
            games.addEventListener("click", () => { this.showGames(json._links.games.href) });

            let wonGames = document.createElement("div");
            wonGames.innerHTML = json._links.wonGames.href;
            wonGames.addEventListener("click", () => { this.showGames(json._links.wonGames.href) });

            div.appendChild(self);
            div.appendChild(division);
            div.appendChild(games);
            div.appendChild(wonGames);

            main.appendChild(div);

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

            main.innerHTML = "";
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
                eleArr[j].addEventListener("click", () => { this.showGame(targetUrls[j]) });   
            }

            main.appendChild(div);

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

            main.innerHTML = "";
            console.log(json);

            let div = document.createElement("div");
            div.innerHTML += json.name;

            let self = document.createElement("div");
            self.innerHTML = json._links.self.href;
            self.addEventListener("click", () => { this.showGame(json._links.self.href) });

            let division = document.createElement("div");
            division.innerHTML = json._links.division.href;
            division.addEventListener("click", () => { this.showDivision(json._links.division.href) });

            let teams = document.createElement("div");
            teams.innerHTML = json._links.teams.href;
            teams.addEventListener("click", () => { this.showTeams(json._links.teams.href) });

            let wonGames = document.createElement("div");
            wonGames.innerHTML = json._links.winnerTeam.href;
            wonGames.addEventListener("click", () => { this.showTeam(json._links.winnerTeam.href) });

            div.appendChild(self);
            div.appendChild(division);
            div.appendChild(teams);
            div.appendChild(wonGames);

            main.appendChild(div);

        }

        async showLeaderboard(url) 
        {

        }
    }

    const PORT = "9999";
    const URL = "http://127.0.0.1:"+PORT+"/";
    //const fetch = require("node-fetch");

    let urls = {
        liga: "api/liga/",
        division: "api/division/",
        team: "api/team/",
    };

    let makeOne = new NeedOne();

    const main = document.querySelector("#app > main");

    let left  = document.querySelector(".top#left");
    let mid  = document.querySelector(".top#mid");
    let right  = document.querySelector(".top#right");

    left.addEventListener("click", () => { makeOne.showLigas(URL+urls.liga) }); 
    mid.addEventListener("click", () => { makeOne.showDivisions(URL+urls.division) }); 
    right.addEventListener("click", () => { makeOne.showTeams(URL+urls.team) }); 

    makeOne.showLigas(URL+urls.liga);
});

