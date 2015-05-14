/**
 * Created by Danial Vafadar on 6/26/14.
 */
////////////////////global variable
////////////////////////////////set default value to the operation list this value make it once
var list_default1 = 1;
var list_default2 = 1;
var list_default3 = 1;
var list_default4 = 1;
var cntr=0;
var cntr1=0;
var cntr2=0;
var cntr3=0;
var cntr4=0;
$(window).resize(function(){
  if($(window).width() <= 720){
      $("#body-div").attr("style","width:"+$(window).width()+"px;");
  }
    else{
      $("#body-div").attr("style","");
  }
});
/////////////////////Popup Windows
$("#drugs-list-more-choice").click(function(){
    if(!cntr4)$("#more-drugs").before("<option selected='selected'>"+$("#drugs-list-more").val()+"</option>");
    if(!cntr3)$("#more-drugs-sen").before("<option selected='selected'>"+$("#drugs-list-more").val()+"</option>");
});
$("#op-list-more-choice").click(function(){
    if(!cntr2)$("#more").before("<option selected='selected'>"+$("#op-list-more").val()+"</option>");
});
////////////////////
setInterval(function() {
    if($("#patient-op-choice").val() == "بیشتر"){
        (cntr2)?$("#popup").click():cntr2=0;
        cntr2=0;
    }
    else{
        cntr2=1;
    }
    if($("#drugs_list").val() == "بیشتر"){
        (cntr4)?$("#popup-1").click():cntr4=0;
        cntr4=0;
    }
    else{
        cntr4=1;
    }
    if($("#drugs-sensitive").val() == "بیشتر"){
        (cntr3)?$("#popup-1").click():cntr3=0;
        cntr3=0;
    }
    else{
        cntr3=1;
    }
    if($("#tooth-size").is(':checked')){
        $("#tooth-size-discribe").attr("class","form-control");
    }
    else {
        $("#tooth-size-discribe").attr("class","form-control list-hide");
        $("#tooth-size-discribe").val("");
    }
    if($("#tooth-distance").is(':checked')){
        $("#tooth-distance-discribe").attr("class","form-control");
    }
    else {
        $("#tooth-distance-discribe").attr("class","form-control list-hide");
        $("#tooth-distance-discribe").val("");
    }
    if($("#night-sleep-problem").is(':checked')){
        $("#night-sleep-problem-discribe").attr("class","form-control");
    }
    else {
        $("#night-sleep-problem-discribe").attr("class","form-control list-hide");
        $("#night-sleep-problem-discribe").val("");
    }
    if($("#neck-diamter").is(':checked')){
        $("#neck-diamter-discribe").attr("class","form-control");
    }
    else {
        $("neck-diamter-discribe").attr("class","form-control list-hide");
        $("neck-diamter-discribe").val("");
    }
    if($("#TMD").is(':checked')){
        $("#TMD-discribe").attr("class","form-control");
    }
    else {
        $("#TMD-discribe").attr("class","form-control list-hide");
        $("#TMD-discribe").val("");

    }
    if($("#long-bear").is(':checked')){
        $("#long-bear-discribe").attr("class","form-control");
    }
    else {
        $("#long-bear-discribe").attr("class","form-control list-hide");
        $("#long-bear-discribe").val("");
    }
    if($("#eye-sight").is(':checked')){
        $("#eye-sight-discribe").attr("class","form-control");
    }
    else {
        $("#eye-sight-discribe").attr("class","form-control list-hide");
        $("#eye-sight-discribe").val("");
    }
    if($("#tooth-condition").is(':checked')){
        $("#tooth-condition-discribe").attr("class","form-control");
    }
    else {
        $("#tooth-condition-discribe").attr("class","form-control list-hide");
        $("#tooth-condition-discribe").val("");
    }
    if($("#face-connection").is(':checked')){
        $("#face-connection-discribe").attr("class","form-control");
    }
    else {
        $("#face-connection-discribe").attr("class","form-control list-hide");
        $("#face-connection-discribe").val("");

    }
    if($("#face-ability").is(':checked')){
        $("#face-ability-discribe").attr("class","form-control");
    }
    else {
        $("#face-ability-discribe").attr("class","form-control list-hide");
        $("#face-ability-discribe").val("");
    }
    if($("#tongue-size").is(':checked')){
        $("#tongue-size-discribe").attr("class","form-control");
    }
    else {
        $("#tongue-size-discribe").attr("class","form-control list-hide");
        $("#tongue-size-discribe").val("");
    }
    if($("#neck-area-turn").is(':checked')){
        $("#neck-area-turn-discribe").attr("class","form-control");
    }
    else {
        $("#neck-area-turn-discribe").attr("class","form-control list-hide");
        $("#neck-area-turn-discribe").val("");
    }
    if($("#neck-size").is(':checked')){
        $("#neck-size-discribe").attr("class","form-control");
    }
    else {
        $("#neck-size-discribe").attr("class","form-control list-hide");
        $("#neck-size-discribe").val("");
    }
    if($("#patient-op").val() == "قلبی"){
        $("#patient-op-choice-div").attr("class","form-group");
        (list_default1)?$("#heart1").attr("selected","selected"):list_default1 = 0;
        document.getElementById("orogh1").setAttribute("class","list-hide");
        document.getElementById("orogh2").setAttribute("class","list-hide");
        document.getElementById("more").setAttribute("class","list-hide");
        document.getElementById("heart1").setAttribute("class","");
        document.getElementById("heart2").setAttribute("class","");
        list_default1=0;
        list_default2=1;
        list_default3=1;
        list_default4=1;

    }
    if($("#patient-op").val() == "عروقی"){
        $("#patient-op-choice-div").attr("class","form-group");
        (list_default2)?$("#orogh1").attr("selected","selected"):list_default2 = 0;
        document.getElementById("heart1").setAttribute("class","list-hide");
        document.getElementById("heart2").setAttribute("class","list-hide");
        document.getElementById("more").setAttribute("class","list-hide");
        document.getElementById("orogh1").setAttribute("class","");
        document.getElementById("orogh2").setAttribute("class","");
        list_default1=1;
        list_default2=0;
        list_default3=1;
        list_default4=1;
    }
    if($("#patient-op").val() == "خالی"){
        $("#patient-op-choice-div").attr("class","form-group list-hide");
        (list_default3)?$("#empty").attr("selected","selected"):list_default3 = 0;
        document.getElementById("heart1").setAttribute("class","list-hide");
        document.getElementById("heart2").setAttribute("class","list-hide");
        document.getElementById("orogh1").setAttribute("class","list-hide");
        document.getElementById("orogh2").setAttribute("class","list-hide");
        document.getElementById("more").setAttribute("class","list-hide");
        list_default1=1;
        list_default2=1;
        list_default3=0;
        list_default4=1;
    }
    if($("#patient-op").val() == "همه"){
        $("#patient-op-choice-div").attr("class","form-group");
        (list_default4)?$("#heart1").attr("selected","selected"):list_default4 = 0;
        document.getElementById("heart1").setAttribute("class","");
        document.getElementById("heart2").setAttribute("class","");
        document.getElementById("orogh1").setAttribute("class","");
        document.getElementById("orogh2").setAttribute("class","");
        document.getElementById("more").setAttribute("class","");
        list_default1=1;
        list_default2=1;
        list_default3=1;
        list_default4=0;
    }

}, 250);
$("#save-list2").click(function(){
    $("#first_row_drugs").attr("class","list-hide");
    (!cntr)?$("#table-drugs-div").toggleClass("inside-forms list-hide"):1;
    cntr=1;
    if($("#drugs_list").val() == "خالی"){
        $("#drugs_list_div").attr("class","form-group has-error");
        $("#error-list-text").attr("class","help-block");
        cntr++;
    }
    if($("#drugs-explain").val() == ""){
        $("#drugs-explain-div").attr("class","form-group has-error");
        $("#error-explain-text").attr("class","help-block");
        cntr++;
    }
    if(cntr == 1){
        $("#first_row_drugs").attr("class","");
        $("#drugs_list_div").attr("class","form-group");
        $("#drugs-explain-div").attr("class","form-group");
        $("#error-list-text").attr("class","help-block list-hide");
        $("#error-explain-text").attr("class","help-block list-hide");
        $("#table_drugs").append("<tr><td>"
            + $("#drugs_list").val()  + "<input type='hidden' name='drugs_list' value='"+ $("#drugs_list").val()+"'>"
            + "</td><td>" + $("#drugs-explain").val() + "<input type='hidden' name='drugs-explain' value='"+ $("#drugs-explain").val()+"'>"
            + "</td><td>" + "<button type='button' class='col-sm-7 btn btn-danger pull-right'>حذف</button> "
            + "</td></tr>");
    }
    $('#table_drugs').on('click','tr td :button:contains(حذف)',function(){
        $(this).closest('tr').remove();
        if($('#table_drugs tr').length == 1){
            $("#first_row_drugs").attr("class","list-hide");
        }
    });
});
var check=1;
$("#save-list3").click(function(){
    $("#first_row_sensitive").attr("class","list-hide");
    (!cntr1)?$("#table-sensitive-div").toggleClass("inside-forms list-hide"):1;
    cntr1 = 1;
    if($("#drugs-sensitive").val() == "خالی"){
        $("#drugs-sensitive-div").attr("class","form-group has-error");
        $("#drugs-sensitive-error").attr("class","help-block");
        cntr1++;
    }
    if($("#sensitive-kind").val() == ""){
        $("#sensitive-explain-div").attr("class","form-group has-error");
        $("#error-sensitive-text").attr("class","help-block");
        cntr1++;
    }
    if($("#more-sensitive-explain").val() == ""){
        $("#more-sensitive-explain-div").attr("class","form-group has-error");
        $("#sensitive-explain-text").attr("class","help-block");
        cntr1++;
    }
    if(cntr1 == 1){
        $("#first_row_sensitive").attr("class","");
        $("#drugs_sensitive_div").attr("class","form-group");
        $("#sensitive-explain-div").attr("class","form-group");
        $("#more-sensitive-explain-div").attr("class","form-group");
        $("#drugs-sensitive-error").attr("class","help-block list-hide");
        $("#error-sensitive-text").attr("class","help-block list-hide");
        $("#sensitive-explain-text").attr("class","help-block list-hide");
        $("#table_sensitive").append("<tr>" +
            "<td>" + $("#drugs-sensitive").val() + "</td>"  + "<input type='hidden' name='drugs_sensitive' value='"+ $("#drugs-sensitive").val()+"'>" +
            "<td>" + $("#sensitive-kind").val() + "</td>" + "<input type='hidden' name='sensitive_kind' value='"+ $("#sensitive-kind").val()+"'>" +
            "<td>" + $("#more-sensitive-explain").val() + "</td2>" + "<input type='hidden' name='more_sensitive_explain' value='"+ $("#more-sensitive-explain").val()+"'>"+
            "<td>" + "<button type='button' class='col-sm-7 btn btn-danger pull-right'>حذف</button> " +
            "</td></tr>");
    }
    /////////////WTF/////////////////stack overflow!!!!!!//////////???????
    $('#table_sensitive').on('click','tr td :button:contains(حذف)',function(){
        $(this).closest('tr').remove();
        if($('#table_sensitive tr').length == 1){
            $("#first_row_sensitive").attr("class","list-hide");
        }
    });
    /////////////////////////////////////////////////////////////////////////
});

