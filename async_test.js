const https = require('https');

async function getData(textInput){
   let response =  await getMovieData(textInput).catch((error) => console.log("error " + error));
   let result = response.map(getTitle).sort().join('\n');
   return result;
}

function getMovieData(textInput, result = [], page =1){

    const requestUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + textInput + '&page=' + page;
    return new Promise((resolve, reject) => {
        let data = '';
        https.get(requestUrl, (response) => {
                response.on('data', (partialData) => {
                    data += partialData;
                });
                response.on('end', ()=> {
                parsedData = JSON.parse(data);
                result.push(...parsedData.data);
                if(shouldCallAgain(parsedData)) {
                   getMovieData(textInput, result, (page + 1)).then(resolve).catch(reject);
                } else {
                    resolve(result);
                }
                })
            }).on("error", reject);
        })
}

function shouldCallAgain(response){
    return response.page < response.total_pages;
}

module.exports = getData;
