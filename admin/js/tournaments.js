/*global $*/

// READ recods on page load
$(document).ready(function () {
    readRecords(); // calling function
});

// READ records
function readRecords() {
    $.get("/tournaments/", {}, function (data, status) {
        data.forEach(function(value) {
            var row = '<tr id="row_id_'+ value.id +'">'
            			+ displayColumns(value)
        				+ '</tr>';
            $('#articles').append(row);
        });
    });
}

function displayColumns(value) {
    return 	'<td>'+value.id+'</td>'
            + '<td class="platform">'+value.platform+'</td>'
            + '<td class="championshipId">'+value.championship.name+'</td>'
            + '<td class="game">'+value.game+'</td>'
            + '<td class="gameMode">'+value.gameMode+'</td>'
            + '<td class="noPlayers">'+value.noPlayers+'</td>'
            + '<td class="tournamentType">'+value.tournamentType+'</td>'
			+ '<td class="prize">'+value.prize+'</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
}

function addRecord() {
    $('#id').val('');
    $('#platform').val('');
    $('#championshipId').val('');
    $('#game').val('');
    $('#gameMode').val('');
    $('#noPlayers').val('');
    $('#tournamentType').val('');
    $('#prize').val('');
    
    $('#myModalLabel').html('Add New Tournament');
}

function viewRecord(id) {
    var url = "/tournaments/" + id;
    
    $.get(url, {}, function (data, status) {
        //bind the values to the form fields
        $('#platform').val(data.platform);
        $('#championshipId').val(data.championshipId);
        $('#game').val(data.game);
        $('#gameMode').val(data.gameMode);
        $('#noPlayers').val(data.noPlayers);
        $('#tournamentType').val(data.tournamentType);
        $('#prize').val(data.prize);
        $('#id').val(id);
        $('#myModalLabel').html('Edit Tournament');
        
        $('#add_new_record_modal').modal('show');
    });
}

function saveRecord() {
    //get data from the html form
    var formData = $('#record_form').serializeObject();
    
    //decide if it's an edit or create
    if(formData.id) {
        updateRecord(formData);
    } else {
        createRecord(formData);
    }
}

function createRecord(formData) {
    $.ajax({
        url: '/tournaments/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#add_new_record_modal').modal('hide');
            
            var row = '<tr id="row_id_'+ data.id +'">'
            			+ displayColumns(data)
        				+ '</tr>';
            $('#articles').append(row);
        } 
    });
}

function updateRecord(formData) {
    $.ajax({
        url: '/tournaments/'+formData.id,
        type: 'PUT',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#row_id_'+formData.id+'>td.platform').html(formData.platform);
            $('#row_id_'+formData.id+'>td.championshipId').html(formData.championshipId);
            $('#row_id_'+formData.id+'>td.game').html(formData.game);
            $('#row_id_'+formData.id+'>td.gameMode').html(formData.gameMode);
            $('#row_id_'+formData.id+'>td.noPlayers').html(formData.noPlayers);
            $('#row_id_'+formData.id+'>td.tournamentType').html(formData.tournamentType);
            $('#row_id_'+formData.id+'>td.prize').html(formData.prize);
            $('#add_new_record_modal').modal('hide');
        } 
    });
}

function deleteRecord(id) {
    $.ajax({
        url: '/tournaments/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}