$("[id='night-sleep-problem']").bootstrapSwitch();
$("[id='neck-diamter']").bootstrapSwitch();
$("[id='neck-size']").bootstrapSwitch();
$("[id='TMD']").bootstrapSwitch();
$("[id='long-bear']").bootstrapSwitch();
$("[id='eye-sight']").bootstrapSwitch();
$("[id='face-ability']").bootstrapSwitch();
$("[id='face-connection']").bootstrapSwitch();
$("[id='neck-area-turn']").bootstrapSwitch();
$("[id='tooth-condition']").bootstrapSwitch();
$("[id='tooth-size']").bootstrapSwitch();
$("[id='tooth-distance']").bootstrapSwitch();
$("[id='tongue-size']").bootstrapSwitch();
$("[id='DM']").bootstrapSwitch();
$("[id='HTN']").bootstrapSwitch();
$("[id='Asthma']").bootstrapSwitch();
$("[id='Airway-Hyperactive']").bootstrapSwitch();
$("[id='Current-Common-Cold']").bootstrapSwitch();
$("[id='smoke']").bootstrapSwitch();
$("[id='penisilin']").bootstrapSwitch();
$("[id='egg']").bootstrapSwitch();
$("[id='addicted']").bootstrapSwitch();
$("#submit").click(function(){
    if($("#night-sleep-problem").is(":checked")){
        $("#night-sleep-problem").value("value","true");
        $("#night-sleep-problem_hide").attr("disabled","disabled");
    }else{
        $("#night-sleep-problem").value("value","false");
    }
    if($("#neck-diamter").is(":checked")){
        $("#neck-diamter").value("value","true");
        $("#neck-diamter_hide").attr("disabled","disabled");
    }else{
        $("#neck-diamter").value("value","false");
    }
    if($("#TMD").is(":checked")){
        $("#TMD").value("value","true");
        $("#TMD_hide").attr("disabled","disabled");

    }else{
        $("#TMD").value("value","false");
    }
    if($("#long-bear").is(":checked")){
        $("#long-bear").value("value","true");
        $("#long-bear_hide").attr("disabled","disabled");
    }else{
        $("#long-bear").value("value","false");
    }
    if($("#eye-sight").is(":checked")){
        $("#eye-sight").value("value","true");
        $("#eye-sight_hide").attr("disabled","disabled");
    }else{
        $("#eye-sight").value("value","false");
    }
    if($("#face-ability").is(":checked")){
        $("#face-ability").value("value","true");
        $("#face-ability_hide").attr("disabled","disabled");

    }else{
        $("#face-ability").value("value","false");
    }
    if($("#face-connection").is(":checked")){
        $("#face-connection").value("value","true");
        $("#face-connection_hide").attr("disabled","disabled");

    }else{
        $("#face-connection").value("value","false");
    }
    if($("#neck-area-turn").is(":checked")){
        $("#neck-area-turn").value("value","true");
        $("#neck-area-turn_hide").attr("disabled","disabled");
    }else{
        $("#neck-area-turn").value("value","false");
    }
    if($("#tooth-condition").is(":checked")){
        $("#tooth-condition").value("value","true");
        $("#tooth-condition_hide").attr("disabled","disabled");
    }else{
        $("#tooth-condition").value("value","false");
    }
    if($("#tooth-size").is(":checked")){
        $("#tooth-size").value("value","true");
        $("#tooth-size_hide").attr("disabled","disabled");
    }else{
        $("#tooth-size").value("value","false");
    }
    if($("#DM").is(":checked")){
        $("#DM").value("value","true");
        $("#DM_hide").attr("disabled","disabled");
    }else{
        $("#DM").value("value","false");
    }
    if($("#Asthma").is(":checked")){
        $("#Asthma").value("value","true");
        $("#Asthma_hide").attr("disabled","disabled");
    }else{
        $("#Asthma").value("value","false");
    }
    if($("#Airway-Hyperactive").is(":checked")){
        $("#Airway-Hyperactive").value("value","true");
        $("#Airway-Hyperactive_hide").attr("disabled","disabled");
    }else{
        $("#Airway-Hyperactive").value("value","false");
    }
    if($("#Current-Common-Cold").is(":checked")){
        $("#Current-Common-Cold").value("value","true");
        $("#Current-Common-Cold_hide").attr("disabled","disabled");
    }else{
        $("#Current-Common-Cold").value("value","false");
    }
    if($("#smoke").is(":checked")){
        $("#smoke").value("value","true");
        $("#smoke_hide").attr("disabled","disabled");
    }else{
        $("#smoke").value("value","false");
    }
    if($("#penisilin").is(":checked")){
        $("#penisilin").value("value","true");
        $("#penisilin_hide").attr("disabled","disabled");
    }else{
        $("#penisilin").value("value","false");
    }
    if($("#addicted").is(":checked")){
        $("#addicted").value("value","true");
        $("#addicted_hide").attr("disabled","disabled");
    }else{
        $("#addicted").value("value","false");
    }
});
$("#check-list11").click(function(){
    if($("#save-sickness-history").val() == ""){
        $("#save-sickness-history").val($("#sickness-history-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-sickness-history").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#sickness-history-list").val()){
                $("#sickness-duplicate-error").attr("class","help-block");
                $("#sickness-history-div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#sickness-duplicate-error").attr("class","help-block list-hide");
            $("#sickness-history-div").attr("class","form-group");
            $("#save-sickness-history").val($("#save-sickness-history").val() + " ،  " + $("#sickness-history-list").val());
        }
    }
});