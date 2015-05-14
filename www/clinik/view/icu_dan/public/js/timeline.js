/**
 * Created by danial on 8/6/14.
 */
////// For returning them to the chart.js
var start_min;
var start_hour;
/////////////////
google.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    var options = {
        timeline: { colorByRowLabel: true },
        backgroundColor: '#ffd'
    };
    $("#save-surgery-duration").click(function(){
        var dismiss_check=0;
        if($("#time-surgery-start").val() == ""){
            $("#save-surgery-duration").attr("data-dismiss","");
            $("#surgery-start-div").attr("class","form-group row has-error");
            $("#surgery-start-error").attr("class","help-block");
        }
        else{
            dismiss_check++;
            $("#surgery-start-div").attr("class","form-group row");
            $("#surgery-start-error").attr("class","help-block list-hide");
        }
        if(dismiss_check == 1){

            $("#save-surgery-duration").attr("data-dismiss","modal");
            var end_min;
            var end_hour;
            var day_change = 0;
            var start_time = $("#time-surgery-start").val();
            var end_time = $("#time-surgery-end").val();
            start_time = start_time.split("");
            end_time = end_time.split("");
            if(start_time[0] == "0"){
                start_hour = parseInt(start_time[1]);
            }else start_hour = parseInt(start_time[0]+start_time[1]);
            if(start_time[3] == "0"){
                start_min = parseInt(start_time[4]);
            }else start_min = parseInt(start_time[3]+start_time[4]);
            if(end_time[0] == "0"){
                end_hour = parseInt(end_time[1]);
            }else end_hour = parseInt(end_time[0]+end_time[1]);
            if(end_time[3] == "0"){
                end_min = parseInt(end_time[4]);
            }else end_min = parseInt(end_time[3]+end_time[4]);
            if(start_hour > end_hour) day_change = 1;
            if(start_hour % 2 != 0)start_hour = start_hour - 1;
            dataTable.addRows([
                [ "Duration",  ($("#surgery-describe").val() != "")?$("#surgery-describe").val():'',    new Date(0,0,0,start_hour,0,0),  new Date(0,0,1,start_hour,0,0) ]]);
            chart.draw(dataTable, options); // redraw the chart
        }
    });
    $("#chose-temperature").click(function(){
        var start_min;
        var start_hour;
        var day_change = 0;
        var start_time = $("#patient-temperature-time").val();
        start_time = start_time.split("");
        if(start_time[0] == "0"){
            start_hour = parseInt(start_time[1]);
        }else start_hour = parseInt(start_time[0]+start_time[1]);
        if(start_time[3] == "0"){
            start_min = parseInt(start_time[4]);
        }else start_min = parseInt(start_time[3]+start_time[4]);
        var temp = $("#temperature").val();
        $('<input>').attr({
            type: 'hidden',
            name: 'temperature',
            value: temp
        }).appendTo('form');
        $('<input>').attr({
            type: 'hidden',
            name: 'temperature_time',
            value: start_time
        }).appendTo('form');
        dataTable.addRows([
            ["Temperature",  temp, new Date(0,0,0,start_hour,start_min,0),  new Date(0,0,day_change,start_hour,start_min,0) ]]);
        chart.draw(dataTable, options); // redraw the chart
    });
    $("#chose-liquids").click(function(){
        var start_min;
        var start_hour;
        var end_min;
        var end_hour;
        var day_change = 0;
        var start_time = $("#liquids-start").val();
        var end_time =  $("#liquid-end").val();
        if(end_time == "")end_time = start_time;
        start_time = start_time.split("");
        end_time = end_time.split("");
        if(start_time[0] == "0"){
            start_hour = parseInt(start_time[1]);
        }else start_hour = parseInt(start_time[0]+start_time[1]);
        if(start_time[3] == "0"){
            start_min = parseInt(start_time[4]);
        }else start_min = parseInt(start_time[3]+start_time[4]);
        if(end_time[0] == "0"){
            end_hour = parseInt(end_time[1]);
        }else end_hour = parseInt(end_time[0]+end_time[1]);
        if(end_time[3] == "0"){
            end_min = parseInt(end_time[4]);
        }else end_min = parseInt(end_time[3]+end_time[4]);
        if(start_hour > end_hour) day_change = 1;
        var drug_name =  $("#liquids-list").val();
        var drug_info=$("#liquids-describe").val();
        $('<input>').attr({
            type: 'hidden',
            name: 'liquid_list',
            value: drug_name
        }).appendTo('form');
        $('<input>').attr({
            type: 'hidden',
            name: 'liquid_time',
            value: start_time + '-' + end_time
        }).appendTo('form');
        $('<input>').attr({
            type: 'hidden',
            name: 'liquid_info',
            value: drug_info
        }).appendTo('form');
        dataTable.addRows([
            [ drug_name,  (drug_info != "")?drug_info:'Liquid', new Date(0,0,0,start_hour,start_min,0),  new Date(0,0,day_change,end_hour,end_min,0) ]]);
        chart.draw(dataTable, options); // redraw the chart
    });
    $("#chose-drug").click(function(){
        var start_min;
        var start_hour;
        var end_min;
        var end_hour;
        var day_change = 0;
        var start_time = $("#drug-start").val();
        var end_time =  $("#drug-end").val();
        if(end_time == "")end_time = start_time;
        start_time = start_time.split("");
        end_time = end_time.split("");
        if(start_time[0] == "0"){
            start_hour = parseInt(start_time[1]);
        }else start_hour = parseInt(start_time[0]+start_time[1]);
        if(start_time[3] == "0"){
            start_min = parseInt(start_time[4]);
        }else start_min = parseInt(start_time[3]+start_time[4]);
        if(end_time[0] == "0"){
            end_hour = parseInt(end_time[1]);
        }else end_hour = parseInt(end_time[0]+end_time[1]);
        if(end_time[3] == "0"){
            end_min = parseInt(end_time[4]);
        }else end_min = parseInt(end_time[3]+end_time[4]);
        if(start_hour > end_hour) day_change = 1;
        var drug_name =  $("#drug-list").val();
        var drug_info=$("#drugs-describe").val();
        $('<input>').attr({
            type: 'hidden',
            name: 'drug_list',
            value: drug_name
        }).appendTo('form');
        $('<input>').attr({
            type: 'hidden',
            name: 'drug_time',
            value: start_time + '-' + end_time
        }).appendTo('form');
        $('<input>').attr({
            type: 'hidden',
            name: 'drug_info',
            value: drug_info
        }).appendTo('form');
        dataTable.addRows([
            [ drug_name,  (drug_info != "")?drug_info:'Drug', new Date(0,0,0,start_hour,start_min,0),  new Date(0,0,day_change,end_hour,end_min,0) ]]);
        chart.draw(dataTable, options); // redraw the chart
    });
    $(window).resize(function(){
        if($("#timeline").html() != ""){
            $("#timeline").attr("style","width: "+$(window).width() + "height : " + $(window).height() +";");
            chart.draw(dataTable, options);
        }
    });
    $("#delete-surgery-duration").click(function(){
        var cntr = dataTable.getNumberOfRows();
        cntr--;
        while(cntr>=0){
            dataTable.removeRow(cntr);
            cntr--;
        }
        chart.clearChart();
        delete dataTable;
        delete chart;
    });
}
google.load('visualization', '1', {packages: ['timeline'], callback: drawChart});
function startSurgerytime(){
    var startTime = [];
    startTime.push(start_hour,start_min);
    return startTime;
}