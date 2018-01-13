-----------Create a new tournament     ----------- POST /tournaments 
-----------Read all tournaments        ----------- GET /tournaments
-----------Read a tournament by id     ----------- GET /tournaments/:id 
-----------Update a tournament by id   ----------- PUT /tournaments/:id 
-----------Delete a tournament by id   ----------- DELETE /tournaments/:id 
-----------Create a new championship   ----------- POST /championships
-----------Read all championships      ----------- GET /championships
-----------Read a championship by id   ----------- GET /championships/:id
-----------Update a championship by id ----------- PUT /championships/:id
-----------Delete a championship by id ----------- DELETE /championships/:id


-----------JSON examples-----------
-----------Tournament-----------
{
	"platform":"PC",
	"championshipId":"3",
	"game":"Dota 2",
	"gameMode":"All pick, no weather",
	"noPlayers":"1000",
	"tournamentType":"Knockout",
	"prize":"150000"
}
-----------Championship-----------
{
    "name":"Blizzard Championship",
    "description":"Overwatch and Starcraft 2 Regional Finals"
}