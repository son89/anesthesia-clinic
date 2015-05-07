google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
var systolic;
var diastolic;
var blood_time;
var day_change = 0;
var lastBloodtime = [-1];
var lastHearttime = [-1];
var time = new Date();
var year = time.getFullYear();
var mon = time.getMonth();
var day = time.getDate();
//////////////WTF!!!!!!!/////Each Time event call in work 2 times like a for loop check is for to control event work just one time////
var checkEventbloodrepat = 2;
var checkEventheartrepat = 2;
//////////////////////////////////////////////////////////////////////////////////////////
function drawChart() {
    var chart = new google.visualization.LineChart(document.querySelector('#chart_div'));
    var data = new google.visualization.DataTable();
    data.addColumn('datetime','Timeline'); // Implicit domain label col.
    data.addColumn('number','Blood Pressure');
    data.addColumn('number','Heart Beat');
    data.addColumn('string','direction');
    $("#save-blood-pressure-duration").click(function(){
        if(checkEventbloodrepat %  2 == 0){
            //////////////////////blood pressure validation
            var dismiss_check=0;
            if($("#blood-pressure-start").val() == ""){
                $("#save-blood-pressure-duration").attr("data-dismiss","");
                $("#blood-pressure-start-div").attr("class","form-group row has-error");
                $("#blood-pressure-start-error").attr("class","help-block");
            }
            else{
                dismiss_check++;
                $("#blood-pressure-start-div").attr("class","form-group row");
                $("#blood-pressure-start-error").attr("class","help-block list-hide");
            }
            if($("#blood-pressure-end").val() == ""){
                $("#save-blood-pressure-duration").attr("data-dismiss","");
                $("#blood-pressure-end-div").attr("class","form-group row has-error");
                $("#blood-pressure-end-error").attr("class","help-block");
            }
            else{
                $("#blood-pressure-end-div").attr("class","form-group row");
                $("#blood-pressure-end-error").attr("class","help-block list-hide");
                dismiss_check++;
            }
            if(dismiss_check == 2){
                $("#save-blood-pressure-duration").attr("data-dismiss","modal");
                    systolic = $("#blood-pressure-start").val();
                    diastolic = $("#blood-pressure-end").val();
                    blood_time = $("#blood-pressure-time").val().split(":");
                //////////////Save to Mongo
                    $('<input>').attr({
                        type: 'hidden',
                        name: 'systolic',
                        value: systolic
                    }).appendTo('form');
                    $('<input>').attr({
                        type: 'hidden',
                        name: 'diastolic',
                        value: diastolic
                    }).appendTo('form');
                    $('<input>').attr({
                        type: 'hidden',
                        name: 'blood_pressure_time',
                        value: blood_time
                    }).appendTo('form');
                ///////////////////////////
               var startTime = startSurgerytime();
               if(startTime != undefined){
                    if(lastBloodtime[0] == -1){
                        lastBloodtime[0] = startTime[0];
                    }
                    if(lastBloodtime[0] != -1){
                        if(lastBloodtime[0]>blood_time[0]){
                            day_change = 1;
                        }
                    }
                    lastBloodtime[0] = blood_time[0];
                    data.addRows([
                        [new Date(year,mon,day+day_change,parseInt(blood_time[0]),parseInt(blood_time[1]),0),parseInt(diastolic),null,'down'],
                        [new Date(year,mon,day+day_change,parseInt(blood_time[0]),parseInt(blood_time[1]),0),parseInt(systolic),null,'up'],
                        [null, null,null,null]
                    ]);
                   var view = new google.visualization.DataView(data);
                   view.setColumns([0, 1, {
                       // down triangles
                       type: 'number',
                       calc: function (dt, row) {
                           return (dt.getValue(row, 3) == 'down') ? dt.getValue(row, 1) : null;
                       }
                   }, {
                       // up triangles
                       type: 'number',
                       calc: function (dt, row) {
                           return (dt.getValue(row, 3) == 'up') ? dt.getValue(row, 1) : null;
                       }
                   },{
                       type: 'number',
                       label:'Heart Beat',
                       calc: function (dt, row) {
                           return dt.getValue(row, 2);
                       }
                   }
                   ]);
                   chart.draw(view, {
                       legend: { position: 'bottom' },
                       hAxis: { minValue: new Date(year,mon,day,startTime[0],0), maxValue: new Date(year,mon,day+1,startTime[0],0) },
                       series: {
                           0: {
                               // this will draw the line
                               pointSize: 0,
                               color: '#3366cc' // set the color so they are all the same
                           },
                           1: {
                               // this will draw the line
                               lineWidth: 0,
                               pointSize: 15,
                               pointShape: {
                                   type: 'triangle',
                                   rotation: 180
                               },
                               visibleInLegend: false,
                               color: '#3366cc' // set the color so they are all the same

                           },
                           2: {
                               lineWidth: 0,
                               pointSize: 15,
                               pointShape: {
                                   type: 'triangle'
                               },
                               visibleInLegend: false,
                               color: '#3366cc' // set the color so they are all the same
                               // this will draw the down triangles
                           },
                           3: {
                               // this will draw the up triangles
                               pointSize: 15,
                               pointShape: {
                                   type: 'star'
                               }
                           }
                       }
                   });
               }
            }
        }
        checkEventbloodrepat++;
    });
    $("#choseـheart_beat").click(function(){
        if(checkEventheartrepat % 2 == 0){
            if($("#heart_beat_time").val() == "" || $("#heart_beat_number").val() == "" || isNaN($("#heart_beat_number").val()) ){
                $("#heart_beat_valid").attr("class","help-block");
                $("#heart_beat_div").attr("class","form-group row has-error");
                $("#heart_beat_number_valid").attr("class","help-block");
                $("#choseـheart_beat").attr("data-dismiss","");
            }
            else{
                $("#choseـheart_beat").attr("data-dismiss","modal");
                var heartBeat = $("#heart_beat_number").val();
                var heartTime = $("#heart_beat_time").val().split(":");
                $('<input>').attr({
                    type: 'hidden',
                    name: 'heartBeat',
                    value: heartBeat
                }).appendTo('form');
                $('<input>').attr({
                    type: 'hidden',
                    name: 'heartTime',
                    value: heartTime
                }).appendTo('form');
                var startTime = startSurgerytime();
                if(startTime != undefined){
                    if(lastHearttime[0]  == -1){
                        lastHearttime[0] = startTime[0];
                    }
                    if(lastHearttime[0] != -1){
                        if(lastHearttime[0]>heartTime[0]){
                            day_change = 1;
                        }
                    }
                    lastHearttime[0] = heartTime[0];
                    data.addRows([
                        [new Date(year,mon,day+day_change,parseInt(heartTime[0]),parseInt(heartTime[1])),null,parseInt(heartBeat),'down'],
                        [new Date(year,mon,day+day_change,parseInt(heartTime[0]),parseInt(heartTime[1])),null,parseInt(heartBeat),'up'],
                        [null,null,null,null],
                    ]);
                    var view = new google.visualization.DataView(data);
                    view.setColumns([0, 1, {

                        // down triangles
                        type: 'number',
                        calc: function (dt, row) {
                            return (dt.getValue(row, 3) == 'down') ? dt.getValue(row, 1) : null;
                        }
                    }, {
                        // up triangles
                        type: 'number',
                        calc: function (dt, row) {
                            return (dt.getValue(row, 3) == 'up') ? dt.getValue(row, 1) : null;
                        }
                    },{
                        type: 'number',
                        label :'Heart Beat',
                        calc: function (dt, row) {
                            return dt.getValue(row, 2);
                        }
                    }
                    ]);
                    chart.draw(view, {
                        legend: { position: 'bottom' },
                        hAxis: { minValue: new Date(year,mon,day,startTime[0],startTime[1]), maxValue: new Date(year,mon,day+1,startTime[0],startTime[1]) },
                        series: {
                            0: {
                                // this will draw the line
                                pointSize: 0,
                                color: '#3366cc' // set the color so they are all the same
                            },
                            1: {
                                // this will draw the line
                                lineWidth: 0,
                                pointSize: 15,
                                pointShape: {
                                    type: 'triangle',
                                    rotation: 180
                                },
                                visibleInLegend: false,
                                color: '#3366cc' // set the color so they are all the same

                            },
                            2: {
                                lineWidth: 0,
                                pointSize: 15,
                                pointShape: {
                                    type: 'triangle'
                                },
                                visibleInLegend: false,
                                color: '#3366cc' // set the color so they are all the same
                                // this will draw the down triangles
                            },
                            3: {
                                // this will draw the up triangles
                                pointSize: 15,
                                label:'Heart Beat',
                                pointShape: {
                                    type: 'star'
                                }
                            }
                        }
                    });
                }
            }
        }
        checkEventheartrepat++;
    });
}
google.load('visualization', '1', {packages:['corechart'], callback: drawChart});