
chrome.runtime.onMessage.addListener(function(data){
    
        console.log(data);
        
        if(data.site=="codechef")
        {
        Codechef(data);
        }
        else if(data.site=="codeforces")
        {
            console.log("sahi hai");
        Codeforces(data);
        }
});

function Codechef(data)
{

    var temp=data.url.split('problems');
        console.log(temp);
        var x = "https://www.codechef.com"+temp[0]+"submit"+temp[1];
        var pcode = temp[1].split('/')[1];
       
        if(temp[1]!=""&&temp[1]!="/"&&pcode!="easy"&&pcode!="medium"&&pcode!="hard"&&pcode!="school"&&pcode!="challenge"&&pcode!="extcontest")
        {
            
            $.get(x,function(result){
               
               var form_build_id = $("input[name=form_build_id]",$("form",result).eq(1)).attr("value");
               var form_token = $("input[name=form_token]",$("form",result).eq(1)).attr("value");
               changeCodechef({problemcode:pcode,problemurl:temp[0]+"problems"+temp[1],submiturl:temp[0]+"submit"+temp[1],form_token:form_token,form_build_id:form_build_id});
            });
        }


}

function changeCodechef(dataToBeChanged)
{
    console.log(dataToBeChanged);
    var addressOfForm = chrome.runtime.getURL("codechefform.html");
    console.log(addressOfForm);
    
    $.get(addressOfForm,function(data){
        
        //console.log(data);
        $('.sidebar').append(data);
        $("form input[name=form_build_id]").attr("value",dataToBeChanged.form_build_id);
        $("form input[name=form_build_id]").attr("id",dataToBeChanged.form_build_id);
        $("form input[name=form_token]").attr("value",dataToBeChanged.form_token);
        $("form").attr("action",dataToBeChanged.submiturl);
        $("#problemlink a").attr("href",dataToBeChanged.problemurl);
        $("#problemlink a").html(dataToBeChanged.problemcode);
        $("#problemlink a").html(dataToBeChanged.problemcode);
     
            });
}

function Codeforces(data)
{
    console.log("sahi hai");
    
ChangeCodeforces();
}
function ChangeCodeforces()
{
    var addressOfForm = chrome.runtime.getURL("codeforcesform.html");
    console.log(addressOfForm);

    $.get(addressOfForm,function(data){
        $('.problemindexholder').append(data);
    });
}

function Spoj()
{

}
