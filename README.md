# Tournaments & Championships API

This is a simple API that allows the user to create, read, update and delete tournaments and championships.

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

