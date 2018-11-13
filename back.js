// var ebay = require('ebay-api');

// NOT RELIABLE TO USE!!!

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
