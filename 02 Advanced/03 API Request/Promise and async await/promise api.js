const api = "https://api.coindesk.com/v1/bpi/currentprice.json"
fetch(api).then((response) => {
    let data =  response.json()
    return data
}).then((APIdata)=>{
 console.log(APIdata);
}).catch((error) => {
    console.log(error);
})