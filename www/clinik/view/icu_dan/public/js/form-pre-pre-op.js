/**
 * Created by Danial Vafadar on 6/25/14.
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
var s=0;
/////////////////
////////////////
setInterval(function(){
    if($("#age").val() <= 12){
        $("#child-check").attr("class","form-group")
    }else{
        $("#child-check").attr("class","form-group list-hide");
    }
    ($("#sex").val() == "زن")?$("#woman-option").attr("class","col-md-12"):$("#woman-option").attr("class","col-md-12 list-hide");
    if($("#smoker").is(':checked')){
        $("#smoker-div").attr("class","col-md-12")
    }else{
        $("#smoker-div").attr("class","col-md-12 list-hide");
        $("#smoke-many").val("");
        $("#smoke-year").val("");
    }
    if($("#heart-problem").is(':checked')){
        $("#heart-problem-on").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#heart-problem-on").attr("class","col-md-12 list-hide");
        $("#heart-duplicate-error").attr("class","help-block list-hide");
        $("#heart_problem_div").attr("class","form-group");
        $("#save-heart-problem").val("");
    }
    if($("#breath-problem").is(':checked')){
        $("#breath-problem-on").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#breath-problem-on").attr("class","col-md-12 list-hide");
        $("#breath-duplicate-error").attr("class","help-block list-hide");
        $("#breath_problem_div").attr("class","form-group");
        $("#save-breath-problem").val("");
    }
    if($("#sickness").is(':checked')){
        $("#sickness-on").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#sickness-on").attr("class","col-md-12 list-hide");
        $("#sickness-explain").val("");
    }

    if($("#bleeding-problem").is(':checked')){
        $("#bleeding-problem-div").attr("class","col-md-12 list_hidden_fade");
    }else{
        $("#bleeding-duplicate-error").attr("class","help-block list-hide");
        $("#bleeding_problem_div").attr("class","form-group");
        $("#bleeding-problem-div").attr("class","col-md-12 list-hide");
        $("#save-bleeding-problem").val("");
    }

    if($("#blood-problem").is(':checked')){
        $("#blood-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#blood-duplicate-error").attr("class","help-block list-hide");
        $("#blood_problem_div").attr("class","form-group");
        $("#blood-problem-div").attr("class","col-md-12 list-hide");
        $("#save-blood-problem").val("");
    }

    if($("#kidney-problem").is(':checked')){
        $("#kidney-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#kidney-duplicate-error").attr("class","help-block list-hide");
        $("#kidney_problem_div").attr("class","form-group");
        $("#kidney-problem-div").attr("class","col-md-12 list-hide");
        $("#save-kidney-problem").val("");
    }

    if($("#liver-problem").is(':checked')){
        $("#liver-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#liver-duplicate-error").attr("class","help-block list-hide");
        $("#liver_problem_div").attr("class","form-group");
        $("#liver-problem-div").attr("class","col-md-12 list-hide");
        $("#liver-problem").val("");
    }

    if($("#digestion-problem").is(':checked')){
        $("#digestion-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#digestion-duplicate-error").attr("class","help-block list-hide");
        $("#digestion_problem_div").attr("class","form-group");
        $("#digestion-problem-div").attr("class","col-md-12 list-hide");
        $("#save-digestion-problem").val("");
    }

    if($("#general-problem").is(':checked')){
        $("#general-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#general-duplicate-error").attr("class","help-block list-hide");
        $("#general_problem_div").attr("class","form-group");
        $("#general-problem-div").attr("class","col-md-12 list-hide");
        $("#save-general-problem").val("");
    }

    if($("#anesthesia-problem").is(':checked')){
        $("#anesthesia-problem-div").attr("class","col-md-12 list_hidden_fade")
    }else{
        $("#anesthesia-duplicate-error").attr("class","help-block list-hide");
        $("#anesthesia_problem_div").attr("class","form-group");
        $("#anesthesia-problem-div").attr("class","col-md-12 list-hide");
        $("#save-anesthesia-problem").val("");
    }

    if($("#cat-op-list").val() == "خالی"){
        $("#op-list-div").attr("class","form-group list-hide");
        (list_default1)?$("#option0").attr("selected","selected"):list_default1 = 0;
        $("#option0").attr("class","list-hide");
        $("#option1").attr("class","list-hide");
        $("#option2").attr("class","list-hide");
        $("#option3").attr("class","list-hide");
        $("#option4").attr("class","list-hide");
        $("#option5").attr("class","list-hide");
        list_default1=0;
        list_default2=1;
        list_default3=1;
        list_default4=1;
    }
    if($("#cat-op-list").val() == "قلب"){
        $("#op-list-div").attr("class","form-group list_hidden_fade");
        (list_default2)?$("#option1").attr("selected","selected"):list_default2 = 0;
        $("#option0").attr("class","list-hide");
        $("#option1").attr("class","");
        $("#option2").attr("class","");
        $("#option3").attr("class","list-hide");
        $("#option4").attr("class","list-hide");
        $("#option5").attr("class","list-hide");
        list_default1=1;
        list_default2=0;
        list_default3=1;
        list_default4=1;
    }
    if($("#cat-op-list").val() == "بایپس عروقی"){
        $("#op-list-div").attr("class","form-group list_hidden_fade");
        (list_default3)?$("#option3").attr("selected","selected"):list_default3 = 0;
        $("#option0").attr("class","list-hide");
        $("#option1").attr("class","list-hide");
        $("#option2").attr("class","list-hide");
        $("#option3").attr("class","");
        $("#option4").attr("class","");
        $("#option5").attr("class","list-hide");
        list_default1=1;
        list_default2=1;
        list_default3=0;
        list_default4=1;
    }
    if($("#cat-op-list").val() == "همه"){
        $("#op-list-div").attr("class","form-group list_hidden_fade");
        (list_default4)?$("#option1").attr("selected","selected"):list_default4 = 0;
        $("#option0").attr("class","list-hide");
        $("#option1").attr("class","");
        $("#option2").attr("class","");
        $("#option3").attr("class","");
        $("#option4").attr("class","");
        $("#option5").attr("class","");
        list_default1=1;
        list_default2=1;
        list_default3=1;
        list_default4=0;
    }
    if($("#op-list").val() == "بیشتر"){
        (cntr2)?$("#popup").click():cntr2=0;
        cntr2=0;
    }
    else{
        cntr2=1;
    }
    if($("#op-kind-patient").val() == "بیشتر"){
        (cntr3)?$("#popup").click():cntr3=0;
        cntr3=0;
    }
    else{
        cntr3=1;
    }
    if($("#drugs_list").val() == "بیشتر"){
        (cntr4)?$("#popup-1").click():cntr4=0;
        cntr4=0;
    }
    else{
        cntr4=1;
    }
},250);
$("[id='estroyd']").bootstrapSwitch();
$("[id='smoker-now']").bootstrapSwitch();
$("[id='smoker']").bootstrapSwitch();
$("[id='alcohalic']").bootstrapSwitch();
$("[id='danger-drugs']").bootstrapSwitch();
$("[id='addiction_problem']").bootstrapSwitch();
$("[id='one-floor-stair']").bootstrapSwitch();
$("[id='heart-problem']").bootstrapSwitch();
$("[id='blood-presure']").bootstrapSwitch();
$("[id='diabeti']").bootstrapSwitch();
$("[id='breath-problem']").bootstrapSwitch();
$("[id='sickness']").bootstrapSwitch();
$("[id='bleeding-problem']").bootstrapSwitch();
$("[id='blood-problem']").bootstrapSwitch();
$("[id='kidney-problem']").bootstrapSwitch();
$("[id='liver-problem']").bootstrapSwitch();
$("[id='digestion-problem']").bootstrapSwitch();
$("[id='general-problem']").bootstrapSwitch();
$("[id='cancer']").bootstrapSwitch();
$("[id='pregnant']").bootstrapSwitch();
$("[id='pregnant-problem']").bootstrapSwitch();
$("[id='anesthesia-problem']").bootstrapSwitch();
$("[id='daily-work']").bootstrapSwitch();
$("[id='sleep-apnea']").bootstrapSwitch();
/////////////////submit
$("#submit").click(function(){
    if($("#estroyd").is(':checked')){
        $("#estroyd").attr("value","true");
        $("#estroyd-hide").attr("disabled","disabled");
    }
    if($("#smoker-now").is(':checked')){
        $("#smoker-now").attr("value","true");
        $("#smoker-now-hide").attr("disabled","disabled");
    }
    if($("#smoker").is(':checked')){
        $("#smoker").attr("value","true");
        $("#smoker-hide").attr("disabled","disabled");

    };
    if($("#alcohalic").is(':checked')){
        $("#alcohalic").attr("value","true");
        $("#alcohalic-hide").attr("disabled","disabled");

    }
    if($("#addiction_problem").is(':checked')){
        $("#addiction_problem").attr("value","true");
        $("#addiction_problem_hide").attr("disabled","disabled");
    }
    if($("#danger-drugs").is(':checked')){
        $("#danger-drugs").attr("value","true");
        $("#danger-drugs-hide").attr("disabled","disabled");
    }
    if($("#one-floor-stair").is(':checked')){
        $("#one-floor-stair").attr("value","true");
        $("#one-floor-stair-hide").attr("disabled","disabled");
    }
    if($("#heart-problem").is(':checked')){
        $("#heart-problem").attr("value","true");
        $("#heart-problem-hide").attr("disabled","disabled");
    }
    if($("#blood-presure").is(':checked')){
        $("#blood-presure").attr("value","true");
        $("#blood-presure-hide").attr("disabled","disabled");
    }
    if($("#diabeti").is(':checked')){
        $("#diabeti").attr("value","true");
        $("#diabeti-hide").attr("disabled","disabled");
    }
    if($("#breath-problem").is(':checked')){
        $("#breath-problem").attr("value","true");
        $("#breath-problem-hide").attr("disabled","disabled");
    }
    if($("#sickness").is(':checked')){
        $("#sickness").attr("value","true");
        $("#sickness-hide").attr("disabled","disabled");
    }
    if($("#bleeding-problem").is(':checked')){
        $("#bleeding-problem").attr("value","true");
        $("#bleeding-problem-hide").attr("disabled","disabled");
    }
    if($("#blood-problem").is(':checked')){
        $("#blood-problem").attr("value","true");
        $("#blood-problem-hide").attr("disabled","disabled");
    }
    if($("#kidney-problem").is(':checked')){
        $("#kidney-problem").attr("value","true");
        $("#kidney-problem-hide").attr("disabled","disabled");
    }
    if($("#liver-problem").is(':checked')){
        $("#liver-problem").attr("value","true");
        $("#liver-problem-hide").attr("disabled","disabled");
    }
    if($("#digestion-problem").is(':checked')){
        $("#digestion-problem").attr("value","true");
        $("#digestion-problem-hide").attr("disabled","disabled");
    }
    if($("#general-problem").is(':checked')){
        $("#general-problem").attr("value","true");
        $("#general-problem-hide").attr("disabled","disabled");
    }
    if($("#cancer").is(':checked')){
        $("#cancer").attr("value","true");
        $("#cancer-hide").attr("disabled","disabled");
    }
    if($("#pregnant").is(':checked')){
        $("#pregnant").attr("value","true");
        $("#pregnant-hide").attr("disabled","disabled");
    }
    if($("#pregnant-problem").is(':checked')){
        $("#pregnant-problem").attr("value","true");
        $("#pregnant-problem-hide").attr("disabled","disabled");
    }
    if($("#anesthesia-problem").is(':checked')){
        $("#anesthesia-problem").attr("value","true");
        $("#anesthesia-problem-hide").attr("disabled","disabled");
    }
    if($("#daily-work").is(':checked')){
        $("#daily-work").attr("value","true");
        $("#daily_problem-hide").attr("disabled","disabled");
    }
    if($("#sleep-apnea").is(':checked')){
        $("#sleep-apnea").attr("value","true");
        $("#sleep-apnea-hide").attr("disabled","disabled");
    }
});
///////////////////////////popup windows
$("#op-list-more-choice").click(function(){
    if(!cntr2)$("#option5").before("<option selected='selected'>"+$("#op-list-more").val()+"</option>");
    if(!cntr3)$("#more-op-patient").before("<option selected='selected'>"+$("#op-list-more").val()+"</option>");
});
$("#drugs-list-more-choice").click(function(){
    if(!cntr4)$("#more-drugs").before("<option selected='selected'>"+$("#drugs-list-more").val()+"</option>");
});
////////////////
$("#save-list2").click(function(){
    cntr=1;
    if($("#drugs_list").val() == "خالی"){
        $("#drugs_list_div").attr("class","form-group has-error");
        $("#error-list-text-drugs").attr("class","help-block");
        cntr++;
    }
    if($("#drugs-explain").val() == ""){
        $("#drugs-explain-div").attr("class","form-group has-error");
        $("#error-explain-text").attr("class","help-block");
        cntr++;
    }
    if(cntr == 1){
        $("#table-drugs-div").attr("class","col-xs-11 list_hidden_fade");
        $("#drugs-first-row").attr("class","");
        $("#drugs_list_div").attr("class","form-group");
        $("#drugs-explain-div").attr("class","form-group");
        $("#error-list-text-drugs").attr("class","help-block list-hide");
        $("#error-explain-text").attr("class","help-block list-hide");
        $("#table_drugs").append("<tr><td>"
            + $("#drugs_list").val() + "<input type='hidden' name='past_druges_used[]' value='"+$("#drugs_list").val()+"'>"
            + "</td><td>" + $("#drugs-explain").val()+"<input type='hidden' name='how_to_use[]' value='"+$("#drugs-explain").val()+"'>"
            + "</td><td>" + "<button type='button' class='col-sm-7 btn btn-danger pull-right' style='text-align: center'>حذف</button> "
            + "</td></tr>");
    }
    $('#table_drugs').on('click','tr td :button:contains(حذف)',function(){
        $(this).closest('tr').remove();
        if($('#table_drugs tr').length == 1){
            $("#drugs-first-row").attr("class","list-hide");
        }
    });
});
$("#save-list").click(function(){
    cntr1=1;
    if($("#op-kind-patient").val() == "خالی"){
        $("#op-kind-patient-div").attr("class","form-group has-error");
        $("#error-list-text").attr("class","help-block");
        cntr1++;
    }
    if($("#op-date-patient").val() == ""){
        $("#op-date-patient-div").attr("class","form-group has-error");
        $("#error-date-text").attr("class","help-block");
        cntr1++;
    }
    if(cntr1 == 1){
        $("#table-op-div").attr("class","col-xs-11 list_hidden_fade");
        $("#op-first-row").attr("class","");
        $("#op-kind-patient-div").attr("class","form-group");
        $("#op-date-patient-div").attr("class","form-group");
        $("#error-list-text").attr("class","help-block list-hide");
        $("#error-date-text").attr("class","help-block list-hide");
        $("#table_op").append("<tr><td>"
            + $("#op-kind-patient").val() + "<input type='hidden' name='past_operation_kind' value='"+ $("#op-kind-patient").val()+"'>"
            + "</td><td>" + $("#op-date-patient").val() + "<input type='hidden' name='past_operation_date' value='"+ $("#op-date-patient").val()+"'>"
            + "</td><td>" + $("#op-problem").val() + "<input type='hidden' name='past_operation_problem' value='"+ $("#op-problem").val()+"'>"
            + "</td><td>" + "<button type='button' class='col-sm-8 btn btn-danger pull-right' style='text-align: center'>حذف</button> "
            + "</td></tr>");
    }
    $('#table_op').on('click','tr td :button:contains(حذف)',function(){
        $(this).closest('tr').remove();
        if($('#table_op tr').length == 1){
            $("#op-first-row").attr("class","list-hide");
        }
    });
});
$("#check-list2").click(function(){
    if($("#save-heart-problem").val() == ""){
        $("#save-heart-problem").val($("#heart-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-heart-problem").val();
        check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#heart-problem-list").val()){
                $("#heart-duplicate-error").attr("class","help-block");
                $("#heart_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#heart-duplicate-error").attr("class","help-block list-hide");
            $("#heart_problem_div").attr("class","form-group");
            $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " + $("#heart-problem-list").val());
        }
    }
});
$("#check-list3").click(function(){
    if($("#save-breath-problem").val() == ""){
        $("#save-breath-problem").val($("#breath-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-breath-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#breath-problem-list").val()){
                $("#breath-duplicate-error").attr("class","help-block");
                $("#breath_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#breath-duplicate-error").attr("class","help-block list-hide");
            $("#breath_problem_div").attr("class","form-group");
        $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " + $("#breath-problem-list").val());
        }
    }
});
$("#check-list4").click(function(){
    if($("#save-bleeding-problem").val() == ""){
        $("#save-bleeding-problem").val($("#bleeding-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-bleeding-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#bleeding-problem-list").val()){
                $("#bleeding-duplicate-error").attr("class","help-block");
                $("#bleeding_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#bleeding-duplicate-error").attr("class","help-block list-hide");
            $("#bleeding_problem_div").attr("class","form-group");
            $("#save-bleeding-problem").val($("#save-bleeding-problem").val() + " ،  " + $("#bleeding-problem-list").val());
        }
    }
});
$("#check-list5").click(function(){
    if($("#save-blood-problem").val() == ""){
        $("#save-blood-problem").val($("#blood-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-blood-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#blood-problem-list").val()){
                $("#blood-duplicate-error").attr("class","help-block");
                $("#blood_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#blood-duplicate-error").attr("class","help-block list-hide");
            $("#blood_problem_div").attr("class","form-group");
            $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " + $("#blood-problem-list").val());
        }
    }
});
$("#check-list6").click(function(){
    if($("#save-kidney-problem").val() == ""){
        $("#save-kidney-problem").val($("#kidney-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-kidney-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#kidney-problem-list").val()){
                $("#kidney-duplicate-error").attr("class","help-block");
                $("#kidney_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#kidney-duplicate-error").attr("class","help-block list-hide");
            $("#kidney_problem_div").attr("class","form-group");
            $("#save-kidney-problem").val($("#save-kidney-problem").val() + " ،  " + $("#kidney-problem-list").val() );
        }
    }
});
$("#check-list7").click(function(){
    if($("#save-liver-problem").val() == ""){
        $("#save-liver-problem").val($("#liver-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-liver-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#liver-problem-list").val()){
                $("#liver-duplicate-error").attr("class","help-block");
                $("#liver_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#liver-duplicate-error").attr("class","help-block list-hide");
            $("#liver_problem_div").attr("class","form-group");
            $("#save-liver-problem").val($("#save-liver-problem").val() + " ،  " +$("#liver-problem-list").val());
        }
    }
});
$("#check-list8").click(function(){
    if($("#save-digestion-problem").val() == ""){
        $("#save-digestion-problem").val($("#digestion-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-digestion-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#digestion-problem-list").val()){
                $("#digestion-duplicate-error").attr("class","help-block");
                $("#digestion_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#digestion-duplicate-error").attr("class","help-block list-hide");
            $("#digestion_problem_div").attr("class","form-group");
            $("#save-digestion-problem").val($("#save-digestion-problem").val() + " ،  " + $("#digestion-problem-list").val());
        }
    }
});
$("#check-list9").click(function(){
    if($("#save-general-problem").val() == ""){
        $("#save-general-problem").val($("#general-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-general-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#general-problem-list").val()){
                $("#general-duplicate-error").attr("class","help-block");
                $("#general_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#general-duplicate-error").attr("class","help-block list-hide");
            $("#general_problem_div").attr("class","form-group");
            $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#general-problem-list").val());
        }
    }
});
$("#check-list10").click(function(){
    if($("#save-anesthesia-problem").val() == ""){
        $("#save-anesthesia-problem").val($("#anesthesia-problem-list").val());
    }
    else{
        var check_list_cntr=0;
        var check_list=$("#save-anesthesia-problem").val();
        var check_list = check_list.split(" ،  ");
        for(var i=0 ; i<check_list.length ; i++){
            if(check_list[i] == $("#anesthesia-problem-list").val()){
                $("#anesthesia-duplicate-error").attr("class","help-block");
                $("#anesthesia_problem_div").attr("class","form-group has-error");
                check_list_cntr=1;
            }
        }
        if(check_list_cntr == 0){
            $("#anesthesia-duplicate-error").attr("class","help-block list-hide");
            $("#anesthesia_problem_div").attr("class","form-group");
            $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " + $("#anesthesia-problem-list").val());
        }
    }
});
/////////////////////////////////Fast Part////////////////////////////
$("#fast_fill").click(function(){
    var fast_fill = $("#fast_fill_value").val().split(" ");
    var heart_problem_check=0;
    var breath_problem_check=0;
    var bleeding_problem_check=0;
    var blood_problem_check=0;
    var kidney_problem_check=0;
    var liver_problem_check=0;
    var digestion_problem_check=0;
    var general_problem_check=0;
    var anesthesia_problem_check=0;
    var validation = [];
    for(var i=0 ; i<fast_fill.length ; i++){
        if(fast_fill[i] == "2"){
            $("[id='estroyd']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "3"){
            $("[id='smoker']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "5"){
            $("[id='smoker-now']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "6" ){
            $("[id='alcohalic']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "7"){
            $("[id='addiction_problem']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "8"){
            $("[id='danger-drugs']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "9"){
            $("[id='one-floor-stair']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == 10){
            $("[id='heart-problem']").bootstrapSwitch('state',true,true);
            heart_problem_check = 1;
        }
        else if(heart_problem_check == 1){
            if(fast_fill[i] == "11" && typeof validation["11"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#11").html());
                validation["11"] = i;
            }
            if(fast_fill[i] == "12" && typeof validation["12"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#12").html());
                validation["12"] = i;
            }
            if(fast_fill[i] == "13" && typeof validation["13"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#13").html());
                validation["13"] = i;
            }
            if(fast_fill[i] == "14" && typeof validation["14"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#14").html());
                validation["14"] = i;
            }
            if(fast_fill[i] == "15" && typeof validation["15"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#15").html());
                validation["15"] = i;
            }
            if(fast_fill[i] == "16" && typeof validation["16"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#16").html());
                validation["16"] = i;
            }
            if(fast_fill[i] == "17" && typeof validation["17"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#17").html());
                validation["17"] = i;
            }
            if(fast_fill[i] == "18" && typeof validation["18"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#18").html());
                validation["18"] = i;
            }
            if(fast_fill[i] == "19" && typeof validation["19"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#19").html())
                validation["19"] = i;
            }
            if(fast_fill[i] == "20" && typeof validation["20"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#20").html());
                validation["20"] = i;
            }
            if(fast_fill[i] == "21" && typeof validation["21"] === 'undefined'){
                $("#save-heart-problem").val($("#save-heart-problem").val() + " ،  " +$("#21").html());
                validation["21"] = i;
            }
        }
        if(fast_fill[i] == "22"){
            $("[id='blood-presure']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "23"){
            $("[id='diabeti']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "24"){
            $("[id='blood-presure']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "25"){
            $("[id='diabeti']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "26"){
            $("[id='breath-problem']").bootstrapSwitch('state',true,true);
            breath_problem_check = 1;
        }
        else if(breath_problem_check == 1){
            if(fast_fill[i] == "27" && typeof validation["27"] === 'undefined'){
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#27").html());
                validation["27"] = i;
            }
            if(fast_fill[i] == "28" && typeof validation["28"] === 'undefined'){
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#28").html());
                validation["28"] = i;
            }
            if(fast_fill[i] == "29" && typeof validation["29"] === 'undefined'){
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#29").html());
                validation["29"] = i;
            }
            if(fast_fill[i] == "30" && typeof validation["30"] === 'undefined'){
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#30").html());
                validation["30"] = i;
            }
            if(fast_fill[i] == "31" && typeof validation["31"] === 'undefined'){
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#31").html());
                validation["31"] = i;
            }
            if(fast_fill[i] == "32" && typeof validation["32"] === 'undefined'){
                validation["32"] = i;
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#32").html());
            }
            if(fast_fill[i] == "33" && typeof validation["33"] === 'undefined'){
                validation["33"] = i;
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#33").html());
            }
            if(fast_fill[i] == "34" && typeof validation["34"] === 'undefined'){
                validation["34"] = i;
                $("#save-breath-problem").val($("#save-breath-problem").val() + " ،  " +$("#34").html());
            }
        }
        if(fast_fill[i] == "35"){
            $("[id='sickness']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "36"){
            $("[id='bleeding-problem']").bootstrapSwitch('state',true,true);
            bleeding_problem_check = 1;
        }
        else if(bleeding_problem_check == 1){
            if(fast_fill[i] == "37" && typeof validation["37"] === 'undefined'){
                validation["37"] = i;
                $("#save-bleeding-problem").val($("#save-bleeding-problem").val() + " ،  " +$("#37").html());
            }
            if(fast_fill[i] == "38" && typeof validation["38"] === 'undefined'){
                validation["38"] = i;
                $("#save-bleeding-problem").val($("#save-bleeding-problem").val() + " ،  " +$("#38").html());
            }
            if(fast_fill[i] == "39" && typeof validation["39"] === 'undefined'){
                validation["39"] = i;
                $("#save-bleeding-problem").val($("#save-bleeding-problem").val() + " ،  " +$("#39").html());
            }
            if(fast_fill[i] == "40" && typeof validation["40"] === 'undefined'){
                validation["40"] = i;
                $("#save-bleeding-problem").val($("#save-bleeding-problem").val() + " ،  " +$("#40").html());
            }
        }
        if(fast_fill[i] == "41"){
            $("[id='blood-problem']").bootstrapSwitch('state',true,true);
            blood_problem_check=1;
        }
        else if(blood_problem_check == 1){
            if(fast_fill[i] == "42" && typeof validation["42"] === 'undefined'){
                validation["42"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#42").html());
            }
            if(fast_fill[i] == "43" && typeof validation["43"] === 'undefined'){
                validation["43"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#43").html());
            }
            if(fast_fill[i] == "44" && typeof validation["44"] === 'undefined'){
                validation["44"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#44").html());
            }
            if(fast_fill[i] == "45" && typeof validation["45"] === 'undefined'){
                validation["45"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#45").html());
            }
            if(fast_fill[i] == "46" && typeof validation["46"] === 'undefined'){
                validation["46"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#46").html());
            }
            if(fast_fill[i] == "47" && typeof validation["47"] === 'undefined'){
                validation["47"] = i;
                $("#save-blood-problem").val($("#save-blood-problem").val() + " ،  " +$("#47").html());
            }
        }
        if(fast_fill[i] == "48"){
            $("[id='kidney-problem']").bootstrapSwitch('state',true,true);
            kidney_problem_check = 1;
        }
        else if(kidney_problem_check == 1){
            if(fast_fill[i] == "49" && typeof validation["49"] === 'undefined'){
                validation["49"] = i;
                $("#save-kidney-problem").val($("#save-kidney-problem").val() + " ،  " +$("#49").html());
            }
            if(fast_fill[i] == "50" && typeof validation["50"] === 'undefined'){
                validation["50"] = i;
                $("#save-kidney-problem").val($("#save-kidney-problem").val() + " ،  " +$("#50").html());
            }
            if(fast_fill[i] == "51" && typeof validation["51"] === 'undefined'){
                validation["51"] = i;
                $("#save-kidney-problem").val($("#save-kidney-problem").val() + " ،  " +$("#51").html());
            }
        }
        if(fast_fill[i] == "52"){
            $("[id='liver-problem']").bootstrapSwitch('state',true,true);
            liver_problem_check = 1;
        }
        else if(liver_problem_check == 1){
            if(fast_fill[i] == "53" && typeof validation["53"] === 'undefined'){
                validation["53"] = i;
                $("#save-liver-problem").val($("#save-liver-problem").val() + " ،  " +$("#53").html());
            }
            if(fast_fill[i] == "54" && typeof validation["54"] === 'undefined'){
                validation["54"] = i;
                $("#save-liver-problem").val($("#save-liver-problem").val() + " ،  " +$("#54").html());
            }
            if(fast_fill[i] == "55" && typeof validation["55"] === 'undefined'){
                validation["55"] = i;
                $("#save-liver-problem").val($("#save-liver-problem").val() + " ،  " +$("#55").html());
            }
        }
        if(fast_fill[i] == "56"){
            $("[id='digestion-problem']").bootstrapSwitch('state',true,true);
            digestion_problem_check = 1;
        }
        else if(digestion_problem_check == 1){
            if(fast_fill[i] == "57" && typeof validation["57"] === 'undefined'){
                validation["57"] = i;
                $("#save-digestion-problem").val($("#save-digestion-problem").val() + " ،  " +$("#57").html());
            }
            if(fast_fill[i] == "58" && typeof validation["58"] === 'undefined'){
                validation["58"] = i;
                $("#save-digestion-problem").val($("#save-digestion-problem").val() + " ،  " +$("#58").html());
            }
            if(fast_fill[i] == "59" && typeof validation["59"] === 'undefined'){
                validation["59"] = i;
                $("#save-digestion-problem").val($("#save-digestion-problem").val() + " ،  " +$("#59").html());
            }
        }
        if(fast_fill[i] == "60"){
            $("[id='general-problem']").bootstrapSwitch('state',true,true);
            general_problem_check=1;
        }
        else if(general_problem_check ==1){
            if(fast_fill[i] == "61" && typeof validation["61"] === 'undefined'){
                validation["61"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#61").html());
            }
            if(fast_fill[i] == "62" && typeof validation["62"] === 'undefined'){
                validation["62"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#62").html());
            }
            if(fast_fill[i] == "63" && typeof validation["63"] === 'undefined'){
                validation["63"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#63").html());
            }
            if(fast_fill[i] == "64" && typeof validation["64"] === 'undefined'){
                validation["64"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#64").html());
            }
            if(fast_fill[i] == "65" && typeof validation["65"] === 'undefined'){
                validation["65"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#65").html());
            }
            if(fast_fill[i] == "66" && typeof validation["66"] === 'undefined'){
                validation["66"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#66").html());
            }
            if(fast_fill[i] == "67" && typeof validation["67"] === 'undefined'){
                validation["67"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#67").html());
            }
            if(fast_fill[i] == "68" && typeof validation["68"] === 'undefined'){
                validation["68"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#68").html());
            }
            if(fast_fill[i] == "69" && typeof validation["69"] === 'undefined'){
                validation["69"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#69").html());
            }
            if(fast_fill[i] == "70" && typeof validation["70"] === 'undefined'){
                validation["70"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#70").html());
            }
            if(fast_fill[i] == "71" && typeof validation["71"] === 'undefined'){
                validation["71"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#71").html());
            }
            if(fast_fill[i] == "72" && typeof validation["72"] === 'undefined'){
                validation["72"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#72").html());
            }
            if(fast_fill[i] == "73" && typeof validation["73"] === 'undefined'){
                validation["73"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#73").html());
            }
            if(fast_fill[i] == "74" && typeof validation["74"] === 'undefined'){
                validation["74"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#74").html());
            }
            if(fast_fill[i] == "75" && typeof validation["75"] === 'undefined'){
                validation["75"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#75").html());
            }
            if(fast_fill[i] == "76" && typeof validation["76"] === 'undefined'){
                validation["76"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#76").html());
            }
            if(fast_fill[i] == "77" && typeof validation["77"] === 'undefined'){
                validation["77"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#77").html());
            }
            if(fast_fill[i] == "78" && typeof validation["78"] === 'undefined'){
                validation["78"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#78").html());
            }
            if(fast_fill[i] == "79" && typeof validation["79"] === 'undefined'){
                validation["79"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#79").html());
            }
            if(fast_fill[i] == "80" && typeof validation["80"] === 'undefined'){
                validation["80"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#80").html());
            }
            if(fast_fill[i] == "81" && typeof validation["81"] === 'undefined'){
                validation["81"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#81").html());
            }
            if(fast_fill[i] == "82" && typeof validation["82"] === 'undefined'){
                validation["82"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#82").html());
            }
            if(fast_fill[i] == "83" && typeof validation["83"] === 'undefined'){
                validation["83"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#83").html());
            }
            if(fast_fill[i] == "84" && typeof validation["84"] === 'undefined'){
                validation["84"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#84").html());
            }
            if(fast_fill[i] == "85" && typeof validation["85"] === 'undefined'){
                validation["85"] = i;
                $("#save-general-problem").val($("#save-general-problem").val() + " ،  " +$("#85").html());
            }
        }
        if(fast_fill[i] == "86"){
            $("[id='cancer']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "87"){
            $("[id='pregnant']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "88"){
            $("[id='pregnant-problem']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "89"){
            $("[id='anesthesia-problem']").bootstrapSwitch('state',true,true);
            anesthesia_problem_check = 1;
        }
        else if(anesthesia_problem_check == 1){
            if(fast_fill[i] == "90" && typeof validation["90"] === 'undefined'){
                validation["90"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#90").html());
            }
            if(fast_fill[i] == "91" && typeof validation["91"] === 'undefined'){
                validation["91"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#91").html());
            }
            if(fast_fill[i] == "92" && typeof validation["92"] === 'undefined'){
                validation["92"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#92").html());
            }
            if(fast_fill[i] == "93" && typeof validation["93"] === 'undefined'){
                validation["93"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#93").html());
            }
            if(fast_fill[i] == "94" && typeof validation["94"] === 'undefined'){
                validation["94"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#94").html());
            }
            if(fast_fill[i] == "95" && typeof validation["95"] === 'undefined'){
                validation["95"] = i;
                $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val() + " ،  " +$("#95").html());
            }
        }
        if(fast_fill[i] == "96"){
            $("[id='daily-work']").bootstrapSwitch('state',true,true);
        }
        if(fast_fill[i] == "97"){
            $("[id='sleep-apnea']").bootstrapSwitch('state',true,true);
        }
    }
    $("#save-heart-problem").val($("#save-heart-problem").val().substr(4,$("#save-heart-problem").val().length));
    $("#save-breath-problem").val($("#save-breath-problem").val().substr(4,$("#save-breath-problem").val().length));
    $("#save-bleeding-problem").val($("#save-bleeding-problem").val().substr(4,$("#save-bleeding-problem").val().length));
    $("#save-blood-problem").val($("#save-blood-problem").val().substr(4,$("#save-blood-problem").val().length));
    $("#save-kidney-problem").val($("#save-kidney-problem").val().substr(4,$("#save-kidney-problem").val().length));
    $("#save-liver-problem").val($("#save-liver-problem").val().substr(4,$("#save-liver-problem").val().length));
    $("#save-digestion-problem").val($("#save-digestion-problem").val().substr(4,$("#save-digestion-problem").val().length));
    $("#save-general-problem").val($("#save-general-problem").val().substr(4,$("#save-general-problem").val().length));
    $("#save-anesthesia-problem").val($("#save-anesthesia-problem").val().substr(4,$("#save-anesthesia-problem").val().length));
});
////////////////////////////////////////////////////////////////////////////
$("#select-all").click(function(){
    for(var i=2 ; i<=95 ; i++){
        $("#fast_fill_value").val($("#fast_fill_value").val() + " " + i);
    }

});
/////////toastr for submiting code////////////////
if($("#toastr").val() == "true"){
    toastr.success('فرم با موفقیت ذخیره شد .');
}
else if($("#toastr").val() == "false"){
    toastr.error('دوباره تلاش کنید!');
}