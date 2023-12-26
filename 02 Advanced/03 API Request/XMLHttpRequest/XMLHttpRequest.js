let call = new XMLHttpRequest();

call.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json");

call.onload = () => {
  const data = JSON.parse(call.response);;
  console.log(data);
};

call.send()
