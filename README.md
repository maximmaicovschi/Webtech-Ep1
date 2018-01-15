# Tournaments & Championships API

This is a simple API that allows the user to create, read, update and delete tournaments and championships.                           
Update: added some IGDB Endpoints I took from their API, this was done using the igdb-api-node package.

## IGDB API Endpoints
View all information about a game (Top Gun Flight simulator used as example)
```
GET /topgun
```
View all companies that have blizzard included in their name
```
GET /blizzard
```
View all the zelda games published between 2010 and 2012
```
GET /zelda
```
View all the game ids that work on a platform (Atari used as example)
```
GET /platform
```

## API Endpoints
Create a new tournament
```
POST /tournaments 
```
Read all tournaments
```
GET /tournaments
```
Read a tournament by id
```
GET /tournaments/:id 
```
Update a tournament by id
```
PUT /tournaments/:id 
```
Delete a tournament by id
```
DELETE /tournaments/:id 
```
Create a new championship
```
POST /championships
```
Read all championships
```
GET /championships
```
Read a championship by id
```
GET /championships/:id
```
Update a championship by id
```
PUT /championships/:id
```
Delete a championship by id
```
DELETE /championships/:id
```



Tournament JSON Example
```
{
	"platform":"PC",
	"championshipId":"3",
	"game":"Dota 2",
	"gameMode":"All pick, no weather",
	"noPlayers":"1000",
	"tournamentType":"Knockout",
	"prize":"150000"
}
```
Championship JSON Example
```
{
	"name":"Blizzard Championship",
    	"description":"Overwatch and Starcraft 2 Regional Finals"
}
```

## Built With

* [NodeJs](https://nodejs.org/en/docs/) 
* [Express](https://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/) 
* [NodeAdmin](https://www.npmjs.com/package/nodeadmin)
* [MySql](https://www.npmjs.com/package/mysql)

## Authors

**Maxim Maicovschi** 

## License

This project is licensed under the ISC License.

