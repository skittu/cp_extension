
chrome.runtime.onMessage.addListener(function(a){
    console.log(a);
    var x = chrome.runtime.getURL("codechefform.html");
    console.log(x);
    
    $.get(x,function(data){
        
        console.log(data);
        $('.sidebar').append(data);
        $("form input[name=form_build_id]").attr("value",a.form_build_id);
        $("form input[name=form_build_id]").attr("id",a.form_build_id);
        $("form input[name=form_token]").attr("value",a.form_token);
        $("form").attr("action",a.submiturl);
        $("#problemlink a").attr("href",a.problemurl);
        $("#problemlink a").html(a.problemcode);
        $("#problemlink a").html(a.problemcode);

            });



});

