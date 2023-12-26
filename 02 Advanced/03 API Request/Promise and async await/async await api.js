const apiLink = "https://api.coindesk.com/v1/bpi/currentprice.json"
async function fetchAPI() {
    try {
    let api = await fetch(apiLink)
    let apiData = await api.json()
    console.log(apiData);
    } catch {
        console.log("error");
    }
}

fetchAPI()