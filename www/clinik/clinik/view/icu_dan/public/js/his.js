/**
 * Created by root on 9/30/14.
 */
$('#name').keyup(function() {
    $('#name-show').text($(this).val());
});
$("#last_name").keyup(function(){
    $('#name-show').text($("#name").val() + " " + $(this).val());
});
$('#file_number').keyup(function() {
    $('#file_num_show').text($(this).val());

});
$(window).keyup(function(){
    if($('#file_num_show').text() == ""){
        $('#file_num_show').text("شماره ی پرونده");
    }
    if($('#name-show').text() == ""){
        $('#name-show').text("نام و نام خانوادگی");
    }
});