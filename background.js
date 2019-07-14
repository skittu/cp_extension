
chrome.tabs.onUpdated.addListener(function(a,b,c){
    console.log(b.status);
    console.log("change hua kuch");
    console.log(c);
    
    if(b.status == "complete" && c.url.search("https://www.codechef.com")!=-1)
    {
        // var z= "https://www.codechef.com/problems/KS2";
       var temp =c.url.split("https://www.codechef.com")[1].split('problems');
        console.log(temp);
        var x = "https://www.codechef.com"+temp[0]+"submit"+temp[1];
        if(temp[1]!=""&&temp[1]!="/")
        {
            $.get(x,function(result){
               // console.log(result);
                
               var form_build_id = $("input[name=form_build_id]",$("form",result).eq(1)).attr("value");
               var form_token = $("input[name=form_token]",$("form",result).eq(1)).attr("value");
               var problemcode = temp[1].split('/')[1];
               console.log(form_token);
               console.log(form_build_id);
               console.log(problemcode);
               chrome.tabs.sendMessage(a, {problemcode:problemcode,problemurl:temp[0]+"problems"+temp[1],submiturl:temp[0]+"submit"+temp[1],form_token:form_token,form_build_id:form_build_id}, function(response) {

               });
            });
        }
        
        
       
       
    }

    
    
    });
    