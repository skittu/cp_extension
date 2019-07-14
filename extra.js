
chrome.tabs.onUpdated.addListener(function(a,b,c){
    // console.log(b.status);
    // console.log("change hua kuch");
    // console.log(c);
    // console.log(c.url.search("problems"));
    
    if(b.status == "complete" && c.url.search("https://www.codechef.com")!=-1 && c.url.search("problems")!=-1)
    {
        // var z= "https://www.codechef.com/problems/KS2";
       var temp =c.url.split("https://www.codechef.com")[1].split('problems');
        console.log(temp);
        var x = "https://www.codechef.com"+temp[0]+"submit"+temp[1];
        var pcode = temp[1].split('/')[1];
        if(temp[1]!=""&&temp[1]!="/"&&pcode!="easy"&&pcode!="medium"&&pcode!="hard"&&pcode!="school"&&pcode!="challenge"&&pcode!="extcontest")
        {
            $.get(x,function(result){
               // console.log(result);
                
               var form_build_id = $("input[name=form_build_id]",$("form",result).eq(1)).attr("value");
               var form_token = $("input[name=form_token]",$("form",result).eq(1)).attr("value");
           
               console.log(form_token);
               console.log(form_build_id);
               console.log(pcode);
               chrome.tabs.sendMessage(a, {problemcode:pcode,problemurl:temp[0]+"problems"+temp[1],submiturl:temp[0]+"submit"+temp[1],form_token:form_token,form_build_id:form_build_id});
            });
        }
        
        
       
    }

    
    return true;
    });
    



chrome.runtime.onMessage.addListener(function(a){
    
        
    console.log(a);
var x = chrome.runtime.getURL("codechefform.html");
console.log(x);

$.get(x,function(data){
    
    //console.log(data);
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

