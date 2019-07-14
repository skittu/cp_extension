
chrome.tabs.onUpdated.addListener(function(a,b,c){
    
    if(b.status == "complete" && c.url.search("www.codechef.com")!=-1 && c.url.search("problems")!=-1)
    {
        
       var temp =c.url.split("www.codechef.com");
       chrome.tabs.sendMessage(a, {site:"codechef",url:temp[1]});
        
       
    }
    if(b.status=="complete" && c.url.search("codeforces.com")!=-1)
    {
        console.log(a);
        var temp =c.url.split("codeforces.com");
        console.log(temp);
        
        chrome.tabs.sendMessage(a, {site:"codeforces",url:temp[1]})

    }

    return true;
    });
    