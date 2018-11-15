require("dotenv").config();
var request = require("request");

var appId = "";
var itemName = "jeans";
var itemId = "113214328944";

var query_Finding_URL =
    "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +
    appId +
    "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +
    itemName +
    "&paginationInput.entriesPerPage=1";

request(query_Finding_URL, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(
            JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item
        );
    }
});

var query_Similar_URL =
    "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=" +
    appId +
    "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
    itemId +
    "&maxResults=5";

request(query_Similar_URL, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // console.log(
        //     JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item
        // );

        var itemList = JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item;


    }
});

// NOT RELIABLE TO USE THE FOLLOWING!!!

// var ebay = require('ebay-api');

/**
 * Finding API:findItemsByKeywords
 * REFERENCE: https://github.com/benbuckman/nodejs-ebay-api
 */

// var params = {
//     keywords: ["Canon", "Powershot"],

//     // add additional fields
//     outputSelector: ['AspectHistogram'],

//     paginationInput: {
//         entriesPerPage: 10
//     },

//     itemFilter: [{
//             name: 'FreeShippingOnly',
//             value: true
//         },
//         {
//             name: 'MaxPrice',
//             value: '150'
//         }
//     ],

//     domainFilter: [{
//         name: 'domainName',
//         value: 'Digital_Cameras'
//     }]
// };

// ebay.xmlRequest({
//         serviceName: 'Finding',
//         opType: 'findItemsByKeywords',
//         appId: '...', // FILL IN YOUR OWN APP KEY
//         params: params,
//         parser: ebay.parseResponseJson // (default)
//     },
//     // gets all the items together in a merged array
//     function itemsCallback(error, itemsResponse) {
//         if (error) throw error;

//         var items = itemsResponse.searchResult.item;

//         console.log('Found', items.length, 'items');

//         for (var i = 0; i < items.length; i++) {
//             console.log('* ' + items[i].title);
//         }
//     }
// );

/**
 * Merchandising API: getSimilarItems
 * REFERENCE: https://github.com/benbuckman/nodejs-ebay-api
 */

// var paramsItemId = {
//     itemId: "113214328944"
// };

// ebay.xmlRequest({
//         serviceName: 'Merchandising',
//         opType: 'getSimilarItems',
//         appId: '...', // FILL IN YOUR OWN APP KEY
//         params: paramsItemId,
//         parser: ebay.parseResponseJson // (default)
//     },
//     // gets all the items together in a merged array
//     function (error, itemsResponse) {
//         if (error) throw error;

//         var items = itemsResponse.itemRecommendations.item;

//         console.log('Found', items.length, 'items');

//         for (var i = 0; i < 1; i++) {
//             console.log(items[i]);
//             console.log('* ' + items[i].title);
//         }
//     });