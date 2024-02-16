let objectData = document.querySelector(".objectData");

let data = [
    {
        name: "sahil",
        phone: 37593457,
        email: "sahilmachhi29@gmail.com",
        isLoggedIn: true,
    },
    {
        name: "Jhon",
        phone: 353436,
        email: "jhon19@gmail.com",
        isLoggedIn: true,
    },
    {
        name: "Ajay",
        phone: 33543654,
        email: "ajay34@gmail.com",
        isLoggedIn: false,
    },

]
console.log(data);
for (let i = 0; i < data.length; i++) {
    itemData = data[i];
    if (itemData.isLoggedIn === true) {
        OnlineStatues = `online`
    }
    else {
        OnlineStatues = `offline`
    }
    objectData.innerHTML += `<div class="box">
    <h1>name: ${itemData.name}</h1>
    <p>phone: ${itemData.phone}</p>
    <p>email: ${itemData.email}</p>
    <p>this user is ${OnlineStatues}</p>
    <div/>`
}