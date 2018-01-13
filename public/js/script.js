/*global $*/
$(document).ready(function(){
    showChampionships()
    showTournaments()
})

function showChampionships() {
    $.get('/championships', function(){
        $.get( "/championships", function( data ) {
            var html = ''
            data.forEach(function(championship) {
                html = html + '<li><a href="#" onClick="showTournaments('+championship.id+')">'+championship.name+'</a></li>'
            })
            $('#championships').html(html)
        });
    })
}

//todo: implement showProducts method
function showTournaments(championshipId) {
    if(championshipId) {
        var url = '/championships/'+ championshipId +'/tournaments';
    } else {
        var url = '/tournaments'   
    }
    $.get(url, function(data) {
        var html = '';
        data.forEach(
            function(tournament) {
                html = html + '<div class="tournament">'
                  +  '<h2>'+tournament.name+'</h2>'
                  +  '<p>Platform: '+tournament.description+'</p>'
                  +  '<p>Game: '+tournament.pret+'</p>'
                  +  '<p>Championship Name: '+tournament.championship.name+'</p>'
                  +  '<p>Championship Description: '+tournament.championship.descriprion+'</p>'
                  +  '<p>Game Mode: '+tournament.gameMode+'</p>'
                  +  '<p>Number of players: '+tournament.noPlayers+'</p>'
                  +  '<p>Tournament type: '+tournament.tournamentType+'</p>'
                  +  '<p>Prize: '+tournament.prize+'</p>'
                + '</div>';
            }
        )
        $('#content').html(html);
    })
}