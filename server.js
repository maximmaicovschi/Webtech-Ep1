var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodeadmin = require('nodeadmin'); 
var Sequelize = require("sequelize");

// init sequelize connection 
var sequelize = new Sequelize('tournamentDatabase', 'mtmaxim', '', { 
    dialect: 'mysql', 
    host: 'localhost',
    define: {
        timestamps: false
    }
//   port: 3306 
    
})

sequelize.authenticate().then(function(){
    console.log('connection successfull')
})

var Championships = sequelize.define('championships', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}, { 
    timestamps: false
})
    
var Tournaments = sequelize.define('tournaments', {
    platform: Sequelize.STRING,
    championshipId: Sequelize.INTEGER,
    game: Sequelize.STRING,
    gameMode: Sequelize.STRING,
    noPlayers: Sequelize.STRING,
    tournamentType: Sequelize.STRING,
    prize: Sequelize.INTEGER
}, { 
    timestamps: false
})

//Championships.hasMany(Tournaments, {foreignKey: 'championshipId', sourceKey: 'id'})
Tournaments.belongsTo(Championships, {foreignKey: 'championshipId', targetKey:'id'})
    
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/nodeadmin', nodeadmin(app));
app.use('/admin', express.static('admin'));

//create a tournament
app.post('/tournaments', function(request, response) {
    Tournaments.create(request.body).then(function(tournament) {
        Tournaments.findById(tournament.id).then(function(tournament) {
            response.status(201).send(tournament);
        })
    })
})

//read all tournaments
app.get('/tournaments', function(request, response) {
    /"global Tournaments"/
    Tournaments.findAll().then(function(tournaments){
        response.status(200).send(tournaments);
    })
})

//read one tournament
app.get('/tournaments/:id', function(request,response) {
    Tournaments.findById(request.params.id).then(function(tournament) {
        if(tournament) {
            response.status(200).send(tournament);
        } else {
            response.status(404).send();
        }
    })
})

//update a tournament
app.put('/tournaments/:id', function(request,response){
    Tournaments 
        .findById(request.params.id)
        .then(function(tournament) {
            if(tournament) {
                tournament
                    .updateAttributes(request.body)
                    .then(function() {
                        response.status(200).send('updated');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

//delete a tournament
app.delete('/tournaments/:id', function(request,response){
    Tournaments 
        .findById(request.params.id)
        .then(function(tournament) {
            if(tournament) {
                tournament
                    .destroy()
                    .then(function() {
                        response.status(204).send();
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

//create a new championship
app.post('/championships', function(request, response) {
    Championships.create(request.body).then(function(product) {
        response.status(201).send(product)
    })
})

//read all championships
app.get('/championships', function(request, response) {
    Tournaments.findAll(
        {
            include: [{
                model: Championships,
                where: { id: Sequelize.col('tournaments.championshipId') }
            }]
        }
        
        ).then(
            function(tournaments) {
                response.status(200).send(tournaments)
            }
        )
})

//get a championship by id
app.get('/championships/:id', function(request, response) {
    Championships.findById(request.params.id).then(
            function(championship) {
                response.status(200).send(championship)
            }
        )
})

//update a championship
app.put('/championships/:id', function(request, response) {
    Championships.findById(request.params.id).then(function(championship) {
        if(championship) {
            championship.update(request.body).then(function(championship){
                response.status(201).send(championship)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//delete a championship
app.delete('/championships/:id', function(request, response) {
    Championships.findById(request.params.id).then(function(championship) {
        if(championship) {
            championship.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//get all tournaments belonging to a championship
app.get('/tournaments/:id/championships', function(request, response) {
    Championships.findAll({where:{championship: request.params.id}}).then(
            function(championship) {
                response.status(200).send(championship)
            }
        )
})

app.listen(process.env.PORT);