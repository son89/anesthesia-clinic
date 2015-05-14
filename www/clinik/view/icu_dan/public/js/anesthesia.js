/**
 * Created by Danial Vafadar.
 */
//////////////////////Global Variable
var anesthesia_time = 0;
////////////////////////////////
$('#Prep').on('switchChange.bootstrapSwitch', function () {
    ($("#Prep").is(':checked'))?
        $("#Prep-dis-div").attr("class","col-xs-3"):$("#Prep-dis-div").attr("class","col-xs-3 list-hide");
});
$("#temp").on('switchChange.bootstrapSwitch',function(){
    ($("#temp").is(':checked'))?
        $("#gas-dis-div").attr("class","col-md-3"):$("#gas-dis-div").attr("class","col-md-3 list-hide");
});
$("#Art-Line").on('switchChange.bootstrapSwitch',function(){
    ($("#Art-Line").is(':checked'))?
      $("#Art-Line-dis-div").attr("class","col-md-3"):$("#Art-Line-dis-div").attr("class","col-md-3 list-hide");
});
$("#CVP").on('switchChange.bootstrapSwitch',function(){
    ($("#CVP").is(':checked'))?
      $("#CVP-dis-div").attr("class","col-md-3"):$("#CVP-dis-div").attr("class","col-md-3 list-hide");
});
$("#PA-Line").on('switchChange.bootstrapSwitch',function(){
    ($("#PA-Line").is(':checked'))?
       $("#PA-Line-dis-div").attr("class","col-md-3"):$("#PA-Line-dis-div").attr("class","col-md-3 list-hide");
});
$("#IV-s").on('switchChange.bootstrapSwitch',function(){
    ($("#IV-s").is(':checked'))?
        $("#IV-s-dis-div").attr("class","col-md-3"):$("#IV-s-dis-div").attr("class","col-md-3 list-hide");
});
$("#General").on('switchChange.bootstrapSwitch',function(){
    if($("#General").is(':checked')){
        $("#hide-option-1").attr("class","form-group row");
        $("#hide-option-3").attr("class","form-group row");
        $("#hide-option-4").attr("class","form-group row");
    }
    else{
        $("#hide-option-1").attr("class","form-group row list-hide");
        $("#hide-option-3").attr("class","form-group row list-hide");
        $("#hide-option-4").attr("class","form-group row list-hide");
    }
});
$("#Regional").on('switchChange.bootstrapSwitch',function(){
    if($("#Regional").is(':checked')){
        $("#hide-option-2-1").attr("class","form-group row");
        $("#hide-option-2-2").attr("class","form-group row");
    }
    else{
        $("#hide-option-2-1").attr("class","form-group row list-hide");
        $("#hide-option-2-2").attr("class","form-group row list-hide");
    }
});
$("#Position").on('switchChange.bootstrapSwitch',function(){
    ($("#Position").is(':checked'))?
        $("#Position-dis-div").attr("class","col-xs-3"):$("#Position-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Local").on('switchChange.bootstrapSwitch',function(){
    ($("#Local").is(':checked'))?
        $("#Local-dis-div").attr("class","col-xs-3"):$("#Local-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Needle").on('switchChange.bootstrapSwitch',function(){
    ($("#Needle").is(':checked'))?
        $("#Needle-dis-div").attr("class","col-xs-3"):$("#Needle-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Drugs").on('switchChange.bootstrapSwitch',function(){
    ($("#Drugs").is(':checked'))?
        $("#Drugs-dis-div").attr("class","col-xs-3"):$("#Dose-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Dose").on('switchChange.bootstrapSwitch',function(){
    ($("#Dose").is(':checked'))?
        $("#Dose-dis-div").attr("class","col-xs-3"):$("#Dose-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Site").on('switchChange.bootstrapSwitch',function(){
    ($("#Site").is(':checked'))?
        $("#Site-dis-div").attr("class","col-xs-3"):$("#Site-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Attempts").on('switchChange.bootstrapSwitch',function(){
    ($("#Attempts").is(':checked'))?
        $("#Attempts-dis-div").attr("class","col-xs-3"):$("#Attempts-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Level").on('switchChange.bootstrapSwitch',function(){
    ($("#Level").is(':checked'))?
        $("#Level-dis-div").attr("class","col-xs-3"):$("#Level-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Catheter").on('switchChange.bootstrapSwitch',function(){
    ($("#Catheter").is(':checked'))?
        $("#Catheter-dis-div").attr("class","col-xs-3"):$("#Catheter-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Mack").on('switchChange.bootstrapSwitch',function(){
    ($("#Mack").is(':checked'))?
        $("#Mack-dis-div").attr("class","col-xs-3"):$("#Mack-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Blade").on('switchChange.bootstrapSwitch',function(){
    ($("#Blade").is(':checked'))?
        $("#Blade-dis-div").attr("class","col-xs-3"):$("#Blade-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Breath-sound").on('switchChange.bootstrapSwitch',function(){
    ($("#Breath-sound").is(':checked'))?
        $("#Breath-sound-dis-div").attr("class","col-xs-3"):$("#Breath-sound-dis-div").attr("class","col-xs-3 list-hide");
});
$("#Uncuffed-Leaks-at").on('switchChange.bootstrapSwitch',function(){
    ($("#Uncuffed-Leaks-at").is(':checked'))?
        $("#Uncuffed-Leaks-at-dis-div").attr("class","col-xs-3"):$("#Uncuffed-Leaks-at-dis-div").attr("class","col-xs-3 list-hide");
});
///////////////////////bootstrap switch////////////////////
$("[id='identfide']").bootstrapSwitch();
$("[id='id-boand']").bootstrapSwitch();
$("[id='questioning']").bootstrapSwitch();
$("[id='chart-reviewed']").bootstrapSwitch();
$("[id='permit-singed']").bootstrapSwitch();
$("[id='npo-since']").bootstrapSwitch();
$("[id='awake']").bootstrapSwitch();
$("[id='calm']").bootstrapSwitch();
$("[id='asleep']").bootstrapSwitch();
$("[id='confused']").bootstrapSwitch();
$("[id='apprehensive']").bootstrapSwitch();
$("[id='uncooperative']").bootstrapSwitch();
$("[id='unresponsive']").bootstrapSwitch();
$("[id='anes-machine']").bootstrapSwitch();
$("[id='safety-belt-on']").bootstrapSwitch();
$("[id='axeillary-roll']").bootstrapSwitch();
$("[id='amboard-restraints']").bootstrapSwitch();
$("[id='arms-tucked']").bootstrapSwitch();
$("[id='taped']").bootstrapSwitch();
$("[id='ointment']").bootstrapSwitch();
$("[id='saline']").bootstrapSwitch();
$("[id='pads']").bootstrapSwitch();
$("[id='goggles']").bootstrapSwitch();
$("[id='steth']").bootstrapSwitch();
$("[id='precord']").bootstrapSwitch();
$("[id='esoph']").bootstrapSwitch();
$("[id='other']").bootstrapSwitch();
$("[id='non-invasive-B/P']").bootstrapSwitch();
$("[id='left']").bootstrapSwitch();
$("[id='right']").bootstrapSwitch();
$("[id='continues-EKG']").bootstrapSwitch();
$("[id='v-lead-EKG']").bootstrapSwitch();
$("[id='pulse-oximeter']").bootstrapSwitch();
$("[id='end-tidal-CO2']").bootstrapSwitch();
$("[id='gas-analyzer']").bootstrapSwitch();
$("[id='temp']").bootstrapSwitch();
$("[id='Art-Line']").bootstrapSwitch();
$("[id='warming-blanket']").bootstrapSwitch();
$("[id='nerve-simulator']").bootstrapSwitch();
$("[id='airway-humidifier']").bootstrapSwitch();
$("[id='fluid-warmer']").bootstrapSwitch();
$("[id='NG/OG-Tube']").bootstrapSwitch();
$("[id='CVP']").bootstrapSwitch();
$("[id='PA-Line']").bootstrapSwitch();
$("[id='IV-s']").bootstrapSwitch();
$("[id='doppler']").bootstrapSwitch();
$("[id='Foley-Catheter']").bootstrapSwitch();
$("[id='General']").bootstrapSwitch();
$("[id='Pre-Oxygenation']").bootstrapSwitch();
$("[id='Rapid-sequence']").bootstrapSwitch();
$("[id='Intravenous']").bootstrapSwitch();
$("[id='Inhalation']").bootstrapSwitch();
$("[id='Cricoid-Pressure']").bootstrapSwitch();
$("[id='LTA']").bootstrapSwitch();
$("[id='Rectal']").bootstrapSwitch();
$("[id='Regional']").bootstrapSwitch();
$("[id='spinal']").bootstrapSwitch();
$("[id='Epidural']").bootstrapSwitch();
$("[id='Intramuscular']").bootstrapSwitch();
$("[id='Axillary']").bootstrapSwitch();
$("[id='Bier-Block']").bootstrapSwitch();
$("[id='Ankle-Block']").bootstrapSwitch();
$("[id='Position']").bootstrapSwitch();
$("[id='Prep']").bootstrapSwitch();
$("[id='Local']").bootstrapSwitch();
$("[id='Needle']").bootstrapSwitch();
$("[id='Drugs']").bootstrapSwitch();
$("[id='Dose']").bootstrapSwitch();
$("[id='Site']").bootstrapSwitch();
$("[id='Attempts']").bootstrapSwitch();
$("[id='Level']").bootstrapSwitch();
$("[id='Catheter']").bootstrapSwitch();
$("[id='See-Mark']").bootstrapSwitch();
$("[id='Mack']").bootstrapSwitch();
$("[id='Oral']").bootstrapSwitch();
$("[id='Tube-size']").bootstrapSwitch();
$("[id='Style-used']").bootstrapSwitch();
$("[id='Nasal']").bootstrapSwitch();
$("[id='Regular']").bootstrapSwitch();
$("[id='Magill-s']").bootstrapSwitch();
$("[id='Direct']").bootstrapSwitch();
$("[id='RAE']").bootstrapSwitch();
$("[id='Fiber-Optic']").bootstrapSwitch();
$("[id='Blind']").bootstrapSwitch();
$("[id='Armored']").bootstrapSwitch();
$("[id='Laser']").bootstrapSwitch();
$("[id='Blade']").bootstrapSwitch();
$("[id='Endobronch']").bootstrapSwitch();
$("[id='ET-CO2-Present']").bootstrapSwitch();
$("[id='Breath-sound']").bootstrapSwitch();
$("[id='Uncuffed-Leaks-at']").bootstrapSwitch();
$("[id='Cuffed']").bootstrapSwitch();
$("[id='Air']").bootstrapSwitch();
$("[id='NS']").bootstrapSwitch();
$("[id='Airway']").bootstrapSwitch();
$("[id='Oral-2']").bootstrapSwitch();
$("[id='LMA']").bootstrapSwitch();
$("[id='asal-2']").bootstrapSwitch();
$("[id='Circuit']").bootstrapSwitch();
$("[id='Circle']").bootstrapSwitch();
$("[id='NRB']").bootstrapSwitch();
$("[id='Mask-case']").bootstrapSwitch();
$("[id='Nasal-Cannula']").bootstrapSwitch();
$("[id='Simple-O2-Mask']").bootstrapSwitch();
$("[id='Nasal-2']").bootstrapSwitch();
$("[id='PACU']").bootstrapSwitch();
$("[id='ICU']").bootstrapSwitch();
$("[id='L-D']").bootstrapSwitch();
$("[id='Re-awake']").bootstrapSwitch();
$("[id='stable']").bootstrapSwitch();
$("[id='unstable']").bootstrapSwitch();
$("[id='Re-asleep']").bootstrapSwitch();
$("[id='ventilator']").bootstrapSwitch();
$("[id='extubated']").bootstrapSwitch();
$("[id='intubated']").bootstrapSwitch();
$("[id='oral-airway']").bootstrapSwitch();
$("[id='nasal-airway']").bootstrapSwitch();
$("[id='tpiece-oxygen']").bootstrapSwitch();
$("[id='face-shield-oxygen']").bootstrapSwitch();
$("[id='Min-Occ-pres']").bootstrapSwitch();
$("[id='Via-Tracheostomy']").bootstrapSwitch();
$("[id='pressure-point-checked-andpadded']").bootstrapSwitch();
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////
$("#heart_beat_table").click(function(){
    $("#heart_beat_number").val("");
    $("#heart_beat_number_valid").attr("class","help-block list-hide");
    $("#heart_beat_div").attr("class","form-group row");
    $("#heart_beat_time").val(gettime());
});
$("#blood-pressure-table").click(function(){
    $("#blood-pressure-start").val("");
    $("#blood-pressure-end").val("");
    $("#blood-pressure-time").val(gettime());
});
$("#chose-surgery").click(function(){
    if($("#surgerys-list").val() == ""){
        $("#surgerys-list").val($("#Procedure-kind").val() + "  ");
    }else{
        $("#surgerys-list").val($("#surgerys-list").val()+ $("#Procedure-kind").val()+"  ");
    }
});
$("#select-temperature").click(function(){
    $("#patient-temperature-time").val(gettime());
});
$("#chose-temperature").click(function(){
    if($("#patient-temperature-time").val() == ""){
        $("#chose-temperature").attr("data-dismiss","");
        $("#patient-temperature-div").attr("class","form-group row has-error");
        $("#patient-temperature-valid").attr("class","help-block");
    }
    else{
        $("#chose-temperature").attr("data-dismiss","modal");
        $("#patient-temperature-div").attr("class","form-group row");
        $("#patient-temperature-valid").attr("class","help-block list-hide");
    }
});
$("#chose-liquids").click(function(){
    if($("#liquids-start").val() == ""){
        $("#chose-liquids").attr("data-dismiss","");
        $("#liquids-div").attr("class","form-group row has-error");
        $("#liquids-valid").attr("class","help-block");
    }
    else{
        $("#chose-liquids").attr("data-dismiss","modal");
        $("#liquids-div").attr("class","form-group row");
        $("#liquids-valid").attr("class","help-block list-hide");
    }
});
$("#select-liquids").click(function(){
    $("#liquids-start").val(gettime());
});
$("#chose-drug").click(function(){
    if($("#drug-start").val() == ""){
        $("#chose-drug").attr("data-dismiss","");
        $("#drug-div").attr("class","form-group row has-error");
        $("#drug-valid").attr("class","help-block");
    }
    else{
        $("#chose-drug").attr("data-dismiss","modal");
        $("#drug-div").attr("class","form-group row");
        $("#drug-valid").attr("class","help-block list-hide");
    }
});
$("#draw-chart").click(function(){
    $("#time-surgery-start").val(gettime());
});
$('[name="reload-start"]').click(function(){
    $("#time-surgery-start").val(gettime());
    $("#anesthesia-start-time-input").val(gettime());
    $("#drug-start").val(gettime());
    $("#liquids-start").val(gettime());
    $("#patient-temperature-time").val(gettime());
    $("#heart_beat_time").val(gettime());
});
$('[name="reload-end"]').click(function(){
    $("#blood-pressure-time").val(gettime());
    $("#time-surgery-end").val(gettime());
    $("#anesthesia-end-time-input").val(gettime());
    $("#drug-end").val(gettime());
});
$("#select-drugs").click(function(){
    $("#drug-start").val(gettime());
});
$("#save-main-surgeon").click(function(){
    $("#surgeon-show").html($("#first-surgeons").val());
});
$("#save-main-anesthesia-surgeon").click(function(){
    $("#anesthesia-surgeon-show").html($("#main-anesthesia-surgeon").val());
});
$("#save-Procedure").click(function(){
    $("#procedure-show").html($("#surgerys-list").val());
});
$("#save-name").click(function(){
    $("#name-show").html($("#name-text").val());
});
$("#anesthesia-time-show").click(function(){
    $("#anesthesia-start-time-input").val(gettime());
    $("#anesthesia-end-time-input").val(gettime());
    anesthesia_time = 1;
    $("#start-end").html("زمان شروع و خاتمه ی بیهوشی");
    $("#anesthesia-start-time-lable").html("زمان شروع بیهوشی");
    $("#anesthesia-end-time-lable").html("زمان خاتمه بیهوشی");
});
$("#save-anesthesia-time").click(function(){
    if(anesthesia_time){
        if($("#anesthesia-start-time-input").val() != "" || $("#anesthesia-end-time-input").val() != ""){
            var duration =parseInt($("#anesthesia-end-time-input").val()) - parseInt($("#anesthesia-start-time-input").val());
            if(duration<0)duration= duration*-1;
            $("#anesthesia-time-show").html
           (
               duration+
               " <span class='glyphicon glyphicon-refresh'></span> " +
               $("#anesthesia-start-time-input").val()+
               " <span class='glyphicon glyphicon-arrow-right'></span> " +
               $("#anesthesia-end-time-input").val()
           );
       }else{
            $("#anesthesia-time-show").html("Anesthesia Time");
        }
    }
});
$("#submit").click(function(){
    toastr.success('فرم با موقیت به ثبت رسید')
});
//////////////////////////////
