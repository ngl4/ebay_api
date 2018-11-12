$(document).ready(function () {

    //Resources for the below codes:
    //Simple guide for ebay API: https://partnernetwork.ebay.com/epn-blog/2010/05/simple-api-searching-example
    //ebay Finding API: https://developer.ebay.com/DevZone/finding/CallRef/index.html
    //ebay Shopping API: https://developer.ebay.com/DevZone/Shopping/docs/CallRef/index.html 
    //ebay Merchandising API: https://developer.ebay.com/Devzone/merchandising/docs/CallRef/getSimilarItems.html#Samples 
    //Solve the XMLhttpRequest issue: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

    var appId =""; //PASTE YOUR EBAY API HERE 

    //ebay Finding API
    var findUrl = "https://cors-anywhere.herokuapp.com/"+"http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=" + appId;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&keywords=harry+potter";
    url += "&paginationInput.entriesPerPage=2";

    $.ajax({
        url: findUrl,
        method:"GET",
        dataType:"json"
    }).then(function(response){
        console.log(response);
    }).catch(() => console.log("ERROR: Can’t access " + url + " response. Blocked by browser?"));

    //ebay Shopping API
    var shopUrl = "https://cors-anywhere.herokuapp.com/"+"http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=" + appId + "&siteid=0&version=967&QueryKeywords=harry%20potter&AvailableItemsOnly=true&MaxEntries=2";

    $.ajax({
        url: shopUrl,
        method:"GET",
        dataType:"json"
    }).then(function(response){
        console.log(response);
    }).catch(() => console.log("ERROR: Can’t access " + url + " response. Blocked by browser?"));;

    //ebay Merchandising API
    var merchantUrl = "https://cors-anywhere.herokuapp.com/"+"http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID="+ appId + "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=113214328944&maxResults=3";

    $.ajax({
        url: merchantUrl,
        method:"GET",
        dataType:"json"
    }).then(function(response){
        console.log(response);
    }).catch(() => console.log("ERROR: Can’t access " + url + " response. Blocked by browser?"));;



});