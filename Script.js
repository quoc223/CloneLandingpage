// ẩn hiện bảng báo giá
$(document).ready(function(){
    $("#nut2 .banggia button").click(function(){
      $("#taibangbg").toggle();
         });
    $("").click(function(){
        $("#taibangbg").hide();
    });
        
    });
    function showStuff(id, text, btn) {
        document.getElementById(id).style.display = 'block';
        // hide the lorem ipsum text
        document.getElementById(text).style.display = 'none';
        // hide the link
        btn.style.display = 'none';
    }