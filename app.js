$(document).ready(function () {

    //Resources for the below codes:
    //Simple guide for ebay API: https://partnernetwork.ebay.com/epn-blog/2010/05/simple-api-searching-example
    //ebay Finding API: https://developer.ebay.com/DevZone/finding/CallRef/index.html
    //ebay Shopping API: https://developer.ebay.com/DevZone/Shopping/docs/CallRef/index.html 
    //Solve the XMLhttpRequest issue: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

    var appId =""; //copy your ebay api to here to see the result in your console.log!!!

    var url = "https://cors-anywhere.herokuapp.com/"+"http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=" + appId;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&keywords=harry+potter";
    url += "&paginationInput.entriesPerPage=2";

    $.ajax({
        url: url,
        method:"GET",
        dataType:"json"
    }).then(function(response){
        console.log(response);
    }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));

    var shopUrl = "https://cors-anywhere.herokuapp.com/"+"http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=" + appId + "&siteid=0&version=967&QueryKeywords=harry%20potter&AvailableItemsOnly=true&MaxEntries=2";

    $.ajax({
        url: shopUrl,
        method:"GET",
        dataType:"json"
    }).then(function(response){
        console.log(response);
    });

});